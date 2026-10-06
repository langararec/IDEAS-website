import React from "react";
import type { FindingsContentType } from "../../content/FindingsContent";
import { findingsData, type City } from "../../content/Findings/data";
import { toItems } from "./items";
import { findingIcons } from "./icons";
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
        <Section tone>
            <div className="grid gap-x-[clamp(1rem,2.6vw,2.25rem)] gap-y-12">
                <Reveal className="mb-2">
                    <h2 className="text-[clamp(1.65rem,2.9vw,2.3rem)] font-semibold leading-[1.12] tracking-[-0.012em] text-pretty text-primary">
                        {content.sections.takePart}
                    </h2>
                </Reveal>

                <div className="grid grid-cols-2 gap-x-[clamp(1.5rem,3vw,2.5rem)] gap-y-12 max-[900px]:grid-cols-1">
                    {groups.map((group, index) => (
                        <Reveal
                            key={group.id}
                            delay={index % 2}
                            className="row-span-2 grid grid-rows-subgrid content-start gap-y-[1.375rem]"
                        >
                            <h3 className="self-end text-[1.12rem] font-semibold leading-tight tracking-[-0.005em] text-balance text-ink">
                                {labels[group.id].title}
                            </h3>
                            <BarList
                                formatPercent={formatPercent}
                                variant="question"
                                items={toItems(group.items, labels[group.id].items).map((item) => ({
                                    ...item,
                                    icon: findingIcons[item.id],
                                }))}
                            />
                        </Reveal>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default TakePartSection;
