import React from "react";
import type { FindingsContentType } from "../../content/FindingsContent";
import { findingsData, type City } from "../../content/Findings/data";
import { toItems } from "./items";
import BarList from "./BarList";
import PeopleRatio from "./PeopleRatio";
import Reveal from "./Reveal";
import Section from "./Section";

type SwimmingSectionProps = {
    city: City;
    content: FindingsContentType;
    formatPercent: (value: number) => string;
};

const SwimmingSection: React.FC<SwimmingSectionProps> = ({ city, content, formatPercent }) => {
    const data = findingsData[city];
    const cityContent = content[city];

    return (
        <Section tone="tint" title={cityContent.swimming.title}>
            <div className="grid items-start gap-12 lg:grid-cols-2">
                <Reveal className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
                    {toItems(data.swimming, cityContent.swimming.items).map((item) => (
                        <PeopleRatio
                            key={item.id}
                            value={item.value}
                            outOfSix={content.outOfSix}
                            statement={item.label}
                        />
                    ))}
                </Reveal>

                <Reveal delay={1} className="grid content-start gap-5">
                    <h3 className="text-lg leading-tight font-semibold text-balance text-ink">
                        {cityContent.swimBarriers.title}
                    </h3>
                    <BarList
                        formatPercent={formatPercent}
                        variant="question"
                        items={toItems(data.swimBarriers, cityContent.swimBarriers.items)}
                    />
                </Reveal>
            </div>
        </Section>
    );
};

export default SwimmingSection;
