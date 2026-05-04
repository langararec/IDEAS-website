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

// Green (daily/most engaged) → red (rarely/least engaged)
const FREQUENCY_COLORS = [
    "#1C6B3A", // Daily        — dark green
    "#2E8A52", // Weekly       — medium green
    "#E9857B", // Occasionally — light red
    "#C0392B", // Rarely       — dark red
];

// Yes = green, No = red
const EDI_COLORS = [
    "#1C6B3A", // Yes — dark green
    "#C0392B", // No  — dark red
];

function buildStackedOptions(darkIndices: number[]) {
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
                    darkIndices.includes(context.datasetIndex) ? "#ffffff" : "#374151",
                font: { size: 10, weight: "bold" as const },
                formatter: (value: number) => `${value}%`,
            },
        },
    };
}

const StaffFrontlineGap: React.FC = () => {
    const { language } = useLanguage();
    const content = staffContent[language].frontlineGap;
    const freq = content.frequencyOfEngagement;
    const edi  = content.ediTrainingParticipation;

    const [selectedCity, setSelectedCity] = useState<CityType>("burnaby");

    const freqCityData =
        selectedCity === "courtenay" ? freq.courtenay
        : selectedCity === "total"   ? freq.combined
        : freq.burnaby;

    const ediCityData =
        selectedCity === "courtenay" ? edi.courtenay
        : selectedCity === "total"   ? edi.combined
        : edi.burnaby;

    const freqChartData = {
        labels: freq.roleLabels,
        datasets: freqCityData.series.map((series, i) => ({
            label: series.name,
            data: series.data,
            backgroundColor: FREQUENCY_COLORS[i],
            borderWidth: 0,
        })),
    };

    const ediChartData = {
        labels: edi.roleLabels,
        datasets: ediCityData.series.map((series, i) => ({
            label: series.name,
            data: series.data,
            backgroundColor: EDI_COLORS[i],
            borderWidth: 0,
        })),
    };

    const freqOptions = buildStackedOptions([0, 3]); // daily (dark green) & rarely (dark red)
    const ediOptions  = buildStackedOptions([0, 1]); // both yes/no are dark

    return (
        <div className="mb-6 max-w-7xl mx-auto">
            <div className="rounded-xl py-6 bg-white border border-gray-200">
                <div className="px-4 md:px-8">

                    {/* Section Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-dm-sans">
                        {content.sectionTitle}
                    </h3>


                    {/* City Dropdown */}
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <CityDropdown
                            selectedCity={selectedCity}
                            onCityChange={setSelectedCity}
                            showTotal={true}
                        />

                    </div>

                    {/* Two charts side by side on desktop */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* Frequency of Engagement Chart */}
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6">
                            <h4 className="text-base font-semibold text-primary mb-4 font-dm-sans">
                                {freq.question}
                            </h4>

                            {/* Legend */}
                            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4 justify-center">
                                {freq.frequencyLabels.map((label, i) => (
                                    <div key={i} className="flex items-center gap-1.5">
                                        <div
                                            className="w-3 h-3 rounded-sm shrink-0"
                                            style={{ backgroundColor: FREQUENCY_COLORS[i] }}
                                        />
                                        <span className="text-xs text-gray-600 font-dm-sans">{label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="h-52">
                                <Bar
                                    key={`${selectedCity}-freq`}
                                    data={freqChartData}
                                    options={freqOptions}
                                />
                            </div>
                        </div>

                        {/* EDI Training Participation Chart */}
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6">
                            <h4 className="text-base font-semibold text-primary mb-4 font-dm-sans">
                                {edi.question}
                            </h4>

                            {/* Legend */}
                            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4 justify-center">
                                {edi.yesNoLabels.map((label, i) => (
                                    <div key={i} className="flex items-center gap-1.5">
                                        <div
                                            className="w-3 h-3 rounded-sm shrink-0"
                                            style={{ backgroundColor: EDI_COLORS[i] }}
                                        />
                                        <span className="text-xs text-gray-600 font-dm-sans">{label}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="h-52">
                                <Bar
                                    key={`${selectedCity}-edi`}
                                    data={ediChartData}
                                    options={ediOptions}
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default StaffFrontlineGap;
