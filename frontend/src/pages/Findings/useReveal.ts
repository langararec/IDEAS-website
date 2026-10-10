import { useEffect, useRef, useState } from "react";
import { REDUCED_MOTION_QUERY } from "./usePrefersReducedMotion";

let shared: IntersectionObserver | null = null;
const handlers = new Map<Element, () => void>();

const settle = (target: Element) => {
    handlers.get(target)?.();
    handlers.delete(target);
    shared?.unobserve(target);
};

const getObserver = () => {
    if (!shared) {
        shared = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    const scrolledPast = entry.boundingClientRect.bottom <= (entry.rootBounds?.top ?? 0);
                    if (entry.isIntersecting || scrolledPast) settle(entry.target);
                }
            },
            { threshold: 0, rootMargin: "0px 0px -12% 0px" }
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

        const still = window.matchMedia(REDUCED_MOTION_QUERY).matches;
        if (still || element.getBoundingClientRect().bottom <= 0) {
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
