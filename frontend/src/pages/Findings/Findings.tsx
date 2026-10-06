import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { findingsContent } from "../../content/FindingsContent";
import { type City } from "../../content/Findings/data";
import CityTabs from "./CityTabs";
import Reveal from "./Reveal";

const Findings: React.FC = () => {
    const { language } = useLanguage();
    const [city, setCity] = useState<City>("burnaby");
    const content = findingsContent[language];
    const cityContent = content[city];

    return (
        <main className="bg-base-100 font-dm-sans" key={`findings-${language}`}>
            <section className="px-[clamp(1.25rem,4vw,3.5rem)] pt-[clamp(2.5rem,5.5vw,4.75rem)] pb-[clamp(3.25rem,6vw,5.5rem)]">
                <div className="mx-auto max-w-[1160px]">
                    <div className="mx-auto flex max-w-[940px] flex-col items-center gap-[clamp(1.625rem,3vw,2.375rem)] pb-[clamp(2.75rem,5.2vw,4.5rem)] text-center">
                        <Reveal>
                            <h1 className="text-4xl leading-tight font-semibold tracking-tight text-primary lg:text-6xl">
                                {content.title} <span className="text-accent">{content.titleHighlight}</span>
                            </h1>
                        </Reveal>
                        <Reveal delay={1} className="flex w-full justify-center">
                            <CityTabs
                                city={city}
                                setCity={setCity}
                                label={content.cityTabsLabel}
                                names={content.cityNames}
                            />
                        </Reveal>
                    </div>
                    <Reveal className="mx-auto max-w-[660px] border-t border-rule pt-[clamp(2rem,3.6vw,2.875rem)] text-center">
                        <div className="grid gap-[1.125rem] text-[1.05rem] leading-[1.8]">
                            <p className="text-ink">{cityContent.intro[0]}</p>
                            <p className="text-muted">{cityContent.intro[1]}</p>
                        </div>
                    </Reveal>
                </div>
            </section>
        </main>
    );
};

export default Findings;
