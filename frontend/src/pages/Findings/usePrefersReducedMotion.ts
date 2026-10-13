import { useEffect, useState } from "react";

export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export const usePrefersReducedMotion = () => {
    const [still, setStill] = useState(() => window.matchMedia(REDUCED_MOTION_QUERY).matches);

    useEffect(() => {
        const query = window.matchMedia(REDUCED_MOTION_QUERY);
        const update = () => setStill(query.matches);
        query.addEventListener("change", update);
        return () => query.removeEventListener("change", update);
    }, []);

    return still;
};
