import React, { useState } from "react";

type People = {
    name: string,
    age: number,
    relatives: string[]
}

type timelineObject = {
    period: string,
    title: string,
    bullets: string[]
}

const Test: React.FC = () => {

    const [activeTab, setActiveTab] = useState<'overview' | 'details'>('overview');

    // Component 1 - Overview
    const OverviewComponent = () => (
        <div className="p-6  rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-primary mb-4">Overview</h2>
            <p className="text-gray-600 leading-relaxed">
                This is the overview section. Here you can display general information, 
                statistics, or summary content that gives users a quick understanding 
                of what they're looking at.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-base-100 p-4 rounded-lg">
                    <h3 className="font-medium text-primary">Metric 1</h3>
                    <p className="text-2xl font-bold text-accent">150+</p>
                </div>
                <div className="bg-base-100 p-4 rounded-lg">
                    <h3 className="font-medium text-primary">Metric 2</h3>
                    <p className="text-2xl font-bold text-accent">98%</p>
                </div>
                <div className="bg-base-100 p-4 rounded-lg">
                    <h3 className="font-medium text-primary">Metric 3</h3>
                    <p className="text-2xl font-bold text-accent">24/7</p>
                </div>
            </div>
        </div>
    );

    // Component 2 - Details
    const DetailsComponent = () => (
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold text-primary mb-4">Details</h2>
            <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                    <h3 className="font-semibold text-primary mb-2">Feature 1</h3>
                    <p className="text-gray-600">
                        Detailed description of the first feature with comprehensive 
                        information about its functionality and benefits.
                    </p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                    <h3 className="font-semibold text-primary mb-2">Feature 2</h3>
                    <p className="text-gray-600">
                        Detailed description of the second feature explaining how it 
                        works and what value it provides to users.
                    </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                    <h3 className="font-semibold text-primary mb-2">Feature 3</h3>
                    <p className="text-gray-600">
                        Detailed description of the third feature with technical 
                        specifications and implementation details.
                    </p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto p-6">
            {/* Tab Navigation */}
            <div className="bg-base-100 p-2 rounded-2xl mb-6 shadow-sm border border-gray-100 ">
                <div className="flex space-x-2">
                    <button
                        onClick={() => setActiveTab('overview')}
                        className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                            activeTab === 'overview'
                                ? 'bg-primary text-white shadow-md transform scale-[1.02] hover:cursor-pointer'
                                : 'text-gray-500 hover:text-primary hover:bg-white/50 hover:cursor-pointer'
                        }`}
                    >
                        Overview
                    </button>
                    <button
                        onClick={() => setActiveTab('details')}
                        className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all duration-300 ${
                            activeTab === 'details'
                                ? 'bg-primary text-white shadow-md transform scale-[1.02] hover:cursor-pointer'
                                : 'text-gray-500 hover:text-primary hover:bg-white/50 hover:cursor-pointer'
                        }`}
                    >
                        Details
                    </button>
                </div>
            </div>

            {/* Tab Content */}
            <div className="transition-all duration-300 ease-in-out">
                {activeTab === 'overview' ? <OverviewComponent /> : <DetailsComponent />}
            </div>
        </div>
    );
}

export default Test;