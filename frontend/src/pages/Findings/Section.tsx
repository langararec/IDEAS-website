import React from "react";
import Reveal from "./Reveal";

type ContainerProps = {
    children: React.ReactNode;
    className?: string;
};

export const Container: React.FC<ContainerProps> = ({ children, className = "" }) => (
    <div className={`mx-auto max-w-7xl px-4 ${className}`}>{children}</div>
);

const TONES = {
    white: "bg-white",
    tint: "bg-base-100",
    fromHero: "bg-linear-to-b from-base-100 to-white to-[length:--spacing(16)] md:to-[length:--spacing(24)]",
};

type SectionProps = {
    title: string;
    intro?: React.ReactNode;
    tone?: keyof typeof TONES;
    children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({ title, intro, tone = "white", children }) => (
    <section className={TONES[tone]}>
        <Container className="grid gap-10 py-16 md:py-24">
            <Reveal className="grid gap-4">
                <h2 className="text-3xl font-semibold tracking-tight text-balance text-primary md:text-4xl">
                    {title}
                </h2>
                {intro}
            </Reveal>
            {children}
        </Container>
    </section>
);

export default Section;
