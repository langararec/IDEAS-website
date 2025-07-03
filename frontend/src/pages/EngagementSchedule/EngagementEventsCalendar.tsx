import { LuMapPin } from "react-icons/lu";

interface Session {
    time: string;
    title: string;
    description: string;
    location: string;
    mapUrl: string;
}

interface Event {
    date: string;
    sessions: Session[];
}

interface MonthData {
    month: string;
    events: Event[];
}

interface EngagementEventsCalendarProps {
    engagementEvents: MonthData[];
}

const EngagementEventsCalendar: React.FC<EngagementEventsCalendarProps> = ({ engagementEvents }) => {
    return (
        <div >
            {engagementEvents.map((monthData, monthIndex) => (
                <div key={monthIndex} className=" rounded-lg">
                    <h2 className="text-4xl font-semibold text-primary mb-12 py-4 font-dm-sans">
                        {monthData.month}
                    </h2>

                    <div >
                        {monthData.events.map((event, eventIndex) => (
                            <div key={eventIndex} className="flex gap-8 flex-wrap flex-col lg:flex-row font-dm-sans border-t-gray-200 border-t-2 py-4">
                                <div className="flex-shrink-0 ">
                                    <div className="text-4xl lg:text-center font-semibold text-primary text-left">
                                        {event.date}
                                    </div>
                                </div>

                                <div className="flex-grow space-y-6">
                                    {event.sessions.map((session, sessionIndex) => (
                                        <div key={sessionIndex} className="flex flex-col lg:flex-row justify-between py-2 ">
                                            <div className="flex-1">
                                                <div className="text-lg lg:text-xl lg:text-center font-medium text-gray-900 mb-1">
                                                    {session.time}
                                                </div>
                                            </div>

                                            <div className="py-4 lg:py-0 flex-1">
                                                <h3 className="text-lg font-medium text-gray-900 mb-1">
                                                    {session.title}
                                                </h3>
                                                <p className="text-gray-600">
                                                    {session.description}
                                                </p>
                                            </div>

                                            <div className="flex-1 flex justify-start">
                                                <a
                                                    href={session.mapUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`View ${session.location} on Google Maps (opens in new tab)`}
                                                    className="flex items-center text-gray-900 hover:text-primary transition-colors duration-200 font-medium text-xl"
                                                >
                                                    <LuMapPin className="size-6 mr-4" />
                                                    {session.location}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EngagementEventsCalendar;