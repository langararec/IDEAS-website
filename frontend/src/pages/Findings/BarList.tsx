import React from "react";
import { findingIcons } from "./icons";
import type { ChartItem } from "./items";
import { useReveal } from "./useReveal";

type BarListProps = {
    items: ChartItem[];
    variant: "ethnicity" | "question";
    formatPercent: (value: number) => string;
};

const BarList: React.FC<BarListProps> = ({ items, variant, formatPercent }) => {
    const { ref, revealed } = useReveal<HTMLDListElement>();
    const ethnicity = variant === "ethnicity";
    const max = ethnicity ? Math.max(...items.map((item) => item.value)) : 100;

    return (
        <dl ref={ref} className={`grid ${ethnicity ? "flex-1 content-between gap-3.5" : "gap-3"}`}>
            {items.map((item, index) => (
                <div
                    key={item.id}
                    className={`grid items-center gap-2.5 sm:gap-4 ${ethnicity ? "grid-cols-[7rem_minmax(0,1fr)_3.25rem] sm:grid-cols-[minmax(7rem,9rem)_minmax(0,1fr)_3.5rem]" : "grid-cols-[9.5rem_minmax(0,1fr)_3.25rem] sm:grid-cols-[minmax(9rem,15rem)_minmax(0,1fr)_3.5rem]"}`}
                >
                    <dt className="flex items-center gap-2.5 text-sm leading-tight text-ink sm:text-base">
                        {ethnicity ? null : findingIcons[item.id]}
                        <span>{item.label}</span>
                    </dt>
                    <dd className="col-span-2 grid grid-cols-subgrid items-center">
                        <div
                            className={`relative ${ethnicity ? "h-3" : "h-2 overflow-hidden rounded bg-data-faint"}`}
                            aria-hidden="true"
                        >
                            <div
                                style={{ width: `${(item.value / max) * 100}%`, transitionDelay: `${index * 45}ms` }}
                                className={`absolute inset-y-0 left-0 origin-left bg-data transition-[width,scale] duration-900 ease-reveal motion-reduce:transition-none ${revealed ? "scale-x-100" : "scale-x-0"} ${ethnicity ? "rounded-xs" : "rounded"}`}
                            />
                        </div>
                        <span className="text-right text-sm font-semibold tabular-nums text-ink sm:text-base">
                            {formatPercent(item.value)}
                        </span>
                    </dd>
                </div>
            ))}
        </dl>
    );
};

export default BarList;
