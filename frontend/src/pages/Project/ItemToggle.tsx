import React, { useState } from "react";
import UNSDG from "./ToggleItems/UNSDG";
import Framework from "./ToggleItems/Framework";
import Outcomes from "./ToggleItems/Outcomes";

type ItemType = 'component1' | 'component2' | 'component3';

const ItemToggle: React.FC = () => {
    const [activeTab, setActiveTab] = useState<ItemType>('component1');
   

    const tabs = [
        { id: 'component1' as ItemType, label: 'UN SUSTAINABLE DEVELOPMENT GOALS' },
        { id: 'component2' as ItemType, label: 'FRAMEWORK' },
        { id: 'component3' as ItemType, label: 'EXPECTED OUTCOMES' }
    ];

    const renderActiveComponent = () => {
        switch (activeTab) {
            case 'component1':
                return <UNSDG />;
            case 'component2':
                return <Framework />;
            case 'component3':
                return <Outcomes />;
            default:
                return <UNSDG />;
        }
    };

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-6 ">
            {/* Tab Navigation */}
            <div className="mb-6 rounded-xl py-2 px-2 md:py-2 md:px-4 bg-white shadow-sm">
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 py-3 px-3 md:px-6 rounded-xl font-medium text-sm md:text-base transition-all duration-300 font-dm-sans ${
                                activeTab === tab.id
                                    ? 'bg-primary text-white shadow-md transform scale-[1.02] hover:cursor-pointer'
                                    : 'text-gray-500 hover:text-primary hover:bg-white/50 hover:cursor-pointer'
                            }`}
                        >
                            <span className="block sm:hidden">
                                {tab.label.split(' ').slice(0, 2).join(' ')}
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

export default ItemToggle;