import { useState, useEffect, useMemo, useCallback } from 'react';
import { RxCaretLeft, RxCaretRight } from 'react-icons/rx';
import { MdClose } from "react-icons/md";


interface BentoGridProps {
    images: {
        src: string;
        alt: string;
        title?: string;
        colSpan: number;
        rowSpan: number;
    }[],
    currentPage: number;
    setCurrentPage: (page: number) => void;
    paginationLabels?: {
        previous: string;
        next: string;
    };
    imagesPerPage?: number;
    showPagination?: boolean;
    layoutChange?: boolean;
    rowHeight?: string;
}

const BentoGrid: React.FC<BentoGridProps> = ({ images, currentPage, setCurrentPage, paginationLabels, imagesPerPage = 6, showPagination = true, layoutChange = true, rowHeight = "20rem" }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<number>(0);
    const [loadingImages, setLoadingImages] = useState<Set<number>>(new Set());

    // Memoize pagination calculations
    const totalPages = useMemo(() => Math.ceil(images.length / imagesPerPage), [images.length, imagesPerPage]);
    const startIndex = useMemo(() => (currentPage - 1) * imagesPerPage, [currentPage, imagesPerPage]);
    const endIndex = useMemo(() => startIndex + imagesPerPage, [startIndex, imagesPerPage]);
    const currentImages = useMemo(() => images.slice(startIndex, endIndex), [images, startIndex, endIndex]);

    // Memoize grid classes function
    const getGridClasses = useCallback((colSpan: number, rowSpan: number) => {
        const colClass = 'col-span-' + colSpan;
        const rowClass = 'row-span-' + rowSpan;

        if (layoutChange) {
            return ("lg:" + colClass + ' ' + "lg:" + rowClass);
        } else {
            return (colClass + ' ' + rowClass);
        }
    }, [layoutChange]);

    // Memoize image load handlers
    const handleImageLoad = useCallback((index: number) => {
        setLoadingImages(prev => {
            const newSet = new Set(prev);
            newSet.delete(index);
            return newSet;
        });
    }, []);

    const handleImageLoadStart = useCallback((index: number) => {
        setLoadingImages(prev => new Set(prev).add(index));
    }, []);

    // Memoize navigation functions
    const goToPrevImage = useCallback(() => {
        setCurrentImage(prev => prev > 0 ? prev - 1 : prev);
    }, []);

    const goToNextImage = useCallback(() => {
        setCurrentImage(prev => prev < currentImages.length - 1 ? prev + 1 : prev);
    }, [currentImages.length]);

    const goToPage = useCallback((page: number) => {
        setCurrentPage(page);
        // Reset loading state for new page
        setLoadingImages(new Set(Array.from({ length: imagesPerPage }, (_, i) => i)));
    }, [setCurrentPage, imagesPerPage]);

    const goToPrevPage = useCallback(() => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setLoadingImages(new Set(Array.from({ length: imagesPerPage }, (_, i) => i)));
        }
    }, [currentPage, setCurrentPage, imagesPerPage]);

    const goToNextPage = useCallback(() => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            setLoadingImages(new Set(Array.from({ length: imagesPerPage }, (_, i) => i)));
        }
    }, [currentPage, totalPages, setCurrentPage, imagesPerPage]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!modalOpen) return;

            switch (event.key) {
                case 'ArrowLeft':
                    event.preventDefault();
                    goToPrevImage();
                    break;
                case 'ArrowRight':
                    event.preventDefault();
                    goToNextImage();
                    break;
                case 'Escape':
                    event.preventDefault();
                    setModalOpen(false);
                    break;
            }
        };

        // Add event listener when modal is open
        if (modalOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        // Cleanup event listener
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [modalOpen, goToPrevImage, goToNextImage]);

    return (
        <div className="w-full bg-base-100" onClick={() => modalOpen ? setModalOpen(false) : null}>

            <div className="hidden lg:col-span-1 lg:col-span-2 lg:col-span-3 lg:col-span-4 lg:col-span-5 lg:col-span-6 lg:row-span-1 lg:row-span-2 lg:row-span-3 lg:row-span-4 lg:row-span-5 lg:row-span-6 col-span-1 col-span-2 col-span-3 col-span-4 row-span-1 row-span-2 auto-rows-[20rem]"></div>

            {modalOpen && (
                <div 
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fadeIn"
                    style={{ backdropFilter: 'blur(10px)' }}
                    onClick={() => setModalOpen(false)}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setModalOpen(false)}
                        className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
                        aria-label="Close"
                    >
                        <MdClose className="w-8 h-8" />
                    </button>

                    {/* Previous Button */}
                    {currentImage > 0 && (
                        <button
                            onClick={(e) => { e.stopPropagation(); goToPrevImage(); }}
                            className="absolute left-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white duration-200 hover:scale-110"
                            aria-label="Previous"
                        >
                            <RxCaretLeft className="w-6 h-6" />
                        </button>
                    )}

                    {/* Image Container */}
                    <div 
                        className="relative lg:max-w-2xl w-2/3 max-h-[70vh] animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            className="w-full h-auto max-h-[70vh] object-contain rounded-2xl" 
                            src={currentImages[currentImage].src} 
                            alt={currentImages[currentImage].alt}
                            width={1200}
                            height={900}
                            loading='eager'
                        />
                    </div>

                    {/* Next Button */}
                    {currentImage < currentImages.length - 1 && (
                        <button
                            onClick={(e) => { e.stopPropagation(); goToNextImage(); }}
                            className="absolute right-4 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110"
                            aria-label="Next"
                        >
                            <RxCaretRight className="w-8 h-8" />
                        </button>
                    )}

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                        {currentImage + 1} / {currentImages.length}
                    </div>
                </div>
            )}

            <div className={`max-w-7xl w-full grid ${layoutChange ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 ' : 'grid-cols-4'} auto-rows-[${rowHeight}] gap-4 mb-8`}>
                {currentImages.map((image, index) => (
                    <div
                        key={`galleryImage-${currentPage}-${index}`}
                        className={`${getGridClasses(image.colSpan, image.rowSpan)} overflow-hidden rounded-lg h-full relative`}
                    >
                        {/* Loading skeleton */}
                        {loadingImages.has(index) && (
                            <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">                            </div>
                        )}

                        <img
                            src={image.src}
                            alt={image.alt}
                            title={image.title}
                            width={800}
                            height={600}
                            loading='lazy'
                            decoding='async'
                            className={`w-full h-full object-cover hover:cursor-pointer duration-300 hover:scale-110  ${loadingImages.has(index) ? 'opacity-0' : 'opacity-100'
                                }`}
                            onLoadStart={() => handleImageLoadStart(index)}
                            onLoad={() => handleImageLoad(index)}
                            onClick={() => { setModalOpen(true); setCurrentImage(index); }}
                        />
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            {showPagination && totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8">
                    <button
                        onClick={goToPrevPage}
                        disabled={currentPage === 1}
                        aria-label={`${paginationLabels?.previous || "Previous"} page`}
                        className="px-4 py-2 bg-primary text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-teal-800 transition-colors hover:cursor-pointer"
                    >
                        {paginationLabels?.previous || "Previous"}
                    </button>

                    <div className="flex gap-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => goToPage(page)}
                                aria-label={`Go to page ${page}`}
                                aria-current={currentPage === page ? 'page' : undefined}
                                className={`px-1 py-2 transition-colors text-lg hover:font-semibold ${currentPage === page
                                    ? ' text-teal-800 font-semibold'
                                    : ' text-gray-500 hover:text-teal-800'
                                    }`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={goToNextPage}
                        disabled={currentPage === totalPages}
                        aria-label={`${paginationLabels?.next || "Next"} page`}
                        className="px-4 py-2 bg-primary text-white rounded-lg disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-teal-800 transition-colors hover:cursor-pointer"
                    >
                        {paginationLabels?.next || "Next"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default BentoGrid;