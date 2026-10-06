import React from "react";
import { useReveal } from "./useReveal";

type AgeColumnsProps = {
    items: { id: string; label: string; value: number }[];
    formatPercent: (value: number) => string;
};

const AgeColumns: React.FC<AgeColumnsProps> = ({ items, formatPercent }) => {
    const { ref, revealed } = useReveal<HTMLDListElement>();
    const max = Math.max(...items.map((item) => item.value));

    return (
        <dl ref={ref} className="grid flex-1 grid-cols-6 grid-rows-[12rem_auto] gap-x-0">
            {items.map((item, index) => (
                <div
                    key={item.id}
                    className="row-span-full grid min-w-0 grid-rows-subgrid text-center"
                >
                    <dt className="row-start-2 px-0.5 pt-2 text-[0.72rem] leading-tight text-body">
                        {item.label}
                    </dt>
                    <dd className="row-start-1 flex h-full min-h-0 flex-col items-center justify-end border-b border-ink">
                        <span
                            style={{ transitionDelay: `${index * 60 + 500}ms` }}
                            className={`mb-1.5 text-[0.8rem] font-semibold tabular-nums text-ink transition-opacity duration-400 motion-reduce:transition-none ${revealed ? "opacity-100" : "opacity-0"}`}
                        >
                            {formatPercent(item.value)}
                        </span>
                        <span
                            aria-hidden="true"
                            style={{
                                height: revealed ? `calc((100% - 1.75rem) * ${item.value / max})` : 0,
                                transitionDelay: `${index * 60}ms`,
                            }}
                            className="w-[56%] max-w-[34px] rounded-t-sm bg-data transition-[height] duration-900 ease-[cubic-bezier(0.22,0.61,0.36,1)] motion-reduce:transition-none"
                        />
                    </dd>
                </div>
            ))}
        </dl>
    );
};

export default AgeColumns;
