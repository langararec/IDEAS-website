import React from "react";
import { cities, type City } from "../../content/Findings/data";
import { Container } from "./Section";

type CityTabsProps = {
    city: City;
    setCity: (city: City) => void;
    labelledBy: string;
    names: Record<City, string>;
};

const CityTabs: React.FC<CityTabsProps> = ({ city, setCity, labelledBy, names }) => (
    <div className="pointer-events-none sticky top-22 z-40 [container:city-tabs/scroll-state] sm:top-24">
        <Container>
            <div
                role="group"
                aria-labelledby={labelledBy}
                className="pointer-events-auto mx-auto flex max-w-xl gap-2 rounded-2xl bg-white p-1.5 shadow-sm transition-shadow duration-300 sm:p-2 [@container_city-tabs_scroll-state(stuck:top)]:shadow-lg"
            >
                {cities.map((id) => (
                    <button
                        key={id}
                        type="button"
                        onClick={() => setCity(id)}
                        aria-pressed={city === id}
                        className={`flex-1 cursor-pointer rounded-xl px-4.5 py-2.5 font-dm-sans font-medium tracking-wide uppercase transition duration-300 sm:py-3 ${city === id ? "bg-primary text-white shadow-md" : "text-muted hover:text-primary"}`}
                    >
                        {names[id]}
                    </button>
                ))}
            </div>
        </Container>
    </div>
);

export default CityTabs;
