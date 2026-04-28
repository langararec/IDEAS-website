// ─── Key types ────────────────────────────────────────────────────────────────
export type BarrierKey =
    | "noInfo" | "noKnowledge" | "tooCostly" | "noTime" | "notWelcome"
    | "hardToGet" | "noEnglish" | "noCompanion" | "disability"
    | "dontKnowSignUp" | "notInteresting";

export type ResidencyKey = "lessThan1" | "oneToThree" | "fourToSix" | "moreThan6";

type HeatmapRow = Record<BarrierKey, number>;
type HeatmapData = Record<ResidencyKey, HeatmapRow>;

// ─── Column / row ordering ────────────────────────────────────────────────────
const BARRIER_ORDER: BarrierKey[] = [
    "noInfo", "noKnowledge", "tooCostly", "noTime", "notWelcome",
    "hardToGet", "noEnglish", "noCompanion", "disability",
    "dontKnowSignUp", "notInteresting",
];

const RESIDENCY_ORDER: ResidencyKey[] = [
    "lessThan1", "oneToThree", "fourToSix", "moreThan6",
];

/** Converts keyed data → 2-D array for <Heatmap /> */
function toValues(data: HeatmapData): number[][] {
    return RESIDENCY_ORDER.map((row) =>
        BARRIER_ORDER.map((col) => data[row][col])
    );
}

// ─── Raw data (keyed, language-independent) ───────────────────────────────────
const ALL_DATA: HeatmapData = {
    lessThan1:  { noInfo: 23.53, noKnowledge: 26.47, tooCostly: 17.65, noTime: 17.65, notWelcome:  5.88, hardToGet: 11.76, noEnglish: 32.35, noCompanion: 14.71, disability: 0.00, dontKnowSignUp: 17.65, notInteresting:  2.94 },
    oneToThree: { noInfo: 31.03, noKnowledge: 22.41, tooCostly: 25.86, noTime: 25.86, notWelcome:  6.90, hardToGet:  5.17, noEnglish: 22.41, noCompanion: 18.97, disability: 1.72, dontKnowSignUp: 13.79, notInteresting:  6.90 },
    fourToSix:  { noInfo: 12.12, noKnowledge: 15.15, tooCostly:  9.09, noTime: 12.12, notWelcome:  0.00, hardToGet:  0.00, noEnglish: 15.15, noCompanion:  6.06, disability: 3.03, dontKnowSignUp:  0.00, notInteresting:  6.06 },
    moreThan6:  { noInfo:  7.54, noKnowledge: 11.06, tooCostly: 32.16, noTime: 20.10, notWelcome:  3.52, hardToGet: 15.08, noEnglish:  2.51, noCompanion: 11.56, disability: 8.04, dontKnowSignUp:  4.52, notInteresting:  5.03 },
};

const BURNABY_DATA: HeatmapData = {
    lessThan1:  { noInfo: 25.00, noKnowledge: 29.17, tooCostly: 20.83, noTime: 12.50, notWelcome:  8.33, hardToGet:  8.33, noEnglish: 29.17, noCompanion: 16.67, disability: 0.00, dontKnowSignUp: 20.83, notInteresting:  4.17 },
    oneToThree: { noInfo: 25.93, noKnowledge: 25.93, tooCostly: 25.93, noTime: 18.52, notWelcome:  3.70, hardToGet:  0.00, noEnglish: 14.81, noCompanion: 14.81, disability: 0.00, dontKnowSignUp: 18.52, notInteresting:  7.41 },
    fourToSix:  { noInfo: 14.81, noKnowledge: 18.52, tooCostly: 11.11, noTime: 14.81, notWelcome:  0.00, hardToGet:  0.00, noEnglish: 18.52, noCompanion:  7.41, disability: 3.70, dontKnowSignUp:  0.00, notInteresting:  7.41 },
    moreThan6:  { noInfo:  5.93, noKnowledge:  9.32, tooCostly: 33.05, noTime: 19.49, notWelcome:  2.54, hardToGet: 13.56, noEnglish:  1.69, noCompanion: 13.56, disability: 5.93, dontKnowSignUp:  2.54, notInteresting:  6.78 },
};

