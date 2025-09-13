import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { homeContent } from "../../content/HomeContent";

const Mission: React.FC = () => {
    const { language } = useLanguage();
    const content = homeContent[language].mission;

    return (
        <div className="w-full mx-auto relative lg:h-96 overflow-hidden" key={`mission-${language}`}>
            {/* Desktop background image */}
            <img
                src="/our-mission-cropped.webp"
                alt={content.imageAlt}
                className="hidden lg:block absolute 3xl:-top-11/12 lg:-top-1/3 xl:-top-2/3 w-full"
            />
            
            <div className="mx-auto relative h-full">
                <div className="flex flex-col lg:justify-start lg:items-center space-y-8 lg:space-y-0 lg:h-full z-40 w-full">
                    {/* Mobile image */}
                    <div className="lg:hidden">
                        <img
                            src="/our-mission.webp"
                            alt={content.imageAlt}
                            className="w-full h-auto shadow-xl"
                        />
                    </div>
                    
                    <div className="max-w-7xl 3xl:max-w-3/4 w-full h-full lg:flex lg:items-center lg:justify-start px-4 lg:px-8">
                        <div className="space-y-6 z-10 max-w-xl mx-auto lg:mx-0 rounded-2xl p-4 my-auto">
                            <h2 className="text-3xl lg:text-4xl text-center lg:text-left font-bold text-primary font-dm-sans">
                                {content.title}
                            </h2>
                            <p className="text-lg lg:text-xl text-center lg:text-left text-black leading-relaxed font-dm-sans">
                                {content.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Mission;