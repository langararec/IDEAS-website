import React, { useState } from "react";
import UNSDG from "./ToggleItems/UNSDG";
import Framework from "./ToggleItems/Framework";

type ItemType = 'component1' | 'component2' | 'component3';

const ItemToggle: React.FC = () => {
    const [activeTab, setActiveTab] = useState<ItemType>('component1');
   

    // Component 3 - Different structure
    const Component3 = () => (
        <div className="bg-purple-50 p-4 md:p-8 rounded-lg">
            <h3 className="text-xl md:text-2xl font-bold text-purple-800 mb-4 md:mb-6 text-center">Component 3</h3>
            <div className="max-w-2xl mx-auto">
                <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                        <h4 className="font-semibold text-purple-700">Section A</h4>
                        <p className="text-gray-600">Centered layout with bordered sections</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                        <h4 className="font-semibold text-purple-700">Section B</h4>
                        <p className="text-gray-600">Another section with the same styling</p>
                    </div>
                </div>
            </div>
        </div>
    );

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
                return <Component3 />;
            default:
                return <UNSDG />;
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-4 md:p-6">
            {/* Tab Navigation */}
            <div className="mb-6 rounded-xl py-2 px-2 md:py-2 md:px-4 bg-white shadow-sm">
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 py-3 px-3 md:px-6 rounded-xl font-medium text-sm md:text-base transition-all duration-300 ${
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