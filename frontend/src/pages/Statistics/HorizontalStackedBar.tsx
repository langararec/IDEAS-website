import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

// Left to right: strong red → light red → grey → light green → dark green
const RESPONSE_COLORS = [
    "#C0392B", // Strongly Disagree — dark red
    "#E9857B", // Disagree         — red-700
    "#C4C4C4", // Neutral          — grey
    "#2E8A52", // Agree            — green-700
    "#1C6B3A", // Strongly Agree   — dark green
];

interface StackedRowData {
    sixYearsOrLess: number[];
    moreThan6Years: number[];
}

interface HorizontalStackedBarProps {
    question: string;
    data: StackedRowData;
    rowLabels: {
        sixYearsOrLess: string;
        moreThan6Years: string;
    };
    responseLabels: string[];
}

const HorizontalStackedBar: React.FC<HorizontalStackedBarProps> = ({
    question,
    data,
    rowLabels,
    responseLabels,
}) => {
    const labels = [rowLabels.sixYearsOrLess, rowLabels.moreThan6Years];

    const datasets = responseLabels.map((label, i) => ({
        label,
        data: [data.sixYearsOrLess[i], data.moreThan6Years[i]],
        backgroundColor: RESPONSE_COLORS[i],
        borderWidth: 0,
    }));

    const chartData = { labels, datasets };

    const options = {
        indexAxis: "y" as const,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                stacked: true,
                beginAtZero: true,
                max: 100,
                ticks: {
                    callback: (value: any) => `${value}%`,
                    font: { size: 10 },
                },
                grid: { display: true, color: "rgba(0,0,0,0.05)" },
            },
            y: {
                stacked: true,
                grid: { display: false },
                ticks: { font: { size: 11 } },
            },
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (context: any) =>
                        `${context.dataset.label}: ${context.parsed.x}%`,
                },
            },
            datalabels: {
                display: (context: any) => (context.raw as number) >= 5,
                color: (context: any) => {
                    const i = context.datasetIndex;
                    // Dark backgrounds (strong red, dark green) get white text
                    return i === 0 || i === 4 ? "#ffffff" : "#374151";
                },
                font: { size: 10, weight: "bold" as const },
                formatter: (value: number) => `${value}%`,
            },
        },
    };

    return (
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
            <h5 className="text-sm font-semibold text-gray-700 font-dm-sans mb-4 leading-snug">
                {question}
            </h5>

            {/* Legend */}
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-4 justify-center">
                {responseLabels.map((label, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                        <div
                            className="w-3 h-3 rounded-sm shrink-0"
                            style={{ backgroundColor: RESPONSE_COLORS[i] }}
                        />
                        <span className="text-xs text-gray-600 font-dm-sans">{label}</span>
                    </div>
                ))}
            </div>

            <div className="h-32">
                <Bar key={`${data.sixYearsOrLess.join()}-${data.moreThan6Years.join()}`} data={chartData} options={options} />
            </div>
        </div>
    );
};

export default HorizontalStackedBar;
