export type Language = "en" | "fr";

export type ChartItem = { id: string; label: string; value: number };

export const toItems = (
    values: readonly { id: string; value: number }[],
    labels: Readonly<Record<string, string>>
): ChartItem[] => values.map(({ id, value }) => ({ id, value, label: labels[id] }));

export const fillCounts = (text: string, total: number, newcomers: number) =>
    text.replace("{total}", String(total)).replace("{newcomers}", String(newcomers));

export const localeFor = (language: Language) => (language === "fr" ? "fr-CA" : "en-CA");

export const percentFormatter = (language: Language) => {
    const percent = new Intl.NumberFormat(localeFor(language), {
        style: "percent",
        maximumFractionDigits: 2,
    });
    return (value: number) => percent.format(value / 100);
};
