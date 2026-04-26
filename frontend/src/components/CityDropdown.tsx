import type { Dispatch, SetStateAction } from "react";
import { useLanguage } from "../context/LanguageContext";
import { statisticsContent } from "../content/StatisticsContent";

export type CityType = 'burnaby' | 'courtenay' | 'total';

interface CityDropdownProps {
    selectedCity: CityType;
    onCityChange: Dispatch<SetStateAction<CityType>>;
    showTotal?: boolean;
}

const CityDropdown: React.FC<CityDropdownProps> = ({ selectedCity, onCityChange, showTotal = false }) => {
    const { language } = useLanguage();
    const cities = statisticsContent[language].surveyDataReport.cities;

    const buttons: [CityType, string][] = showTotal
        ? [['total', cities.total], ['burnaby', cities.burnaby], ['courtenay', cities.courtenay]]
        : [['burnaby', cities.burnaby], ['courtenay', cities.courtenay]];

    return (
        <div className="flex">
            {buttons.map(([city, label]) => {
                const isActive = selectedCity === city;

                return (
                    <button
                        key={city}
                        onClick={() => onCityChange(city)}
                        className={`px-2 py-1 text-sm font-medium font-dm-sans border transition-colors mr-2 rounded-md
                            ${isActive
                                ? 'bg-primary text-white border-primary z-10'
                                : 'bg-transparent text-neutral-500 border-neutral-500 hover:bg-neutral-50'
                            }`}
                    >
                        {label}
                    </button>
                );
            })}
        </div>
    );
};

export default CityDropdown;

