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
    lessThan1:  { relax: 35.29, fun: 38.24, family: 38.24, exercise: 41.18, newPeople: 11.76, nature: 47.06, newSkills: 11.76, culture:  2.94, community:  8.82, canadianCulture: 11.76 },
    oneToThree: { relax: 27.59, fun: 32.76, family: 25.86, exercise: 25.86, newPeople: 10.34, nature: 36.21, newSkills: 15.52, culture:  5.17, community:  8.62, canadianCulture: 12.07 },
    fourToSix:  { relax: 42.42, fun: 42.42, family: 48.48, exercise: 42.42, newPeople: 12.12, nature: 42.42, newSkills: 21.21, culture: 12.12, community: 21.21, canadianCulture: 12.12 },
    moreThan6:  { relax: 38.19, fun: 35.68, family: 35.68, exercise: 35.18, newPeople:  8.04, nature: 37.69, newSkills: 16.08, culture:  4.52, community: 18.09, canadianCulture:  6.03 },
};

const COURTENAY_DATA: HeatmapData = {
    lessThan1:  { relax: 17.65, fun: 17.65, family: 14.71, exercise: 14.71, newPeople:  8.82, nature: 20.59, newSkills:  8.82, culture:  0.00, community: 11.76, canadianCulture: 14.71 },
    oneToThree: { relax: 44.83, fun: 32.76, family: 36.21, exercise: 29.31, newPeople: 15.52, nature: 37.93, newSkills: 15.52, culture: 10.34, community: 18.97, canadianCulture: 12.07 },
    fourToSix:  { relax:  6.06, fun:  9.09, family:  3.03, exercise: 12.12, newPeople:  3.03, nature: 12.12, newSkills:  6.06, culture:  0.00, community:  3.03, canadianCulture:  0.00 },
    moreThan6:  { relax: 26.13, fun: 26.63, family: 27.14, exercise: 32.16, newPeople:  8.04, nature: 33.17, newSkills: 10.05, culture:  5.03, community: 12.06, canadianCulture:  2.01 },
};

// ─── English content ──────────────────────────────────────────────────────────
export const en = {
    title: "Why do people go to parks and participate in recreation?",
    subtitle:
        "Percentage of respondents (by years of residency) who selected each motivation for visiting parks and participating in recreation activities",
    heatmapTitle: "Participation by Residency Length",
    top3Title: "Top 3 Motivators",

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
