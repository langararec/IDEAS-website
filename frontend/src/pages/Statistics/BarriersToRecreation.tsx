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

/** Indices of the top-N columns by sum across all rows, returned in original column order */
function topColumnIndices(values: number[][], n: number): number[] {
    if (values.length === 0) return [];
    const numCols = values[0].length;
    const colSums = Array.from({ length: numCols }, (_, ci) =>
        values.reduce((acc, row) => acc + (row[ci] ?? 0), 0)
    );
    return colSums
        .map((sum, ci) => ({ sum, ci }))
        .sort((a, b) => b.sum - a.sum)
        .slice(0, n)
        .sort((a, b) => a.ci - b.ci)
        .map(({ ci }) => ci);
}

const BarriersToRecreation: React.FC = () => {
    const { language } = useLanguage();
    const content = statisticsContent[language].barriersToRecreation;
    const [selectedCity, setSelectedCity] = useState<CityType>("burnaby");

    const currentData =
        selectedCity === "courtenay" ? content.courtenay
        : selectedCity === "total"   ? content.total
        : content.burnaby;

    // ── Top 3 bar charts (one per barrier) ──────────────────────────────────
    const top3Indices = topColumnIndices(currentData.values, 3);

    // Shared y-axis max so all 3 charts are visually the same height
    const top3Max = top3Indices.reduce((max, ci) => {
        const colMax = Math.max(...currentData.values.map((row) => row[ci] ?? 0));
        return Math.max(max, colMax);
    }, 0);
    const sharedMax = Math.ceil(top3Max / 10) * 10 + 10;

    const makeBarData = (ci: number) => {
        const barValues = currentData.values.map((row) => row[ci]);
        return {
            labels: content.rows,
            datasets: [
                {
                    label: content.columns[ci],
                    data: barValues,
                    backgroundColor: generateCourtenayColors(barValues),
                    borderWidth: 0,
                    borderRadius: 4,
                },
            ],
        };
    };

    const makeBarOptions = () => ({
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (ctx: any) => `${ctx.parsed.y}%`,
                },
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
                max: sharedMax,
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
            <div className="rounded-xl py-6 bg-white border-1 border-gray-200">
                <div className="px-4 md:px-8">

                    {/* Section Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-dm-sans">
                        {content.title}
                    </h3>


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
                            {content.heatmapTitle}
                        </h4>
                        <Heatmap
                            rows={content.rows}
                            columns={content.columns}
                            values={currentData.values}
                            unit="%"
                        />
                    </div>

                    {/* Top 3 Barriers — three individual bar charts */}
                    <div>
                        <h4 className="text-lg font-semibold text-primary mb-4 font-dm-sans">
                            {content.top3Title}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {top3Indices.map((ci) => (
                                <div key={ci} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                                    <p className="text-sm font-semibold text-primary font-dm-sans mb-3">
                                        {content.columns[ci]}
                                    </p>
                                    <div className="h-[240px]">
                                        <Bar data={makeBarData(ci)} options={makeBarOptions()} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BarriersToRecreation;
