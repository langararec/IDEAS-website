import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { statisticsContent } from "../../content/StatisticsContent";

const Dotmocracy: React.FC = () => {
    const { language } = useLanguage();
    const content = statisticsContent[language].dotmocracy;

    return (
        <div key={`dotmocracy-${language}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-dm-sans">
                {content.title}
            </h2>

            {/* Add your dotmocracy content here */}
        </div>
    );
};

export default Dotmocracy;