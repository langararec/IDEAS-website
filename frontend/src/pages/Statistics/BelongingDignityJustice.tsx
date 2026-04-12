import { useLanguage } from "../../context/LanguageContext";
import { statisticsContent } from "../../content/StatisticsContent";
import { useState } from "react";
import CityDropdown, { type CityType } from "../../components/CityDropdown";
import AverageLineChart from "./AverageLineChart";
import HorizontalStackedBar from "./HorizontalStackedBar";

const BelongingDignityJustice: React.FC = () => {
    const { language } = useLanguage();
    const content = statisticsContent[language].belongingDignityJustice;
    const [selectedCity, setSelectedCity] = useState<CityType>('burnaby');

    // AverageLineChart data only exists for burnaby/courtenay
    const currentData = selectedCity === 'total' ? content.burnaby : selectedCity === 'burnaby' ? content.burnaby : content.courtenay;

    const belonging = content.belonging;
    const welcomeData   = belonging.welcome[selectedCity];
    const peopleLikeMe  = belonging.peopleLikeMe[selectedCity];

    return (
        <div className="mb-6 max-w-7xl mx-auto">
            <div className="rounded-xl py-6 bg-white border-1 border-gray-200">
                <div className="px-4 md:px-8">
                    {/* Section Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-dm-sans">
                        {content.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm text-gray-500 mb-6 font-dm-sans">
                        {content.subtitle}
                    </p>

                    {/* City Toggle */}
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <CityDropdown
                            selectedCity={selectedCity}
                            onCityChange={setSelectedCity}
                            showTotal={true}
                        />
                    </div>

                    {/* Belonging subsection */}
                    <div className="mb-8">
                        <h4 className="text-lg md:text-xl font-semibold text-primary mb-4 font-dm-sans">
                            {belonging.title}
                        </h4>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <HorizontalStackedBar
                                question={belonging.welcome.question}
                                data={welcomeData}
                                rowLabels={belonging.rowLabels}
                                responseLabels={belonging.responseLabels}
                            />
                            <HorizontalStackedBar
                                question={belonging.peopleLikeMe.question}
                                data={peopleLikeMe}
                                rowLabels={belonging.rowLabels}
                                responseLabels={belonging.responseLabels}
                            />
                        </div>
                    </div>

                    {/* Lowest Average Section */}
                    {currentData.lowestAverage.charts.length > 0 && (
                        <div className="mb-10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {currentData.lowestAverage.charts.map((chart, index) => (
                                    <AverageLineChart
                                        key={index}
                                        question={chart.question}
                                        average={chart.average}
                                        ethnicities={chart.ethnicities}
                                        selectedCity={selectedCity === 'total' ? 'burnaby' : selectedCity}
                                    />
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Highest Average Section */}
                    {currentData.highestAverage.charts.length > 0 && (
                        <div>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                {currentData.highestAverage.charts.map((chart, index) => (
                                    <AverageLineChart
                                        key={index}
                                        question={chart.question}
                                        average={chart.average}
                                        ethnicities={chart.ethnicities}
                                        selectedCity={selectedCity === 'total' ? 'burnaby' : selectedCity}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BelongingDignityJustice;
