import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import type { CityType } from '../../components/CityDropdown';
import { generateCourtenayColors } from './constants/colors';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);



interface DemographicData {
  name: string;
  percentage: number;
}

interface CityData {
  lastUpdated: string;
  data: DemographicData[];
}

interface DemographicChartProps {
  title: string;
  subtitle?: string;
  burnabyData: CityData;
  courtenayData: CityData;
  totalData: CityData;
  selectedCity: CityType;
}

const DemographicChart: React.FC<DemographicChartProps> = ({
  title,
  burnabyData,
  courtenayData,
  totalData,
  selectedCity,
}) => {
  const cityData = selectedCity === 'burnaby' ? burnabyData : selectedCity === 'courtenay' ? courtenayData : totalData;

  // Generate gradient colors based on data
  const generateColors = (data: DemographicData[]) => {
    return generateCourtenayColors(data.map(d => d.percentage));
  };

  // Prepare data for Chart.js
  const chartData = {
    labels: cityData.data.map(d => `${d.name} (${d.percentage}%)`),
    datasets: [
      {
        data: cityData.data.map(d => d.percentage),
        backgroundColor: generateColors(cityData.data),
        borderWidth: 3,
        borderColor: '#ffffff',
        borderRadius: 0,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.label || '';
            const value = context.parsed || 0;
            return `${label}: ${value}%`;
          }
        }
      },
      datalabels: { display: false },
    },
  };

  return (
    <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
      {/* Title */}
      <h4 className="text-lg md:text-xl font-semibold text-primary mb-4 font-dm-sans">
        {title}
      </h4>

      {/* Chart + Legend: stacked on small/medium screens, side-by-side on lg+ */}
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        {/* Doughnut — fixed square, smaller on mobile */}
        <div className="shrink-0 w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 mx-auto lg:mx-0">
          <Doughnut data={chartData} options={chartOptions} />
        </div>

        {/* Legend */}
        <div className="flex flex-col gap-2 min-w-0 lg:pl-4">
          {cityData.data.map((item, index) => (
            <div key={index} className="flex items-center gap-2 min-w-0">
              <div
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: generateColors(cityData.data)[index] }}
              />
              <span className="text-xs text-gray-700 font-dm-sans break-words">
                {item.name}
              </span>
              <span className="text-xs text-gray-500 font-dm-sans shrink-0 ml-auto pl-2">
                {item.percentage}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemographicChart;
