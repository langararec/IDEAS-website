import { useLanguage } from "../../context/LanguageContext";
import { statisticsContent } from "../../content/StatisticsContent";
import { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import CityDropdown, { type CityType } from "../../components/CityDropdown";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { COURTENAY_COLOR_PALETTE } from "./constants/colors";
import DemographicChart from "./DemographicChart";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartDataLabels
);

const Demography: React.FC = () => {
    const { language } = useLanguage();
    const surveyContent = statisticsContent[language].surveyDataReport;
    const demogContent = statisticsContent[language].demographics;
    const [selectedCity, setSelectedCity] = useState<CityType>("burnaby");

    const ethnicityData =
        selectedCity === "burnaby"
            ? surveyContent.burnaby
            : selectedCity === "courtenay"
            ? surveyContent.courtenay
            : surveyContent.total;

    const generateColors = (data: number[]) =>
        data.map(() => COURTENAY_COLOR_PALETTE[0]);

    const censusChartData = {
        labels: ethnicityData.censusEthnicities.map((e) => e.name),
        datasets: [
            {
                label: surveyContent.chartLabel,
                data: ethnicityData.censusEthnicities.map((e) => e.percentage),
                backgroundColor: generateColors(
                    ethnicityData.censusEthnicities.map((e) => e.percentage)
                ),
                borderWidth: 0,
                borderRadius: 8,
            },
        ],
    };

    const surveyChartData = {
        labels: ethnicityData.ethnicities.map((e) => e.name),
        datasets: [
            {
                label: surveyContent.chartLabel,
                data: ethnicityData.ethnicities.map((e) => e.percentage),
                backgroundColor: generateColors(
                    ethnicityData.ethnicities.map((e) => e.percentage)
                ),
                borderWidth: 0,
                borderRadius: 8,
            },
        ],
    };

    const barChartOptions = {
        indexAxis: "y" as const,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (context: any) => `${context.parsed.x}%`,
                },
            },
            datalabels: { display: false },
        },
        scales: {
            x: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10,
                    callback: (value: any) => `${value}%`,
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
            <div className="rounded-xl py-6 bg-white border-1 border-gray-200">
                <div className="px-4 md:px-8">
                    {/* Section Title */}
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-dm-sans">
                        {demogContent.title}
                    </h3>

                    {/* Filter and Last Updated */}
                    <div className="flex flex-wrap items-center gap-4 mb-8">
                        <CityDropdown
                            selectedCity={selectedCity}
                            onCityChange={setSelectedCity}
                            showTotal={true}
                        />

                    </div>

                    {/* Ethnicity Charts */}
                    <div className={`grid grid-cols-1 gap-6 mb-8 ${selectedCity !== "total" ? "lg:grid-cols-2" : ""}`}>
                        {/* Stats Canada — hidden for combined view */}
                        {selectedCity !== "total" && (
                            <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                                <h4 className="text-lg md:text-xl font-semibold text-primary mb-4 font-dm-sans">
                                    {surveyContent.ethnicBackgroundCensusTitle}
                                </h4>
                                <div className="h-96">
                                    <Bar data={censusChartData} options={barChartOptions} />
                                </div>
                            </div>
                        )}

                        {/* Our Data */}
                        <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
                            <h4 className="text-lg md:text-xl font-semibold text-primary mb-4 font-dm-sans">
                                {surveyContent.ethnicBackgroundOurDataTitle}
                            </h4>
                            <div className="h-96">
                                <Bar data={surveyChartData} options={barChartOptions} />
                            </div>
                        </div>
                    </div>

                    {/* Demographic Doughnut Charts */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <DemographicChart
                            title={demogContent.genderIdentity.title}
                            subtitle={demogContent.genderIdentity.subtitle}
                            burnabyData={demogContent.genderIdentity.burnaby}
                            courtenayData={demogContent.genderIdentity.courtenay}
                            totalData={demogContent.genderIdentity.total}
                            selectedCity={selectedCity}
                        />
                        <DemographicChart
                            title={demogContent.age.title}
                            subtitle={demogContent.age.subtitle}
                            burnabyData={demogContent.age.burnaby}
                            courtenayData={demogContent.age.courtenay}
                            totalData={demogContent.age.total}
                            selectedCity={selectedCity}
                        />
                        <DemographicChart
                            title={demogContent.timeLivingInBC.title}
                            subtitle={demogContent.timeLivingInBC.subtitle}
                            burnabyData={demogContent.timeLivingInBC.burnaby}
                            courtenayData={demogContent.timeLivingInBC.courtenay}
                            totalData={demogContent.timeLivingInBC.total}
                            selectedCity={selectedCity}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Demography;
