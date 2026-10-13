import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { findingsContent } from "../../content/FindingsContent";
import { type City } from "../../content/Findings/data";
import { percentFormatter } from "./items";
import CityTabs from "./CityTabs";
import Reveal from "./Reveal";
import { Container } from "./Section";
import WhoSection from "./WhoSection";
import FeelingsSection from "./FeelingsSection";
import TakePartSection from "./TakePartSection";
import SwimmingSection from "./SwimmingSection";
import VoicesSection from "./VoicesSection";
import DownloadSection from "./DownloadSection";

const Findings: React.FC = () => {
    const { language } = useLanguage();
    const [city, setCity] = useState<City>("burnaby");
    const content = findingsContent[language];
    const formatPercent = percentFormatter(language);

    return (
        <main className="bg-base-100 font-dm-sans" key={language}>
            <Container className="pt-16 lg:pt-20">
                <Reveal>
                    <h1 className="mx-auto max-w-4xl text-center text-4xl leading-tight font-semibold tracking-tight text-balance text-primary lg:text-6xl">
                        {content.title} <span className="text-accent">{content.titleHighlight}</span>
                    </h1>
                </Reveal>
                <Reveal delay={1} className="mx-auto mt-8 max-w-4xl text-center">
                    <p className="text-lg leading-relaxed text-balance text-ink">{content.intro}</p>
                    <p id="findings-city-label" className="mt-10 mb-2 text-sm font-medium text-muted">
                        {content.cityTabsLabel}
                    </p>
                </Reveal>
            </Container>

            <div>
                <CityTabs city={city} setCity={setCity} labelledBy="findings-city-label" names={content.cityNames} />
                <WhoSection city={city} content={content} formatPercent={formatPercent} />
                <FeelingsSection city={city} content={content} />
                <TakePartSection city={city} content={content} formatPercent={formatPercent} />
                <SwimmingSection city={city} content={content} formatPercent={formatPercent} />
                <VoicesSection city={city} content={content} />
                <DownloadSection city={city} content={content} language={language} />
            </div>
        </main>
    );
};

export default Findings;
