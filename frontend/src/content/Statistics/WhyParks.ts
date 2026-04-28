// ─── Key types ────────────────────────────────────────────────────────────────
export type MotivationKey =
    | "relax" | "fun" | "family" | "exercise" | "newPeople"
    | "nature" | "newSkills" | "culture" | "community" | "canadianCulture";

export type ResidencyKey = "lessThan1" | "oneToThree" | "fourToSix" | "moreThan6";

type HeatmapRow = Record<MotivationKey, number>;
type HeatmapData = Record<ResidencyKey, HeatmapRow>;

// ─── Column / row ordering (drives both labels and values[][] order) ──────────
const MOTIVATION_ORDER: MotivationKey[] = [
    "relax", "fun", "family", "exercise", "newPeople",
    "nature", "newSkills", "culture", "community", "canadianCulture",
];

const RESIDENCY_ORDER: ResidencyKey[] = [
    "lessThan1", "oneToThree", "fourToSix", "moreThan6",
];

/** Converts keyed data → 2-D array for <Heatmap /> */
function toValues(data: HeatmapData): number[][] {
    return RESIDENCY_ORDER.map((row) =>
        MOTIVATION_ORDER.map((col) => data[row][col])
    );
}

// ─── Raw data (keyed, language-independent) ───────────────────────────────────
const ALL_DATA: HeatmapData = {
    lessThan1:  { relax: 52.94, fun: 55.88, family: 52.94, exercise: 55.88, newPeople: 20.59, nature: 67.65, newSkills: 20.59, culture:  2.94, community: 20.59, canadianCulture: 26.47 },
    oneToThree: { relax: 72.41, fun: 65.52, family: 62.07, exercise: 55.17, newPeople: 25.86, nature: 74.14, newSkills: 31.03, culture: 15.52, community: 27.59, canadianCulture: 24.14 },
    fourToSix:  { relax: 48.48, fun: 51.52, family: 51.52, exercise: 54.55, newPeople: 15.15, nature: 54.55, newSkills: 27.27, culture: 12.12, community: 24.24, canadianCulture: 12.12 },
    moreThan6:  { relax: 64.32, fun: 62.31, family: 62.81, exercise: 67.34, newPeople: 16.08, nature: 70.85, newSkills: 26.13, culture:  9.55, community: 30.15, canadianCulture:  8.04 },
};

const BURNABY_DATA: HeatmapData = {
    lessThan1:  { relax: 50.00, fun: 54.17, family: 54.17, exercise: 58.33, newPeople: 16.67, nature: 66.67, newSkills: 16.67, culture:  4.17, community: 12.50, canadianCulture: 16.67 },
    oneToThree: { relax: 59.26, fun: 70.37, family: 55.56, exercise: 55.56, newPeople: 22.22, nature: 77.78, newSkills: 33.33, culture: 11.11, community: 18.52, canadianCulture: 25.93 },
    fourToSix:  { relax: 51.85, fun: 51.85, family: 59.26, exercise: 51.85, newPeople: 14.81, nature: 51.85, newSkills: 25.93, culture: 14.81, community: 25.93, canadianCulture: 14.81 },
    moreThan6:  { relax: 64.41, fun: 60.17, family: 60.17, exercise: 59.32, newPeople: 13.56, nature: 63.56, newSkills: 27.12, culture:  7.63, community: 30.51, canadianCulture: 10.17 },
};

const COURTENAY_DATA: HeatmapData = {
    lessThan1:  { relax: 60.00, fun: 60.00, family: 50.00, exercise: 50.00, newPeople: 30.00, nature: 70.00, newSkills: 30.00, culture:  0.00, community: 40.00, canadianCulture: 50.00 },
    oneToThree: { relax: 83.87, fun: 61.29, family: 67.74, exercise: 54.84, newPeople: 29.03, nature: 70.97, newSkills: 29.03, culture: 19.35, community: 35.48, canadianCulture: 22.58 },
    fourToSix:  { relax: 33.33, fun: 50.00, family: 16.67, exercise: 66.67, newPeople: 16.67, nature: 66.67, newSkills: 33.33, culture:  0.00, community: 16.67, canadianCulture:  0.00 },
    moreThan6:  { relax: 64.20, fun: 65.43, family: 66.67, exercise: 79.01, newPeople: 19.75, nature: 81.48, newSkills: 24.69, culture: 12.35, community: 29.63, canadianCulture:  4.94 },
};

// ─── English content ──────────────────────────────────────────────────────────
export const en = {
    title: "Why do people go to parks and participate in recreation?",
    subtitle:
        "Percentage of respondents (by years of residency) who selected each motivation for visiting parks and participating in recreation activities",
    heatmapTitle: "Participation by Residency Length",
    top3Title: "Top 3 Motivators",
    trendsTitle: "Trends Across Residency Length",
    trendsSubtitle: "How motivation rates shift as respondents spend more years in their community (Less than 1 year → More than 6 years)",
    risingTitle: "Rising ↑",
    decliningTitle: "Declining ↓",

    rows: [
        "Less than 1 year",
        "1–3 years",
        "4–6 years",
        "More than 6 years",
    ],

    columns: [
        "To relax",
        "To have fun",
        "Family / friends",
        "Exercise / health",
        "Meet new people",
        "Enjoy nature",
        "Learn new skills",
        "Culture / tradition",
        "Connect with community",
        "Learn Canadian culture",
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
    title: "Pourquoi les gens vont-ils dans les parcs et participent-ils aux loisirs?",
    subtitle:
        "Pourcentage de répondants (par années de résidence) ayant sélectionné chaque motivation pour visiter les parcs et participer aux activités récréatives",
    heatmapTitle: "Participation par durée de résidence",
    top3Title: "Top 3 motivateurs",
    trendsTitle: "Tendances selon la durée de résidence",
    trendsSubtitle: "Évolution des taux de motivation au fil des années de résidence dans la communauté (Moins d'1 an → Plus de 6 ans)",
    risingTitle: "En hausse ↑",
    decliningTitle: "En baisse ↓",

    rows: [
        "Moins d'1 an",
        "1–3 ans",
        "4–6 ans",
        "Plus de 6 ans",
    ],

    columns: [
        "Se détendre",
        "S'amuser",
        "Famille / amis",
        "Exercice / santé",
        "Rencontrer des gens",
        "Profiter de la nature",
        "Apprendre de nouvelles compétences",
        "Culture / tradition",
        "Se connecter à la communauté",
        "Découvrir la culture canadienne",
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
