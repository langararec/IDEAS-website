import { useEffect, useRef, useState } from "react";

let shared: IntersectionObserver | null = null;
const handlers = new Map<Element, () => void>();

const getObserver = () => {
    if (!shared) {
        shared = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;
                    handlers.get(entry.target)?.();
                    handlers.delete(entry.target);
                    shared?.unobserve(entry.target);
                }
            },
            { threshold: 0.18, rootMargin: "0px 0px -6% 0px" }
        );
    }
    return shared;
};

export const useReveal = <T extends Element>() => {
    const ref = useRef<T>(null);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (still || !("IntersectionObserver" in window)) {
            setRevealed(true);
            return;
        }

        const observer = getObserver();
        handlers.set(element, () => setRevealed(true));
        observer.observe(element);

        return () => {
            handlers.delete(element);
            observer.unobserve(element);
        };
    }, []);

    return { ref, revealed };
};
