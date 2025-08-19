import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';

interface BentoGridProps {
    images: {
        src: string;
        alt: string;
        title?: string;
        colSpan: number; // Required column span (1 or 2)
        rowSpan: number; // Required row span (1 or 2)
    }[];
    aspectRatio?: number; // Height/width ratio for cells (default: 0.9)
}

const BentoGrid: React.FC<BentoGridProps> = ({ 
    images, 
    aspectRatio = 0.9 
}) => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    // Limit to maximum 12 images
    const displayImages = images.slice(0, 12);

    // Calculate dynamic cell width based on container width
    const [containerWidth, setContainerWidth] = useState<number>(960); // Default fallback
    
    React.useEffect(() => {
        const updateWidth = () => {
            // Get the actual container width (max-w-7xl with padding)
            const maxWidth = Math.min(window.innerWidth - 32, 1280); // 32px for padding, 1280px max-w-7xl
            setContainerWidth(maxWidth);
        };

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    // Calculate cell dimensions
    const gap = 12; // 3 * 4px (gap-3)
    const totalGaps = 3 * gap; // 3 gaps between 4 columns
    const cellWidth = Math.floor((containerWidth - totalGaps) / 4);
    const cellHeight = Math.floor(cellWidth * aspectRatio);

    const openModal = (index: number) => {
        setSelectedImage(index);
        document.body.style.overflow = 'hidden'; 
    };

    const closeModal = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto'; 
    };

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % displayImages.length);
        }
    };

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage(selectedImage === 0 ? displayImages.length - 1 : selectedImage - 1);
        }
    };

    // Handle keyboard navigation
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImage === null) return;
            
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    return (
        <>
            {/* Bento Grid */}
            <div className="w-full">
                {/* Desktop: Bento Grid Layout */}
                <div 
                    className="hidden lg:grid grid-cols-4 gap-3"
                    style={{
                        gridTemplateRows: `repeat(6, ${cellHeight}px)`,
                        gridTemplateColumns: `repeat(4, ${cellWidth}px)`
                    }}
                >
                    {displayImages.map((image, index) => {
                        const { colSpan, rowSpan } = image;
                        
                        const getGridClasses = () => {
                            return `col-span-${colSpan} row-span-${rowSpan}`;
                        };

                        const getDimensions = () => {
                            return { 
                                width: cellWidth * colSpan, 
                                height: cellHeight * rowSpan 
                            };
                        };

                        const dimensions = getDimensions();

                        return (
                            <div
                                key={index}
                                className={`${getGridClasses()} relative overflow-hidden rounded-lg cursor-pointer group`}
                                onClick={() => openModal(index)}
                                style={{
                                    width: `${dimensions.width}px`,
                                    height: `${dimensions.height}px`
                                }}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    width={dimensions.width}
                                    height={dimensions.height}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                            </div>
                        );
                    })}
                </div>

                {/* Mobile: Single Column */}
                <div className="lg:hidden grid grid-cols-1 gap-4">
                    {displayImages.map((image, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden rounded-lg cursor-pointer group"
                            onClick={() => openModal(index)}
                            style={{
                                width: '100%',
                                height: `${cellHeight * 1.5}px` // Mobile height based on cellHeight
                            }}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                width="100%"
                                height={cellHeight * 1.5}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedImage !== null && (
                <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center">
                    <div className="relative max-w-7xl max-h-[90vh] w-full mx-4">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors"
                            aria-label="Close modal"
                        >
                            <IoClose size={32} />
                        </button>

                        {/* Previous Button */}
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors text-4xl"
                            aria-label="Previous image"
                        >
                            ‹
                        </button>

                        {/* Next Button */}
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-gray-300 transition-colors text-4xl"
                            aria-label="Next image"
                        >
                            ›
                        </button>

                        {/* Image */}
                        <img
                            src={displayImages[selectedImage].src}
                            alt={displayImages[selectedImage].alt}
                            className="w-full h-full object-contain"
                        />

                        {/* Image Counter */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
                            {selectedImage + 1} / {displayImages.length}
                        </div>

                        {/* Image Title */}
                        {displayImages[selectedImage].title && (
                            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white bg-black/50 px-4 py-2 rounded-lg text-center max-w-md">
                                {displayImages[selectedImage].title}
                            </div>
                        )}
                    </div>

                    {/* Click outside to close */}
                    <div 
                        className="absolute inset-0 -z-10" 
                        onClick={closeModal}
                        aria-label="Close modal"
                    />
                </div>
            )}
        </>
    );
};

export default BentoGrid;