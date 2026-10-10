import React from "react";
import type { FindingsContentType } from "../../content/FindingsContent";
import { findingsData, type City } from "../../content/Findings/data";
import { toItems } from "./items";
import PeopleRatio from "./PeopleRatio";
import Reveal from "./Reveal";
import Section from "./Section";

type FeelingsSectionProps = {
    city: City;
    content: FindingsContentType;
};

const FeelingsSection: React.FC<FeelingsSectionProps> = ({ city, content }) => {
    const groups = findingsData[city].feelings;
    const labels = content[city].feelings;

    return (
        <Section tone="tint" title={content.sections.feelings}>
            <div className="grid gap-12">
                {groups.map((group, index) => (
                    <Reveal key={group.id} delay={index} className="grid gap-6 lg:grid-cols-12 lg:gap-x-12">
                        <h3 className="text-lg leading-tight font-semibold text-balance text-ink lg:col-span-4 lg:pt-2">
                            {labels[group.id].title}
                        </h3>
                        <div className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:col-span-8">
                            {toItems(group.items, labels[group.id].items).map((item) => (
                                <PeopleRatio
                                    key={item.id}
                                    value={item.value}
                                    outOfSix={content.outOfSix}
                                    statement={item.label}
                                />
                            ))}
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
};

export default FeelingsSection;
