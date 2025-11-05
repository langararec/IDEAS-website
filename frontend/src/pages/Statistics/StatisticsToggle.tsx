import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { statisticsContent } from "../../content/StatisticsContent";
import SurveyDataReport from "./SurveyDataReport";
import Dotmocracy from "./Dotmocracy";
import ActivitySheets from "./ActivitySheets";
type ItemType = 'component1' | 'component2' | 'component3';


const StatisticsToggle: React.FC = () => {
    const { language } = useLanguage();
    const content = statisticsContent[language].statisticsToggle;

    const [activeTab, setActiveTab] = useState<ItemType>('component1');

    const renderActiveComponent = () => {
        switch (activeTab) {
            case 'component1':
                return <SurveyDataReport />;
            case 'component2':
                return <Dotmocracy />;
            case 'component3':
                return <ActivitySheets />;
            default:
                return <SurveyDataReport />;
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6" key={`item-toggle-${language}`}>
            {/* Tab Navigation */}
            <div className="mb-6 rounded-xl py-2 px-2 md:py-2 md:px-4 bg-white shadow-sm ">
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    {content.tabs.map((tab) => (
                        <button
                            key={`${language}-item-tab-${tab.id}`}
                            onClick={() => {setActiveTab(tab.id as ItemType)}}
                            aria-label={`View ${tab.label}`}
                            aria-pressed={activeTab === tab.id}
                            className={`flex-1 py-3 px-3 md:px-6 rounded-xl font-medium text-sm md:text-base transition-all duration-300 font-dm-sans ${activeTab === tab.id
                                    ? 'bg-primary text-white shadow-md transform scale-[1.02] hover:cursor-pointer'
                                    : 'text-gray-500 hover:text-primary hover:bg-white/50 hover:cursor-pointer'
                                }`}
                        >
                            <span className="block sm:hidden">
                                {tab.shortLabel}
                            </span>
                            <span className="hidden sm:block">
                                {tab.label}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Tab Content */}
            <div className="transition-all duration-300 ease-in-out">
                {renderActiveComponent()}
            </div>
        </div>
    );
};

export default StatisticsToggle;