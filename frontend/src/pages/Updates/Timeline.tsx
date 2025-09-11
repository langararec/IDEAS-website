import React from "react";
import { RxCaretRight } from "react-icons/rx";
import { useLanguage } from "../../context/LanguageContext";
import { updatesContent } from "../../content/UpdatesContent";

const Timeline: React.FC = () => {
    const { language } = useLanguage();
    const timelineData = updatesContent[language].timeline;

    return (
        <div key={`timeline-${language}`} className="py-4 sm:px-4 ">
            <div className="max-w-7xl ">
                <div className="relative">
                    {timelineData.map((yearData, yearIndex) => (
                        <div key={`${language}-${yearData.id}`} className="relative flex flex-row  ">
                            <div className="flex items-start">
                                {/* Commputer View Year */}
                                <div className="text-left mr-4 min-w-16 px-4 hidden sm:block">
                                    <h3 className="text-4xl font-bold font-dm-sans text-primary" >
                                        {yearData.year}
                                    </h3>
                                </div>

                            </div>
                            {/* Year and Circle Section */}
                            <div className="flex flex-col items-center mr-8">
                                {/* Connecting line above (except for first item) */}
                                {yearIndex > 0 && (
                                    <div className="w-1 bg-orange-500 "></div>
                                )}

                                {/* Detailed Circle */}
                                <div className="relative flex items-center justify-center w-16 h-16 bg-orange-200 rounded-full mt-0">
                                    <div className="w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center">
                                        <div className="w-6 h-6 bg-orange-600 rounded-full"></div>
                                    </div>
                                </div>



                                {/* Connecting line below (except for last item) */}
                                {yearIndex < timelineData.length - 1 && (
                                    <div className="w-1 bg-orange-500 flex-1 "></div>
                                )}
                            </div>



                            {/* Year Title for Mobile View */}
                            <div className="flex-1 py-0">
                                <div className="text-left my-4 min-w-16  sm:hidden block">
                                    <h3 className="text-3xl font-bold font-dm-sans text-primary" >
                                        {yearData.year}
                                    </h3>
                                </div>

                                {/* Content Section */}
                                {yearData.phases.map((phase, phaseIndex) => (
                                    <div key={`${language}-phase-${phaseIndex}`} className="mb-8">

                                        {/* Date range */}
                                        <div className="mb-2">
                                            <span className="font-medium text-lg sm:text-2xl font-dm-sans text-primary" >
                                                {phase.dateRange}
                                            </span>
                                        </div>

                                        {/* Phase title */}
                                        <h4 className="text-xl sm:text-3xl font-semibold text-black mb-3 font-dm-sans">
                                            {phase.title}
                                        </h4>

                                        {/* Bullets */}
                                        <ul className="space-y-2">
                                            {phase.bullets.map((bullet, bulletIndex) => (
                                                <li key={`${language}-bullet-${bulletIndex}`} className="flex items-start">
                                                    <RxCaretRight className="text-black mt-0 mr-1  size-6 shrink-0" />
                                                    <span className="text-black font-dm-sans leading-relaxed text-base">
                                                        {bullet}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Timeline;