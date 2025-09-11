import React from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { projectContent } from "../../../content/ProjectContent";

const UNSDG: React.FC = () => {
    const { language } = useLanguage();
    const content = projectContent[language].unsdg;

    return (
        <div key={`unsdg-${language}`}>
            <p className="my-4 md:text-lg leading-relaxed font-dm-sans">
                {content.introduction1}
            </p>
            <p className="my-4 md:text-lg leading-relaxed font-dm-sans">
                {content.introduction2}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-0 py-0 lg:py-6">
                {content.items.map((item, index) => (
                    <div key={`${language}-unsdg-item-${index}`} className=" py-4 lg:py-6 flex flex-col">
                        <img src={item.image} alt={item.title} className="w-1/3 h-auto mb-4 rounded-lg" />
                        <h3 className="text-xl font-semibold text-primary mb-2 font-dm-sans">{item.title}</h3>
                        <p className="md:text-lg leading-relaxed font-dm-sans">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UNSDG;