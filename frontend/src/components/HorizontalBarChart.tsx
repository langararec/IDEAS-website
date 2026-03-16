import { Bar } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js';
import { useState } from 'react';
import { CiCalendar } from 'react-icons/ci';
import CityDropdown from './CityDropdown';
import { generateBurnabyColors, generateCourtenayColors } from '../pages/Statistics/constants/colors';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartDataLabels
);

type CityType = 'burnaby' | 'courtenay';

export interface EthnicityEntry {
  name: string;
  percentage: number;
}

export interface CityEthnicityData {
  lastUpdated: string;
  data: EthnicityEntry[];
}

export interface HorizontalBarChartProps {
  title: string;
  subtitle?: string;
  burnaby: CityEthnicityData;
  courtenay: CityEthnicityData;
  /** Optional bottom label shown below the chart */
  chartLabel?: string;
}

const chartOptions: ChartOptions<'bar'> = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (context: any) => `${context.parsed.x}%`,
      }
    },
    datalabels: { display: false },
  },
  scales: {
    x: {
      beginAtZero: true,
      max: 100,
      ticks: {
        stepSize: 10,
        callback: (value: any) => `${value}%`,
      },
      grid: {
        display: true,
        color: 'rgba(0, 0, 0, 0.05)',
      }
    },
    y: {
      grid: { display: false },
      ticks: { font: { size: 10 } }
    }
  }
};

const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({
  title,
  subtitle,
  burnaby,
  courtenay,
  chartLabel,
}) => {
  const [selectedCity, setSelectedCity] = useState<CityType>('burnaby');
  const cityData = selectedCity === 'burnaby' ? burnaby : courtenay;

  const colors =
    selectedCity === 'burnaby'
      ? generateBurnabyColors(cityData.data.map(d => d.percentage))
      : generateCourtenayColors(cityData.data.map(d => d.percentage));

  const data = {
    labels: cityData.data.map(d => d.name),
    datasets: [
      {
        label: chartLabel || title,
        data: cityData.data.map(d => d.percentage),
        backgroundColor: colors,
        borderWidth: 0,
        borderRadius: 8,
      }
    ]
  };

  return (
    <div className="mb-6 rounded-xl py-6 px-2 bg-white border-1 border-gray-200">
      <div className="px-4 md:px-8">
        <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-dm-sans">
          {title}
        </h3>
        {subtitle && (
          <p className="text-sm text-gray-600 mb-4 font-dm-sans">{subtitle}</p>
        )}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <CityDropdown selectedCity={selectedCity} onCityChange={setSelectedCity} />
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <CiCalendar className="w-4 h-4" />
            <span className="font-dm-sans">{cityData.lastUpdated}</span>
          </div>
        </div>
        <div className="h-96">
          <Bar data={data} options={chartOptions} />
        </div>
        {chartLabel && (
          <div className="text-center mt-4">
            <span className="sm:text-sm text-xs font-semibold text-primary font-dm-sans">
              {chartLabel}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default HorizontalBarChart;
