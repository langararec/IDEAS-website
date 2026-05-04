import { useLanguage } from "../../context/LanguageContext";
import { staffContent } from "../../content/StaffContent";
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

const COMMUNITY_COLOR = "#0A5562";
const STAFF_COLOR     = "#E8650A";

const StaffWhyParks: React.FC = () => {
    const { language } = useLanguage();
    const content = staffContent[language].staffWhyParks;
    const cmp = content.comparison;
    const top3 = content.top3Comparison;
    const barriers = content.barriers;
    const barriersCmp = content.barriersComparison;

    function buildChartData(labels: string[], communityValues: number[], staffValues: number[], communityLabel: string, staffLabel: string) {
        return {
            labels,
            datasets: [
                { label: communityLabel, data: communityValues, backgroundColor: COMMUNITY_COLOR, borderWidth: 0 },
                { label: staffLabel,     data: staffValues,     backgroundColor: STAFF_COLOR,     borderWidth: 0 },
            ],
        };
    }

    const comparisonChartData = buildChartData(cmp.motivatorLabels, cmp.communityValues, cmp.staffValues, cmp.communityLabel, cmp.staffLabel);
    const top3ChartData       = buildChartData(top3.motivatorLabels, top3.communityValues, top3.staffValues, top3.communityLabel, top3.staffLabel);

    const baseOptions = {
        indexAxis: "x" as const,
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: { display: false },
                ticks: {
                    font: { size: 10 },
                    maxRotation: 45,
                    minRotation: 30,
                },
            },
            y: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    callback: (value: any) => `${value}%`,
                    font: { size: 10 },
                },
                grid: { display: true, color: "rgba(0,0,0,0.05)" },
            },
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (context: any) =>
                        `${context.dataset.label}: ${context.parsed.y}%`,
                },
            },
            datalabels: {
                display: (context: any) => (context.raw as number) >= 4,
                color: "#ffffff",
                font: { size: 9, weight: "bold" as const },
                formatter: (value: number) => `${value}%`,
                anchor: "end" as const,
                align: "start" as const,
            },
        },
    };

    return (
        <>
        {/* Why Parks + Comparison charts */}
        <div className="mb-6 max-w-7xl mx-auto">
            <div className="rounded-xl py-6 bg-white border border-gray-200">
                <div className="px-4 md:px-8">
                    <div className="grid grid-cols-1 gap-6">

                        {/* Heatmap */}
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6">
                            <h4 className="text-base font-semibold text-primary mb-4 font-dm-sans">
                                {content.heatmapTitle}
                            </h4>
                            <Heatmap
                                rows={content.rows}
                                columns={content.columns}
                                values={content.values}
                                unit="%"
                            />
                        </div>

                        {/* Community vs Staff Comparison */}
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6">
                            <h4 className="text-base font-semibold text-primary mb-4 font-dm-sans">
                                {cmp.title}
                            </h4>
                            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4 justify-center">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: COMMUNITY_COLOR }} />
                                    <span className="text-xs text-gray-600 font-dm-sans">{cmp.communityLabel}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: STAFF_COLOR }} />
                                    <span className="text-xs text-gray-600 font-dm-sans">{cmp.staffLabel}</span>
                                </div>
                            </div>
                            <div className="h-80">
                                <Bar data={comparisonChartData} options={baseOptions} />
                            </div>
                        </div>

                        {/* Top 3 Motivators Comparison */}
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6">
                            <h4 className="text-base font-semibold text-primary mb-4 font-dm-sans">
                                {top3.title}
                            </h4>
                            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4 justify-center">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: COMMUNITY_COLOR }} />
                                    <span className="text-xs text-gray-600 font-dm-sans">{top3.communityLabel}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: STAFF_COLOR }} />
                                    <span className="text-xs text-gray-600 font-dm-sans">{top3.staffLabel}</span>
                                </div>
                            </div>
                            <div className="h-64">
                                <Bar data={top3ChartData} options={baseOptions} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        {/* Barriers to Newcomer Participation */}
        <div className="mb-6 max-w-7xl mx-auto">
            <div className="rounded-xl py-6 bg-white border border-gray-200">
                <div className="px-4 md:px-8">
                    <div className="grid grid-cols-1 gap-6">

                        {/* Heatmap */}
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6">
                            <h4 className="text-base font-semibold text-primary mb-4 font-dm-sans">
                                {barriers.title}
                            </h4>
                            <Heatmap
                                rows={barriers.rows}
                                columns={barriers.columns}
                                values={barriers.values}
                                unit="%"
                            />
                        </div>

                        {/* Community vs Staff Barriers Comparison */}
                        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6">
                            <h4 className="text-base font-semibold text-primary mb-4 font-dm-sans">
                                {barriersCmp.title}
                            </h4>
                            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4 justify-center">
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: COMMUNITY_COLOR }} />
                                    <span className="text-xs text-gray-600 font-dm-sans">{barriersCmp.communityLabel}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-3 h-3 rounded-sm shrink-0" style={{ backgroundColor: STAFF_COLOR }} />
                                    <span className="text-xs text-gray-600 font-dm-sans">{barriersCmp.staffLabel}</span>
                                </div>
                            </div>
                            <div className="h-80">
                                <Bar
                                    data={buildChartData(barriersCmp.motivatorLabels, barriersCmp.communityValues, barriersCmp.staffValues, barriersCmp.communityLabel, barriersCmp.staffLabel)}
                                    options={baseOptions}
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default StaffWhyParks;
