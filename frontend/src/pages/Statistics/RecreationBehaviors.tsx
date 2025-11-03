import { useLanguage } from "../../context/LanguageContext";
import { statisticsContent } from "../../content/StatisticsContent";
import { useState, useEffect, useRef } from "react";
import { PiCaretDown } from "react-icons/pi";
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
import ChartDataLabels from 'chartjs-plugin-datalabels';

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

const RecreationBehaviors: React.FC = () => {
    const { language } = useLanguage();
    const content = statisticsContent[language].recreationBehaviors;
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

    // Define color palettes for each residency group
    const colorPalettes = {
        burnaby: {
            "Less than 1 year": 'rgba(180, 220, 180, 0.9)',
            "1-3 years": 'rgba(112, 180, 112, 0.9)',
            "4-6 years": 'rgba(49, 112, 57, 0.9)',
            "More than 6 years": 'rgba(15, 76, 40, 0.9)'
        },
        courtenay: {
            "Less than 1 year": 'rgba(153, 246, 228, 0.9)',
            "1-3 years": 'rgba(94, 234, 212, 0.9)',
            "4-6 years": 'rgba(20, 184, 166, 0.9)',
            "More than 6 years": 'rgba(13, 148, 136, 0.9)'
        }
    };

    const residencyGroups = language === 'en' ? content.residencyGroups : content.residencyGroups;
    const colors = selectedCity === 'burnaby' ? colorPalettes.burnaby : colorPalettes.courtenay;

    // Prepare datasets for each residency group
    const datasets = residencyGroups.map((group: string) => {
        const groupKey = language === 'en' ? group :
            group === "Moins d'1 an" ? "Less than 1 year" :
                group === "1-3 ans" ? "1-3 years" :
                    group === "4-6 ans" ? "4-6 years" :
                        "More than 6 years";

        return {
            label: group,
            data: currentData.data[groupKey as keyof typeof currentData.data],
            backgroundColor: colors[groupKey as keyof typeof colors],
            borderWidth: 0,
            borderRadius: 4,
        };
    });

    const chartData = {
        labels: content.motivations,
        datasets: datasets
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                bottom: 20,
                top: 10,
                left: 10,
                right: 10
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'bottom' as const,
                labels: {
                    usePointStyle: true,
                    padding: 15,
                    font: {
                        size: 11,
                        family: 'DM Sans, sans-serif'
                    }
                }
            },
            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        return `${context.dataset.label}: ${context.parsed.y}%`;
                    }
                }
            },
            datalabels: {
                display: false, // Disable data labels as they would clutter the grouped bars
            }
        },
        scales: {
            x: {
                stacked: false,
                grid: {
                    display: false
                },
                ticks: {
                    font: {
                        size: 13
                    },
                    maxRotation: 45,
                    minRotation: 45,
                    autoSkip: false,
                    padding: 5
                }
            },
            y: {
                beginAtZero: true,
                max: 80,
                ticks: {
                    stepSize: 20,
                    callback: function (value: any) {
                        return value;
                    },
                    font: {
                        size: 11
                    }
                },
                grid: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.05)'
                },
                title: {
                    display: true,
                    text: 'Percentage (%)',
                    font: {
                        size: 12,
                        weight: 'bold' as const
                    }
                }
            }
        }
    };

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
                                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 font-dm-sans rounded-t-lg ${selectedCity === 'burnaby' ? 'bg-gray-100 font-semibold' : ''
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
                                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 font-dm-sans rounded-b-lg ${selectedCity === 'courtenay' ? 'bg-gray-100 font-semibold' : ''
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

                    {/* Chart */}
                    <div className="min-h-96 md:h-[550px] overflow-x-auto pb-4">
                        <div className="min-w-[1200px] h-full">
                            <Bar data={chartData} options={chartOptions} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecreationBehaviors;
