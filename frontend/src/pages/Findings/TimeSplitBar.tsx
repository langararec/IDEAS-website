import React from "react";
import { useReveal } from "./useReveal";

type TimeSplitBarProps = {
    items: { id: string; label: string; value: number }[];
    formatPercent: (value: number) => string;
};

const COLORS = ["var(--color-data)", "var(--color-data-mid)", "var(--color-data-soft)"];

const TimeSplitBar: React.FC<TimeSplitBarProps> = ({ items, formatPercent }) => {
    const { ref, revealed } = useReveal<HTMLDivElement>();
    const tight = Math.min(...items.map((item) => item.value)) < 22;

    return (
        <div ref={ref} className="grid gap-3.5">
            <dl className="flex gap-1">
                {items.map((item) => (
                    <div
                        key={item.id}
                        style={{ flex: `0 0 calc(${item.value}% - 3px)` }}
                        className="grid gap-0.5 pb-2.5"
                    >
                        <dt className="order-2 text-[0.86rem] text-body">{item.label}</dt>
                        <dd
                            className={`order-1 font-semibold leading-none tracking-tight tabular-nums text-primary ${tight ? "text-[clamp(1.05rem,1.9vw,1.45rem)]" : "text-[clamp(1.5rem,2.4vw,1.9rem)]"}`}
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
                            style={{
                                background: COLORS[index],
                                transitionDelay: `${index * 120}ms`,
                                transform: revealed ? "scaleX(1)" : "scaleX(0)",
                            }}
                            className="h-2 origin-left rounded transition-transform duration-900 ease-[cubic-bezier(0.22,0.61,0.36,1)] motion-reduce:transition-none"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimeSplitBar;
