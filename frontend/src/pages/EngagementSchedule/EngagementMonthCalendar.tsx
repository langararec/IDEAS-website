import { createContext, useContext, useState } from "react";
import { DayButton, DayPicker } from "react-day-picker";
import type { DayButtonProps } from "react-day-picker";
import { enCA, frCA } from "date-fns/locale";
import { LuArrowUpRight, LuClock3, LuMapPin } from "react-icons/lu";
import { ENGAGEMENT_TIME_ZONE, engagementCalendarLabels, getEngagementDate, getEngagementDateKey } from "../../content/EngagementScheduleContent";
import type { ScheduledEngagement } from "../../content/EngagementScheduleContent";
import "./EngagementCalendar.css";

type EngagementMonthCalendarProps = {
    events: ScheduledEngagement[];
    language: 'en' | 'fr';
    year: number;
};

const asDate = getEngagementDate;
const dateKey = getEngagementDateKey;
const CalendarEvents = createContext<readonly ScheduledEngagement[]>([]);

const EngagementDayButton = ({ children, ...props }: DayButtonProps) => {
    const events = useContext(CalendarEvents);
    const engagements = events.filter(event => event.date === dateKey(props.day.date));

    return (
        <DayButton {...props}>
            {children}
            {engagements.length > 0 && (
                <span className="engagement-date-dots" aria-hidden="true">
                    {engagements.map(event => (
                        <span key={event.id} className={`engagement-date-dot ${event.area === 'burnaby' ? 'bg-accent' : 'bg-primary'}`} />
                    ))}
                </span>
            )}
        </DayButton>
    );
};

const EngagementMonthCalendar = ({ events, language, year }: EngagementMonthCalendarProps) => {
    const [selected, setSelected] = useState<Date>();
    const labels = engagementCalendarLabels[language];
    const dates = new Set(events.map(event => event.date));
    const selectedEvents = selected ? events.filter(event => event.date === dateKey(selected)) : [];
    const dateFormat = new Intl.DateTimeFormat(language === 'fr' ? 'fr-CA' : 'en-CA', {
        weekday: 'long', month: 'long', day: 'numeric', timeZone: ENGAGEMENT_TIME_ZONE,
    });
    const areaName = (event: ScheduledEngagement) => event.area === 'burnaby'
        ? labels.burnaby : year === 2026 ? labels.courtenay : labels.comoxValley;

    return (
        <div className="engagement-month-loaded">
            <div className="px-2 pt-2 pb-3 sm:px-5 sm:pt-3">
                <CalendarEvents.Provider value={events}>
                <DayPicker
                    mode="single"
                    month={asDate(events[0].date)}
                    selected={selected}
                    onSelect={setSelected}
                    locale={language === 'fr' ? frCA : enCA}
                    timeZone={ENGAGEMENT_TIME_ZONE}
                    weekStartsOn={1}
                    hideNavigation
                    disableNavigation
                    fixedWeeks
                    showOutsideDays
                    components={{ DayButton: EngagementDayButton }}
                    disabled={date => !dates.has(dateKey(date))}
                    modifiers={{
                        scheduled: events.map(event => asDate(event.date)),
                    }}
                    modifiersClassNames={{ scheduled: 'has-engagement' }}
                    labels={{
                        labelDayButton: date => {
                            const count = events.filter(event => event.date === dateKey(date)).length;
                            return `${dateFormat.format(date)}: ${count} ${count === 1 ? labels.engagement : labels.engagements}`;
                        },
                    }}
                    classNames={{
                        root: 'engagement-picker',
                        months: 'engagement-picker-months',
                        month: 'engagement-picker-month',
                        month_caption: 'sr-only',
                        month_grid: 'engagement-picker-grid',
                        weekdays: 'engagement-picker-weekdays',
                        weekday: 'engagement-picker-weekday',
                        week: 'engagement-picker-week',
                        day: 'engagement-picker-day',
                        day_button: 'engagement-picker-button',
                        selected: 'is-selected',
                        disabled: 'is-unavailable',
                        outside: 'is-outside',
                        today: 'is-today',
                    }}
                />
                </CalendarEvents.Provider>
                <div className="mt-2 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-primary/75">
                    <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-accent" />{labels.burnaby}</span>
                    <span className="inline-flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" />{year === 2026 ? labels.courtenay : labels.comoxValley}</span>
                </div>
            </div>
            {selected && (
                <section key={dateKey(selected)} className="engagement-day-agenda border-t border-primary/10 bg-white px-2 pt-3 pb-1 sm:px-5" aria-live="polite" aria-label={dateFormat.format(selected)}>
                    <ul>
                        {selectedEvents.map(event => (
                            <li key={event.id}>
                                <a
                                    href={event.mapUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={labels.map}
                                    className="block rounded-lg px-3 py-3 transition-colors duration-350 ease-in-out hover:bg-[#f0f1f2] focus-visible:bg-[#f0f1f2] focus-visible:outline-2 focus-visible:outline-secondary motion-reduce:transition-none"
                                >
                                <div className="flex items-start justify-between gap-3">
                                    <h5 className="text-base sm:text-lg font-semibold leading-snug text-primary [overflow-wrap:anywhere]">{event.location}</h5>
                                    <LuArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-primary/60" aria-hidden="true" />
                                </div>
                                <div className="mt-2 flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="inline-flex items-center gap-1 rounded-full border border-primary/25 px-2 py-1 text-xs font-medium text-primary">
                                            <LuMapPin className="h-3 w-3" aria-hidden="true" />{areaName(event)}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 text-xs text-muted"><LuClock3 className="h-3.5 w-3.5" aria-hidden="true" />{event.time}</span>
                                    </div>
                                    <span className="ml-auto rounded-full bg-accent/10 px-2 py-1 text-xs font-medium text-[#a63b00]">
                                        {event.title}
                                    </span>
                                </div>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            )}
        </div>
    );
};

export default EngagementMonthCalendar;