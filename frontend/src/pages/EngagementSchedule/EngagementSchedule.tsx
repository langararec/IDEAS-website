import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { engagementScheduleContent } from "../../content/EngagementScheduleContent";
import EngagementEventsCalendar from "./EngagementEventsCalendar";

const EngagementSchedule: React.FC = () => {
    const { language } = useLanguage();
    const content = engagementScheduleContent[language];

    return (
        <div key={`engagement-schedule-${language}`}>
            <div className="bg-base-100 relative">
                <div className="relative h-92">
                    <div className="absolute inset-0">
                        <img
                            src="/EngagementSchedule.webp"
                            alt={content.header.imageAlt}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-1 bg-black/10"></div>
                    </div>
                </div>

                <div className="p-6 lg:px-0 max-w-7xl mx-auto relative py-8">
                    <h1 className="text-4xl  font-bold   font-dm-sans text-primary mb-8">
                        {content.header.title}
                    </h1>

                    <EngagementEventsCalendar />
                </div>
            </div>
        </div>
    );
}

export default EngagementSchedule;