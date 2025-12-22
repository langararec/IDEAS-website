import { useLanguage } from "../../context/LanguageContext";
import { statisticsContent } from "../../content/StatisticsContent";
import { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import CityDropdown from "../../components/CityDropdown";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { generateBurnabyColors, generateCourtenayColors } from "./constants/colors";
import type { SurveyDataReportType } from "../../content/Statistics/SurveyDataReport";

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

type CityType = 'burnaby' | 'courtenay';

const SurveyParticipants: React.FC = () => {

    const { language } = useLanguage();
    const content: SurveyDataReportType = statisticsContent[language].surveyDataReport;
    const [selectedCity, setSelectedCity] = useState<CityType>('burnaby');


    const currentData = selectedCity === 'burnaby' ? content.burnaby : content.courtenay;

    const generateColors = (data: number[], city: CityType) => {
        if (city === 'courtenay') {
            return generateCourtenayColors(data);
        }

        return generateBurnabyColors(data);
    };

    // Prepare census data for Chart.js
    const censusChartData = {
        labels: currentData.censusEthnicities.map(e => e.name),
        datasets: [
            {
                label: content.chartLabel,
                data: currentData.censusEthnicities.map(e => e.percentage),
                backgroundColor: generateColors(
                    currentData.censusEthnicities.map(e => e.percentage),
                    selectedCity
                ),
                borderWidth: 0,
                borderRadius: 8,
            }
        ]
    };

    // Prepare survey data for Chart.js
    const surveyChartData = {
        labels: currentData.ethnicities.map(e => e.name),
        datasets: [
            {
                label: content.chartLabel,
                data: currentData.ethnicities.map(e => e.percentage),
                backgroundColor: generateColors(
                    currentData.ethnicities.map(e => e.percentage),
                    selectedCity
                ),
                borderWidth: 0,
                borderRadius: 8,
            }
        ]
    };

    const chartOptions = {
        indexAxis: 'y' as const,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        return `${context.parsed.x}%`;
                    }
                }
            },

            datalabels: {
                display: false,

            }
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    stepSize: 9,
                    callback: function (value: any) {
                        return value;
                    }
                },
                grid: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.05)'
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 10,

                    }
                }
            }
        }
    };

    return (
        <div className="mb-6 rounded-xl py-6 px-2 bg-white border-1 border-gray-200">
            <div className="px-4 md:px-8">
                {/* Section Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-dm-sans">
                    {content.characteristicsTitle}
                </h3>

                {/* Filter and Last Updated */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="relative">
                        <CityDropdown
                            selectedCity={selectedCity}
                            onCityChange={setSelectedCity} />
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <CiCalendar className="w-4 h-4" />
                        <span className="font-dm-sans">{currentData.lastUpdated}</span>
                    </div>
                </div>

                {/* Key Insights */}
                <div className={`${selectedCity === 'burnaby' ? 'bg-base-200 border-green-200' : 'bg-[#F3FDFF] border-[#DCFAFE]'} border-1  p-4 mb-8 rounded-lg`}>
                    <p className="text-sm md:text-base text-gray-700 font-dm-sans">
                        <span className="font-semibold text-primary">{currentData.keyInsightsLabel}</span>{" "}
                        {currentData.keyInsights}
                    </p>
                </div>

                {/* Charts Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Census Data Chart */}
                    <div>
                        <h4 className="text-lg font-semibold text-primary mb-4 font-dm-sans text-center">
                            {content.censusComparisonTitle}
                        </h4>
                        <div className="h-96">
                            <Bar data={censusChartData} options={chartOptions} />
                        </div>
                        <div className="text-center mt-4">
                            <span className="sm:text-sm text-xs font-semibold text-primary font-dm-sans">{content.chartLabel}</span>
                        </div>
                    </div>

                    {/* Survey Data Chart */}
                    <div>
                        <h4 className="text-lg font-semibold text-primary mb-4 font-dm-sans text-center">
                            {content.characteristicsTitle}
                        </h4>
                        <div className="h-96">
                            <Bar data={surveyChartData} options={chartOptions} />
                        </div>
                        <div className="text-center mt-4">
                            <span className="sm:text-sm text-xs font-semibold text-primary font-dm-sans">{content.chartLabel}</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default SurveyParticipants;