export const toItems = (
    values: readonly { id: string; value: number }[],
    labels: Readonly<Record<string, string>>
) => values.map(({ id, value }) => ({ id, value, label: labels[id] }));

export const fillCounts = (text: string, total: number, newcomers: number) =>
    text.replace("{total}", String(total)).replace("{newcomers}", String(newcomers));

export const percentFormatter = (language: "en" | "fr") => {
    const numbers = new Intl.NumberFormat(language === "fr" ? "fr-CA" : "en-CA", {
        maximumFractionDigits: 2,
    });
    return (value: number) => `${numbers.format(value)}${language === "fr" ? " %" : "%"}`;
};
