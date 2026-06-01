const LAST_UPDATED_EN = "Last updated: 15-03-2026";
const LAST_UPDATED_FR = "Dernière mise à jour: 15-03-2026";

function toSeries(
    names: string[],
    data: number[][]
): { name: string; data: number[] }[] {
    return names.map((name, i) => ({
        name,
        data: data.map(row => row[i]),
    }));
}

const responseLabelsEN = ["Str. Disagree", "Disagree", "Neutral", "Agree", "Str. Agree"];
const responseLabelsFR = ["Fort. en désaccord", "En désaccord", "Neutre", "D'accord", "Fort. d'accord"];

// ─── Confidence in working with community ─────────────────────────────────────
// Rows: Q1, Q2, Q3   Cols: [StrDisagree, Disagree, Neutral, Agree, StrAgree]

const confidenceCombined = [
    [0.00,  8.57, 34.29, 48.57,  8.57], // Q1
    [1.43, 11.43, 17.14, 52.86, 17.14], // Q2
    [1.43, 10.00, 35.71, 40.00, 12.86], // Q3
];
const confidenceBurnaby = [
    [0.00,  7.27, 30.91, 50.91, 10.91], // Q1
    [1.82,  9.09, 12.73, 58.18, 18.18], // Q2
    [1.82,  9.09, 32.73, 41.82, 14.55], // Q3
];
const confidenceCourtenay = [
    [0.00, 13.33, 46.67, 40.00,  0.00], // Q1
    [0.00, 20.00, 33.33, 33.33, 13.33], // Q2
    [0.00, 13.33, 46.67, 33.33,  6.67], // Q3
];

// ─── Creating culturally appropriate opportunities ────────────────────────────
// Rows: Q1   Cols: [StrDisagree, Disagree, Neutral, Agree, StrAgree]

const culturalCombined = [
    [0.00, 22.86, 34.29, 31.43, 11.43], // Q1
];
const culturalBurnaby = [
    [0.00, 23.64, 34.55, 29.09, 12.73], // Q1
];
const culturalCourtenay = [
    [0.00, 20.00, 33.33, 40.00,  6.67], // Q1
];

// ─── English ──────────────────────────────────────────────────────────────────
export const en = {
    sectionTitle: "Staff Perception",
    responseLabels: responseLabelsEN,

    confidence: {
        title: "Confidence in working with community",
        questionLabels: [
            "Know and understand community's recreation needs",
            "Well prepared to provide appropriate opportunities",
            "Well prepared to work with underrepresented groups",
        ],
        combined:  { lastUpdated: LAST_UPDATED_EN, series: toSeries(responseLabelsEN, confidenceCombined)  },
        burnaby:   { lastUpdated: LAST_UPDATED_EN, series: toSeries(responseLabelsEN, confidenceBurnaby)   },
        courtenay: { lastUpdated: LAST_UPDATED_EN, series: toSeries(responseLabelsEN, confidenceCourtenay) },
    },

    cultural: {
        title: "Creating culturally appropriate opportunities",
        questionLabels: [
            "Creating culturally appropriate opportunities is a lot of work",
        ],
        combined:  { lastUpdated: LAST_UPDATED_EN, series: toSeries(responseLabelsEN, culturalCombined)  },
        burnaby:   { lastUpdated: LAST_UPDATED_EN, series: toSeries(responseLabelsEN, culturalBurnaby)   },
        courtenay: { lastUpdated: LAST_UPDATED_EN, series: toSeries(responseLabelsEN, culturalCourtenay) },
    },
};

// ─── French ───────────────────────────────────────────────────────────────────
export const fr = {
    sectionTitle: "Perception du personnel",
    responseLabels: responseLabelsFR,

    confidence: {
        title: "Confiance dans le travail avec la communauté",
        questionLabels: [
            "Connaît et comprend les besoins récréatifs de la communauté",
            "Bien préparé à offrir des opportunités appropriées",
            "Bien préparé à travailler avec des groupes sous-représentés",
        ],
        combined:  { lastUpdated: LAST_UPDATED_FR, series: toSeries(responseLabelsFR, confidenceCombined)  },
        burnaby:   { lastUpdated: LAST_UPDATED_FR, series: toSeries(responseLabelsFR, confidenceBurnaby)   },
        courtenay: { lastUpdated: LAST_UPDATED_FR, series: toSeries(responseLabelsFR, confidenceCourtenay) },
    },

    cultural: {
        title: "Créer des opportunités culturellement appropriées",
        questionLabels: [
            "Créer des opportunités culturellement appropriées demande beaucoup de travail",
        ],
        combined:  { lastUpdated: LAST_UPDATED_FR, series: toSeries(responseLabelsFR, culturalCombined)  },
        burnaby:   { lastUpdated: LAST_UPDATED_FR, series: toSeries(responseLabelsFR, culturalBurnaby)   },
        courtenay: { lastUpdated: LAST_UPDATED_FR, series: toSeries(responseLabelsFR, culturalCourtenay) },
    },
};
