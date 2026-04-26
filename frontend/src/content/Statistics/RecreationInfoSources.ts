// ─── Key types ────────────────────────────────────────────────────────────────
export type InfoSourceKey =
    | "friendsFamily" | "communityGroups" | "socialMedia" | "posters"
    | "schoolWork" | "newspaper" | "recCenter";

export type ResidencyKey = "lessThan1" | "oneToThree" | "fourToSix" | "moreThan6";

type HeatmapRow = Record<InfoSourceKey, number>;
type HeatmapData = Record<ResidencyKey, HeatmapRow>;

// ─── Column / row ordering ────────────────────────────────────────────────────
const SOURCE_ORDER: InfoSourceKey[] = [
    "friendsFamily", "communityGroups", "socialMedia", "posters",
    "schoolWork", "newspaper", "recCenter",
];

const RESIDENCY_ORDER: ResidencyKey[] = [
    "lessThan1", "oneToThree", "fourToSix", "moreThan6",
];

/** Converts keyed data → 2-D array for <Heatmap /> */
function toValues(data: HeatmapData): number[][] {
    return RESIDENCY_ORDER.map((row) =>
        SOURCE_ORDER.map((col) => data[row][col])
    );
}

// ─── Raw data (keyed, language-independent) ───────────────────────────────────
const ALL_DATA: HeatmapData = {
    lessThan1:  { friendsFamily: 44.12, communityGroups: 20.59, socialMedia: 32.35, posters: 20.59, schoolWork: 14.71, newspaper:  2.94, recCenter: 41.18 },
    oneToThree: { friendsFamily: 55.17, communityGroups: 31.03, socialMedia: 44.83, posters: 20.69, schoolWork: 17.24, newspaper:  3.45, recCenter: 29.31 },
    fourToSix:  { friendsFamily: 54.55, communityGroups: 36.36, socialMedia: 57.58, posters: 30.30, schoolWork: 12.12, newspaper: 12.12, recCenter: 27.27 },
    moreThan6:  { friendsFamily: 54.77, communityGroups: 21.11, socialMedia: 35.68, posters: 37.19, schoolWork: 14.07, newspaper: 11.56, recCenter: 56.28 },
};

const BURNABY_DATA: HeatmapData = {
    lessThan1:  { friendsFamily: 50.00, communityGroups: 25.00, socialMedia: 29.17, posters: 25.00, schoolWork: 12.50, newspaper:  4.17, recCenter: 54.17 },
    oneToThree: { friendsFamily: 33.33, communityGroups: 14.81, socialMedia: 44.44, posters: 11.11, schoolWork:  3.70, newspaper:  3.70, recCenter: 37.04 },
    fourToSix:  { friendsFamily: 59.26, communityGroups: 40.74, socialMedia: 66.67, posters: 25.93, schoolWork: 11.11, newspaper:  7.41, recCenter: 29.63 },
    moreThan6:  { friendsFamily: 49.15, communityGroups: 22.03, socialMedia: 27.97, posters: 38.98, schoolWork: 11.02, newspaper:  9.32, recCenter: 51.69 },
};

const COURTENAY_DATA: HeatmapData = {
    lessThan1:  { friendsFamily: 30.00, communityGroups: 10.00, socialMedia: 40.00, posters: 10.00, schoolWork: 20.00, newspaper:  0.00, recCenter: 10.00 },
    oneToThree: { friendsFamily: 74.19, communityGroups: 45.16, socialMedia: 45.16, posters: 29.03, schoolWork: 29.03, newspaper:  3.23, recCenter: 22.58 },
    fourToSix:  { friendsFamily: 33.33, communityGroups: 16.67, socialMedia: 16.67, posters: 50.00, schoolWork: 16.67, newspaper: 33.33, recCenter: 16.67 },
    moreThan6:  { friendsFamily: 62.96, communityGroups: 19.75, socialMedia: 46.91, posters: 34.57, schoolWork: 18.52, newspaper: 14.81, recCenter: 62.96 },
};

// ─── English content ──────────────────────────────────────────────────────────
export const en = {
    title: "Where do people find recreation information?",
    subtitle:
        "Percentage of respondents (by years of residency) who use each channel to find recreation information",
    heatmapTitle: "Information Sources by Residency Length",
    top3Title: "Top 3 Information Sources",

    rows: [
        "Less than 1 year",
        "1–3 years",
        "4–6 years",
        "More than 6 years",
    ],

    columns: [
        "Friends or family",
        "Community / cultural groups",
        "Social media",
        "Posters / flyers / signs",
        "School or workplace",
        "Local newspaper or radio",
        "Recreation center / city website",
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
    title: "Où les gens trouvent-ils des informations sur les loisirs?",
    subtitle:
        "Pourcentage de répondants (par années de résidence) utilisant chaque canal pour trouver des informations sur les loisirs",
    heatmapTitle: "Sources d'information par durée de résidence",
    top3Title: "Top 3 sources d'information",

    rows: [
        "Moins d'1 an",
        "1–3 ans",
        "4–6 ans",
        "Plus de 6 ans",
    ],

    columns: [
        "Amis ou famille",
        "Groupes communautaires / culturels",
        "Médias sociaux",
        "Affiches / dépliants / panneaux",
        "École ou travail",
        "Journal local ou radio",
        "Centre de loisirs / site de la ville",
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
