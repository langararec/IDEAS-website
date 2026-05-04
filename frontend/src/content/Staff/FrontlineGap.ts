const LAST_UPDATED_EN = "Last updated: 15-03-2026";
const LAST_UPDATED_FR = "Dernière mise à jour: 15-03-2026";

// ─── Frequency of Engagement with Immigrant & Racialized Communities ─────────
// Rows order (top → bottom in horizontal bar): Manager, Coordinator, FL Supervisor, Front-line

const roleLabels = [
    "Manager",
    "Coordinator",
    "FL Supervisor",
    "Front-line",
];

const frequencyLabels = ["Daily", "Weekly", "Occasionally", "Rarely"];

// Combined (total) — order: Manager, Coordinator, FL Supervisor, Front-line
const combinedDaily        = [37.5, 53.8, 69.2, 76.2];
const combinedWeekly       = [25.0, 30.8, 30.8,  9.5];
const combinedOccasionally = [37.5, 15.4,  0.0, 11.9];
const combinedRarely       = [ 0.0,  0.0,  0.0,  2.4];

// Burnaby — order: Manager, Coordinator, FL Supervisor, Front-line
const burnabyDaily        = [50.0, 58.3, 72.7, 73.5];
const burnabyWeekly       = [16.7, 25.0, 27.3, 11.8];
const burnabyOccasionally = [33.3, 16.7,  0.0, 14.7];
const burnabyRarely       = [ 0.0,  0.0,  0.0,  0.0];

// Courtenay — order: Manager, Coordinator, FL Supervisor, Front-line
const courtenayDaily        = [ 0.0,  0.0, 50.0, 87.5];
const courtenayWeekly       = [50.0, 100.0, 50.0,  0.0];
const courtenayOccasionally = [50.0,  0.0,  0.0,  0.0];
const courtenayRarely       = [ 0.0,  0.0,  0.0, 12.5];

// ─── Self-Reported EDI Training Participation ─────────────────────────────────
// Rows: Manager, Coordinator, FL Supervisor, Front-line

const ediYesLabels = ["Yes", "No"];

// Combined — order: Manager, Coordinator, FL Supervisor, Front-line
const ediCombinedYes = [100.00, 92.31, 69.23, 62.50];
const ediCombinedNo  = [  0.00,  7.69, 30.77, 37.50];

// Burnaby — order: Manager, Coordinator, FL Supervisor, Front-line
const ediBurnabyYes = [100.00, 91.67, 72.73, 68.75];
const ediBurnabyNo  = [  0.00,  8.33, 27.27, 31.25];

// Courtenay — order: Manager, Coordinator, FL Supervisor, Front-line
const ediCourtenayYes = [100.00, 100.00, 50.00, 37.50];
const ediCourtenayNo  = [  0.00,   0.00, 50.00, 62.50];

// ─── English ──────────────────────────────────────────────────────────────────
export const en = {
    sectionTitle: "Front-line Gap",
    sectionSubtitle: "Staff engagement with immigrant and racialized communities by role",

    ediTrainingParticipation: {
        question: "Self-reported EDI training participation",
        roleLabels,
        yesNoLabels: ediYesLabels,
        combined: {
            lastUpdated: LAST_UPDATED_EN,
            series: [
                { name: "Yes", data: ediCombinedYes },
                { name: "No",  data: ediCombinedNo  },
            ],
        },
        burnaby: {
            lastUpdated: LAST_UPDATED_EN,
            series: [
                { name: "Yes", data: ediBurnabyYes },
                { name: "No",  data: ediBurnabyNo  },
            ],
        },
        courtenay: {
            lastUpdated: LAST_UPDATED_EN,
            series: [
                { name: "Yes", data: ediCourtenayYes },
                { name: "No",  data: ediCourtenayNo  },
            ],
        },
    },

    frequencyOfEngagement: {
        question: "Frequency of engagement with immigrant and racialized communities",
        roleLabels,
        frequencyLabels,
        combined: {
            lastUpdated: LAST_UPDATED_EN,
            series: [
                { name: "Daily",        data: combinedDaily },
                { name: "Weekly",       data: combinedWeekly },
                { name: "Occasionally", data: combinedOccasionally },
                { name: "Rarely",       data: combinedRarely },
            ],
        },
        burnaby: {
            lastUpdated: LAST_UPDATED_EN,
            series: [
                { name: "Daily",        data: burnabyDaily },
                { name: "Weekly",       data: burnabyWeekly },
                { name: "Occasionally", data: burnabyOccasionally },
                { name: "Rarely",       data: burnabyRarely },
            ],
        },
        courtenay: {
            lastUpdated: LAST_UPDATED_EN,
            series: [
                { name: "Daily",        data: courtenayDaily },
                { name: "Weekly",       data: courtenayWeekly },
                { name: "Occasionally", data: courtenayOccasionally },
                { name: "Rarely",       data: courtenayRarely },
            ],
        },
    },
};

// ─── French ───────────────────────────────────────────────────────────────────
export const fr = {
    sectionTitle: "Écart de première ligne",
    sectionSubtitle: "Engagement du personnel envers les communautés immigrantes et racialisées, par rôle",


    ediTrainingParticipation: {
        question: "Participation autodéclarée à une formation EDI",
        roleLabels: [
            "Gestionnaire",
            "Coordonnateur·rice",
            "Superviseur·e de 1ère ligne",
            "Première ligne",
        ],
        yesNoLabels: ["Oui", "Non"],
        combined: {
            lastUpdated: LAST_UPDATED_FR,
            series: [
                { name: "Oui", data: ediCombinedYes },
                { name: "Non", data: ediCombinedNo  },
            ],
        },
        burnaby: {
            lastUpdated: LAST_UPDATED_FR,
            series: [
                { name: "Oui", data: ediBurnabyYes },
                { name: "Non", data: ediBurnabyNo  },
            ],
        },
        courtenay: {
            lastUpdated: LAST_UPDATED_FR,
            series: [
                { name: "Oui", data: ediCourtenayYes },
                { name: "Non", data: ediCourtenayNo  },
            ],
        },
    },

    frequencyOfEngagement: {
        question: "Fréquence d'engagement avec les communautés immigrantes et racialisées",
        roleLabels: [
            "Gestionnaire",
            "Coordonnateur·rice",
            "Superviseur·e de 1ère ligne",
            "Première ligne",
        ],
        frequencyLabels: ["Quotidiennement", "Hebdomadairement", "Occasionnellement", "Rarement"],
        combined: {
            lastUpdated: LAST_UPDATED_FR,
            series: [
                { name: "Quotidiennement",    data: combinedDaily },
                { name: "Hebdomadairement",   data: combinedWeekly },
                { name: "Occasionnellement",  data: combinedOccasionally },
                { name: "Rarement",           data: combinedRarely },
            ],
        },
        burnaby: {
            lastUpdated: LAST_UPDATED_FR,
            series: [
                { name: "Quotidiennement",    data: burnabyDaily },
                { name: "Hebdomadairement",   data: burnabyWeekly },
                { name: "Occasionnellement",  data: burnabyOccasionally },
                { name: "Rarement",           data: burnabyRarely },
            ],
        },
        courtenay: {
            lastUpdated: LAST_UPDATED_FR,
            series: [
                { name: "Quotidiennement",    data: courtenayDaily },
                { name: "Hebdomadairement",   data: courtenayWeekly },
                { name: "Occasionnellement",  data: courtenayOccasionally },
                { name: "Rarement",           data: courtenayRarely },
            ],
        },
    },
};
