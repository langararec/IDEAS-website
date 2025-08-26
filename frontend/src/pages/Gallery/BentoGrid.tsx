import { useState } from 'react';
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa';
interface BentoGridProps {
    images: {
        src: string;
        alt: string;
        title?: string;
        colSpan: number; // Required column span (1 or 2)
        rowSpan: number; // Required row span (1 or 2)
    }[],
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const BentoGrid: React.FC<BentoGridProps> = ({ images, currentPage, setCurrentPage }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState<number>(0);
    const [loadingImages, setLoadingImages] = useState<Set<number>>(new Set());
    const imagesPerPage = 6;

    // Calculate pagination
    const totalPages = Math.ceil(images.length / imagesPerPage);
    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage;
    const currentImages = images.slice(startIndex, endIndex);

    // Function to get the correct Tailwind classes
    const getGridClasses = (colSpan: number, rowSpan: number) => {
        const colClass = 'lg:col-span-' + colSpan;
        const rowClass = 'lg:row-span-' + rowSpan;
        return (colClass + ' ' + rowClass);
    };

    const handleImageLoad = (index: number) => {
        setLoadingImages(prev => {
            const newSet = new Set(prev);
            newSet.delete(index);
            return newSet;
        });
    };

    const handleImageLoadStart = (index: number) => {
        setLoadingImages(prev => new Set(prev).add(index));
    };

    const goToPage = (page: number) => {
        setCurrentPage(page);
        // Reset loading state for new page
        setLoadingImages(new Set(Array.from({ length: imagesPerPage }, (_, i) => i)));
    };

    const goToPrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setLoadingImages(new Set(Array.from({ length: imagesPerPage }, (_, i) => i)));
        }
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            setLoadingImages(new Set(Array.from({ length: imagesPerPage }, (_, i) => i)));
        }
    };

    const goToNextImage = () => {
        if (currentImage < currentImages.length - 1) {
            setCurrentImage(currentImage + 1);
        }
    }

    const goToPrevImage = () => {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1);
        }

    }

    return (
        <div className="w-full bg-base-100" onClick={() => modalOpen ? setModalOpen(false) : null}>

            <div className="hidden lg:col-span-1 lg:col-span-2 lg:col-span-3 lg:col-span-4 lg:col-span-5 lg:col-span-6 lg:row-span-1 lg:row-span-2 lg:row-span-3 lg:row-span-4 lg:row-span-5 lg:row-span-6"></div>

            {modalOpen &&
                <div className={` h-full fixed inset-0 bg-black/90 z-50 items-center justify-center flex flex-row gap-x-4`}>
                    <FaCaretLeft className='text-white hover:cursor-pointer size-8 lg:size-12' onClick={(e) => { e.stopPropagation(); goToPrevImage(); }} />
                    <div className=' max-w-1/2 lg:max-w-1/3 my-auto justify-center'>
                        <img className="w-full object-contain" src={currentImages[currentImage].src} alt={currentImages[currentImage].alt} />
                    </div>
                    <FaCaretRight className='text-white hover:cursor-pointer size-8 lg:size-12' onClick={(e) => { e.stopPropagation(); goToNextImage(); }} />
                </div>}

            <div className="max-w-7xl w-full grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 auto-rows-[20rem] mb-8">
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
                            className={`w-full h-full object-cover hover:cursor-pointer duration-300 hover:scale-110  ${loadingImages.has(index) ? 'opacity-0' : 'opacity-100'
                                }`}
                            loading='lazy'
                            onLoadStart={() => handleImageLoadStart(index)}
                            onLoad={() => handleImageLoad(index)}
                            onClick={() => { setModalOpen(true); setCurrentImage(index); }}
                        />
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8">
                    <button
                        onClick={goToPrevPage}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-primary text-white rounded-lg disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-teal-800 transition-colors hover:cursor-pointer"
                    >
                        Previous
                    </button>

                    <div className="flex gap-1">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => goToPage(page)}
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
                        className="px-4 py-2 bg-primary text-white rounded-lg disabled:bg-gray-500 disabled:cursor-not-allowed hover:bg-teal-800 transition-colors hover:cursor-pointer"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default BentoGrid;