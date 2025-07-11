import React from "react";
import { Link } from "react-router-dom";

const CallToAction: React.FC = () => {
    return (
        <div className="bg-primary py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <blockquote className="text-xl md:text-2xl lg:text-3xl text-white font-medium leading-relaxed  tracking-wide mb-8 font-dm-sans">
                    "This project is dedicated to building an inclusive framework for
                    public recreation that reflects and supports the diverse needs of all
                    community members in British Columbia and beyond."
                </blockquote>

                <Link to="/get-involved" className="hover:cursor-pointer">
                    <button className="bg-accent hover:bg-accent/90 hover:cursor-pointer text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 font-dm-sans uppercase tracking-wide">
                        Get Involved
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default CallToAction;