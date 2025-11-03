import { useState, useEffect, useRef } from "react";
import { PiCaretDown } from "react-icons/pi";
import { useLanguage } from "../context/LanguageContext";
import { statisticsContent } from "../content/StatisticsContent";

type CityType = 'burnaby' | 'courtenay';

interface CityDropdownProps {
    selectedCity: CityType;
    onCityChange: (city: CityType) => void;
}

const CityDropdown: React.FC<CityDropdownProps> = ({ selectedCity, onCityChange }) => {
    const { language } = useLanguage();
    const cities = statisticsContent[language].surveyDataReport.cities;
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

    const handleCitySelect = (city: CityType) => {
        onCityChange(city);
        setIsDropdownOpen(false);
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setIsDropdownOpen(!isDropdownOpen);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                aria-label="Select city"
                aria-expanded={isDropdownOpen}
            >
                <span className={`w-2 h-2 rounded-full ${selectedCity === 'burnaby' ? 'bg-[#317039]' : 'bg-teal-600'}`}></span>
                <span className="font-medium text-gray-700 font-dm-sans">
                    {cities[selectedCity]}
                </span>
                <PiCaretDown className={`w-4 h-4 text-gray-500 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-full min-w-[150px] bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleCitySelect('burnaby');
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 font-dm-sans rounded-t-lg ${selectedCity === 'burnaby' ? 'bg-gray-100 font-semibold' : ''
                            }`}
                    >
                        {cities.burnaby}
                    </button>
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleCitySelect('courtenay');
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-gray-50 font-dm-sans rounded-b-lg ${selectedCity === 'courtenay' ? 'bg-gray-100 font-semibold' : ''
                            }`}
                    >
                        {cities.courtenay}
                    </button>
                </div>
            )}
        </div>
    );
};

export default CityDropdown;
