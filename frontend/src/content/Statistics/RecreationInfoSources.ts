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

// ─── Recreation Activities data ─────────────────────────────────────────────
// Cols: Sports, Swimming, Skating, Arts/Music/Dance, Parks/Playgrounds,
//       Fitness Classes, Community Events, Drop-in at Rec Center

type ActivityKey =
    | "sports" | "swimming" | "skating" | "arts"
    | "parks" | "fitness" | "communityEvents" | "dropIn";

const ACTIVITY_ORDER: ActivityKey[] = [
    "sports", "swimming", "skating", "arts",
    "parks", "fitness", "communityEvents", "dropIn",
];

type ActivityRow = Record<ActivityKey, number>;
type ActivityData = Record<ResidencyKey, ActivityRow>;

function toActivityValues(data: ActivityData): number[][] {
    return RESIDENCY_ORDER.map((row) =>
        ACTIVITY_ORDER.map((col) => data[row][col])
    );
}

const ALL_ACTIVITY_DATA: ActivityData = {
    lessThan1:  { sports: 32.4, swimming: 44.1, skating: 23.5, arts: 26.5, parks: 73.5, fitness: 23.5, communityEvents: 29.4, dropIn: 14.7 },
    oneToThree: { sports: 22.4, swimming: 48.3, skating: 19.0, arts: 32.8, parks: 65.5, fitness: 24.1, communityEvents: 39.7, dropIn: 27.6 },
    fourToSix:  { sports: 39.4, swimming: 51.5, skating: 24.2, arts: 24.2, parks: 60.6, fitness: 39.4, communityEvents: 51.5, dropIn: 27.3 },
    moreThan6:  { sports: 40.7, swimming: 60.8, skating: 27.1, arts: 35.2, parks: 77.9, fitness: 45.7, communityEvents: 59.8, dropIn: 49.2 },
};

const BURNABY_ACTIVITY_DATA: ActivityData = {
    lessThan1:  { sports: 29.2, swimming: 41.7, skating: 20.8, arts: 29.2, parks: 79.2, fitness: 25.0, communityEvents: 29.2, dropIn: 16.7 },
    oneToThree: { sports: 14.8, swimming: 55.6, skating: 22.2, arts: 29.6, parks: 66.7, fitness: 25.9, communityEvents: 37.0, dropIn: 37.0 },
    fourToSix:  { sports: 37.0, swimming: 51.9, skating: 18.5, arts: 29.6, parks: 59.3, fitness: 37.0, communityEvents: 51.9, dropIn: 22.2 },
    moreThan6:  { sports: 40.7, swimming: 54.2, skating: 23.7, arts: 33.1, parks: 76.3, fitness: 40.7, communityEvents: 59.3, dropIn: 44.9 },
};

const COURTENAY_ACTIVITY_DATA: ActivityData = {
    lessThan1:  { sports: 40.0, swimming: 50.0, skating: 30.0, arts: 20.0, parks: 60.0, fitness: 20.0, communityEvents: 30.0, dropIn: 10.0 },
    oneToThree: { sports: 29.0, swimming: 41.9, skating: 16.1, arts: 35.5, parks: 64.5, fitness: 22.6, communityEvents: 41.9, dropIn: 19.4 },
    fourToSix:  { sports: 50.0, swimming: 50.0, skating: 50.0, arts:  0.0, parks: 66.7, fitness: 50.0, communityEvents: 50.0, dropIn: 50.0 },
    moreThan6:  { sports: 40.7, swimming: 70.4, skating: 32.1, arts: 38.3, parks: 80.2, fitness: 53.1, communityEvents: 60.5, dropIn: 55.6 },
};

// ─── English content ──────────────────────────────────────────────────────────
export const en = {
    title: "Recreation Engagement: How people find out about recreation activities and what did people/family participated in?",
    subtitle:
        "Percentage of respondents (by years of residency) who use each channel to find recreation information",
    heatmapTitle: "Information Sources by Residency Length",
    top3Title: "Top 3 Information Sources",
    activitiesHeatmapTitle: "What recreation activities have people participated?",
    activitiesTop3Title: "Top 3 Recreation Activities",
    activitiesColumns: [
        "Sports",
        "Swimming",
        "Skating",
        "Arts, Music and Dance Classes",
        "Visiting Parks and Playgrounds",
        "Fitness Classes (e.g. yoga, cycling)",
        "Attended Community Events or Festivals",
        "Drop-in Activities at a Recreation Center",
    ],
    activitiesTotal:    { lastUpdated: "Last updated: 25/04/2026", values: toActivityValues(ALL_ACTIVITY_DATA) },
    activitiesBurnaby:  { lastUpdated: "Last updated: 25/04/2026", values: toActivityValues(BURNABY_ACTIVITY_DATA) },
    activitiesCourtenay: { lastUpdated: "Last updated: 25/04/2026", values: toActivityValues(COURTENAY_ACTIVITY_DATA) },

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
    title: "Engagement récréatif : Comment les gens découvrent les activités récréatives et à quoi ont participé les gens/famille ?",
    subtitle:
        "Pourcentage de répondants (par années de résidence) utilisant chaque canal pour trouver des informations sur les loisirs",
    heatmapTitle: "Sources d'information par durée de résidence",
    top3Title: "Top 3 sources d'information",
    activitiesHeatmapTitle: "À quelles activités récréatives les gens ont-ils participé?",
    activitiesTop3Title: "Top 3 activités récréatives",
    activitiesColumns: [
        "Sports",
        "Natation",
        "Patinage",
        "Cours d'arts, musique et danse",
        "Visites de parcs et terrains de jeux",
        "Cours de conditionnement physique (p. ex. yoga, vélo)",
        "Événements ou festivals communautaires",
        "Activités libres dans un centre de loisirs",
    ],
    activitiesTotal:    { lastUpdated: "Dernière mise à jour: 25/04/2026", values: toActivityValues(ALL_ACTIVITY_DATA) },
    activitiesBurnaby:  { lastUpdated: "Dernière mise à jour: 25/04/2026", values: toActivityValues(BURNABY_ACTIVITY_DATA) },
    activitiesCourtenay: { lastUpdated: "Dernière mise à jour: 25/04/2026", values: toActivityValues(COURTENAY_ACTIVITY_DATA) },

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
