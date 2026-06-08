// ─── Key types ────────────────────────────────────────────────────────────────
export type SwimComfortKey =
    | "notComfortable" | "littleNervous" | "mostlyComfortable" | "veryConfident";

export type ResidencyKey = "lessThan1" | "oneToThree" | "fourToSix" | "moreThan6";

type HeatmapRow  = Record<SwimComfortKey, number>;
type HeatmapData = Record<ResidencyKey, HeatmapRow>;

// ─── Column / row ordering ────────────────────────────────────────────────────
const COMFORT_ORDER: SwimComfortKey[] = [
    "notComfortable", "littleNervous", "mostlyComfortable", "veryConfident",
];

const RESIDENCY_ORDER: ResidencyKey[] = [
    "lessThan1", "oneToThree", "fourToSix", "moreThan6",
];

/** Converts keyed data → 2-D array for <Heatmap /> */
function toValues(data: HeatmapData): number[][] {
    return RESIDENCY_ORDER.map((row) =>
        COMFORT_ORDER.map((col) => data[row][col])
    );
}

// ─── Raw data (keyed, language-independent) ───────────────────────────────────
const ALL_DATA: HeatmapData = {
    lessThan1:  { notComfortable: 23.5, littleNervous: 35.3, mostlyComfortable: 11.8, veryConfident: 20.6 },
    oneToThree: { notComfortable: 10.3, littleNervous: 34.5, mostlyComfortable: 29.3, veryConfident: 22.4 },
    fourToSix:  { notComfortable:  3.0, littleNervous: 24.2, mostlyComfortable: 39.4, veryConfident: 21.2 },
    moreThan6:  { notComfortable: 11.1, littleNervous: 19.6, mostlyComfortable: 34.2, veryConfident: 33.2 },
};

const BURNABY_DATA: HeatmapData = {
    lessThan1:  { notComfortable: 29.2, littleNervous: 45.8, mostlyComfortable:  8.3, veryConfident:  8.3 },
    oneToThree: { notComfortable:  3.7, littleNervous: 33.3, mostlyComfortable: 48.1, veryConfident: 14.8 },
    fourToSix:  { notComfortable:  3.7, littleNervous: 29.6, mostlyComfortable: 33.3, veryConfident: 22.2 },
    moreThan6:  { notComfortable: 15.3, littleNervous: 23.7, mostlyComfortable: 36.4, veryConfident: 22.0 },
};

const COURTENAY_DATA: HeatmapData = {
    lessThan1:  { notComfortable: 10.0, littleNervous: 10.0, mostlyComfortable: 20.0, veryConfident: 50.0 },
    oneToThree: { notComfortable: 16.1, littleNervous: 35.5, mostlyComfortable: 12.9, veryConfident: 29.0 },
    fourToSix:  { notComfortable:  0.0, littleNervous:  0.0, mostlyComfortable: 66.7, veryConfident: 16.7 },
    moreThan6:  { notComfortable:  4.9, littleNervous: 13.6, mostlyComfortable: 30.9, veryConfident: 49.4 },
};

// ─── English content ──────────────────────────────────────────────────────────
export const en = {
    sectionTitle: "Comfort Going Swimming",
    sectionSubtitle:
        "How comfortable respondents feel going swimming, broken down by time living in BC.",

    comfortHeatmapTitle: "Swimming comfort by time living in BC",

    rows: [
        "Less than 1 year",
        "1–3 years",
        "4–6 years",
        "More than 6 years",
    ],

    comfortColumns: [
        "I do not feel comfortable at all",
        "I feel a little nervous, but I might still go",
        "I feel mostly comfortable",
        "I feel very confident and comfortable",
    ],

    total:    { lastUpdated: "Last updated: 07/06/2026", values: toValues(ALL_DATA)       },
    burnaby:  { lastUpdated: "Last updated: 07/06/2026", values: toValues(BURNABY_DATA)   },
    courtenay:{ lastUpdated: "Last updated: 07/06/2026", values: toValues(COURTENAY_DATA) },
};

// ─── French content ───────────────────────────────────────────────────────────
export const fr = {
    sectionTitle: "Confort pour nager",
    sectionSubtitle:
        "À quel point les répondants se sentent à l'aise pour aller nager, selon le temps de résidence en Colombie-Britannique.",

    comfortHeatmapTitle: "Confort de nage selon la durée de résidence en Colombie-Britannique",

    rows: [
        "Moins d'1 an",
        "1–3 ans",
        "4–6 ans",
        "Plus de 6 ans",
    ],

    comfortColumns: [
        "Je ne me sens pas à l'aise du tout",
        "Je me sens un peu nerveux, mais j'irais quand même",
        "Je me sens généralement à l'aise",
        "Je me sens très confiant et à l'aise",
    ],

    total:    { lastUpdated: "Dernière mise à jour : 07/06/2026", values: toValues(ALL_DATA)       },
    burnaby:  { lastUpdated: "Dernière mise à jour : 07/06/2026", values: toValues(BURNABY_DATA)   },
    courtenay:{ lastUpdated: "Dernière mise à jour : 07/06/2026", values: toValues(COURTENAY_DATA) },
};
