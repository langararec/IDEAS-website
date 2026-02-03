import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

interface SurveyLink {
  language: string;
  languageNative: string;
  url: string;
}

interface City {
  name: string;
  surveys: SurveyLink[];
}

const surveyData: City[] = [
  {
    name: "Burnaby",
    surveys: [
      {
        language: "Chinese",
        languageNative: "中文",
        url: "https://ca.research.net/r/OnlineBurnabyChinese",
      },
      {
        language: "Farsi",
        languageNative: "فارسی",
        url: "https://ca.research.net/r/OnlineBurnabyFarsi",
      },
      {
        language: "Korean",
        languageNative: "한국어",
        url: "https://ca.research.net/r/OnlineBurnabyKorean",
      },
      {
        language: "Punjabi",
        languageNative: "ਪੰਜਾਬੀ",
        url: "https://ca.research.net/r/OnlineBurnabyPunjabi",
      },
      {
        language: "Tigrinya",
        languageNative: "ትግርኛ",
        url: "https://ca.research.net/r/OnlineBurnabyTigrinya",
      },
      {
        language: "Ukrainian",
        languageNative: "українська",
        url: "https://ca.research.net/r/OnlineBurnabyUkrainian",
      },
    ],
  },
  {
    name: "Courtenay",
    surveys: [
      {
        language: "Chinese",
        languageNative: "中文",
        url: "https://ca.research.net/r/OnlineCourtenayChinese",
      },
      {
        language: "Farsi",
        languageNative: "فارسی",
        url: "https://ca.research.net/r/OnlineCourtenayFarsi",
      },
      {
        language: "Korean",
        languageNative: "한국어",
        url: "https://ca.research.net/r/OnlineCourtenayKorean",
      },
      {
        language: "Punjabi",
        languageNative: "ਪੰਜਾਬੀ",
        url: "https://ca.research.net/r/OnlineCourtenayPunjabi",
      },
      {
        language: "Tigrinya",
        languageNative: "ትግርኛ",
        url: "https://ca.research.net/r/OnlineCourtenayTigrinya",
      },
      {
        language: "Ukrainian",
        languageNative: "українська",
        url: "https://ca.research.net/r/OnlineCourtenayUkrainian",
      },
    ],
  },
];

const SurveyDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setHoveredCity(null);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setHoveredCity(null);
    }
  };

  const handleCityMouseEnter = (cityName: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setHoveredCity(cityName);
  };

  const handleCityMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredCity(null);
    }, 200);
  };

  const handleSubmenuMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
  };

  const handleSubmenuMouseLeave = () => {
    setHoveredCity(null);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Main Button */}
      <button
        onClick={toggleDropdown}
        className="inline-flex items-center gap-2 bg-primary font-dm-sans hover:bg-primary/80 text-white px-8 py-3 rounded-xl mt-4 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all font-medium duration-300 hover:scale-105"
        aria-label="Open survey language selection"
        aria-expanded={isOpen}
      >
        Go to Survey
        <FiChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 overflow-visible z-50 min-w-[280px]">
          {/* City Section */}
          <div className="py-2">
            <div className="px-4 py-2 text-sm font-medium text-gray-500 text-left">
              City
            </div>
            {surveyData.map((city) => (
              <div
                key={city.name}
                className="relative"
                onMouseEnter={() => handleCityMouseEnter(city.name)}
                onMouseLeave={handleCityMouseLeave}
              >
                <button
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center justify-between group"
                  aria-label={`Select ${city.name}`}
                >
                  <span className="font-medium text-gray-900">{city.name}</span>
                  <FiChevronRight className="text-gray-400 group-hover:text-gray-600" />
                </button>

                {/* Language Submenu */}
                {hoveredCity === city.name && (
                  <div 
                    className="absolute left-full top-0 ml-1 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden min-w-[240px] z-50"
                    onMouseEnter={handleSubmenuMouseEnter}
                    onMouseLeave={handleSubmenuMouseLeave}
                  >
                    <div className="px-4 py-2 text-sm font-medium text-gray-500 border-b border-gray-100 text-left">
                      Language
                    </div>
                    <div className="py-2">
                      {city.surveys.map((survey) => (
                        <a
                          key={survey.language}
                          href={survey.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                          onClick={() => {
                            setIsOpen(false);
                            setHoveredCity(null);
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900">{survey.languageNative}</span>
                            <span className="text-gray-500 text-sm">{survey.language}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SurveyDropdown;
