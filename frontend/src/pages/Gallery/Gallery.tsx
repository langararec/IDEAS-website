import BentoGrid from "./BentoGrid";

const Gallery = () => {

    return (
        <div className="max-w-7xl mx-auto px-4 py-8 lg:py-30 justify-center">

            <BentoGrid 
                aspectRatio={0.85}
                images={[
                // Burnaby Gallery Images
                { src: "/gallery/burnaby-bobprittie1.webp", alt: "Community engagement at Bob Prittie Metrotown Library", title: "Bob Prittie Metrotown Library - Community Outreach", colSpan: 2, rowSpan: 2 },
                { src: "/gallery/burnaby-bobprittie2.webp", alt: "Community surveys at Bob Prittie Library", title: "Bob Prittie Library - Survey Collection", colSpan: 1, rowSpan: 1 },
                { src: "/gallery/burnaby-brentwood.webp", alt: "Engagement activities at Brentwood Park", title: "Brentwood Park Community Engagement", colSpan: 1, rowSpan: 2 },
                { src: "/gallery/burnaby-brentwood1.webp", alt: "Community interaction at Brentwood Park", title: "Brentwood Park - Community Interaction", colSpan: 2, rowSpan: 1 },
                { src: "/gallery/burnaby-brentwood2.webp", alt: "Survey setup at Brentwood Park", title: "Brentwood Park - Survey Station Setup", colSpan: 1, rowSpan: 1 },
                { src: "/gallery/burnaby-brentwood3.webp", alt: "Community members participating at Brentwood", title: "Brentwood Park - Community Participation", colSpan: 1, rowSpan: 1 },
                { src: "/gallery/burnaby-brentwood4.webp", alt: "Engagement booth at Brentwood Park", title: "Brentwood Park - Engagement Booth", colSpan: 2, rowSpan: 2 },
                { src: "/gallery/burnaby-brentwood5.webp", alt: "Community activities at Brentwood Park", title: "Brentwood Park - Community Activities", colSpan: 1, rowSpan: 1 },
                { src: "/gallery/burnaby-brentwood6.webp", alt: "Research team at Brentwood Park", title: "Brentwood Park - Research Team", colSpan: 1, rowSpan: 2 },
                { src: "/gallery/burnaby-brentwood7.webp", alt: "Interactive sessions at Brentwood Park", title: "Brentwood Park - Interactive Sessions", colSpan: 2, rowSpan: 1 },
                { src: "/gallery/burnaby-brentwood8.webp", alt: "Community feedback collection at Brentwood", title: "Brentwood Park - Feedback Collection", colSpan: 1, rowSpan: 1 },
                { src: "/gallery/burnaby-brentwood9.webp", alt: "Engagement activities at Brentwood Park", title: "Brentwood Park - Engagement Activities", colSpan: 1, rowSpan: 1 },
                { src: "/gallery/burnaby-brentwood10.webp", alt: "Community outreach at Brentwood Park", title: "Brentwood Park - Community Outreach", colSpan: 1, rowSpan: 1 },
                { src: "/gallery/burnaby-brentwood11.webp", alt: "Survey participation at Brentwood Park", title: "Brentwood Park - Survey Participation", colSpan: 1, rowSpan: 1 },
                { src: "/gallery/burnaby-brentwood12.webp", alt: "Research activities at Brentwood Park", title: "Brentwood Park - Research Activities", colSpan: 1, rowSpan: 1 },
                { src: "/gallery/burnaby-cameron1.webp", alt: "Community engagement at Cameron Recreation Complex", title: "Cameron Recreation Complex - Community Engagement", colSpan: 1, rowSpan: 1 },
                { src: "/gallery/burnaby-cameron2.webp", alt: "Survey collection at Cameron Recreation Complex", title: "Cameron Recreation Complex - Survey Collection", colSpan: 1, rowSpan: 1 },
                { src: "/gallery/burnaby-cameron3.webp", alt: "Community interaction at Cameron Recreation Complex", title: "Cameron Recreation Complex - Community Interaction", colSpan: 1, rowSpan: 1 },
                { src: "/gallery/burnaby-edmonds.webp", alt: "Community activities at Edmonds Park", title: "Edmonds Park - Community Activities", colSpan: 1, rowSpan: 1 },
                { src: "/gallery/burnaby-edmonds2.webp", alt: "Engagement booth at Edmonds Park", title: "Edmonds Park - Engagement Booth", colSpan: 1, rowSpan: 1 },
                { src: "/gallery/burnaby-metrotown1.webp", alt: "Community outreach at Metrotown area", title: "Metrotown Area - Community Outreach", colSpan: 1, rowSpan: 1 },
                { src: "/gallery/burnaby-metrotown2.webp", alt: "Survey activities at Metrotown", title: "Metrotown Area - Survey Activities", colSpan: 1, rowSpan: 1 },

                // Courtenay Gallery Images
                { src: "/gallery/courtenay-canadaday1.webp", alt: "Canada Day community engagement in Courtenay", title: "Courtenay Canada Day - Community Engagement", colSpan: 1, rowSpan: 1 },
                { src: "/gallery/courtenay-canada-day2.webp", alt: "Canada Day festivities and surveys in Courtenay", title: "Courtenay Canada Day - Festival Surveys", colSpan: 1, rowSpan: 1 },
                { src: "/gallery/courtenay-focus-group1.webp", alt: "Focus group session in Courtenay", title: "Courtenay Focus Group - Session 1", colSpan: 1, rowSpan: 1 },
                { src: "/gallery/courtenay-focus-group2.webp", alt: "Focus group discussion in Courtenay", title: "Courtenay Focus Group - Community Discussion", colSpan: 1, rowSpan: 1 },
                { src: "/gallery/courtenay-focus-group3.webp", alt: "Focus group participants in Courtenay", title: "Courtenay Focus Group - Participant Engagement", colSpan: 1, rowSpan: 1 },
                { src: "/gallery/courtenay-lewispark1.webp", alt: "Community engagement at Lewis Park in Courtenay", title: "Lewis Park Courtenay - Community Engagement", colSpan: 1, rowSpan: 1 },
                { src: "/gallery/courtenay-lewispark2.webp", alt: "Survey activities at Lewis Park in Courtenay", title: "Lewis Park Courtenay - Survey Activities", colSpan: 1, rowSpan: 1 },
            ]} />
        </div>
    )
}

export default Gallery;