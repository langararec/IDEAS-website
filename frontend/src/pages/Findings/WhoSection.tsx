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

const GENDER_COLORS = [
    "var(--color-data)",
    "var(--color-data-soft)",
    "#8f9a95",
    "#c8cdc8",
];

const AreaTitle: React.FC<{ title: string; meta?: string }> = ({ title, meta }) => (
    <div className="mb-5 flex items-baseline justify-between gap-3 border-b border-rule pb-3.5">
        <h3 className="text-[1.12rem] font-semibold leading-tight tracking-[-0.005em] text-balance text-ink">
            {title}
        </h3>
        {meta ? <span className="text-[0.8rem] text-muted">{meta}</span> : null}
    </div>
);

const WhoSection: React.FC<WhoSectionProps> = ({ city, content, formatPercent }) => {
    const data = findingsData[city];
    const cityContent = content[city];
    const area = "flex min-w-0 flex-col @container";

    return (
        <Section tone>
            <div className="grid gap-9">
                <Reveal className="grid gap-3.5">
                    <h2 className="text-[clamp(1.65rem,2.9vw,2.3rem)] font-semibold leading-[1.12] tracking-[-0.012em] text-pretty text-primary">
                        {content.sections.who}
                    </h2>
                    <p className="max-w-[70ch] text-[1.02rem] leading-[1.75] text-body">
                        {fillCounts(cityContent.who, data.n.total, data.n.newcomers)}
                    </p>
                </Reveal>

                <div className="grid grid-cols-[minmax(0,5fr)_minmax(0,3.5fr)_minmax(0,3.5fr)] gap-x-[clamp(1.5rem,3.4vw,3.25rem)] gap-y-[clamp(2.25rem,4vw,3.5rem)] max-[960px]:grid-cols-2 max-[560px]:grid-cols-1">
                    <Reveal className={`${area} [grid-column:1] [grid-row:1/span_2] max-[960px]:[grid-column:1/-1] max-[960px]:[grid-row:auto]`}>
                        <AreaTitle title={content.charts.ethnicity} meta={content.charts.ethnicityUnit} />
                        <BarList formatPercent={formatPercent} items={toItems(data.ethnicity, cityContent.ethnicity)} variant="ethnicity" />
                    </Reveal>

                    <Reveal delay={1} className={area}>
                        <AreaTitle title={content.charts.gender} />
                        <div className="my-auto">
                            <Donut formatPercent={formatPercent} items={toItems(data.gender, cityContent.gender)} colors={GENDER_COLORS} />
                        </div>
                    </Reveal>

                    <Reveal delay={2} className={area}>
                        <AreaTitle title={content.charts.age} />
                        <AgeColumns formatPercent={formatPercent} items={toItems(data.age, cityContent.age)} />
                    </Reveal>

                    <Reveal delay={3} className={`${area} [grid-column:2/span_2] max-[960px]:[grid-column:1/-1]`}>
                        <AreaTitle title={content.charts.timeInBC} />
                        <div className="my-auto">
                            <TimeSplitBar formatPercent={formatPercent} items={toItems(data.timeInBC, cityContent.timeInBC)} />
                        </div>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
};

export default WhoSection;
