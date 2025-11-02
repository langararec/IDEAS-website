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

const SurveyParticipants: React.FC = () => {

    const { language } = useLanguage();
    const content = statisticsContent[language].surveyDataReport;
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

    const generateColors = (data: number[], city: CityType) => {
        if (city === 'courtenay') {
            return data.map(() => '#0d9488');
        }
        
        const maxValue = Math.max(...data);
        return data.map(value => {
            const intensity = value / maxValue; 

            const minIntensity = 0.4;
            const adjustedIntensity = minIntensity + (intensity * (1 - minIntensity));
            const r = Math.round(49 + (180 - 49) * (1 - adjustedIntensity));
            const g = Math.round(112 + (220 - 112) * (1 - adjustedIntensity));
            const b = Math.round(57 + (180 - 57) * (1 - adjustedIntensity));
            return `rgb(${r}, ${g}, ${b})`;
        });
    };

    // Prepare data for Chart.js
    const chartData = {
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
                    label: function(context: any) {
                        return `${context.parsed.x}%`;
                    }
                }
            },
        
            datalabels: {
                color: '#ffffff',
                visible: false,
                font: {
                    weight: 'bold' as const,
                    size: 8,
                },
                formatter: (value: number) => {
                    return `${value}%`;
                },
                anchor: 'center' as const,
                align: 'center' as const,
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 36,
                ticks: {
                    stepSize: 9,
                    callback: function(value: any) {
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
        <div className="mb-6 rounded-xl py-6 px-2 bg-white shadow-sm border-1 border-gray-200">
            <div className="px-4 md:px-8">
                {/* Section Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 font-dm-sans">
                    {content.characteristicsTitle}
                </h3>

                {/* Filter and Last Updated */}
                <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                            <span className="font-medium text-gray-700 font-dm-sans">
                                {content.cities[selectedCity]}
                            </span>
                            <PiCaretDown className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                                <button
                                    onClick={() => {
                                        setSelectedCity('burnaby');
                                        setIsDropdownOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-2 hover:bg-gray-50 font-dm-sans ${selectedCity === 'burnaby' ? 'bg-gray-100 font-semibold' : ''
                                        }`}
                                >
                                    {content.cities.burnaby}
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedCity('courtenay');
                                        setIsDropdownOpen(false);
                                    }}
                                    className={`w-full text-left px-4 py-2 hover:bg-gray-50 font-dm-sans rounded-b-lg ${selectedCity === 'courtenay' ? 'bg-gray-100 font-semibold' : ''
                                        }`}
                                >
                                    {content.cities.courtenay}
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
                <div className={`${selectedCity === 'burnaby' ? 'bg-base-200 border-green-200' : 'bg-[#F3FDFF] border-[#DCFAFE]'} border-1  p-4 mb-8 rounded-lg`}>
                    <p className="text-sm md:text-base text-gray-700 font-dm-sans">
                        <span className="font-semibold text-primary">{currentData.keyInsightsLabel}</span>{" "}
                        {currentData.keyInsights}
                    </p>
                </div>

                {/* Chart */}
                <div className="h-96">
                    <Bar data={chartData} options={chartOptions} />
                </div>

                {/* X-axis label */}
                <div className="text-center mt-4">
                    <span className="sm:text-sm text-xs font-semibold text-primary font-dm-sans">{content.chartLabel}</span>
                </div>

            </div>
        </div>
    );
}

export default SurveyParticipants;