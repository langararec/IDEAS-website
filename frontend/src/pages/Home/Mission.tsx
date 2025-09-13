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
                src="/our-mission.webp"
                alt={content.imageAlt}
                className="hidden lg:block absolute -top-2/3 w-full"
            />
            
            <div className="mx-auto relative h-full">
                <div className="flex flex-col lg:justify-center lg:items-center space-y-8 lg:space-y-0 lg:h-full z-40">
                    {/* Mobile image */}
                    <div className="lg:hidden pt-8  px-4">
                        <img
                            src="/our-mission.webp"
                            alt={content.imageAlt}
                            className="w-full h-auto rounded-2xl shadow-xl"
                        />
                    </div>
                    
                    <div className="lg:flex-1 lg:flex lg:items-center lg:justify-center px-4 lg:px-8">
                        <div className="text-center space-y-6 z-10 max-w-2xl  lg:backdrop-blur-sm lg:bg-white/10  rounded-2xl p-4 ">
                            <h2 className="text-3xl lg:text-4xl font-bold text-primary font-dm-sans">
                                {content.title}
                            </h2>
                            <p className="text-lg lg:text-xl text-black leading-relaxed font-dm-sans">
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