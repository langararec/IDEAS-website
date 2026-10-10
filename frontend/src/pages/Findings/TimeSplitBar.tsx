import React from "react";
import type { ChartItem } from "./items";
import { useReveal } from "./useReveal";

type TimeSplitBarProps = {
    items: ChartItem[];
    formatPercent: (value: number) => string;
};

const COLORS = ["var(--color-data)", "var(--color-data-mid)", "var(--color-data-soft)"];
const NARROW_SHARE = 22;

const TimeSplitBar: React.FC<TimeSplitBarProps> = ({ items, formatPercent }) => {
    const { ref, revealed } = useReveal<HTMLDivElement>();
    const narrow = Math.min(...items.map((item) => item.value)) < NARROW_SHARE;

    return (
        <div ref={ref} className="grid gap-3.5">
            <dl className="flex gap-1">
                {items.map((item) => (
                    <div
                        key={item.id}
                        style={{ flex: `0 0 calc(${item.value}% - 3px)` }}
                        className={`grid gap-0.5 pb-2.5 ${narrow ? "max-sm:last:text-right" : ""}`}
                    >
                        <dt className="order-2 text-xs text-body sm:text-sm">{item.label}</dt>
                        <dd
                            className={`order-1 leading-none font-semibold tracking-tight tabular-nums text-primary ${narrow ? "text-xl sm:text-2xl" : "text-3xl"}`}
                        >
                            {formatPercent(item.value)}
                        </dd>
                    </div>
                ))}
            </dl>
            <div className="flex gap-1" aria-hidden="true">
                {items.map((item, index) => (
                    <div key={item.id} style={{ flex: `0 0 calc(${item.value}% - 3px)` }}>
                        <div
                            style={{ background: COLORS[index], transitionDelay: `${index * 120}ms` }}
                            className={`h-2 origin-left rounded transition-transform duration-900 ease-reveal motion-reduce:transition-none ${revealed ? "scale-x-100" : "scale-x-0"}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeSplitBar;
