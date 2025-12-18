import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { dotmocracyContent } from "../../content/DotmocracyContent";
import { CiCalendar } from "react-icons/ci";
import CityDropdown from "../../components/CityDropdown";
import DotGridSection from "./DotGridSection";

type CityType = 'burnaby' | 'courtenay';

const Dotmocracy: React.FC = () => {
    const { language } = useLanguage();
    const content = dotmocracyContent[language];
    const [selectedCity, setSelectedCity] = useState<CityType>('burnaby');
    const [viewMode, setViewMode] = useState<'relative' | 'full'>('full');

    const currentData = selectedCity === 'burnaby' ? content.burnaby : content.courtenay;

    if (!content || !currentData) {
        return (
            <div className="mb-6 max-w-7xl mx-auto p-4 md:p-6">
                <div className="rounded-xl py-6 bg-white border-1 border-gray-200">
                    <div className="px-4 md:px-8">
                        <p className="text-gray-600">Loading data...</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div key={`dotmocracy-${language}`}>

            <div className="mb-6 rounded-xl bg-white border-1 border-gray-200  max-w-7xl p-4 md:p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-dm-sans text-center my-auto">
                    {content.title}
                </h2>
            </div>

            <div className="mb-6 rounded-xl bg-white border-1 border-gray-200 max-w-7xl mx-auto p-4 md:p-6">
                {/* Subtitle */}
                <h3 className="text-lg md:text-xl font-semibold text-primary font-dm-sans mb-4">
                    {content.subtitle}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 font-dm-sans mb-2">
                    {content.description}
                </p>

                {/* Questions List */}
                <ul className="list-disc list-inside text-sm text-gray-600 font-dm-sans mb-4 space-y-1">
                    {content.questions.map((question, index) => (
                        <li key={index}>{question}</li>
                    ))}
                </ul>

                {/* Chart Info Bar */}
                <div className="flex flex-wrap items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-2 text-sm">
                        <span className="font-dm-sans text-gray-700">{content.chartLabel}</span>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5">
                                <div className={`w-3 h-3 rounded-full ${selectedCity === "burnaby" ? "bg-[#0f4c28]" : "bg-[#034F59]"}`}></div>
                                <span className="font-dm-sans text-gray-600">
                                    {currentData.question1.residentCount} {content.residentLabel}
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className={`w-3 h-3 rounded-full ${selectedCity === "burnaby" ? "bg-[#75A37B]" : "bg-[#398F9A]"}`}></div>
                                <span className="font-dm-sans text-gray-600">
                                    {currentData.question1.immigrantCount} {content.immigrantLabel}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* City Dropdown and Toggle Buttons */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    <CityDropdown selectedCity={selectedCity} onCityChange={setSelectedCity} />

                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <CiCalendar className="w-4 h-4" />
                        <span className="font-dm-sans">{currentData.lastUpdated}</span>
                    </div>

                    <div className="ml-auto flex gap-2">
                        <button
                            onClick={() => setViewMode('relative')}
                            className={`${selectedCity === 'burnaby' ? 'bg-[#275A2E]' : 'bg-[#034F59]'} px-4 py-2 rounded-lg text-sm font-dm-sans transition-colors ${viewMode === 'relative'
                                ? 'text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            Relative Count
                        </button>
                        <button
                            onClick={() => setViewMode('full')}
                            className={`${selectedCity === 'burnaby' ? 'bg-[#275A2E]' : 'bg-[#034F59]'} px-4 py-2 rounded-lg text-sm font-dm-sans transition-colors ${viewMode === 'full'
                                ? ' text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            Full Count
                        </button>
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {currentData.question1.categories.map((category, index) => {
                        // Calculate relative counts (out of 100)
                        let residentDisplay: string | number;
                        let immigrantDisplay: string | number;
                        let residentDots: number;
                        let immigrantDots: number;

                        if (viewMode === 'relative') {
                            const residentRelativeExact = (category.resident / currentData.question1.residentCount) * 100;
                            const immigrantRelativeExact = (category.immigrant / currentData.question1.immigrantCount) * 100;

                            residentDisplay = `${residentRelativeExact.toFixed(1)}/100`;
                            immigrantDisplay = `${immigrantRelativeExact.toFixed(1)}/100`;
                            residentDots = Math.round(residentRelativeExact);
                            immigrantDots = Math.round(immigrantRelativeExact);
                        } else {
                            residentDisplay = category.resident;
                            immigrantDisplay = category.immigrant;
                            residentDots = category.resident;
                            immigrantDots = category.immigrant;
                        }

                        return (
                            <div
                                key={index}
                                className="flex flex-col"
                            >
                                {/* Category Title */}
                                <div className={`${selectedCity === 'burnaby' ? 'bg-[#275A2E]' : 'bg-[#034F59]'} text-white px-4 py-3 rounded-lg mb-4 min-h-[80px] flex items-center`}>
                                    <h4 className="text-sm font-semibold font-dm-sans leading-tight">
                                        {category.title}
                                    </h4>
                                </div>

                                {/* Resident and Immigrant Sections */}
                                <DotGridSection
                                    residentLabel={content.residentLabel}
                                    immigrantLabel={content.immigrantLabel}
                                    residentCount={category.resident}
                                    immigrantCount={category.immigrant}
                                    residentDisplayValue={residentDisplay}
                                    immigrantDisplayValue={immigrantDisplay}
                                    residentDotCount={residentDots}
                                    immigrantDotCount={immigrantDots}
                                    selectedCity={selectedCity}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* Second Section - Barriers Question */}
            <div className="mb-6 rounded-xl bg-white border-1 border-gray-200 max-w-7xl mx-auto p-4 md:p-6">
                {/* Subtitle */}
                <h3 className="text-lg md:text-xl font-semibold text-primary font-dm-sans mb-4">
                    {content.subtitle2}
                </h3>

                {/* Chart Info Bar */}
                <div className="flex flex-wrap items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                    <div className="flex items-center gap-2 text-sm">
                        <span className="font-dm-sans text-gray-700">{content.chartLabel}</span>
                        <div className="flex items-center gap-3">
                            <div className="flex items-center gap-1.5">
                                <div className={`w-3 h-3 rounded-full ${selectedCity === "burnaby" ? "bg-[#0f4c28]" : "bg-[#034F59]"}`}></div>
                                <span className="font-dm-sans text-gray-600">
                                    {currentData.question2.residentCount} {content.residentLabel}
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <div className={`w-3 h-3 rounded-full ${selectedCity === "burnaby" ? "bg-[#75A37B]" : "bg-[#398F9A]"}`}></div>
                                <span className="font-dm-sans text-gray-600">
                                    {currentData.question2.immigrantCount} {content.immigrantLabel}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* City Dropdown and Toggle Buttons */}
                <div className="flex flex-wrap items-center gap-3 mb-6">
                    <CityDropdown selectedCity={selectedCity} onCityChange={setSelectedCity} />

                    <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <CiCalendar className="w-4 h-4" />
                        <span className="font-dm-sans">{currentData.lastUpdated}</span>
                    </div>

                    <div className="ml-auto flex gap-2">
                        <button
                            onClick={() => setViewMode('relative')}
                            className={`${selectedCity === 'burnaby' ? 'bg-[#275A2E]' : 'bg-[#034F59]'} px-4 py-2 rounded-lg text-sm font-dm-sans transition-colors ${viewMode === 'relative'
                                ? 'text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            Relative Count
                        </button>
                        <button
                            onClick={() => setViewMode('full')}
                            className={`${selectedCity === 'burnaby' ? 'bg-[#275A2E]' : 'bg-[#034F59]'} px-4 py-2 rounded-lg text-sm font-dm-sans transition-colors ${viewMode === 'full'
                                ? ' text-white'
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                        >
                            Full Count
                        </button>
                    </div>
                </div>

                {/* Barriers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {currentData.question2.barriers.map((barrier, index) => {
                        // Calculate relative counts (out of 100)
                        let residentDisplay: string | number;
                        let immigrantDisplay: string | number;
                        let residentDots: number;
                        let immigrantDots: number;

                        if (viewMode === 'relative') {
                            const residentRelativeExact = (barrier.resident / currentData.question2.residentCount) * 100;
                            const immigrantRelativeExact = (barrier.immigrant / currentData.question2.immigrantCount) * 100;

                            residentDisplay = `${residentRelativeExact.toFixed(1)}/100`;
                            immigrantDisplay = `${immigrantRelativeExact.toFixed(1)}/100`;
                            residentDots = Math.round(residentRelativeExact);
                            immigrantDots = Math.round(immigrantRelativeExact);
                        } else {
                            residentDisplay = barrier.resident;
                            immigrantDisplay = barrier.immigrant;
                            residentDots = barrier.resident;
                            immigrantDots = barrier.immigrant;
                        }

                        return (
                            <div
                                key={index + 'barrier'}
                                className="flex flex-col"
                            >
                                {/* Barrier Title */}
                                <div className={`${selectedCity === 'burnaby' ? 'bg-[#275A2E]' : 'bg-[#034F59]'} text-white px-4 py-3 rounded-lg mb-4 min-h-[80px] flex items-center`}>
                                    <h4 className="text-sm font-semibold font-dm-sans leading-tight">
                                        {barrier.title}
                                    </h4>
                                </div>

                                {/* Resident and Immigrant Sections */}
                                <DotGridSection
                                    residentLabel={content.residentLabel}
                                    immigrantLabel={content.immigrantLabel}
                                    residentCount={barrier.resident}
                                    immigrantCount={barrier.immigrant}
                                    residentDisplayValue={residentDisplay}
                                    immigrantDisplayValue={immigrantDisplay}
                                    residentDotCount={residentDots}
                                    immigrantDotCount={immigrantDots}
                                    selectedCity={selectedCity}

                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Dotmocracy;