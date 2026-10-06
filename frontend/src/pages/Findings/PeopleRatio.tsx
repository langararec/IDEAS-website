import React from "react";
import { useReveal } from "./useReveal";

type PeopleRatioProps = {
    value: number;
    outOfSix: string;
    statement: string;
    large?: boolean;
};

const PeopleRatio: React.FC<PeopleRatioProps> = ({ value, outOfSix, statement, large = false }) => {
    const { ref, revealed } = useReveal<HTMLDivElement>();

    return (
        <div ref={ref} className="grid content-start gap-3">
            <p className="grid gap-3">
                <span className="flex items-baseline gap-2">
                    <span className="text-[clamp(3rem,5.4vw,4.2rem)] font-semibold leading-[0.9] tracking-[-0.03em] tabular-nums text-primary">
                        {value}
                    </span>
                    <span className="text-base font-semibold text-muted">{outOfSix}</span>
                </span>
                <span aria-hidden="true" className="inline-flex items-end gap-1">
                    {Array.from({ length: 6 }, (_, index) => (
                        <svg
                            key={index}
                            viewBox="0 0 24 29"
                            style={{ transitionDelay: `${index * 70 + 150}ms` }}
                            className={`${large ? "h-[31px] w-[26px]" : "h-7 w-[23px]"} shrink-0 transition-colors duration-400 motion-reduce:transition-none ${index < value && revealed ? "text-data" : "text-data-faint"}`}
                        >
                            <circle cx="12" cy="4.4" r="3.6" fill="currentColor" />
                            <path
                                fill="currentColor"
                                d="M7.6 9.4h8.8a2.6 2.6 0 0 1 2.6 2.6v6.6a1.3 1.3 0 0 1-2.6 0v-5.2h-.9V27a1.6 1.6 0 0 1-3.2 0v-7.6h-.6V27a1.6 1.6 0 0 1-3.2 0V13.4h-.9v5.2a1.3 1.3 0 0 1-2.6 0V12a2.6 2.6 0 0 1 2.6-2.6z"
                            />
                        </svg>
                    ))}
                </span>
                <span className="max-w-[34ch] text-[1.1rem] leading-[1.55] text-body">{statement}</span>
            </p>
        </div>
    );
};

export default PeopleRatio;
