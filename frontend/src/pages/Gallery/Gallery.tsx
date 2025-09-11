import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { galleryContent } from "../../content/GalleryContent";
import BentoGrid from "./BentoGrid";

type FilterOption = 'all' | 'burnaby' | 'courtenay';

const Gallery = () => {
    const { language } = useLanguage();
    const content = galleryContent[language];
    const [selectedFilter, setSelectedFilter] = useState<FilterOption>('all');
    const [currentPage, setCurrentPage] = useState(1);

    const burnabyGalleryImages = content.burnabyImages;
    const CourtenayGalleryImages = content.courtenayImages;
    const allImages = [...burnabyGalleryImages, ...CourtenayGalleryImages];

    const filterTabs = content.filterTabs;

    const pattern1 = [{ colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 2 }, { colSpan: 2, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }]
    const pattern2 = [{ colSpan: 2, rowSpan: 1 }, { colSpan: 1, rowSpan: 2 }, { colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }]

    // Function to get images based on filter
    const getFilteredImages = () => {
        switch (selectedFilter) {
            case 'burnaby':
                return burnabyGalleryImages;
            case 'courtenay':
                return CourtenayGalleryImages;
            case 'all':
            default:
                return allImages;
        }
    };

    // Function to apply patterns to images
    const applyPatterns = (images: typeof burnabyGalleryImages) => {
        return images.map((image, index) => {
            const groupIndex = Math.floor(index / 6);
            const positionInGroup = index % 6;
            const currentPattern = groupIndex % 2 === 0 ? pattern1 : pattern2;
            const patternItem = currentPattern[positionInGroup % currentPattern.length];
            return {
                ...image,
                colSpan: patternItem.colSpan,
                rowSpan: patternItem.rowSpan
            };
        });
    };

    return (
        <div key={`gallery-${language}`} className="w-full bg-base-100 min-h-[80vh]">
            <div className="max-w-7xl mx-auto p-6 py-8 ">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-dm-sans text-center">
                        {content.title}
                    </h2>
                    {/* Tab Navigation - Imitating ItemToggle design */}
                    <div className="mb-6 rounded-xl py-2 px-2 md:py-2 md:px-4 bg-white shadow-sm">
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                            {filterTabs.map((tab) => (
                                <button
                                    key={`${language}-${tab.id}`}
                                    onClick={() => {setSelectedFilter(tab.id as FilterOption),setCurrentPage(1)}}
                                    className={`flex-1 py-3 px-3 font-dm-sans md:px-6 rounded-xl font-medium text-sm md:text-base transition-all duration-300 ${selectedFilter === tab.id
                                        ? 'bg-primary text-white shadow-md transform scale-[1.02] hover:cursor-pointer'
                                        : 'text-gray-500 hover:text-primary hover:bg-white/50 hover:cursor-pointer'
                                        }`}
                                >
                                    <span className="block sm:hidden">
                                        {tab.shortLabel}
                                    </span>
                                    <span className="hidden sm:block">
                                        {tab.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tab Content */}
                    <div className="transition-all duration-300 ease-in-out">
                        <BentoGrid 
                            images={applyPatterns(getFilteredImages())} 
                            currentPage={currentPage} 
                            setCurrentPage={setCurrentPage}
                            paginationLabels={content.pagination}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;