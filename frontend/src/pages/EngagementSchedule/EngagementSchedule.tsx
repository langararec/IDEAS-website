import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { engagementCalendarLabels, getSeasonEngagements } from "../../content/EngagementScheduleContent";
import EngagementEventsCalendar from "./EngagementEventsCalendar";
import PageHero from "../../components/PageHero";

const EngagementSchedule: React.FC = () => {
    const { language } = useLanguage();
    const labels = engagementCalendarLabels[language];
    const total = getSeasonEngagements(2025, language).length + getSeasonEngagements(2026, language).length;

    return (
        <main key={`engagement-schedule-${language}`} className="bg-white font-dm-sans">
            <PageHero title={labels.title} subtitle={labels.subtitle.replace('{count}', String(total))} ribbon tone="base-150" fadeTo="white" />
            <div className="max-w-7xl mx-auto px-6 pb-16 lg:pb-24">
                <EngagementEventsCalendar />
            </div>
        </main>
    );
}

export default EngagementSchedule;