const COURTENAY_DATA: HeatmapData = {
    lessThan1:  { noInfo: 20.00, noKnowledge: 20.00, tooCostly: 10.00, noTime: 30.00, notWelcome:  0.00, hardToGet: 20.00, noEnglish: 40.00, noCompanion: 10.00, disability: 0.00, dontKnowSignUp: 10.00, notInteresting:  0.00 },
    oneToThree: { noInfo: 35.48, noKnowledge: 19.35, tooCostly: 25.81, noTime: 32.26, notWelcome:  9.68, hardToGet:  9.68, noEnglish: 29.03, noCompanion: 22.58, disability: 3.23, dontKnowSignUp:  9.68, notInteresting:  6.45 },
    fourToSix:  { noInfo:  0.00, noKnowledge:  0.00, tooCostly:  0.00, noTime:  0.00, notWelcome:  0.00, hardToGet:  0.00, noEnglish:  0.00, noCompanion:  0.00, disability: 0.00, dontKnowSignUp:  0.00, notInteresting:  0.00 },
    moreThan6:  { noInfo:  9.88, noKnowledge: 13.58, tooCostly: 30.86, noTime: 20.99, notWelcome:  4.94, hardToGet: 17.28, noEnglish:  3.70, noCompanion:  8.64, disability: 11.11, dontKnowSignUp:  7.41, notInteresting:  2.47 },
};

// ─── English content ──────────────────────────────────────────────────────────
export const en = {
    title: "Why did people have a hard time joining recreation activities?",
    subtitle:
        "Percentage of respondents (by years of residency) who identified each barrier to recreation participation",
    heatmapTitle: "Barriers by Residency Length",
    top3Title: "Top 3 Barriers",

    rows: [
        "Less than 1 year",
        "1–3 years",
        "4–6 years",
        "More than 6 years",
    ],

    columns: [
        "No info on recreation",
        "Don't know what's available",
        "Costs too much",
        "No time",
        "Don't feel welcome",
        "Hard to get there",
        "Don't speak English",
        "No one to go with",
        "Physical disability",
        "Don't know how to sign up",
        "Not interesting",
    ],

    total: {
        lastUpdated: "Last updated: 25/04/2026",
        values: toValues(ALL_DATA),
    },

    burnaby: {
        lastUpdated: "Last updated: 25/04/2026",
        values: toValues(BURNABY_DATA),
    },

    courtenay: {
        lastUpdated: "Last updated: 25/04/2026",
        values: toValues(COURTENAY_DATA),
    },
};

// ─── French content ───────────────────────────────────────────────────────────
export const fr = {
    title: "Pourquoi les gens ont-ils eu du mal à participer aux activités récréatives?",
    subtitle:
        "Pourcentage de répondants (par années de résidence) ayant identifié chaque obstacle à la participation aux loisirs",
    heatmapTitle: "Obstacles par durée de résidence",
    top3Title: "Top 3 obstacles",

    rows: [
        "Moins d'1 an",
        "1–3 ans",
        "4–6 ans",
        "Plus de 6 ans",
    ],

    columns: [
        "Pas d'info sur les loisirs",
        "Ne sait pas ce qui est disponible",
        "Coûte trop cher",
        "Pas de temps",
        "Ne se sent pas bienvenu",
        "Difficile d'accès",
        "Ne parle pas anglais",
        "Personne pour l'accompagner",
        "Handicap physique",
        "Ne sait pas comment s'inscrire",
        "Pas intéressant",
    ],

    total: {
        lastUpdated: "Dernière mise à jour: 25/04/2026",
        values: toValues(ALL_DATA),
    },

    burnaby: {
        lastUpdated: "Dernière mise à jour: 25/04/2026",
        values: toValues(BURNABY_DATA),
    },

    courtenay: {
        lastUpdated: "Dernière mise à jour: 25/04/2026",
        values: toValues(COURTENAY_DATA),
    },
};
