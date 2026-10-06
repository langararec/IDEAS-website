import React from "react";
import { useReveal } from "./useReveal";

type DonutProps = {
    items: { id: string; label: string; value: number }[];
    colors: string[];
    formatPercent: (value: number) => string;
};

const CIRCUMFERENCE = 2 * Math.PI * 40;

const Donut: React.FC<DonutProps> = ({ items, colors, formatPercent }) => {
    const { ref, revealed } = useReveal<HTMLDivElement>();
    let offset = 0;

    return (
        <div
            ref={ref}
            className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-[1.125rem] @max-[250px]:grid-cols-[minmax(0,1fr)] @max-[250px]:justify-items-center @max-[250px]:gap-3.5"
        >
            <svg viewBox="0 0 120 120" aria-hidden="true" className="size-24 -rotate-90">
                {items.map((item, index) => {
                    const length = (item.value / 100) * CIRCUMFERENCE;
                    const dashOffset = -offset;
                    offset += length;
                    return (
                        <circle
                            key={item.id}
                            r="40"
                            cx="60"
                            cy="60"
                            fill="none"
                            strokeWidth="16"
                            stroke={colors[index]}
                            strokeDasharray={`${revealed ? length : 0} ${CIRCUMFERENCE}`}
                            strokeDashoffset={dashOffset}
                            className="transition-[stroke-dasharray] duration-1000 ease-[cubic-bezier(0.22,0.61,0.36,1)] motion-reduce:transition-none"
                        />
                    );
                })}
            </svg>
            <dl className="grid w-full gap-2">
                {items.map((item, index) => (
                    <div key={item.id} className="flex items-center gap-2.5 text-[0.88rem] text-ink">
                        <dt className="flex min-w-0 items-center gap-2.5">
                            <span
                                aria-hidden="true"
                                style={{ background: colors[index] }}
                                className="size-2.5 shrink-0 rounded-full"
                            />
                            {item.label}
                        </dt>
                        <dd className="ml-auto font-semibold tabular-nums">{formatPercent(item.value)}</dd>
                    </div>
                ))}
            </dl>
        </div>
    );
};

export default Donut;
