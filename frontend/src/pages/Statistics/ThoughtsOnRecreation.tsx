import { useLanguage } from "../../context/LanguageContext";
import { statisticsContent } from "../../content/StatisticsContent";
import { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import CityDropdown from "../../components/CityDropdown";
import AverageLineChart from "./AverageLineChart";

type CityType = 'burnaby' | 'courtenay';

const ThoughtsOnRecreation: React.FC = () => {
    const { language } = useLanguage();
    const content = statisticsContent[language].thoughtsOnRecreation;
    const [selectedCity, setSelectedCity] = useState<CityType>('burnaby');
    const currentData = selectedCity === 'burnaby' ? content.burnaby : content.courtenay;


    return (
        <div className="mb-6 max-w-7xl mx-auto p-4 md:p-6">
            <div className="rounded-xl py-6 bg-white border-1 border-gray-200">
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
                        <CityDropdown
                            selectedCity={selectedCity}
                            onCityChange={setSelectedCity}
                        />
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
                            {currentData.lowestAverage.charts.map((chart, index) => (
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
                            {currentData.highestAverage.charts.map((chart, index) => (
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
