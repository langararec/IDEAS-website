import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { projectContent } from "../../content/ProjectContent";

const Hero: React.FC = () => {
    const { language } = useLanguage();
    const content = projectContent[language].hero;

    return (
        <div className="relative min-h-[32vh] flex items-center justify-center py-16" key={`project-hero-${language}`}>

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/aboutproject.jpg"
                    alt={content.imageAlt}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-dm-sans">
                    {content.title}
                </h1>
                <p className=" md:text-lg leading-relaxed font-dm-sans text-gray-200">
                    {content.description}
                </p>
            </div>
        </div>
    );
}

export default Hero;