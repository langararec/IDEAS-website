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
        <Section>
            <div className="grid grid-cols-12 gap-x-[clamp(1rem,2.6vw,2.25rem)] gap-y-12 max-[900px]:grid-cols-1">
                <Reveal className="col-span-4 self-start max-[900px]:col-span-full lg:sticky lg:top-8">
                    <h2 className="text-[clamp(1.65rem,2.9vw,2.3rem)] font-semibold leading-[1.12] tracking-[-0.012em] text-pretty text-primary">
                        {content.sections.feelings}
                    </h2>
                </Reveal>

                <div className="[grid-column:6/-1] max-[900px]:[grid-column:1/-1]">
                    {groups.map((group, index) => (
                        <Reveal
                            key={group.id}
                            delay={index}
                            className={`grid gap-[1.375rem] py-[2.125rem] ${index === 0 ? "border-0 pt-1.5" : "border-t border-rule"} ${index === groups.length - 1 ? "pb-0" : ""}`}
                        >
                            <h3 className="text-[1.12rem] font-semibold leading-tight tracking-[-0.005em] text-balance text-ink">
                                {labels[group.id].title}
                            </h3>
                            <div className="grid grid-cols-2 gap-x-12 gap-y-8 max-[640px]:grid-cols-1">
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
            </div>
        </Section>
    );
};

export default FeelingsSection;
