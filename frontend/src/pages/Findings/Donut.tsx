import React from "react";
import type { ChartItem } from "./items";
import { useReveal } from "./useReveal";

type DonutProps = {
    items: ChartItem[];
    formatPercent: (value: number) => string;
};

const COLORS = [
    "var(--color-data)",
    "var(--color-data-soft)",
    "var(--color-data-grey)",
    "var(--color-data-grey-soft)",
];
const RADIUS = 40;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const Donut: React.FC<DonutProps> = ({ items, formatPercent }) => {
    const { ref, revealed } = useReveal<HTMLDivElement>();
    let offset = 0;

    return (
        <div
            ref={ref}
            className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-5 @max-[250px]:grid-cols-1 @max-[250px]:justify-items-center"
        >
            <svg viewBox="0 0 120 120" aria-hidden="true" className="size-28 -rotate-90">
                {items.map((item, index) => {
                    const length = (item.value / 100) * CIRCUMFERENCE;
                    const dashOffset = -offset;
                    offset += length;
                    return (
                        <circle
                            key={item.id}
                            r={RADIUS}
                            cx="60"
                            cy="60"
                            fill="none"
                            strokeWidth="16"
                            stroke={COLORS[index]}
                            strokeDasharray={`${revealed ? length : 0} ${CIRCUMFERENCE}`}
                            strokeDashoffset={dashOffset}
                            className="transition-[stroke-dasharray] duration-1000 ease-reveal motion-reduce:transition-none"
                        />
                    );
                })}
            </svg>
            <dl className="grid w-full gap-2">
                {items.map((item, index) => (
                    <div key={item.id} className="flex items-center gap-2.5 text-sm text-ink">
                        <dt className="flex min-w-0 items-center gap-2.5">
                            <span
                                aria-hidden="true"
                                style={{ background: COLORS[index] }}
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
