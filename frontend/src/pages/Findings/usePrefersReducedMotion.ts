import { useEffect, useState } from "react";

export const usePrefersReducedMotion = () => {
    const [still, setStill] = useState(false);

    useEffect(() => {
        const query = window.matchMedia("(prefers-reduced-motion: reduce)");
        setStill(query.matches);

        const update = () => setStill(query.matches);
        query.addEventListener("change", update);
        return () => query.removeEventListener("change", update);
    }, []);

    return still;
};
