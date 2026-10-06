import React from "react";
import { useReveal } from "./useReveal";

type AgeColumnsProps = {
    items: { id: string; label: string; value: number }[];
};

const AgeColumns: React.FC<AgeColumnsProps> = ({ items }) => {
    const { ref, revealed } = useReveal<HTMLDListElement>();
    const max = Math.max(...items.map((item) => item.value));

    return (
        <dl
            ref={ref}
            className="grid flex-1 grid-cols-6 grid-rows-[190px_auto] gap-x-0"
        >
            {items.map((item, index) => (
                <div
                    key={item.id}
                    className="row-span-full grid grid-rows-subgrid text-center min-w-0"
                >
                    <div className="flex h-full min-h-0 flex-col items-end justify-end border-b border-ink">
                        <dd
                            style={{ transitionDelay: `${index * 60 + 500}ms` }}
                            className={`mb-1.5 w-full text-[0.8rem] font-semibold tabular-nums text-ink transition-opacity duration-400 motion-reduce:transition-none ${revealed ? "opacity-100" : "opacity-0"}`}
                        >
                            {item.value}%
                        </dd>
                        <div
                            aria-hidden="true"
                            style={{
                                height: revealed ? `calc((100% - 26px) * ${item.value / max})` : 0,
                                transitionDelay: `${index * 60}ms`,
                            }}
                            className="mx-auto w-[56%] max-w-[34px] rounded-t-sm bg-data transition-[height] duration-900 ease-[cubic-bezier(0.22,0.61,0.36,1)] motion-reduce:transition-none"
                        />
                    </div>
                    <dt className="px-0.5 pt-2 text-[0.72rem] leading-tight text-body">{item.label}</dt>
                </div>
            ))}
        </dl>
    );
};

export default AgeColumns;
