import { lazy, Suspense, useId, useState } from "react";
import type { ReactNode } from "react";
import { LuCalendarDays, LuChevronDown } from "react-icons/lu";
import { useLanguage } from "../../context/LanguageContext";
import { ENGAGEMENT_TIME_ZONE, engagementCalendarLabels, getEngagementDate, getSeasonEngagements } from "../../content/EngagementScheduleContent";
import type { EngagementArea } from "../../content/EngagementScheduleContent";

const areas: EngagementArea[] = ['burnaby', 'comoxValley'];
const EngagementMonthCalendar = lazy(() => import('./EngagementMonthCalendar'));
const eventDate = getEngagementDate;

type ScheduleDisclosureProps = {
    title: (isOpen: boolean) => ReactNode;
    children: ReactNode;
    className?: string;
};

const ScheduleDisclosure = ({ title, children, className = '' }: ScheduleDisclosureProps) => {
    const id = useId();
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    const toggle = () => {
        if (!isOpen) setIsMounted(true);
        else if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) setIsMounted(false);
        setIsOpen(!isOpen);
    };

    return (
        <div className={className}>
            <button type="button" onClick={toggle} aria-expanded={isOpen} aria-controls={id} className="engagement-disclosure-trigger flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 rounded-md bg-primary px-5 py-4 text-left text-white transition-colors duration-200 hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                <span className="min-w-0 flex-1">{title(isOpen)}</span>
                <LuChevronDown aria-hidden="true" className={`h-5 w-5 shrink-0 transition-transform duration-300 motion-reduce:transition-none ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div
                id={id}
                className={`engagement-disclosure ${isOpen ? 'is-open' : ''}`}
                aria-hidden={!isOpen}
                inert={!isOpen}
                onTransitionEnd={event => {
                    if (event.target === event.currentTarget && event.propertyName === 'grid-template-rows' && !isOpen) setIsMounted(false);
                }}
            >
                <div className="min-h-0 overflow-hidden">{isMounted ? children : null}</div>
            </div>
        </div>
    );
};

const EngagementYear = ({ year }: { year: number }) => {
    const { language } = useLanguage();
    const labels = engagementCalendarLabels[language];
    const locale = language === 'fr' ? 'fr-CA' : 'en-CA';
    const events = getSeasonEngagements(year, language);
    const monthFormat = new Intl.DateTimeFormat(locale, { month: 'long', timeZone: ENGAGEMENT_TIME_ZONE });
    const coveredMonths = [...new Set(events.map(event => event.date.slice(0, 7)))].sort();
    const firstMonth = monthFormat.format(eventDate(`${coveredMonths[0]}-01`));
    const lastMonth = monthFormat.format(eventDate(`${coveredMonths[coveredMonths.length - 1]}-01`));
    const period = firstMonth === lastMonth ? firstMonth : `${firstMonth} - ${lastMonth}`;
    const countLabel = (count: number) => `${count} ${count === 1 ? labels.engagement : labels.engagements}`;
    const areaName = (area: EngagementArea) => area === 'burnaby' ? labels.burnaby : year === 2026 ? labels.courtenay : labels.comoxValley;

    return (
        <section className="min-w-0 self-start rounded-lg border border-primary/25 bg-white p-4 sm:p-6" aria-labelledby={`engagement-year-${year}`}>
            <h2 id={`engagement-year-${year}`} className="mb-5 text-4xl sm:text-5xl font-semibold leading-none text-primary tabular-nums">{year}</h2>
            <div className="flex min-w-0 items-center gap-5 rounded-md bg-primary px-4 py-6 sm:px-6 sm:py-7 text-white">
                <span className="shrink-0 text-6xl sm:text-7xl font-semibold leading-none tabular-nums" aria-hidden="true">{events.length}</span>
                <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-semibold uppercase leading-relaxed [overflow-wrap:anywhere]">{countLabel(events.length)}</p>
                    <p className="mt-2 text-xs sm:text-sm uppercase leading-relaxed text-white/70">({period})</p>
                </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3" aria-label={labels.places}>
                    {areas.map(area => (
                        <div key={area} className="flex min-w-0 items-center gap-3 rounded-md border border-rule bg-base-100 px-3 py-4 sm:px-4">
                            <span className="shrink-0 text-2xl sm:text-3xl leading-none font-semibold text-primary tabular-nums">
                                {events.filter(event => event.area === area).length}
                            </span>
                            <span className="min-w-0 text-xs sm:text-sm leading-snug text-primary [overflow-wrap:anywhere]">
                                {areaName(area)}
                            </span>
                        </div>
                    ))}
            </div>
            <ScheduleDisclosure
                className="mt-4"
                title={isOpen => <span className="flex items-center gap-3 text-base font-semibold"><LuCalendarDays className="h-5 w-5 shrink-0" aria-hidden="true" />{isOpen ? labels.hideSchedule : labels.showSchedule}</span>}
            >
                <div className="grid items-start gap-8 border-t border-rule pt-6 xl:grid-cols-2 xl:gap-10">
                    {coveredMonths.map(month => {
                        const monthEvents = events.filter(event => event.date.startsWith(month));
                        const monthName = monthFormat.format(eventDate(`${month}-01`));
                        return (
                            <section
                                key={month}
                                className="min-w-0"
                                aria-labelledby={`engagement-month-${month}`}
                            >
                                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2 px-2 sm:px-5">
                                    <h3 id={`engagement-month-${month}`} className="text-xl font-semibold capitalize text-primary">{monthName}</h3>
                                    <span className="text-xs text-muted">{countLabel(monthEvents.length)}</span>
                                </div>
                                <Suspense fallback={<div role="status" className="flex min-h-80 items-center justify-center text-sm text-primary/60">{labels.loadingCalendar}</div>}>
                                    <EngagementMonthCalendar events={monthEvents} language={language} year={year} />
                                </Suspense>
                            </section>
                        );
                    })}
                </div>
            </ScheduleDisclosure>
        </section>
    );
};

const EngagementEventsCalendar = () => (
    <div className="space-y-6 lg:space-y-8">
        <EngagementYear year={2026} />
        <EngagementYear year={2025} />
    </div>
);

export default EngagementEventsCalendar;