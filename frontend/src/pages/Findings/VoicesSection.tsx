import React, { useState } from "react";
import type { FindingsContentType } from "../../content/FindingsContent";
import { type City } from "../../content/Findings/data";
import Reveal from "./Reveal";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

type VoicesSectionProps = {
    city: City;
    content: FindingsContentType;
};

const quoteWidth = (quote: string) => {
    if (quote.length < 60) return "min(22rem, 78vw)";
    if (quote.length < 130) return "min(30rem, 78vw)";
    return "min(38rem, 78vw)";
};

const Quote: React.FC<{ quote: string; marks: { open: string; close: string }; hidden?: boolean }> = ({ quote, marks, hidden = false }) => (
    <figure
        aria-hidden={hidden || undefined}
        style={{ width: quoteWidth(quote) }}
        className="mr-[clamp(1.75rem,3vw,2.75rem)] shrink-0 border-r border-white/20 py-1 pr-[clamp(1.75rem,3vw,2.75rem)]"
    >
        <blockquote className="text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.55] text-white">
            {`${marks.open}${quote}${marks.close}`}
        </blockquote>
    </figure>
);

const VoicesSection: React.FC<VoicesSectionProps> = ({ city, content }) => {
    const quotes = content[city].quotes;
    const still = usePrefersReducedMotion();
    const [playing, setPlaying] = useState(true);

    return (
        <section className="bg-primary py-[clamp(3.5rem,7vw,6rem)]">
            <div className="px-[clamp(1.25rem,4vw,3.5rem)]">
                <Reveal className="mx-auto grid max-w-[1160px] gap-4">
                    <h2 className="text-[clamp(1.65rem,2.9vw,2.3rem)] font-semibold leading-[1.12] tracking-[-0.012em] text-pretty text-white">
                        {content.sections.voices}
                    </h2>
                    {still ? null : (
                        <button
                            type="button"
                            onClick={() => setPlaying((value) => !value)}
                            className="w-fit cursor-pointer rounded-lg border border-white/40 px-4 py-1.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
                        >
                            {playing ? content.voices.pause : content.voices.play}
                        </button>
                    )}
                </Reveal>
            </div>

            {still ? (
                <div className="mx-auto mt-10 grid max-w-[1160px] gap-8 px-[clamp(1.25rem,4vw,3.5rem)] md:grid-cols-2">
                    {quotes.map((quote) => (
                        <figure key={quote}>
                            <blockquote className="text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.55] text-white">
                                {`${content.quoteMarks.open}${quote}${content.quoteMarks.close}`}
                            </blockquote>
                        </figure>
                    ))}
                </div>
            ) : (
                <div className="mt-10 overflow-hidden [mask-image:linear-gradient(90deg,#000_0,#000_92%,transparent)] px-[clamp(1.25rem,4vw,3.5rem)]">
                    <div
                        className={`flex w-max animate-marquee focus-within:[animation-play-state:paused] ${playing ? "[animation-play-state:running] hover:[animation-play-state:paused]" : "[animation-play-state:paused]"}`}
                    >
                        {quotes.map((quote) => (
                            <Quote key={quote} quote={quote} marks={content.quoteMarks} />
                        ))}
                        {quotes.map((quote) => (
                            <Quote key={`echo-${quote}`} quote={quote} marks={content.quoteMarks} hidden />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default VoicesSection;
