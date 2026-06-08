// Rows: residency groups | Columns: barrier reasons (multi-select, totals can exceed 100%)

const ROWS = ["lessThan1", "oneToThree", "fourToSix", "moreThan6"] as const;
type ResidencyKey = typeof ROWS[number];

// 9 barrier columns, row-major: [lessThan1, oneToThree, fourToSix, moreThan6]
const ALL_DATA: Record<ResidencyKey, number[]> = {
    lessThan1:  [20.59, 23.53,  5.88,  5.88,  5.88,  5.88,  2.94,  8.82,  5.88],
    oneToThree: [20.69, 20.69,  8.62,  6.90,  6.90,  6.90,  5.17, 12.07, 10.34],
    fourToSix:  [12.12, 21.21,  6.06,  9.09,  6.06,  6.06,  6.06,  0.00,  6.06],
    moreThan6:  [17.09, 10.05,  3.02,  7.04,  3.52,  5.03,  4.02,  9.55,  4.02],
};

const BURNABY_DATA: Record<ResidencyKey, number[]> = {
    lessThan1:  [25.00, 33.33,  4.17,  8.33,  8.33,  8.33,  4.17,  4.17,  8.33],
    oneToThree: [14.81, 18.52,  3.70,  3.70,  3.70,  3.70,  0.00,  7.41,  3.70],
    fourToSix:  [11.11, 22.22,  7.41, 11.11,  7.41,  7.41,  7.41,  0.00,  7.41],
    moreThan6:  [24.58, 13.56,  4.24, 11.02,  2.54,  5.93,  5.08, 10.17,  5.93],
};

const COURTENAY_DATA: Record<ResidencyKey, number[]> = {
    lessThan1:  [10.00,  0.00, 10.00,  0.00,  0.00,  0.00,  0.00, 20.00,  0.00],
    oneToThree: [25.81, 22.58, 12.90,  9.68,  9.68,  9.68,  9.68, 16.13, 16.13],
    fourToSix:  [16.67, 16.67,  0.00,  0.00,  0.00,  0.00,  0.00,  0.00,  0.00],
    moreThan6:  [ 6.17,  4.94,  1.23,  1.23,  4.94,  3.70,  2.47,  8.64,  1.23],
};

function toValues(data: Record<ResidencyKey, number[]>): number[][] {
    return ROWS.map((row) => data[row]);
}

// ─── English content ──────────────────────────────────────────────────────────
export const en = {
    sectionTitle: "Barriers to Swimming",
    sectionSubtitle:
        "If you don't feel comfortable going swimming, what are the reasons? (Multi-select — totals may exceed 100%.)",

    heatmapTitle: "Swimming barriers by time living in BC",
    top3Title: "Top 3 Swimming Barriers",

    rows: [
        "Less than 1 year",
        "1–3 years",
        "4–6 years",
        "More than 6 years",
    ],

    barrierColumns: [
        "I do not know how to swim",
        "I am worried about safety",
        "I do not feel welcome at the pool or beach",
        "I am uncomfortable with swimwear",
        "I do not see people like me there",
        "I had a bad experience in the past",
        "I am not sure where to go swimming",
        "I do not have anyone to go with me",
        "I am not sure how to access the pool",
    ],

    total:    { lastUpdated: "Last updated: 07/06/2026", values: toValues(ALL_DATA)       },
    burnaby:  { lastUpdated: "Last updated: 07/06/2026", values: toValues(BURNABY_DATA)   },
    courtenay:{ lastUpdated: "Last updated: 07/06/2026", values: toValues(COURTENAY_DATA) },
};

// ─── French content ───────────────────────────────────────────────────────────
export const fr = {
    sectionTitle: "Obstacles à la natation",
    sectionSubtitle:
        "Si vous ne vous sentez pas à l'aise pour aller nager, quelles en sont les raisons? (Choix multiples — les totaux peuvent dépasser 100%.)",

    heatmapTitle: "Obstacles à la natation selon la durée de résidence en Colombie-Britannique",
    top3Title: "Top 3 des obstacles à la natation",

    rows: [
        "Moins d'1 an",
        "1–3 ans",
        "4–6 ans",
        "Plus de 6 ans",
    ],

    barrierColumns: [
        "Je ne sais pas nager",
        "Je suis préoccupé par la sécurité",
        "Je ne me sens pas bienvenu à la piscine ou à la plage",
        "Je suis mal à l'aise avec les maillots de bain",
        "Je ne vois pas de personnes comme moi là-bas",
        "J'ai eu une mauvaise expérience dans le passé",
        "Je ne sais pas où aller nager",
        "Je n'ai personne avec qui y aller",
        "Je ne sais pas comment accéder à la piscine",
    ],

    total:    { lastUpdated: "Dernière mise à jour : 07/06/2026", values: toValues(ALL_DATA)       },
    burnaby:  { lastUpdated: "Dernière mise à jour : 07/06/2026", values: toValues(BURNABY_DATA)   },
    courtenay:{ lastUpdated: "Dernière mise à jour : 07/06/2026", values: toValues(COURTENAY_DATA) },
};
