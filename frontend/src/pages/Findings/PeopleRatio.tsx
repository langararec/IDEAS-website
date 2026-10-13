import React from "react";
import { useReveal } from "./useReveal";

type PeopleRatioProps = {
    value: number;
    outOfSix: string;
    statement: string;
};

const PeopleRatio: React.FC<PeopleRatioProps> = ({ value, outOfSix, statement }) => {
    const { ref, revealed } = useReveal<HTMLParagraphElement>();

    return (
        <p ref={ref} className="grid content-start gap-3">
            <span className="flex items-baseline gap-2">
                <span className="text-5xl leading-[0.9] font-semibold tracking-tight tabular-nums text-primary lg:text-6xl">
                    {value}
                </span>
                <span className="font-semibold text-muted">{outOfSix}</span>
            </span>
            <span aria-hidden="true" className="inline-flex items-end gap-1">
                {Array.from({ length: 6 }, (_, index) => (
                    <svg
                        key={index}
                        viewBox="0 0 24 29"
                        style={{ transitionDelay: `${index * 70 + 150}ms` }}
                        className={`h-7 w-auto shrink-0 transition-colors duration-400 motion-reduce:transition-none ${index < value && revealed ? "text-data" : "text-data-faint"}`}
                    >
                        <circle cx="12" cy="4.4" r="3.6" fill="currentColor" />
                        <path
                            fill="currentColor"
                            d="M7.6 9.4h8.8a2.6 2.6 0 0 1 2.6 2.6v6.6a1.3 1.3 0 0 1-2.6 0v-5.2h-.9V27a1.6 1.6 0 0 1-3.2 0v-7.6h-.6V27a1.6 1.6 0 0 1-3.2 0V13.4h-.9v5.2a1.3 1.3 0 0 1-2.6 0V12a2.6 2.6 0 0 1 2.6-2.6z"
                        />
                    </svg>
                ))}
            </span>
            <span className="max-w-[34ch] text-lg text-body">{statement}</span>
        </p>
    );
};

export default PeopleRatio;
