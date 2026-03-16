import { Bar } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CiCalendar } from 'react-icons/ci';
import { useState } from 'react';
import CityDropdown from './CityDropdown';
import { BURNABY_COLOR_PALETTE, COURTENAY_COLOR_PALETTE } from '../pages/Statistics/constants/colors';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend, ChartDataLabels);

type CityType = 'burnaby' | 'courtenay';

export interface StackedSeries {
  name: string;
  data: number[];
}

export interface CityStackedData {
  lastUpdated: string;
  areas: string[];
  series: StackedSeries[];
}

export interface StackedColumnChartProps {
  title: string;
  subtitle?: string;
  burnaby: CityStackedData;
  courtenay: CityStackedData;
  /** Render as horizontal stacked bars instead of vertical columns */
  horizontal?: boolean;
  /** Override chart height in px (default 384) */
  chartHeight?: number;
}

const StackedColumnChart: React.FC<StackedColumnChartProps> = ({
  title,
  subtitle,
  burnaby,
  courtenay,
  horizontal = false,
  chartHeight = 384,
}) => {
  const [selectedCity, setSelectedCity] = useState<CityType>('burnaby');
  const cityData = selectedCity === 'burnaby' ? burnaby : courtenay;
  const palette = selectedCity === 'burnaby' ? BURNABY_COLOR_PALETTE : COURTENAY_COLOR_PALETTE;

  // Pick evenly spaced colors from the palette for each series
  const seriesColors = cityData.series.map((_, i) => {
    const step = Math.floor((palette.length - 3) / Math.max(cityData.series.length - 1, 1));
    return palette[Math.min(i * step, palette.length - 1)];
  });

  const chartData = {
    labels: cityData.areas,
    datasets: cityData.series.map((series, i) => ({
      label: series.name,
      data: series.data,
      backgroundColor: seriesColors[i],
      borderWidth: 1,
      borderColor: '#ffffff',
      borderRadius: 0,
    })),
  };

  const chartOptions: ChartOptions<'bar'> = {
    indexAxis: horizontal ? 'y' : 'x',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (context: any) =>
            `${context.dataset.label}: ${horizontal ? context.parsed.x : context.parsed.y}%`,
        },
      },
      datalabels: {
        display: (context) => (context.dataset.data[context.dataIndex] as number) > 0,
        color: '#ffffff',
        font: { size: 11, weight: 'bold' },
        formatter: (value: number) => `${value}%`,
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: { display: horizontal },
        ...(horizontal
          ? {
              beginAtZero: true,
              max: 100,
              ticks: {
                stepSize: 20,
                callback: (value: any) => `${value}%`,
              },
            }
          : { ticks: { font: { size: 11 } } }),
      },
      y: {
        stacked: true,
        grid: { display: !horizontal, color: 'rgba(0,0,0,0.05)' },
        ...(!horizontal
          ? {
              beginAtZero: true,
              max: 100,
              ticks: {
                stepSize: 20,
                callback: (value: any) => `${value}%`,
              },
            }
          : { ticks: { font: { size: 11 } } }),
      },
    },
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

        {/* Legend */}
        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
          {cityData.series.map((series, i) => (
            <div key={i} className="flex items-center gap-1.5">
              <div
                className="w-3 h-3 rounded-sm flex-shrink-0"
                style={{ backgroundColor: seriesColors[i] }}
              />
              <span className="text-xs text-gray-700 font-dm-sans">{series.name}</span>
            </div>
          ))}
        </div>

        <div style={{ height: chartHeight }}>
          <Bar data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  );
};

export default StackedColumnChart;
