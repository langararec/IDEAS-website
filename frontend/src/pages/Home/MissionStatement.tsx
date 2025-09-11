import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { homeContent } from "../../content/HomeContent";

const MissionStatement: React.FC = () => {
    const { language } = useLanguage();
    const content = homeContent[language].missionStatement;

    return (
        <div className="relative" key={`mission-statement-${language}`}>
            {/* Spacer to account for overlapping box */}
            <div className="h-20 lg:h-32"></div>

            <div className="bg-primary py-16 px-4 relative">
                <div className="max-w-6xl mx-auto relative">
                    {/* Main Quote Box - Overlapping */}
                    <div className="bg-base-200 rounded-2xl p-6  lg:p-12 text-center absolute -top-40 md:-top-24 lg:-top-36 left-1/2 transform -translate-x-1/2 w-11/12 lg:w-10/12  z-10">
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-primary leading-tight font-dm-sans">
                            {content.quote}{" "}
                            <span className="text-accent">{content.quoteHighlight1}</span> {language === 'fr' ? 'et' : 'and'}{" "}
                            <span className="text-accent">{content.quoteHighlight2}</span> {content.quoteEnd}
                        </h2>
                    </div>

                    {/* Description Text - More top padding to account for quote box */}
                    <div className="text-center space-y-6 text-white font-dm-sans pt-28 lg:pt-38 w-11/12 mx-auto">
                        <p className="text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
                            {content.description1}
                        </p>

                        <p className="text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
                            {content.description2}
                        </p>

                        {/* Call to Action Button */}
                        <div className="pt-6">
                            <Link to="/project" aria-label={content.learnMoreAriaLabel}>
                                <button className="bg-accent hover:bg-accent/80 hover:cursor-pointer text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 font-dm-sans uppercase tracking-wide">
                                    {content.learnMoreButton}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MissionStatement;