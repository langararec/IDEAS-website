// ─── Key types ────────────────────────────────────────────────────────────────
export type SwimAbilityKey =
    | "cannotSwim" | "swimLittle" | "swimComfortably" | "strongSwimmer";

export type ResidencyKey = "lessThan1" | "oneToThree" | "fourToSix" | "moreThan6";

type HeatmapRow  = Record<SwimAbilityKey, number>;
type HeatmapData = Record<ResidencyKey, HeatmapRow>;

// ─── Column / row ordering ────────────────────────────────────────────────────
const ABILITY_ORDER: SwimAbilityKey[] = [
    "cannotSwim", "swimLittle", "swimComfortably", "strongSwimmer",
];

const RESIDENCY_ORDER: ResidencyKey[] = [
    "lessThan1", "oneToThree", "fourToSix", "moreThan6",
];

/** Converts keyed data → 2-D array for <Heatmap /> */
function toValues(data: HeatmapData): number[][] {
    return RESIDENCY_ORDER.map((row) =>
        ABILITY_ORDER.map((col) => data[row][col])
    );
}

// ─── Raw data (keyed, language-independent) ───────────────────────────────────
const ALL_DATA: HeatmapData = {
    lessThan1:  { cannotSwim: 23.5, swimLittle: 32.4, swimComfortably: 26.5, strongSwimmer:  8.8 },
    oneToThree: { cannotSwim: 19.0, swimLittle: 31.0, swimComfortably: 34.5, strongSwimmer: 13.8 },
    fourToSix:  { cannotSwim: 12.1, swimLittle: 30.3, swimComfortably: 33.3, strongSwimmer: 12.1 },
    moreThan6:  { cannotSwim: 13.6, swimLittle: 21.6, swimComfortably: 39.2, strongSwimmer: 23.6 },
};

const BURNABY_DATA: HeatmapData = {
    lessThan1:  { cannotSwim: 29.2, swimLittle: 33.3, swimComfortably: 25.0, strongSwimmer:  4.2 },
    oneToThree: { cannotSwim: 14.8, swimLittle: 37.0, swimComfortably: 40.7, strongSwimmer:  7.4 },
    fourToSix:  { cannotSwim: 14.8, swimLittle: 25.9, swimComfortably: 37.0, strongSwimmer: 11.1 },
    moreThan6:  { cannotSwim: 20.3, swimLittle: 22.9, swimComfortably: 38.1, strongSwimmer: 16.1 },
};

const COURTENAY_DATA: HeatmapData = {
    lessThan1:  { cannotSwim: 10.0, swimLittle: 30.0, swimComfortably: 30.0, strongSwimmer: 20.0 },
    oneToThree: { cannotSwim: 22.6, swimLittle: 25.8, swimComfortably: 29.0, strongSwimmer: 19.4 },
    fourToSix:  { cannotSwim:  0.0, swimLittle: 50.0, swimComfortably: 16.7, strongSwimmer: 16.7 },
    moreThan6:  { cannotSwim:  3.7, swimLittle: 19.8, swimComfortably: 40.7, strongSwimmer: 34.6 },
};

// ─── English content ──────────────────────────────────────────────────────────
export const en = {
    sectionTitle: "Swimming ability, comfort and barriers",
    sectionSubtitle:
        "Three interconnected questions about how people relate to aquatic recreation; their ability, their confidence and what stops them from going.",

    abilityHeatmapTitle: "Swimming ability by time living in BC",
    top3Title: "Top 3 Ability Levels",
    trendsTitle: "Trends Across Residency Length",
    trendsSubtitle:
        "How swimming ability shifts as respondents spend more years in their community (Less than 1 year → More than 6 years)",
    risingTitle: "Rising ↑",
    decliningTitle: "Declining ↓",

    rows: [
        "Less than 1 year",
        "1–3 years",
        "4–6 years",
        "More than 6 years",
    ],

    abilityColumns: [
        "I cannot swim",
        "I can swim a little",
        "I can swim comfortably",
        "I am a strong swimmer",
    ],

    total:    { lastUpdated: "Last updated: 07/06/2026", values: toValues(ALL_DATA)      },
    burnaby:  { lastUpdated: "Last updated: 07/06/2026", values: toValues(BURNABY_DATA)  },
    courtenay:{ lastUpdated: "Last updated: 07/06/2026", values: toValues(COURTENAY_DATA)},
};

// ─── French content ───────────────────────────────────────────────────────────
export const fr = {
    sectionTitle: "Capacité, confort et obstacles à la natation",
    sectionSubtitle:
        "Trois questions interconnectées sur la relation des gens avec les loisirs aquatiques : leur capacité, leur confiance et ce qui les empêche d'y participer.",

    abilityHeatmapTitle: "Capacité de nage selon la durée de résidence en Colombie-Britannique",
    top3Title: "Top 3 niveaux de capacité",
    trendsTitle: "Tendances selon la durée de résidence",
    trendsSubtitle:
        "Comment la capacité de nage évolue à mesure que les répondants passent plus d'années dans leur communauté (Moins d'1 an → Plus de 6 ans)",
    risingTitle: "En hausse ↑",
    decliningTitle: "En baisse ↓",

    rows: [
        "Moins d'1 an",
        "1–3 ans",
        "4–6 ans",
        "Plus de 6 ans",
    ],

    abilityColumns: [
        "Je ne sais pas nager",
        "Je sais un peu nager",
        "Je nage confortablement",
        "Je suis un nageur·euse fort·e",
    ],

    total:    { lastUpdated: "Dernière mise à jour: 07/06/2026", values: toValues(ALL_DATA)      },
    burnaby:  { lastUpdated: "Dernière mise à jour: 07/06/2026", values: toValues(BURNABY_DATA)  },
    courtenay:{ lastUpdated: "Dernière mise à jour: 07/06/2026", values: toValues(COURTENAY_DATA)},
};
