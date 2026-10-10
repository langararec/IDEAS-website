import React from "react";
import type { FindingsContentType } from "../../content/FindingsContent";
import { findingsData, type City } from "../../content/Findings/data";
import { toItems } from "./items";
import BarList from "./BarList";
import Reveal from "./Reveal";
import Section from "./Section";

type TakePartSectionProps = {
    city: City;
    content: FindingsContentType;
    formatPercent: (value: number) => string;
};

const TakePartSection: React.FC<TakePartSectionProps> = ({ city, content, formatPercent }) => {
    const groups = findingsData[city].questions;
    const labels = content[city].questions;

    return (
        <Section title={content.sections.takePart}>
            <div className="grid gap-12 lg:grid-cols-2">
                {groups.map((group, index) => (
                    <Reveal
                        key={group.id}
                        delay={index % 2}
                        className="grid content-start gap-5 lg:row-span-2 lg:grid-rows-subgrid"
                    >
                        <h3 className="text-lg leading-tight font-semibold text-balance text-ink lg:self-end">
                            {content.questionTitles[group.id]}
                        </h3>
                        <BarList
                            formatPercent={formatPercent}
                            variant="question"
                            items={toItems(group.items, labels[group.id])}
                        />
                    </Reveal>
                ))}
            </div>
        </Section>
    );
};

export default TakePartSection;
