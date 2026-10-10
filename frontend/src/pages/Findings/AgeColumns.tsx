import React from "react";
import type { ChartItem } from "./items";
import { useReveal } from "./useReveal";

type AgeColumnsProps = {
    items: ChartItem[];
    formatPercent: (value: number) => string;
};

const AgeColumns: React.FC<AgeColumnsProps> = ({ items, formatPercent }) => {
    const { ref, revealed } = useReveal<HTMLDListElement>();
    const max = Math.max(...items.map((item) => item.value));

    return (
        <dl ref={ref} className="grid flex-1 grid-cols-6 grid-rows-[12rem_auto]">
            {items.map((item, index) => (
                <div key={item.id} className="row-span-full grid min-w-0 grid-rows-subgrid text-center">
                    <dt className="row-start-2 px-0.5 pt-2 text-xs leading-tight text-body">{item.label}</dt>
                    <dd className="row-start-1 flex h-full min-h-0 flex-col items-center justify-end border-b border-ink">
                        <span
                            style={{ transitionDelay: `${index * 60 + 500}ms` }}
                            className={`mb-1.5 text-xs font-semibold tabular-nums text-ink transition-opacity duration-400 motion-reduce:transition-none ${revealed ? "opacity-100" : "opacity-0"}`}
                        >
                            {formatPercent(item.value)}
                        </span>
                        <span
                            aria-hidden="true"
                            style={{ height: `calc((100% - 1.75rem) * ${item.value / max})`, transitionDelay: `${index * 60}ms` }}
                            className={`w-[56%] max-w-[34px] origin-bottom rounded-t-xs bg-data transition-[height,scale] duration-900 ease-reveal motion-reduce:transition-none ${revealed ? "scale-y-100" : "scale-y-0"}`}
                        />
                    </dd>
                </div>
            ))}
        </dl>
    );
};

export default AgeColumns;
