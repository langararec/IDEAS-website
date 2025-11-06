import { useLanguage } from "../../context/LanguageContext";
import { statisticsContent } from "../../content/StatisticsContent";
import { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import CityDropdown from "../../components/CityDropdown";
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
import { BURNABY_COLOR_PALETTE } from "./constants/colors";

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
    const [selectedCity, setSelectedCity] = useState<CityType>('burnaby');

    const currentData = selectedCity === 'burnaby' ? content.burnaby : content.courtenay;

    // Add safety check for missing content
    if (!content || !currentData || !currentData.data) {
        return (
            <div className="mb-6 max-w-7xl mx-auto p-4 md:p-6">
                <div className="rounded-xl py-6 bg-white shadow-sm border-1 border-gray-200">
                    <div className="px-4 md:px-8">
                        <p className="text-gray-600">Loading data...</p>
                    </div>
                </div>
            </div>
        );
    }

    // Define color palettes for each residency group
    // Using Burnaby color palette in reverse order (lightest to darkest) for residency groups
    const colorPalettes = {
        burnaby: {
            "Less than 1 year": BURNABY_COLOR_PALETTE[5].replace(')', ', 0.9)').replace('#', 'rgba(').replace(/^rgba\((.{6})/, (_, hex) => {
                const r = parseInt(hex.slice(0, 2), 16);
                const g = parseInt(hex.slice(2, 4), 16);
                const b = parseInt(hex.slice(4, 6), 16);
                return `rgba(${r}, ${g}, ${b}`;
            }),
            "1-3 years": BURNABY_COLOR_PALETTE[3].replace(')', ', 0.9)').replace('#', 'rgba(').replace(/^rgba\((.{6})/, (_, hex) => {
                const r = parseInt(hex.slice(0, 2), 16);
                const g = parseInt(hex.slice(2, 4), 16);
                const b = parseInt(hex.slice(4, 6), 16);
                return `rgba(${r}, ${g}, ${b}`;
            }),
            "4-6 years": BURNABY_COLOR_PALETTE[1].replace(')', ', 0.9)').replace('#', 'rgba(').replace(/^rgba\((.{6})/, (_, hex) => {
                const r = parseInt(hex.slice(0, 2), 16);
                const g = parseInt(hex.slice(2, 4), 16);
                const b = parseInt(hex.slice(4, 6), 16);
                return `rgba(${r}, ${g}, ${b}`;
            }),
            "More than 6 years": BURNABY_COLOR_PALETTE[0].replace(')', ', 0.9)').replace('#', 'rgba(').replace(/^rgba\((.{6})/, (_, hex) => {
                const r = parseInt(hex.slice(0, 2), 16);
                const g = parseInt(hex.slice(2, 4), 16);
                const b = parseInt(hex.slice(4, 6), 16);
                return `rgba(${r}, ${g}, ${b}`;
            })
        },
        courtenay: {
            "Less than 1 year": 'rgba(153, 246, 228, 0.9)',
            "1-3 years": 'rgba(94, 234, 212, 0.9)',
            "4-6 years": 'rgba(20, 184, 166, 0.9)',
            "More than 6 years": 'rgba(13, 148, 136, 0.9)'
        }
    };

    const residencyGroups = content.residencyGroups;
    const colors = selectedCity === 'burnaby' ? colorPalettes.burnaby : colorPalettes.courtenay;

    // Helper function to map language-specific labels to English keys for color lookup
    const getColorKey = (group: string): string => {
        if (language === 'en') return group;
        
        // Map French labels to English keys (only for color lookup)
        const frenchToEnglish: { [key: string]: string } = {
            "Moins d'1 an": "Less than 1 year",
            "1-3 ans": "1-3 years",
            "4-6 ans": "4-6 years",
            "Plus de 6 ans": "More than 6 years"
        };
        
        return frenchToEnglish[group] || group;
    };

    // Prepare datasets for each residency group
    const datasets = residencyGroups.map((group: string) => {
        // Use group label directly as data key (data keys match the language-specific labels)
        const data = currentData.data[group as keyof typeof currentData.data];
        
        // Get English key for color lookup
        const colorKey = getColorKey(group);
        
        if (!data || !Array.isArray(data)) {
            return {
                label: group,
                data: [],
                backgroundColor: colors[colorKey as keyof typeof colors] || 'rgba(0,0,0,0.5)',
                borderWidth: 0,
                borderRadius: 4,
            };
        }

        return {
            label: group,
            data: data,
            backgroundColor: colors[colorKey as keyof typeof colors],
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
