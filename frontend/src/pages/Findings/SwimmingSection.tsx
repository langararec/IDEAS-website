import React from "react";
import type { FindingsContentType } from "../../content/FindingsContent";
import { findingsData, type City } from "../../content/Findings/data";
import { toItems } from "./items";
import { findingIcons } from "./icons";
import BarList from "./BarList";
import PeopleRatio from "./PeopleRatio";
import Reveal from "./Reveal";
import Section from "./Section";

type SwimmingSectionProps = {
    city: City;
    content: FindingsContentType;
};

const SwimmingSection: React.FC<SwimmingSectionProps> = ({ city, content }) => {
    const data = findingsData[city];
    const cityContent = content[city];

    return (
        <Section>
            <div className="grid gap-10">
                <Reveal>
                    <h2 className="text-[clamp(1.65rem,2.9vw,2.3rem)] font-semibold leading-[1.12] tracking-[-0.012em] text-pretty text-primary">
                        {cityContent.swimming.title}
                    </h2>
                </Reveal>

                <div className="grid grid-cols-2 items-start gap-x-16 gap-y-10 max-[860px]:grid-cols-1">
                    <Reveal className="grid grid-cols-2 gap-8 max-[640px]:grid-cols-1">
                        {toItems(data.swimming, cityContent.swimming.items).map((item) => (
                            <PeopleRatio
                                key={item.id}
                                value={item.value}
                                outOfSix={content.outOfSix}
                                statement={item.label}
                            />
                        ))}
                    </Reveal>

                    <Reveal delay={1} className="grid content-start gap-[1.375rem]">
                        <h3 className="text-[1.12rem] font-semibold leading-tight tracking-[-0.005em] text-balance text-ink">
                            {cityContent.swimBarriers.title}
                        </h3>
                        <BarList
                            variant="question"
                            items={toItems(data.swimBarriers, cityContent.swimBarriers.items).map((item) => ({
                                ...item,
                                icon: findingIcons[item.id],
                            }))}
                        />
                    </Reveal>
                </div>
            </div>
        </Section>
    );
};

export default SwimmingSection;
