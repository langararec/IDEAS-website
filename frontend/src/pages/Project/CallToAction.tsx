import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { projectContent } from "../../content/ProjectContent";

const CallToAction: React.FC = () => {
    const { language } = useLanguage();
    const content = projectContent[language].callToAction;

    return (
        <div className="bg-primary py-16 px-4" key={`call-to-action-${language}`}>
            <div className="max-w-6xl mx-auto text-center">
                <blockquote className="text-xl md:text-2xl lg:text-3xl text-white font-medium leading-relaxed  tracking-wide mb-8 font-dm-sans">
                    "{content.quote}"
                </blockquote>

                <Link to="/get-involved">
                    <button 
                        className="bg-accent hover:bg-accent/80 hover:cursor-pointer text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 font-dm-sans uppercase tracking-wide"
                        aria-label={`${content.button} - Navigate to get involved page`}
                    >
                        {content.button}
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CallToAction;