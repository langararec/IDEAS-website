import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { projectContent } from "../../../content/ProjectContent";

const Outcomes: React.FC = () => {
    const { language } = useLanguage();
    const content = projectContent[language].outcomes;

    return (
        <div key={`outcomes-${language}`}>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap gap-8 justify-center py-6">
                    {content.items.map((outcome) => (
                        <div
                            key={`${language}-outcome-${outcome.id}`}
                            className="overflow-hidden flex-1 min-w-80 max-w-96 transition-all duration-300 transform "
                        >
                            <div className="aspect-w-16 aspect-h-10 rounded-lg">
                                <img
                                    src={outcome.image}
                                    alt={outcome.title}
                                    className="w-full h-60 object-cover rounded-lg "
                                />
                            </div>
                            
                            <div className="py-4">
                                <h3 className="text-xl font-semibold text-primary mb-3 font-dm-sans">
                                    {outcome.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-dm-sans">
                                    {outcome.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Outcomes;