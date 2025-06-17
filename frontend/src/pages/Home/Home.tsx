import React from "react";
import Hero from "./Hero";
import Partners from "./Partners";
import Mission from "./Mission";
import MissionStatement from "./MissionStatement";

const Home: React.FC = () => {

    return (
        <div className="bg-base-100">

            {/* Hero Section */}
            <Hero />

            {/* Mission Statement Section */}
            <MissionStatement />

            {/* Mission */}
            <Mission />

            {/* Partners Section */}
            <Partners />
            
        </div>
    );
}

export default Home;