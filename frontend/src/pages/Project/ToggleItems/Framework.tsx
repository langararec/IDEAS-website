import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { projectContent } from "../../../content/ProjectContent";

const Framework: React.FC = () => {
    const { language } = useLanguage();
    const content = projectContent[language].framework;

    return (
        <div key={`framework-${language}`}>
            <p className="my-4 md:text-lg leading-relaxed font-dm-sans">
                {content.introduction}
            </p>
            <div className="w-3/4 mx-auto py-4">
                <img src="/BDJJ.webp" alt={content.bdjjImageAlt} className="my-4" />
            </div>
            <h2 className="text-2xl font-semibold text-primary mb-4 font-dm-sans">
                {content.personCenteredTitle}
            </h2>
            <p className="my-4 md:text-lg leading-relaxed font-dm-sans">
                {content.personCenteredDescription}
            </p>
            <div className="w-full mx-auto py-4">
                <img src="/RJC.webp" alt={content.rjcImageAlt} className="mt-4 mb-8" />
                <h2 className="text-2xl font-semibold text-primary mb-4 font-dm-sans">
                    {content.researchPosterTitle}
                </h2>
            </div>
            <div className="w-full mx-auto mt-0">
                <img src="/ResearchPoster.webp" alt={content.posterImageAlt} />
            </div>
        </div>
    );
}

export default Framework;