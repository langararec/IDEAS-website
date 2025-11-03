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
import type { ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

interface EthnicityScore {
    name: string;
    score: number;
}

interface AverageLineChartProps {
    question: string;
    average: number;
    ethnicities: EthnicityScore[];
    selectedCity: 'burnaby' | 'courtenay';
}

const AverageLineChart: React.FC<AverageLineChartProps> = ({
    question,
    average,
    ethnicities,
    selectedCity
}) => {
    // Generate gradient colors based on score relative to average
    const generateColors = (scores: number[], city: 'burnaby' | 'courtenay') => {
        return scores.map(score => {
            const isAboveAverage = score >= average;
            
            if (city === 'burnaby') {
                // Burnaby: darker green for above average, lighter for below
                if (isAboveAverage) {
                    return 'rgba(15, 76, 40, 0.9)';  // Dark green
                } else {
                    return 'rgba(180, 220, 180, 0.9)';  // Light green
                }
            } else {
                // Courtenay: darker teal for above average, lighter for below
                if (isAboveAverage) {
                    return 'rgba(13, 148, 136, 0.9)';  // Dark teal
                } else {
                    return 'rgba(153, 246, 228, 0.9)';  // Light teal
                }
            }
        });
    };

    const chartData = {
        labels: ethnicities.map(e => e.name),
        datasets: [
            {
                data: ethnicities.map(e => e.score),
                backgroundColor: generateColors(ethnicities.map(e => e.score), selectedCity),
                borderWidth: 0,
                borderRadius: 4,
            }
        ]
    };

    const chartOptions: ChartOptions<'bar'> = {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: {
                right: 20,
                left: 10,
                top: 10,
                bottom: 10
            }
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: function (context: any) {
                        return `Score: ${context.parsed.x}`;
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
                max: 5,
                ticks: {
                    stepSize: 1,
                    font: {
                        size: 10
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
                        size: 10
                    }
                }
            }
        }
    };

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
            {/* Question Title */}
            <h4 className="text-sm font-medium text-gray-700 mb-3 font-dm-sans">
                {question}
            </h4>
            
            {/* Average Label */}
            <div className="flex items-center gap-2 mb-3">
                <div className="h-0.5 w-8 bg-black"></div>
                <span className="text-xs font-semibold text-black font-dm-sans">
                    {average.toFixed(1)} average
                </span>
            </div>

            {/* Chart Container */}
            <div className="relative h-80">
                <Bar 
                    data={chartData} 
                    options={chartOptions}
                    plugins={[{
                        id: 'averageLine',
                        afterDatasetsDraw: (chart: any) => {
                            const ctx = chart.ctx;
                            const xAxis = chart.scales.x;
                            const yAxis = chart.scales.y;
                            
                            // Calculate x position for average line
                            const xPos = xAxis.getPixelForValue(average);
                            
                            ctx.save();
                            ctx.beginPath();
                            ctx.strokeStyle = '#000000';
                            ctx.lineWidth = 2;
                            ctx.setLineDash([5, 5]);
                            ctx.moveTo(xPos, yAxis.top);
                            ctx.lineTo(xPos, yAxis.bottom);
                            ctx.stroke();
                            ctx.restore();
                        }
                    }]}
                />
            </div>

            {/* Score Label */}
            <div className="text-center mt-2">
                <span className="text-xs font-semibold text-gray-600 font-dm-sans">
                    Score (1-5)
                </span>
            </div>
        </div>
    );
};

export default AverageLineChart;
