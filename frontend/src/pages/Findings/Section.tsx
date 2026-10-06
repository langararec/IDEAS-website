import React from "react";

type SectionProps = {
    children: React.ReactNode;
    tone?: boolean;
    className?: string;
};

const Section: React.FC<SectionProps> = ({ children, tone = false, className = "" }) => (
    <section
        className={`px-[clamp(1.25rem,4vw,3.5rem)] py-[clamp(3.5rem,8vw,7rem)] ${tone ? "bg-white" : ""} ${className}`}
    >
        <div className="mx-auto max-w-[1160px]">{children}</div>
    </section>
);

export default Section;
