import React, { useState } from "react";
import type { FindingsContentType } from "../../content/FindingsContent";
import { type City } from "../../content/Findings/data";
import Reveal from "./Reveal";
import { Container } from "./Section";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

type VoicesSectionProps = {
    city: City;
    content: FindingsContentType;
};

const quoteWidth = (quote: string) => {
    if (quote.length < 60) return "w-88";
    if (quote.length < 130) return "w-120";
    return "w-152";
};

const quoteText = "text-lg leading-relaxed text-white md:text-xl";

const VoicesSection: React.FC<VoicesSectionProps> = ({ city, content }) => {
    const quotes = content[city].quotes;
    const still = usePrefersReducedMotion();
    const [paused, setPaused] = useState(false);
    const quote = (text: string) => `${content.quoteMarks.open}${text}${content.quoteMarks.close}`;

    return (
        <section aria-labelledby="findings-voices" className="bg-primary py-16 md:py-24">
            <Container>
                <Reveal>
                    <h2
                        id="findings-voices"
                        className="text-3xl font-semibold tracking-tight text-balance text-white md:text-4xl"
                    >
                        {content.sections.voices}
                    </h2>
                </Reveal>
            </Container>

            {still ? (
                <Container className="mt-10 grid gap-8 md:grid-cols-2">
                    {quotes.map((text) => (
                        <blockquote key={text} className={quoteText}>
                            {quote(text)}
                        </blockquote>
                    ))}
                </Container>
            ) : (
                <div
                    tabIndex={0}
                    role="group"
                    aria-labelledby="findings-voices"
                    onPointerUp={(event) => {
                        if (event.pointerType === "touch") setPaused(!paused);
                    }}
                    className="group mt-10"
                >
                    <div className="overflow-hidden pl-[calc(max(0px,50%-var(--container-7xl)/2)+--spacing(4))] [mask-image:linear-gradient(90deg,transparent,#000_5%,#000_95%,transparent)]">
                        <div
                            className={`flex w-max animate-marquee group-hover:[animation-play-state:paused] group-focus-visible:[animation-play-state:paused] ${paused ? "max-lg:[animation-play-state:paused] pointer-coarse:[animation-play-state:paused]" : ""}`}
                        >
                            {[...quotes, ...quotes].map((text, index) => (
                                <blockquote
                                    key={index}
                                    aria-hidden={index >= quotes.length || undefined}
                                    className={`mr-10 max-w-[78vw] shrink-0 border-r border-white/20 py-1 pr-10 ${quoteWidth(text)} ${quoteText}`}
                                >
                                    {quote(text)}
                                </blockquote>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default VoicesSection;
