import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { CiCalendar } from 'react-icons/ci';
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { statisticsContent } from "../../content/StatisticsContent";
import CityDropdown from '../../components/CityDropdown';

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
  const { language } = useLanguage();
  const [selectedCity, setSelectedCity] = useState<CityType>('burnaby');

  const cityData = selectedCity === 'burnaby' ? burnabyData : courtenayData;

  // Generate gradient colors based on city and data
  const generateColors = (data: DemographicData[], city: CityType) => {
    if (city === 'courtenay') {
      // Courtenay uses solid teal color
      return data.map(() => '#0d9488');
    }

    // Burnaby: gradient from full green to lighter green
    const maxValue = Math.max(...data.map(d => d.percentage));
    return data.map(item => {
      const intensity = item.percentage / maxValue;
      const minIntensity = 0.4;
      const adjustedIntensity = minIntensity + (intensity * (1 - minIntensity));
      const r = Math.round(49 + (180 - 49) * (1 - adjustedIntensity));
      const g = Math.round(112 + (220 - 112) * (1 - adjustedIntensity));
      const b = Math.round(57 + (180 - 57) * (1 - adjustedIntensity));
      return `rgb(${r}, ${g}, ${b})`;
    });
  };

  // Prepare data for Chart.js
  const chartData = {
    labels: cityData.data.map(d => d.name),
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
    maintainAspectRatio: true,
    cutout: '55%', // Creates the donut effect
    plugins: {
      legend: {
        display: false,
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
        color: selectedCity === 'burnaby' ? '#0f4c28' : '#0f766e',
        font: {
          weight: 'bold' as const,
          size: 12,
        },
        formatter: (value: number, context: any) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${value}%\n${label}`;
        },
        textAlign: 'center' as const,
        anchor: 'end' as const,
        align: 'end' as const,
        offset: 2,
        padding: 2,
        clip: false,
      }
    },
    layout: {
      padding: {
        top: 60,
        bottom: 60,
        left: 80,
        right: 80
      }
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-0">

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
      <div className="relative w-full max-w-md mx-auto mb-6 overflow-visible">
        <Doughnut 
          data={chartData} 
          options={chartOptions}

        />
      </div>
    </div>
  );
};

export default DemographicChart;
