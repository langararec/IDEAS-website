import EngagementEventsCalendar from "./EngagementEventsCalendar";
import { engagementEventsData } from "./EngagementScheduleData";

const EngagementSchedule: React.FC = () => {
    return (
        <div>
            <div className="bg-base-100 relative">
                <div className="relative h-92">
                    <div className="absolute inset-0">
                        <img
                            src="/EngagementSchedule.webp"
                            alt="Community engagement activities at recreation centers and parks"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-1 bg-black/10"></div>
                    </div>
                </div>

                <div className="p-6 lg:px-0 max-w-7xl mx-auto relative py-8">
                    <h1 className="text-4xl leading-wide font-bold tracking-wider  font-dm-sans text-primary mb-8">
                        Community Engagement Schedule
                    </h1>

                    <EngagementEventsCalendar engagementEvents={engagementEventsData} />
                </div>
            </div>
        </div>
    );
}

export default EngagementSchedule;