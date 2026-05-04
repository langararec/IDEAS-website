// ─── Staff — What Draws People to Parks & Recreation? ─────────────────────────
// rows = city groups, columns = motivations (pick up to 3, multi-select)

const WHY_PARKS_COLUMNS_EN = [
    "To relax",
    "To have fun",
    "Family / friends",
    "Exercise / health",
    "Meet new people",
    "Enjoy nature",
    "New skills / activities",
    "Culture / traditions",
];

const WHY_PARKS_COLUMNS_FR = [
    "Se détendre",
    "S'amuser",
    "Famille / amis",
    "Exercice / santé",
    "Rencontrer des gens",
    "Profiter de la nature",
    "Nouvelles compétences",
    "Culture / traditions",
];

// rows: Combined, Burnaby, Courtenay — columns follow WHY_PARKS_COLUMNS order
const VALUES: number[][] = [
    // Combined
    [14.10, 47.44, 46.15, 46.15, 30.77, 14.10, 41.03, 10.26],
    // Burnaby
    [15.63, 45.31, 46.88, 42.19, 26.56, 14.06, 43.75,  9.38],
    // Courtenay
    [ 7.14, 57.14, 42.86, 64.29, 50.00, 14.29, 28.57, 14.29],
];

// ─── Community vs Staff Comparison ──────────────────────────────────────────
// Order matches motivatorLabels below
const MOTIVATOR_LABELS_EN = [
    "Enjoy nature",
    "To have fun",
    "Exercise & stay healthy",
    "Family & friends",
    "To relax",
    "Meet new people",
    "Learn new skills",
    "Culture / tradition",
];

const MOTIVATOR_LABELS_FR = [
    "Profiter de la nature",
    "S'amuser",
    "Exercice / santé",
    "Famille / amis",
    "Se détendre",
    "Rencontrer des gens",
    "Apprendre de nouvelles compétences",
    "Culture / tradition",
];

const COMMUNITY_VALUES = [68, 56, 55, 53, 53, 21, 21, 2.9];
const STAFF_VALUES     = [14, 47, 46, 46, 14, 31, 41, 5];

// Top 3 motivators by community response
const TOP3_LABELS_EN = ["Enjoy nature", "To have fun", "Exercise & stay healthy"];
const TOP3_LABELS_FR = ["Profiter de la nature", "S'amuser", "Exercice / santé"];
const TOP3_COMMUNITY = [68, 56, 55];
const TOP3_STAFF     = [14, 47, 46];

// ─── Barriers to Newcomer Participation ───────────────────────────────────────
const BARRIERS_COLUMNS_EN = [
    "Don't speak English well",
    "Don't know what's available",
    "Don't know where to find info",
    "The cost is high",
    "Don't have time",
    "Hard to get to activities",
    "No one to go with",
    "Activities not interesting",
    "Don't feel welcome",
    "Has physical disability",
];

const BARRIERS_COLUMNS_FR = [
    "Ne parle pas bien anglais",
    "Ne sait pas ce qui est disponible",
    "Ne sait pas où trouver l'info",
    "Le coût est élevé",
    "N'a pas le temps",
    "Difficulté d'accès",
    "Personne pour accompagner",
    "Activités peu intéressantes",
    "Ne se sent pas bienvenu",
    "Handicap physique",
];

// rows: Combined, Burnaby, Courtenay
const BARRIERS_VALUES: number[][] = [
    [56.4, 48.7, 33.3, 32.0, 23.1, 21.8, 11.4, 10.3,  6.4, 2.6], // Combined
    [51.6, 46.9, 31.0, 37.5, 23.4, 23.4,  9.4,  7.8,  4.7, 1.7], // Burnaby
    [78.6, 57.1, 42.9,  7.1, 21.4, 14.3, 21.4, 21.4, 14.3, 0.0], // Courtenay
];

// Community vs Staff barriers comparison (combined)
const BARRIERS_COMMUNITY = [32, 26, 24, 18, 18, 11, 15,  2.9, 5.9, 0];
const BARRIERS_STAFF     = [56, 49, 33, 32, 23, 22, 11, 10.3, 6.4, 2.9];

// ─── English ──────────────────────────────────────────────────────────────────
export const en = {
    heatmapTitle: "What draws people to parks and recreation?",
    rows: ["Combined", "Burnaby", "Courtenay"],
    columns: WHY_PARKS_COLUMNS_EN,
    values: VALUES,
    comparison: {
        title: "Community vs Staff Perceptions: What draws people to parks and recreation activities?",
        motivatorLabels: MOTIVATOR_LABELS_EN,
        communityLabel: "Community",
        staffLabel: "Staff",
        communityValues: COMMUNITY_VALUES,
        staffValues: STAFF_VALUES,
    },
    top3Comparison: {
        title: "Top 3 Community Motivators: Community vs Staff",
        motivatorLabels: TOP3_LABELS_EN,
        communityLabel: "Community",
        staffLabel: "Staff",
        communityValues: TOP3_COMMUNITY,
        staffValues: TOP3_STAFF,
    },
    barriers: {
        title: "What prevents newcomers from participating? — Staff perception",
        rows: ["Combined", "Burnaby", "Courtenay"],
        columns: BARRIERS_COLUMNS_EN,
        values: BARRIERS_VALUES,
    },
    barriersComparison: {
        title: "Community vs Staff: Barriers to Participation",
        motivatorLabels: BARRIERS_COLUMNS_EN,
        communityLabel: "Community",
        staffLabel: "Staff",
        communityValues: BARRIERS_COMMUNITY,
        staffValues: BARRIERS_STAFF,
    },
};

// ─── French ───────────────────────────────────────────────────────────────────
export const fr = {
    heatmapTitle: "Qu'est-ce qui attire les gens dans les parcs et les loisirs\u00a0?",
    rows: ["Combiné", "Burnaby", "Courtenay"],
    columns: WHY_PARKS_COLUMNS_FR,
    values: VALUES,
    comparison: {
        title: "Perceptions communautaires vs personnel\u00a0: Qu'est-ce qui attire les gens dans les parcs et les loisirs\u00a0?",
        motivatorLabels: MOTIVATOR_LABELS_FR,
        communityLabel: "Communauté",
        staffLabel: "Personnel",
        communityValues: COMMUNITY_VALUES,
        staffValues: STAFF_VALUES,
    },
    top3Comparison: {
        title: "Top 3 motivateurs communautaires\u00a0: Communauté vs Personnel",
        motivatorLabels: TOP3_LABELS_FR,
        communityLabel: "Communauté",
        staffLabel: "Personnel",
        communityValues: TOP3_COMMUNITY,
        staffValues: TOP3_STAFF,
    },
    barriers: {
        title: "Qu'est-ce qui empêche les nouveaux arrivants de participer\u00a0? — Perception du personnel",
        rows: ["Combiné", "Burnaby", "Courtenay"],
        columns: BARRIERS_COLUMNS_FR,
        values: BARRIERS_VALUES,
    },    barriersComparison: {
        title: "Communauté vs Personnel : Obstacles à la participation",
        motivatorLabels: BARRIERS_COLUMNS_FR,
        communityLabel: "Communauté",
        staffLabel: "Personnel",
        communityValues: BARRIERS_COMMUNITY,
        staffValues: BARRIERS_STAFF,
    },};
