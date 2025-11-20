import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CiCalendar } from 'react-icons/ci';
import { useState } from "react";
import CityDropdown from '../../components/CityDropdown';
import { generateBurnabyColors, generateCourtenayColors } from './constants/colors';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

type CityType = 'burnaby' | 'courtenay';

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
  subtitle: string;
  burnabyData: CityData;
  courtenayData: CityData;
}

const DemographicChart: React.FC<DemographicChartProps> = ({
  title,
  subtitle,
  burnabyData,
  courtenayData
}) => {
  const [selectedCity, setSelectedCity] = useState<CityType>('burnaby');

  const cityData = selectedCity === 'burnaby' ? burnabyData : courtenayData;

  // Generate gradient colors based on city and data
  const generateColors = (data: DemographicData[], city: CityType) => {
    if (city === 'courtenay') {
      return generateCourtenayColors(data.map(d => d.percentage));
    }

    return generateBurnabyColors(data.map(d => d.percentage));
  };

  // Prepare data for Chart.js
  const chartData = {
    labels: cityData.data.map(d => `${d.name} (${d.percentage}%)`),
    datasets: [
      {
        data: cityData.data.map(d => d.percentage),
        backgroundColor: generateColors(cityData.data, selectedCity),
        borderWidth: 3,
        borderColor: '#ffffff',
        borderRadius: 0,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    radius: 120,
    maintainAspectRatio: false,
    cutout: '55%', 
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const label = context.label || '';
            const value = context.parsed || 0;
            return `${label}: ${value}%`;
          }
        }
      },
      datalabels: {
        display: false,
      }
    },
    layout: {
      padding: {
        top: 0,
        bottom: 40,
        left: 40,
        right: 40
      }
    }
  
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-0">

      <div className='pt-6 px-6'>
      {/* Title */}
      <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 font-dm-sans">
        {title}
      </h3>
      
      {/* Subtitle */}
      <p className="text-sm text-gray-600 mb-4 font-dm-sans">
        {subtitle}
      </p>

      {/* City Dropdown and Last Updated */}
      <div className="flex flex-wrap items-center gap-3 mb-0">
       <CityDropdown selectedCity={selectedCity} onCityChange={setSelectedCity} />
        
        <div className="flex items-center gap-2 text-gray-500 text-xs">
          <CiCalendar className="w-4 h-4" />
          <span className="font-dm-sans">{cityData.lastUpdated}</span>
        </div>
      </div>

      </div>

      {/* Chart Container */}
      <div className="relative w-full h-[400px] max-w-md mx-auto mb-6">
        <div className="relative h-96">
          <Doughnut
            data={chartData} 
            options={chartOptions}
          />
        </div>
        
        {/* Custom Legend */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-wrap justify-center gap-x-4 gap-y-2 px-4 pb-4">
          {cityData.data.map((item, index) => (
            <div key={index} className="flex items-center gap-1.5">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: generateColors(cityData.data, selectedCity)[index] }}
              />
              <span className="text-xs text-gray-700 font-dm-sans">
                {item.name} ({item.percentage}%)
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DemographicChart;
