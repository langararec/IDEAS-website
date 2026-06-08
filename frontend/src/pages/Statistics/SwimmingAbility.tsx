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

/** Returns column indices that are strictly monotone declining */
function decliningColumnIndices(values: number[][]): number[] {
    if (values.length < 2) return [];
    const numCols = values[0].length;
    const declining: number[] = [];
    for (let ci = 0; ci < numCols; ci++) {
        const col = values.map((row) => row[ci]);
        if (col.every((v, i) => i === 0 || v <= col[i - 1])) declining.push(ci);
    }
    return declining;
}

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

const SwimmingAbility: React.FC = () => {
    const { language } = useLanguage();
    const ability  = statisticsContent[language].swimmingAbility;
    const comfort  = statisticsContent[language].swimmingComfort;
    const barriers = statisticsContent[language].swimmingBarriers;
    const [selectedCity, setSelectedCity] = useState<CityType>("burnaby");

    const abilityData =
        selectedCity === "courtenay" ? ability.courtenay
        : selectedCity === "total"   ? ability.total
        : ability.burnaby;

    const comfortData =
        selectedCity === "courtenay" ? comfort.courtenay
        : selectedCity === "total"   ? comfort.total
        : comfort.burnaby;

    const barriersData =
        selectedCity === "courtenay" ? barriers.courtenay
        : selectedCity === "total"   ? barriers.total
        : barriers.burnaby;

    // ── Top 3 barrier columns by column sum ───────────────────────────────────
    const top3BarrierIndices = (() => {
        const vals = barriersData.values;
        if (vals.length === 0) return [];
        const numCols = vals[0].length;
        return Array.from({ length: numCols }, (_, ci) => ({
            ci,
            sum: vals.reduce((acc, row) => acc + (row[ci] ?? 0), 0),
        }))
            .sort((a, b) => b.sum - a.sum)
            .slice(0, 3)
            .sort((a, b) => a.ci - b.ci)
            .map(({ ci }) => ci);
    })();

    const abilityDeclining = decliningColumnIndices(abilityData.values);
    const comfortDeclining = decliningColumnIndices(comfortData.values);

    const makeAbilityBarData = (ci: number) => {
        const vals = abilityData.values.map((row) => row[ci]);
        return {
            labels: ability.rows,
            datasets: [{ label: ability.abilityColumns[ci], data: vals, backgroundColor: generateCourtenayColors(vals), borderWidth: 0, borderRadius: 4 }],
        };
    };

    const makeComfortBarData = (ci: number) => {
        const vals = comfortData.values.map((row) => row[ci]);
        return {
            labels: comfort.rows,
            datasets: [{ label: comfort.comfortColumns[ci], data: vals, backgroundColor: generateCourtenayColors(vals), borderWidth: 0, borderRadius: 4 }],
        };
    };

    const makeBarriersBarData = (ci: number) => {
        const vals = barriersData.values.map((row) => row[ci]);
        return {
            labels: barriers.rows,
            datasets: [{ label: barriers.barrierColumns[ci], data: vals, backgroundColor: generateCourtenayColors(vals), borderWidth: 0, borderRadius: 4 }],
        };
    };

    return (
        <div className="mb-6 max-w-7xl mx-auto">
            <div className="rounded-xl py-6 bg-white border border-gray-200">
                <div className="px-4 md:px-8">

                    {/* Section Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-dm-sans">
                        {ability.sectionTitle}
                    </h3>

                    {/* Section Subtitle */}
                    <p className="text-sm text-gray-500 mb-6 font-dm-sans">
                        {ability.sectionSubtitle}
                    </p>

                    {/* City dropdown (shared) */}
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <CityDropdown
                            selectedCity={selectedCity}
                            onCityChange={setSelectedCity}
                            showTotal={true}
                        />
                    </div>

                    {/* ── Ability subsection ─────────────────────────────── */}
                    <div className="mb-10">
                        <div className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6">
                            <h4 className="text-lg font-semibold text-primary mb-4 font-dm-sans">
                                {ability.abilityHeatmapTitle}
                            </h4>
                            <Heatmap
                                rows={ability.rows}
                                columns={ability.abilityColumns}
                                values={abilityData.values}
                                unit="%"
                            />
                        </div>

                        {abilityDeclining.length > 0 && (
                            <div>
                                <h4 className="text-lg font-semibold text-primary mb-4 font-dm-sans">
                                    Trends across swimming levels
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {abilityDeclining.map((ci) => {
                                        const colMax = Math.max(...abilityData.values.map((row) => row[ci]));
                                        return (
                                            <div key={ci} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                                                <p className="text-sm font-semibold text-primary font-dm-sans mb-3">
                                                    {ability.abilityColumns[ci]}
                                                </p>
                                                <div className="h-[240px]">
                                                    <Bar data={makeAbilityBarData(ci)} options={makeBarOptions(Math.ceil(colMax / 10) * 10 + 10)} />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ── Comfort subsection ─────────────────────────────── */}
                    <div>
                        <div className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6">
                            <h4 className="text-lg font-semibold text-primary mb-4 font-dm-sans">
                                {comfort.sectionTitle}
                            </h4>
                            <Heatmap
                                rows={comfort.rows}
                                columns={comfort.comfortColumns}
                                values={comfortData.values}
                                unit="%"
                            />
                        </div>

                        {comfortDeclining.length > 0 && (
                            <div>
                                <h4 className="text-lg font-semibold text-primary mb-4 font-dm-sans">
                                    Trends across comfort levels
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {comfortDeclining.map((ci) => {
                                        const colMax = Math.max(...comfortData.values.map((row) => row[ci]));
                                        return (
                                            <div key={ci} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                                                <p className="text-sm font-semibold text-primary font-dm-sans mb-3">
                                                    {comfort.comfortColumns[ci]}
                                                </p>
                                                <div className="h-[240px]">
                                                    <Bar data={makeComfortBarData(ci)} options={makeBarOptions(Math.ceil(colMax / 10) * 10 + 10)} />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* ── Barriers subsection ────────────────────────────── */}
                    <div className="mt-10">
                        <div className="mb-8 bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6">
                            <h4 className="text-lg font-semibold text-primary mb-4 font-dm-sans">
                                What stops people from going swimming?
                            </h4>
                            <Heatmap
                                rows={barriers.rows}
                                columns={barriers.barrierColumns}
                                values={barriersData.values}
                                unit="%"
                            />
                        </div>

                        {/* Top 3 barriers */}
                        <h5 className="text-base font-semibold text-primary mb-4 font-dm-sans">
                            {barriers.top3Title}
                        </h5>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {top3BarrierIndices.map((ci) => {
                                const colMax = Math.max(...barriersData.values.map((row) => row[ci]));
                                return (
                                    <div key={ci} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                                        <p className="text-sm font-semibold text-primary font-dm-sans mb-3">
                                            {barriers.barrierColumns[ci]}
                                        </p>
                                        <div className="h-[240px]">
                                            <Bar data={makeBarriersBarData(ci)} options={makeBarOptions(Math.ceil(colMax / 10) * 10 + 10)} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SwimmingAbility;
