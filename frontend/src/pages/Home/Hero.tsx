import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { homeContent } from "../../content/HomeContent";
import Carousel from "./Carousel";

const Hero: React.FC = () => {
    const { language } = useLanguage();
    const content = homeContent[language].hero;

    return (
        <div className="px-4 pt-12" key={`hero-${language}`}>
            <div className="text-center max-w-6xl mx-auto">
                <h1 className="text-4xl lg:text-6xl leading-tight tracking-tight font-semibold font-dm-sans text-primary mb-8">
                    {content.title} <span className="text-accent">{content.titleHighlight}</span>
                </h1>
                <p className="max-w-2xl text-lg lg:text-xl text-black mx-auto leading-relaxed mb-0 font-dm-sans">
                    {content.description}
                </p>
                <Carousel />
                <p className="text-lg lg:text-3xl leading-relaxed tracking-wide font-medium font-dm-sans text-primary mt-4">
                    {content.surveyCall}
                </p>

                <div className="flex justify-center mb-14 mt-2">
                    <a 
                        href={content.surveyUrl}
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label={content.surveyAriaLabel}
                        className="inline-block bg-primary font-dm-sans hover:bg-primary/80 text-white border-3 px-8 py-3 rounded-xl mt-4  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all font-medium text-center duration-300  hover:scale-105"
                    >
                        {content.surveyButton}
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Hero;