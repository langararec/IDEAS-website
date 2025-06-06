import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center px-4">
            <div className="text-center max-w-2xl mx-auto">
                {/* Large 404 Number */}
                <div className="mb-8">
                    <h1 className="text-8xl md:text-9xl font-bold text-primary/20 leading-none font-dm-sans">
                        404
                    </h1>
                </div>

                {/* Main Content */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-dm-sans">
                        Page Not Found
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-dm-sans max-w-lg mx-auto">
                        The page you're looking for doesn't exist or has been moved. 
                        Let's get you back on track.
                    </p>
                </div>

                {/* Back to Home Button */}
                <div className="mt-8">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg font-dm-sans"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Home
                    </Link>
                </div>

                {/* Optional decorative element */}
                <div className="mt-12 opacity-50">
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full"></div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;