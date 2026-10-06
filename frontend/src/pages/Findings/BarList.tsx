import React from "react";
import { useReveal } from "./useReveal";

export type BarItem = {
    id: string;
    label: string;
    value: number;
    icon?: React.ReactNode;
};

type BarListProps = {
    items: BarItem[];
    variant: "ethnicity" | "question";
};

const BarList: React.FC<BarListProps> = ({ items, variant }) => {
    const { ref, revealed } = useReveal<HTMLDListElement>();
    const ethnicity = variant === "ethnicity";
    const max = ethnicity ? Math.max(...items.map((item) => item.value)) : 100;

    return (
        <dl
            ref={ref}
            className={`grid ${ethnicity ? "flex-1 content-between gap-3.5" : "gap-3"}`}
        >
            {items.map((item, index) => (
                <div
                    key={item.id}
                    className={`grid items-center gap-4 max-[560px]:gap-2.5 ${ethnicity ? "grid-cols-[minmax(7rem,9rem)_minmax(0,1fr)_3.6rem] max-[560px]:grid-cols-[7rem_minmax(0,1fr)_3.2rem]" : "grid-cols-[minmax(9rem,15rem)_minmax(0,1fr)_3.6rem] max-[560px]:grid-cols-[9.5rem_minmax(0,1fr)_3.2rem]"}`}
                >
                    <dt
                        className={`flex items-center gap-2.5 leading-tight text-ink ${ethnicity ? "text-base" : "text-[0.95rem]"}`}
                    >
                        {item.icon}
                        <span>{item.label}</span>
                    </dt>
                    <dd className="col-span-2 grid grid-cols-subgrid items-center">
                        <div
                            className={`relative ${ethnicity ? "h-3" : "h-2 overflow-hidden rounded bg-data-faint"}`}
                            aria-hidden="true"
                        >
                            <div
                                style={{
                                    width: revealed ? `${(item.value / max) * 100}%` : 0,
                                    transitionDelay: `${index * 45}ms`,
                                }}
                                className={`absolute inset-y-0 left-0 bg-data transition-[width] duration-900 ease-[cubic-bezier(0.22,0.61,0.36,1)] motion-reduce:transition-none ${ethnicity ? "rounded-sm" : "rounded"}`}
                            />
                        </div>
                        <span
                            className={`text-right font-semibold tabular-nums text-ink ${ethnicity ? "text-base" : "text-[0.95rem]"}`}
                        >
                            {item.value}%
                        </span>
                    </dd>
                </div>
            ))}
        </dl>
    );
};

export default BarList;
