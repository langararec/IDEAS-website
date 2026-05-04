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
import DemographicChart from "../Statistics/DemographicChart";
import { generateCourtenayColors } from "../Statistics/constants/colors";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

const StaffDemography: React.FC = () => {
    const { language } = useLanguage();
    const content = staffContent[language];
    const demog = content.demography;

    const [selectedCity, setSelectedCity] = useState<CityType>("burnaby");

    // ── Ethnicity bar chart ───────────────────────────────────────────────────
    const ethnicityCity =
        selectedCity === "courtenay" ? content.ethnicity.courtenay
        : selectedCity === "total"   ? content.ethnicity.total
        : content.ethnicity.burnaby;

    const ethnicityBarData = {
        labels: ethnicityCity.data.map((d) => d.name),
        datasets: [
            {
                label: content.ethnicity.title,
                data: ethnicityCity.data.map((d) => d.percentage),
                backgroundColor: generateCourtenayColors(ethnicityCity.data.map((d) => d.percentage)),
                borderWidth: 0,
                borderRadius: 8,
            },
        ],
    };

    const ethnicityBarOptions = {
        indexAxis: "y" as const,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: { label: (ctx: any) => `${ctx.parsed.x}%` },
            },
            datalabels: { display: false },
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 100,
                ticks: {
                    stepSize: 10,
                    callback: (v: any) => `${v}%`,
                },
                grid: { display: true, color: "rgba(0,0,0,0.05)" },
            },
            y: {
                grid: { display: false },
                ticks: { font: { size: 10 } },
            },
        },
    };

    return (
        <div className="mb-6 max-w-7xl mx-auto">
            <div className="rounded-xl py-6 bg-white border border-gray-200">
                <div className="px-4 md:px-8">

                    {/* Section Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-dm-sans">
                        {demog.sectionTitle}
                    </h3>
                    <p className="text-sm text-gray-500 mb-6 font-dm-sans">
                        {demog.sectionSubtitle}
                    </p>

                    {/* Shared city dropdown */}
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <CityDropdown
                            selectedCity={selectedCity}
                            onCityChange={setSelectedCity}
                            showTotal={true}
                        />
                    </div>

                    {/* Ethnicity horizontal bar chart */}
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 md:p-6 mb-6">
                        <h4 className="text-lg md:text-xl font-semibold text-primary mb-4 font-dm-sans">
                            {content.ethnicity.title}
                        </h4>

                        <p className="text-sm text-gray-500 mb-4 font-dm-sans">
                            {content.ethnicity.subtitle}
                        </p>
                        <div className="h-80">
                            <Bar data={ethnicityBarData} options={ethnicityBarOptions} />
                        </div>
                    </div>

                    {/* Three doughnut charts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <DemographicChart
                            title={demog.timeLivingInCommunity.title}
                            subtitle={demog.timeLivingInCommunity.subtitle}
                            burnabyData={demog.timeLivingInCommunity.burnaby}
                            courtenayData={demog.timeLivingInCommunity.courtenay}
                            totalData={demog.timeLivingInCommunity.total}
                            selectedCity={selectedCity}
                        />
                        <DemographicChart
                            title={content.yearsWorked.title}
                            subtitle={content.yearsWorked.subtitle}
                            burnabyData={content.yearsWorked.burnaby}
                            courtenayData={content.yearsWorked.courtenay}
                            totalData={content.yearsWorked.total}
                            selectedCity={selectedCity}
                        />
                        <DemographicChart
                            title={demog.areaOfWork.title}
                            subtitle={demog.areaOfWork.subtitle}
                            burnabyData={demog.areaOfWork.burnaby}
                            courtenayData={demog.areaOfWork.courtenay}
                            totalData={demog.areaOfWork.total}
                            selectedCity={selectedCity}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default StaffDemography;
