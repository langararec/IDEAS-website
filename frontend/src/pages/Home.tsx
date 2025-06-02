import React from "react";
import Marquee from "react-fast-marquee";

const Home: React.FC = () => {

    return (
        <div className=" bg-base-100 px-4 py-12">
            <div className="text-center max-w-6xl mx-auto">
                <h1 className="text-4xl lg:text-6xl leading-tight font-bold lg:font-semibold font-sans text-primary mb-8">
                    Inclusion, Diversity, Equity, and Accessibility in <span className="text-accent">Public Recreation</span>
                </h1>
                <p className="max-w-2xl text-lg lg:text-xl text-black  mx-auto leading-relaxed mb-12">
                    Our research initiative focused on the experiences of immigrant and racialized communities in British Columbia's public recreation.
                </p>
                
                {/* Image Marquee Carousel */}
                <Marquee 
                    speed={30} 
                    gradient={true} 
                    gradientColor="#ffffff"
                    gradientWidth={100}
                    className="py-8 overflow-y-hidden"
                >
                    <img 
                        src="/image1.jpg" 
                        alt="Recreation 1" 
                        className="h-32 w-48 object-cover rounded-lg mx-4 shadow-md"
                    />
                    <img 
                        src="/image2.jpg" 
                        alt="Recreation 2" 
                        className="h-36 w-48 object-cover rounded-lg mx-4 shadow-md mt-2"
                    />
                    <img 
                        src="/image3.jpg" 
                        alt="Recreation 3" 
                        className="h-32 w-48 object-cover rounded-lg mx-4 shadow-md"
                    />
                    <img 
                        src="/image4.jpg" 
                        alt="Recreation 4" 
                        className="h-40 w-48 object-cover rounded-lg mx-4 shadow-md -mt-2"
                    />
                    <img 
                        src="/image5.jpg" 
                        alt="Recreation 5" 
                        className="h-32 w-48 object-cover rounded-lg mx-4 shadow-md"
                    />
                    <img 
                        src="/image6.jpg" 
                        alt="Recreation 6" 
                        className="h-36 w-48 object-cover rounded-lg mx-4 shadow-md mt-1"
                    />
                </Marquee>
            </div>
        </div>
    );
}

export default Home;