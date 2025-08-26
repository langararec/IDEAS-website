import { useState } from "react";
import BentoGrid from "./BentoGrid";

const burnabyGalleryImages = [
    { src: "/gallery/burnaby-bobprittie1.webp", alt: "Community engagement at Bob Prittie Metrotown Library", title: "Bob Prittie Metrotown Library - Community Outreach" },
    { src: "/gallery/burnaby-bobprittie2.webp", alt: "Community surveys at Bob Prittie Library", title: "Bob Prittie Library - Survey Collection" },
    { src: "/gallery/burnaby-brentwood.webp", alt: "Engagement activities at Brentwood Park", title: "Brentwood Park Community Engagement" },
    { src: "/gallery/burnaby-brentwood1.webp", alt: "Community interaction at Brentwood Park", title: "Brentwood Park - Community Interaction" },
    { src: "/gallery/burnaby-brentwood3.webp", alt: "Community members participating at Brentwood", title: "Brentwood Park - Community Participation" },
    { src: "/gallery/burnaby-brentwood4.webp", alt: "Engagement booth at Brentwood Park", title: "Brentwood Park - Engagement Booth" },
    { src: "/gallery/burnaby-brentwood5.webp", alt: "Community activities at Brentwood Park", title: "Brentwood Park - Community Activities" },
    { src: "/gallery/burnaby-brentwood6.webp", alt: "Research team at Brentwood Park", title: "Brentwood Park - Research Team" },
    { src: "/gallery/burnaby-brentwood7.webp", alt: "Interactive sessions at Brentwood Park", title: "Brentwood Park - Interactive Sessions" },
    { src: "/gallery/burnaby-brentwood8.webp", alt: "Community feedback collection at Brentwood", title: "Brentwood Park - Feedback Collection" },
    { src: "/gallery/burnaby-brentwood9.webp", alt: "Engagement activities at Brentwood Park", title: "Brentwood Park - Engagement Activities" },
    { src: "/gallery/burnaby-brentwood10.webp", alt: "Community engagement at Brentwood Park", title: "Brentwood Park - Community Engagement Session" },
    { src: "/gallery/burnaby-brentwood11.webp", alt: "Research activities at Brentwood Park", title: "Brentwood Park - Research Activities" },
    { src: "/gallery/burnaby-brentwood12.webp", alt: "Community participation at Brentwood Park", title: "Brentwood Park - Community Participation" },
    { src: "/gallery/burnaby-cameron1.webp", alt: "Community engagement at Cameron Recreation Complex", title: "Cameron Recreation Complex - Community Outreach" },
    { src: "/gallery/burnaby-cameron2.webp", alt: "Survey collection at Cameron Recreation Complex", title: "Cameron Recreation Complex - Survey Activities" },
    { src: "/gallery/burnaby-cameron3.webp", alt: "Interactive sessions at Cameron Recreation Complex", title: "Cameron Recreation Complex - Interactive Sessions" },
    { src: "/gallery/burnaby-edmonds.webp", alt: "Community engagement at Edmonds Community Centre", title: "Edmonds Community Centre - Community Engagement" },
    { src: "/gallery/burnaby-edmonds2.webp", alt: "Research activities at Edmonds Community Centre", title: "Edmonds Community Centre - Research Activities" },
    { src: "/gallery/burnaby-metrotown1.webp", alt: "Community outreach at Metrotown area", title: "Metrotown Area - Community Outreach" },
    { src: "/gallery/burnaby-metrotown2.webp", alt: "Survey activities at Metrotown area", title: "Metrotown Area - Survey Collection" },
]

const CourtenayGalleryImages = [
    { src: "/gallery/courtenay-canadaday1.webp", alt: "Canada Day community engagement in Courtenay", title: "Courtenay Canada Day - Community Engagement" },
    { src: "/gallery/courtenay-canada-day2.webp", alt: "Canada Day festivities and surveys in Courtenay", title: "Courtenay Canada Day - Festival Surveys" },
    { src: "/gallery/courtenay-focus-group1.webp", alt: "Focus group session in Courtenay", title: "Courtenay Focus Group - Session 1" },
    { src: "/gallery/courtenay-focus-group2.webp", alt: "Focus group discussion in Courtenay", title: "Courtenay Focus Group - Community Discussion" },
    { src: "/gallery/courtenay-focus-group3.webp", alt: "Focus group participants in Courtenay", title: "Courtenay Focus Group - Participant Engagement" },
    { src: "/gallery/courtenay-lewispark1.webp", alt: "Community engagement at Lewis Park in Courtenay", title: "Lewis Park Courtenay - Community Engagement" },
    { src: "/gallery/courtenay-lewispark2.webp", alt: "Survey activities at Lewis Park in Courtenay", title: "Lewis Park Courtenay - Survey Activities" },
];

const allImages = [...burnabyGalleryImages, ...CourtenayGalleryImages];

const pattern1 = [{ colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 2 }, { colSpan: 2, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }]

const pattern2 = [{ colSpan: 2, rowSpan: 1 }, { colSpan: 1, rowSpan: 2 }, { colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }]

type FilterOption = 'all' | 'burnaby' | 'courtenay';

const Gallery = () => {
    const [selectedFilter, setSelectedFilter] = useState<FilterOption>('all');
    const [currentPage, setCurrentPage] = useState(1);

    const filterTabs = [
        { id: 'all' as FilterOption, label: 'ALL CITIES' },
        { id: 'burnaby' as FilterOption, label: 'BURNABY' },
        { id: 'courtenay' as FilterOption, label: 'COURTENAY' }
    ];

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
        <div className="w-full bg-base-100">
            <div className="max-w-7xl mx-auto p-6 py-8 ">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-dm-sans">
                        Our Gallery
                    </h2>
                    {/* Tab Navigation - Imitating ItemToggle design */}
                    <div className="mb-6 rounded-xl py-2 px-2 md:py-2 md:px-4 bg-white shadow-sm">
                        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                            {filterTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => {setSelectedFilter(tab.id),setCurrentPage(1)}}
                                    className={`flex-1 py-3 px-3 md:px-6 rounded-xl font-medium text-sm md:text-base transition-all duration-300 ${selectedFilter === tab.id
                                        ? 'bg-primary text-white shadow-md transform scale-[1.02] hover:cursor-pointer'
                                        : 'text-gray-500 hover:text-primary hover:bg-white/50 hover:cursor-pointer'
                                        }`}
                                >
                                    <span className="block sm:hidden">
                                        {tab.label.split(' ')[0]}
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
                        <BentoGrid images={applyPatterns(getFilteredImages())} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery;