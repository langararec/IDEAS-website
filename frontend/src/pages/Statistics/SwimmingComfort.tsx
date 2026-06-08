import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { statisticsContent } from "../../content/StatisticsContent";
import CityDropdown, { type CityType } from "../../components/CityDropdown";
import Heatmap from "../../components/Heatmap";
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
import { generateCourtenayColors } from "./constants/colors";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

/** Returns column indices that are strictly monotone rising or declining */
function trendIndices(values: number[][]): { declining: number[] } {
    if (values.length < 2) return { declining: [] };
    const numCols = values[0].length;
    const declining: number[] = [];
    for (let ci = 0; ci < numCols; ci++) {
        const col = values.map((row) => row[ci]);
        const isDeclining = col.every((v, i) => i === 0 || v <= col[i - 1]);
        if (isDeclining) declining.push(ci);
    }
    return { declining };
}

const SwimmingComfort: React.FC = () => {
    const { language } = useLanguage();
    const content = statisticsContent[language].swimmingComfort;
    const [selectedCity, setSelectedCity] = useState<CityType>("burnaby");

    const currentData =
        selectedCity === "courtenay" ? content.courtenay
        : selectedCity === "total"   ? content.total
        : content.burnaby;

    // ── Trends ───────────────────────────────────────────────────────────────
    const { declining: decliningIndices } = trendIndices(currentData.values);

    // ── Chart builders ───────────────────────────────────────────────────────
    const makeBarData = (ci: number) => {
        const barValues = currentData.values.map((row) => row[ci]);
        return {
            labels: content.rows,
            datasets: [
                {
                    label: content.comfortColumns[ci],
                    data: barValues,
                    backgroundColor: generateCourtenayColors(barValues),
                    borderWidth: 0,
                    borderRadius: 4,
                },
            ],
        };
    };

    const makeBarOptions = (max: number) => ({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: { label: (ctx: any) => `${ctx.parsed.y}%` },
            },
            datalabels: {
                display: true,
                anchor: "end" as const,
                align: "top" as const,
                formatter: (v: number) => `${v}%`,
                font: { size: 10, family: "DM Sans, sans-serif" },
                color: "#374151",
            },
        },
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    font: { size: 10, family: "DM Sans, sans-serif" },
                    maxRotation: 20,
                    minRotation: 0,
                },
            },
            y: {
                beginAtZero: true,
                max,
                ticks: {
                    callback: (v: any) => `${v}%`,
                    font: { size: 10 },
                },
                grid: { color: "rgba(0,0,0,0.05)" },
            },
        },
        layout: { padding: { top: 20 } },
    });

    return (
        <div className="mb-6 max-w-7xl mx-auto">
            <div className="rounded-xl py-6 bg-white border border-gray-200">
                <div className="px-4 md:px-8">

                    {/* Section Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-dm-sans">
                        {content.sectionTitle}
                    </h3>

                    {/* Section Subtitle */}
                    <p className="text-sm text-gray-500 mb-6 font-dm-sans">
                        {content.sectionSubtitle}
                    </p>

                    {/* City dropdown */}
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <CityDropdown
                            selectedCity={selectedCity}
                            onCityChange={setSelectedCity}
                            showTotal={true}
                        />
                    </div>

                    {/* Heatmap */}
                    <div className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6">
                        <h4 className="text-base font-semibold text-primary mb-4 font-dm-sans">
                            {content.comfortHeatmapTitle}
                        </h4>
                        <Heatmap
                            rows={content.rows}
                            columns={content.comfortColumns}
                            values={currentData.values}
                            unit="%"
                        />
                    </div>

                    {/* Trends section */}
                    {decliningIndices.length > 0 && (
                        <div>
                            <h4 className="text-lg font-semibold text-primary mb-4 font-dm-sans">
                                Trends across comfort levels
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {decliningIndices.map((ci) => {
                                    const colMax = Math.max(...currentData.values.map((row) => row[ci]));
                                    return (
                                        <div key={ci} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                                            <p className="text-sm font-semibold text-primary font-dm-sans mb-3">
                                                {content.comfortColumns[ci]}
                                            </p>
                                            <div className="h-[240px]">
                                                <Bar data={makeBarData(ci)} options={makeBarOptions(Math.ceil(colMax / 10) * 10 + 10)} />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default SwimmingComfort;
