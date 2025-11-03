import { useLanguage } from "../../context/LanguageContext";
import { statisticsContent } from "../../content/StatisticsContent";
import { useState, useEffect, useRef } from "react";
import { PiCaretDown } from "react-icons/pi";
import { CiCalendar } from "react-icons/ci";
import AverageLineChart from "./AverageLineChart";

type CityType = 'burnaby' | 'courtenay';

const ThoughtsOnRecreation: React.FC = () => {
    const { language } = useLanguage();
    const content = statisticsContent[language].thoughtsOnRecreation;
    const cities = statisticsContent[language].surveyDataReport.cities;
    const [selectedCity, setSelectedCity] = useState<CityType>('burnaby');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const currentData = selectedCity === 'burnaby' ? content.burnaby : content.courtenay;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

    return (
        <div className="mb-6 max-w-7xl mx-auto p-4 md:p-6">
            <div className="rounded-xl py-6 bg-white shadow-sm border-1 border-gray-200">
                <div className="px-4 md:px-8">
                    {/* Section Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-dm-sans">
                        {content.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <p className="text-sm text-gray-600 mb-6 font-dm-sans">
                        {content.subtitle}
                    </p>

                    {/* Filter and Last Updated */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setIsDropdownOpen(!isDropdownOpen);
                                }}
                                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                                aria-label="Select city"
                                aria-expanded={isDropdownOpen}
                            >
                                <span className={`w-2 h-2 rounded-full ${selectedCity === 'burnaby' ? 'bg-[#317039]' : 'bg-teal-600'}`}></span>
                                <span className="font-medium text-gray-700 font-dm-sans">
                                    {cities[selectedCity]}
                                </span>
                                <PiCaretDown className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute top-full left-0 mt-2 w-full min-w-[150px] bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedCity('burnaby');
                                            setIsDropdownOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 font-dm-sans rounded-t-lg ${
                                            selectedCity === 'burnaby' ? 'bg-gray-100 font-semibold' : ''
                                        }`}
                                    >
                                        {cities.burnaby}
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedCity('courtenay');
                                            setIsDropdownOpen(false);
                                        }}
                                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 font-dm-sans rounded-b-lg ${
                                            selectedCity === 'courtenay' ? 'bg-gray-100 font-semibold' : ''
                                        }`}
                                    >
                                        {cities.courtenay}
                                    </button>
                                </div>
                            )}
                        </div>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <CiCalendar className="w-4 h-4" />
                            <span className="font-dm-sans">{currentData.lastUpdated}</span>
                        </div>
                    </div>

                    {/* Key Insights */}
                    <div className={`${selectedCity === 'burnaby' ? 'bg-base-200 border-green-200' : 'bg-[#F3FDFF] border-[#DCFAFE]'} border-1 p-4 mb-8 rounded-lg`}>
                        <p className="text-sm md:text-base text-gray-700 font-dm-sans">
                            <span className="font-semibold text-primary">{currentData.keyInsightsLabel}</span>{" "}
                            {currentData.keyInsights}
                        </p>
                    </div>

                    {/* Lowest Average Section */}
                    <div className="mb-10">
                        <h4 className="text-xl md:text-2xl font-bold text-primary mb-6 font-dm-sans">
                            {content.lowestAverage.title}
                        </h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {content.lowestAverage.charts.map((chart, index) => (
                                <AverageLineChart
                                    key={index}
                                    question={chart.question}
                                    average={chart.average}
                                    ethnicities={chart.ethnicities}
                                    selectedCity={selectedCity}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Highest Average Section */}
                    <div>
                        <h4 className="text-xl md:text-2xl font-bold text-primary mb-6 font-dm-sans">
                            {content.highestAverage.title}
                        </h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {content.highestAverage.charts.map((chart, index) => (
                                <AverageLineChart
                                    key={index}
                                    question={chart.question}
                                    average={chart.average}
                                    ethnicities={chart.ethnicities}
                                    selectedCity={selectedCity}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThoughtsOnRecreation;
