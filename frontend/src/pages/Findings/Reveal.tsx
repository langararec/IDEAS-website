import React from "react";
import { useReveal } from "./useReveal";

type RevealProps = {
    children: React.ReactNode;
    delay?: number;
    className?: string;
};

const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = "" }) => {
    const { ref, revealed } = useReveal<HTMLDivElement>();

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay * 90}ms` }}
            className={`transition-[opacity,transform] duration-600 ease-[cubic-bezier(0.22,0.61,0.36,1)] motion-reduce:transition-none ${revealed ? "opacity-100 translate-y-0" : "opacity-20 translate-y-2.5"} ${className}`}
        >
            {children}
        </div>
    );
};

export default Reveal;
