import { useState } from "react";
import { LuMapPin } from "react-icons/lu";
import { IoChevronDownOutline } from "react-icons/io5";

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
    const [selectedMonth, setSelectedMonth] = useState<string>("all");
    
    // Get unique months for the selector
    const months = ["all", ...engagementEvents.map(event => event.month)];
    
    // Get the currently selected month data or all months if "all" is selected
    const displayedEvents = selectedMonth === "all" 
        ? engagementEvents 
        : [engagementEvents.find(data => data.month === selectedMonth)].filter(Boolean) as MonthData[];

    return (
        <div className="space-y-8">
            {/* Month Selector */}
            <div className="relative mb-8 flex ">
                <div className="relative w-48">
                    {/* Visually hidden but accessible label */}
                    <label htmlFor="month-select" className="sr-only">
                        Select month
                    </label>
                    <select
                        id="month-select"
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        className="appearance-none w-full bg-white border border-primary text-gray-700 py-2 px-3 pr-8 rounded-md focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all duration-200 font-dm-sans text-base cursor-pointer"
                    >
                        {months.map((month, index) => (
                            <option key={index} value={month}>
                                {month === "all" ? "All Months" : month}
                            </option>
                        ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <IoChevronDownOutline className="size-4" />
                    </div>
                </div>
            </div>

            {/* Months Content */}
            {displayedEvents.map((monthData, monthIndex) => (
                <div key={monthIndex} className="rounded-lg">
                    <h2 className="text-3xl font-semibold text-primary mb-2 font-dm-sans">
                        {monthData.month}
                    </h2>

                    <div>
                        {monthData.events.map((event, eventIndex) => (
                            <div key={eventIndex} className="flex gap-0 flex-wrap flex-col lg:flex-row font-dm-sans border-t-gray-200 border-t-2 py-5 ">
                                <div className="flex-shrink-0">
                                    <div className="text-3xl lg:text-center font-semibold text-primary text-left">
                                        {event.date}
                                    </div>
                                </div>

                                <div className="flex-grow space-y-6">
                                    {event.sessions.map((session, sessionIndex) => (
                                        <div key={sessionIndex} className="flex flex-col lg:flex-row justify-between py-2">
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
            
            {/* No events message */}
            {(!displayedEvents.length || displayedEvents.every(month => !month.events.length)) && (
                <div className="text-center py-16">
                    <p className="text-xl text-gray-500 font-dm-sans">
                        No events scheduled {selectedMonth !== "all" ? `for ${selectedMonth}` : ""}.
                    </p>
                </div>
            )}
        </div>
    );
};

export default EngagementEventsCalendar;