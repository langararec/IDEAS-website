
import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { homeContent } from "../../content/HomeContent";

const Mission: React.FC = () => {
    const { language } = useLanguage();
    const content = homeContent[language].mission;

    return (
        <div className="w-full bg-white" key={`mission-${language}`}>
            <div className="max-w-6xl mx-auto px-4 py-16 bg-white">
                <div className="lg:flex lg:flex-row flex flex-col lg:items-center lg:gap-12 space-y-8 lg:space-y-0">
                    <div className="lg:flex-1">
                        <img
                            src="/mission.webp"
                            alt={content.imageAlt}
                            className="w-full h-auto rounded-2xl shadow-xl"
                        />
                    </div>
                    <div className=" lg:flex-1 lg:text-left text-center space-y-6">
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
    );
}

export default Mission;