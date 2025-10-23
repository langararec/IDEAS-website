import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { projectContent } from "../../content/ProjectContent";

interface CityData {
    id: 'burnaby' | 'courtenay';
    title: string;
    image: string;
    imageAlt: string;
    paragraphs: string[];
}

const CityToggle: React.FC = () => {
    const { language } = useLanguage();
    const content = projectContent[language].cities;

    const [activeTab, setActiveTab] = useState<'burnaby' | 'courtenay'>('burnaby');

    const citiesData: CityData[] = [
        {
            id: 'burnaby',
            title: content.burnaby.title,
            image: '/burnabymap.webp',
            imageAlt: content.burnaby.imageAlt,
            paragraphs: content.burnaby.paragraphs
        },
        {
            id: 'courtenay',
            title: content.courtenay.title,
            image: '/courtenaymap.webp',
            imageAlt: content.courtenay.imageAlt,
            paragraphs: content.courtenay.paragraphs
        }
    ];

    const CityComponent = ({ city }: { city: CityData }) => (
        <div className="py-6 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="my-auto">
                    <h2 className="text-2xl font-semibold text-primary mb-4 font-dm-sans">{city.title}</h2>
                    <div className="space-y-4 leading-relaxed">
                        {city.paragraphs.map((paragraph, index) => (
                            <p key={`${language}-${city.id}-paragraph-${index}`} className="md:text-lg leading-relaxed font-dm-sans">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center">
                    <img
                        src={city.image}
                        alt={city.imageAlt}
                        className="w-full max-w-md h-auto rounded-xl "
                    />
                </div>
            </div>
        </div>
    );

    const currentCity = citiesData.find(city => city.id === activeTab)!;

    return (
        <div className="px-4 py-0" key={`city-toggle-${language}`}>
            <div className="max-w-7xl mx-auto">
                {/* Tab Navigation */}
                <div className=" mb-6 rounded-xl md:py-2 md:px-4 bg-white shadow-sm">
                    <div className="flex space-x-2">
                        {citiesData.map((city) => (
                            <button
                                key={`${language}-city-tab-${city.id}`}
                                onClick={() => setActiveTab(city.id)}
                                className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all font-dm-sans duration-300 ${activeTab === city.id
                                    ? 'bg-primary text-white shadow-md transform scale-[1.02] hover:cursor-pointer'
                                    : 'text-gray-500 hover:text-primary hover:bg-white/50 hover:cursor-pointer'
                                    }`}
                            >
                                {city.title.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="transition-all duration-300 ease-in-out">
                    <CityComponent city={currentCity} />
                </div>
            </div>
        </div>
    );
}

export default CityToggle;