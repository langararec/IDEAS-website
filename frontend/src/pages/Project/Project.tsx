import React from "react";
import Objectives from "./Objectives";
import Hero from "./Hero";
import CityToggle from "./CityToggle";
import CallToAction from "./CallToAction";
import ItemToggle from "./ItemToggle";


const Project: React.FC = () => {

    return (
        <div className="bg-base-100">
            {/* Hero Section */}        
            <Hero />

            {/* Objectives Section */}
            <Objectives />

            {/* City Toggle Section */}
            <CityToggle />

            {/* Call to Action Section */}
            <CallToAction />

            {/* Item Toggle Section */}
            <ItemToggle />
        </div>
    );
}

export default Project;