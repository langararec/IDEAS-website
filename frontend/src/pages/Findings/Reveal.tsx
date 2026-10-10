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
            className={`transition duration-600 ease-reveal motion-reduce:transition-none ${revealed ? "translate-y-0 opacity-100" : "translate-y-2.5 opacity-20"} ${className}`}
        >
            {children}
        </div>
    );
};

export default Reveal;
