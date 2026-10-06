export const toItems = (
    values: readonly { id: string; value: number }[],
    labels: Readonly<Record<string, string>>
) => values.map(({ id, value }) => ({ id, value, label: labels[id] }));

export const fillCounts = (text: string, total: number, newcomers: number) =>
    text.replace("{total}", String(total)).replace("{newcomers}", String(newcomers));
