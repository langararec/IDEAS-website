import BentoGrid from "./BentoGrid";

const burnabyGalleryImages = [
    { src: "/gallery/burnaby-bobprittie1.webp", alt: "Community engagement at Bob Prittie Metrotown Library", title: "Bob Prittie Metrotown Library - Community Outreach" },
    { src: "/gallery/burnaby-bobprittie2.webp", alt: "Community surveys at Bob Prittie Library", title: "Bob Prittie Library - Survey Collection" },
    { src: "/gallery/burnaby-brentwood.webp", alt: "Engagement activities at Brentwood Park", title: "Brentwood Park Community Engagement" },
    { src: "/gallery/burnaby-brentwood1.webp", alt: "Community interaction at Brentwood Park", title: "Brentwood Park - Community Interaction" },
    { src: "/gallery/burnaby-brentwood2.webp", alt: "Survey setup at Brentwood Park", title: "Brentwood Park - Survey Station Setup" },
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

const images = {
    burnaby: burnabyGalleryImages,
    courtenay: CourtenayGalleryImages
}

const pattern1 = [{ colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 2 }, { colSpan: 2, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }]

const pattern2 = [{ colSpan: 2, rowSpan: 1 }, { colSpan: 1, rowSpan: 2 }, { colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }, { colSpan: 1, rowSpan: 1 }]

const Gallery = () => {
    // Function to apply patterns to images
    const applyPatterns = (images: typeof burnabyGalleryImages) => {
        return images.map((image, index) => {
            const groupIndex = Math.floor(index / 6);
            const positionInGroup = index % 6;
            
            const isPattern1Group = groupIndex % 2 === 0;
            
            if (isPattern1Group) {
                return {
                    ...image,
                    colSpan: pattern1[positionInGroup].colSpan,
                    rowSpan: pattern1[positionInGroup].rowSpan
                };
            } else {
                return {
                    ...image,
                    colSpan: pattern2[positionInGroup].colSpan,
                    rowSpan: pattern2[positionInGroup].rowSpan
                };
            }
        });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 justify-center">
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-center mb-8"> Gallery</h2>
                <BentoGrid images={ applyPatterns(images.burnaby)} />
            </div>
        </div>
    )
}

export default Gallery;