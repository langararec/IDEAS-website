import { useState } from "react";
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
import { useLanguage } from "../../context/LanguageContext";
import { staffContent } from "../../content/StaffContent";
import CityDropdown, { type CityType } from "../../components/CityDropdown";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

// Strongly Disagree → dark red, Disagree → light red, Neutral → gray,
// Agree → medium green, Strongly Agree → dark green
const LIKERT_COLORS = [
    "#C0392B", // Str. Disagree — dark red
    "#E9857B", // Disagree      — light red
    "#9CA3AF", // Neutral       — gray
    "#2E8A52", // Agree         — medium green
    "#1C6B3A", // Str. Agree    — dark green
];

// Dark-background dataset indices that need white label text
const DARK_INDICES = [0, 4];

function buildOptions() {
    return {
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
                color: (context: any) =>
                    DARK_INDICES.includes(context.datasetIndex) ? "#ffffff" : "#374151",
                font: { size: 10, weight: "bold" as const },
                formatter: (value: number) => `${value}%`,
            },
        },
    };
}

function chartHeightClass(numRows: number): string {
    if (numRows <= 2) return "h-36";
    if (numRows <= 3) return "h-44";
    return "h-64";
}

const StaffBelongingDignityJustice: React.FC = () => {
    const { language } = useLanguage();
    const content = staffContent[language].belongingDignityJustice;

    const [selectedCity, setSelectedCity] = useState<CityType>("burnaby");

    function getCityData<T extends { combined: any; burnaby: any; courtenay: any }>(section: T) {
        if (selectedCity === "courtenay") return section.courtenay;
        if (selectedCity === "total")    return section.combined;
        return section.burnaby;
    }

    function buildChartData(section: {
        questionLabels: string[];
        combined: any;
        burnaby: any;
        courtenay: any;
    }) {
        const cityData = getCityData(section);
        return {
            labels: section.questionLabels,
            datasets: cityData.series.map(
                (s: { name: string; data: number[] }, i: number) => ({
                    label: s.name,
                    data: s.data,
                    backgroundColor: LIKERT_COLORS[i],
                    borderWidth: 0,
                })
            ),
        };
    }

    const sections = [
        content.belonging,
        content.dignity,
        content.justice,
        content.dignityJustice,
    ];

    const chartOptions = buildOptions();

    return (
        <div className="mb-6 max-w-7xl mx-auto">
            <div className="rounded-xl py-6 bg-white border border-gray-200">
                <div className="px-4 md:px-8">

                    {/* Section Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-dm-sans">
                        {content.sectionTitle}
                    </h3>

                    {/* Subtitle */}
                    <p className="text-sm text-gray-500 mb-6 font-dm-sans">
                        {content.sectionSubtitle}
                    </p>

                    {/* City Dropdown */}
                    <div className="flex flex-wrap items-center gap-4 mb-6">
                        <CityDropdown
                            selectedCity={selectedCity}
                            onCityChange={setSelectedCity}
                            showTotal={true}
                        />
                    </div>

                    {/* Shared Legend */}
                    <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-8 justify-center">
                        {content.responseLabels.map((label, i) => (
                            <div key={i} className="flex items-center gap-1.5">
                                <div
                                    className="w-3 h-3 rounded-sm shrink-0"
                                    style={{ backgroundColor: LIKERT_COLORS[i] }}
                                />
                                <span className="text-xs text-gray-600 font-dm-sans">{label}</span>
                            </div>
                        ))}
                    </div>

                    {/* Subsection Charts — 2-column grid on desktop */}
                    <div className="grid grid-cols-1 gap-6">
                        {sections.map((section, idx) => {
                            const chartData = buildChartData(section);
                            const heightClass = chartHeightClass(section.questionLabels.length);

                            return (
                                <div
                                    key={idx}
                                    className="bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6"
                                >
                                    <h4 className="text-base font-semibold text-primary mb-4 font-dm-sans">
                                        {section.title}
                                    </h4>
                                    <div className={heightClass}>
                                        <Bar
                                            key={`${selectedCity}-${idx}`}
                                            data={chartData}
                                            options={chartOptions}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StaffBelongingDignityJustice;
