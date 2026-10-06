import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { findingsContent } from "../../content/FindingsContent";

const Findings: React.FC = () => {
    const { language } = useLanguage();
    const content = findingsContent[language];

    return (
        <div className="bg-base-100 px-4 pt-12">
            <h1 className="text-center max-w-6xl mx-auto text-4xl lg:text-6xl leading-tight tracking-tight font-semibold font-dm-sans text-primary">
                {content.title} <span className="text-accent">{content.titleHighlight}</span>
            </h1>
        </div>
    );
};

export default Findings;
