import React from "react";
import { cities, type City } from "../../content/Findings/data";

type CityTabsProps = {
    city: City;
    setCity: (city: City) => void;
    label: string;
    names: Record<City, string>;
};

const CityTabs: React.FC<CityTabsProps> = ({ city, setCity, label, names }) => (
    <div
        role="group"
        aria-label={label}
        className="flex w-full max-w-[420px] gap-2 rounded-2xl bg-white p-2 shadow-sm"
    >
        {cities.map((id) => (
            <button
                key={id}
                type="button"
                onClick={() => setCity(id)}
                aria-pressed={city === id}
                className={`flex-1 cursor-pointer rounded-xl px-[1.125rem] py-3 font-dm-sans font-medium tracking-wide transition duration-300 ${city === id ? "bg-primary text-white shadow-md" : "text-gray-500 hover:text-primary"}`}
            >
                {names[id].toUpperCase()}
            </button>
        ))}
    </div>
);

export default CityTabs;
