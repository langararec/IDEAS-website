import React from "react";
import type { FindingsContentType } from "../../content/FindingsContent";
import { findingsData, type City } from "../../content/Findings/data";
import { fillCounts, toItems } from "./items";
import AgeColumns from "./AgeColumns";
import BarList from "./BarList";
import Donut from "./Donut";
import Reveal from "./Reveal";
import Section from "./Section";
import TimeSplitBar from "./TimeSplitBar";

type WhoSectionProps = {
    city: City;
    content: FindingsContentType;
    formatPercent: (value: number) => string;
};

type AreaTitleProps = {
    title: string;
    meta?: string;
};

const AreaTitle: React.FC<AreaTitleProps> = ({ title, meta }) => (
    <div className="mb-5 flex items-baseline justify-between gap-3 border-b border-rule pb-3">
        <h3 className="text-lg leading-tight font-semibold text-balance text-ink">{title}</h3>
        {meta ? <span className="text-sm whitespace-nowrap text-muted">{meta}</span> : null}
    </div>
);

const WhoSection: React.FC<WhoSectionProps> = ({ city, content, formatPercent }) => {
    const data = findingsData[city];
    const cityContent = content[city];
    const area = "flex min-w-0 flex-col @container";

    return (
        <Section
            tone="fromHero"
            title={content.sections.who}
            intro={
                <p aria-live="polite" className="max-w-[70ch] leading-relaxed text-body md:text-lg">
                    {fillCounts(cityContent.who, data.n.total, data.n.newcomers)}
                </p>
            }
        >
            <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-[10fr_7fr_7fr] lg:gap-x-12">
                <Reveal className={`${area} sm:col-span-full lg:col-span-1 lg:row-span-2`}>
                    <AreaTitle title={content.charts.ethnicity} meta={content.charts.ethnicityUnit} />
                    <BarList formatPercent={formatPercent} items={toItems(data.ethnicity, cityContent.ethnicity)} variant="ethnicity" />
                </Reveal>

                <Reveal delay={1} className={area}>
                    <AreaTitle title={content.charts.gender} />
                    <div className="my-auto">
                        <Donut formatPercent={formatPercent} items={toItems(data.gender, cityContent.gender)} />
                    </div>
                </Reveal>

                <Reveal delay={2} className={area}>
                    <AreaTitle title={content.charts.age} />
                    <AgeColumns formatPercent={formatPercent} items={toItems(data.age, cityContent.age)} />
                </Reveal>

                <Reveal delay={3} className={`${area} sm:col-span-full lg:col-span-2 lg:col-start-2`}>
                    <AreaTitle title={content.charts.timeInBC} />
                    <div className="my-auto">
                        <TimeSplitBar formatPercent={formatPercent} items={toItems(data.timeInBC, cityContent.timeInBC)} />
                    </div>
                </Reveal>
            </div>
        </Section>
    );
};

export default WhoSection;
