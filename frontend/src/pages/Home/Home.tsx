import React from "react";
import Carousel from "./Carousel";
import Partners from "./Partners";

const Home: React.FC = () => {

    return (
        <div className="bg-base-100">
            {/* Hero Section */}
            <div className="px-4 py-12">
                <div className="text-center max-w-6xl mx-auto">
                    <h1 className="text-4xl lg:text-6xl leading-tight font-bold lg:font-bold font-dm-sans text-primary mb-8">
                        Inclusion, Diversity, Equity, and Accessibility in <span className="text-accent">Public Recreation</span>
                    </h1>
                    <p className="max-w-2xl text-lg lg:text-xl text-black mx-auto leading-relaxed mb-12 font-dm-sans">
                        Our research initiative focused on the experiences of immigrant and racialized communities in British Columbia's public recreation.
                    </p>
                    <Carousel />
                </div>
            </div>

            {/* Mission Statement Section */}
            <div className="bg-primary py-16 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Main Quote Box */}
                    <div className="bg-base-200/90 rounded-2xl p-8 lg:p-12 mb-8 text-center">
                        <h2 className="text-2xl lg:text-4xl font-bold text-primary leading-tight font-dm-sans">
                            We aim to understand the unique recreation needs of{" "}
                            <span className="text-accent">racialized</span> and{" "}
                            <span className="text-accent">immigrant</span> groups compared to Canadian-born residents.
                        </h2>
                    </div>

                    {/* Description Text */}
                    <div className="text-center space-y-6 text-white font-dm-sans">
                        <p className="text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
                            By uncovering barriers to participation by looking through a lens of 'Belonging, Dignity, Justice, and Joy'
                            (Davis, 2021) we hope to build stronger community connections and foster a genuine sense of belonging for
                            everyone through more effective inclusive practices in recreation.
                        </p>

                        <p className="text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
                            Our project is dedicated to addressing the diverse needs of all community members, including those with
                            intersecting identities. We aim to create a model for inclusive public recreation that can inspire change
                            across Canada.
                        </p>

                        {/* Call to Action Button */}
                        <div className="pt-6">
                            <button className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 font-dm-sans uppercase tracking-wide">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-16 bg-white">
                <div className="lg:flex lg:flex-row flex flex-col lg:items-center lg:gap-12 space-y-8 lg:space-y-0">
                    <div className="lg:flex-1">
                        <img
                            src="/mission.webp"
                            alt="Mission Image"
                            className="w-full h-auto rounded-2xl shadow-xl"
                        />
                    </div>
                    <div className=" lg:flex-1 lg:text-left text-center space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary font-dm-sans">
                            Our Mission
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-700 leading-relaxed font-dm-sans">
                            To enhance access and engagement by collaborating with communities and their municipal recreation staff to explore co-created initiatives to increase access to public recreation.
                        </p>
                    </div>
                </div>
            </div>
           <Partners />
        </div>
    );
}

export default Home;