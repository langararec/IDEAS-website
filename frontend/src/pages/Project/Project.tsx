import React from "react";
import Objectives from "./Objectives";
import Hero from "./Hero";
import CityToggle from "./CityToggle";
const Project: React.FC = () => {

    return (
        <div className="bg-base-100">
            {/* Hero Section */}        
            <Hero />

            {/* Objectives Section */}
            <Objectives />

            {/* City Toggle Section */}
            <CityToggle />
        </div>
    );
}

export default Project;