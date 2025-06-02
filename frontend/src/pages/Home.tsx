import React from "react";

const Home: React.FC = () => {

    return (
        <div className=" bg-base-100 px-4 py-12">
            <div className="text-center max-w-6xl mx-auto">
                <h1 className="text-4xl lg:text-6xl leading-tight font-bold lg:font-semibold font-sans text-primary mb-8">
                    Inclusion, Diversity, Equity, and Accessibility in <span className="text-accent">Public Recreation</span>
                </h1>
                <p className="max-w-2xl text-lg lg:text-xl text-black  mx-auto leading-relaxed">
                    Our research initiative focused on the experiences of immigrant and racialized communities in British Columbia's public recreation.
                </p>
            </div>
        </div>
    );
}

export default Home;
