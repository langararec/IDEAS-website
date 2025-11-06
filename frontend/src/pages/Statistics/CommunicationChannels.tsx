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
import { BURNABY_COLOR_PALETTE, getBurnabyColor } from "./constants/colors";

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

const CommunicationChannels: React.FC = () => {
    const { language } = useLanguage();
    const content = statisticsContent[language].communicationChannels;
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

    // Define color palettes for each communication channel
    const colorPalettes = {
        burnaby: BURNABY_COLOR_PALETTE.map(color => color.replace(')', ', 0.9)').replace('#', 'rgba(').replace(/^rgba\((.{6})/, (_, hex) => {
            const r = parseInt(hex.slice(0, 2), 16);
            const g = parseInt(hex.slice(2, 4), 16);
            const b = parseInt(hex.slice(4, 6), 16);
            return `rgba(${r}, ${g}, ${b}`;
        })),
        courtenay: [
            'rgba(13, 148, 136, 0.9)',    // Community/Cultural Groups
            'rgba(15, 160, 148, 0.9)',    // Friends/Family
            'rgba(20, 184, 166, 0.9)',    // Newspaper/Radio
            'rgba(45, 200, 180, 0.9)',    // Posters/Flyers/Signs
            'rgba(94, 234, 212, 0.9)',    // Recreation Centre/Website
            'rgba(125, 240, 220, 0.9)',   // School/Workplace
            'rgba(153, 246, 228, 0.9)'    // Social Media
        ]
    };

    const channels = content.channels;
    const residencyGroups = content.residencyGroups;
    const colors = selectedCity === 'burnaby' ? colorPalettes.burnaby : colorPalettes.courtenay;

    // Prepare datasets for each communication channel
    const datasets = channels.map((channel: string, index: number) => {
        // Get data for this channel across all residency groups
        const channelData = residencyGroups.map((group: string) => {
            // Use the group label directly as the key (data keys match the language-specific labels)
            const dataArray = currentData.data[group as keyof typeof currentData.data];
            
            // Add null check to prevent undefined errors
            if (!dataArray || !Array.isArray(dataArray)) {
                return 0;
            }
            
            return dataArray[index] || 0;
        });

        return {
            label: channel,
            data: channelData,
            backgroundColor: colors[index],
            borderWidth: 0,
            borderRadius: 4,
        };
    });

    const chartData = {
        labels: residencyGroups,
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
                display: false,
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
                        size: 11
                    },
                    maxRotation: 0,
                    minRotation: 0,
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

export default CommunicationChannels;
