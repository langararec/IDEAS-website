const LAST_UPDATED_EN = "Last updated: 15-03-2026";
const LAST_UPDATED_FR = "Dernière mise à jour: 15-03-2026";

// Helper: transpose data matrix [questions × responses] into chart series
// data[q][r] → series[r].data[q]
function toSeries(
    names: string[],
    data: number[][]
): { name: string; data: number[] }[] {
    return names.map((name, i) => ({
        name,
        data: data.map(row => row[i]),
    }));
}

// ─── Response option names (shared) ───────────────────────────────────────────
const responseLabelsEN = ["Str. Disagree", "Disagree", "Neutral", "Agree", "Str. Agree"];
const responseLabelsFR = ["Fort. en désaccord", "En désaccord", "Neutre", "D'accord", "Fort. d'accord"];

// ─── BELONGING ────────────────────────────────────────────────────────────────
// Rows: Q1, Q2, Q3   Cols: [StrDisagree, Disagree, Neutral, Agree, StrAgree]

const belongingCombined = [
    [0.00,  7.69, 10.77, 50.77, 30.77], // Q1
    [0.00,  2.86, 10.00, 32.86, 54.29], // Q2
    [0.00,  2.86, 17.14, 54.29, 25.71], // Q3
];
const belongingBurnaby = [
    [0.00,  7.69, 11.54, 46.15, 34.62], // Q1
    [0.00,  0.00, 10.91, 32.73, 56.36], // Q2
    [0.00,  1.82, 16.36, 52.73, 29.09], // Q3
];
const belongingCourtenay = [
    [0.00,  7.69,  7.69, 69.23, 15.38], // Q1
    [0.00, 13.33,  6.67, 33.33, 46.67], // Q2
    [0.00,  6.67, 20.00, 60.00, 13.33], // Q3
];

// ─── DIGNITY ──────────────────────────────────────────────────────────────────
// Rows: Q4, Q5, Q6

const dignityCombined = [
    [0.00,  8.57, 34.29, 48.57,  8.57], // Q4
    [1.43, 11.43, 17.14, 52.86, 17.14], // Q5
    [0.00, 22.86, 34.29, 31.43, 11.43], // Q6
];
const dignityBurnaby = [
    [0.00,  7.27, 30.91, 50.91, 10.91], // Q4
    [1.82,  9.09, 12.73, 58.18, 18.18], // Q5
    [0.00, 23.64, 34.55, 29.09, 12.73], // Q6
];
const dignityCourtenay = [
    [0.00, 13.33, 46.67, 40.00,  0.00], // Q4
    [0.00, 20.00, 33.33, 33.33, 13.33], // Q5
    [0.00, 20.00, 33.33, 40.00,  6.67], // Q6
];

// ─── JUSTICE ──────────────────────────────────────────────────────────────────
// Rows: Q7, Q8

const justiceCombined = [
    [1.43, 14.29, 30.00, 37.14, 17.14], // Q7
    [1.43,  4.29, 35.71, 37.14, 21.43], // Q8
];
const justiceBurnaby = [
    [0.00, 16.36, 27.27, 36.36, 20.00], // Q7
    [1.82,  5.45, 36.36, 36.36, 20.00], // Q8
];
const justiceCourtenay = [
    [6.67,  6.67, 40.00, 40.00,  6.67], // Q7
    [0.00,  0.00, 33.33, 40.00, 26.67], // Q8
];

// ─── DIGNITY + JUSTICE ────────────────────────────────────────────────────────
// Rows: Q9, Q10, Q11, Q12, Q13

const dignityJusticeCombined = [
    [1.43,  0.00, 14.29, 38.57, 45.71], // Q9
    [4.35,  8.70, 34.78, 40.58, 11.59], // Q10
    [1.43, 15.71, 28.57, 44.29, 10.00], // Q11
    [1.43, 10.00, 35.71, 40.00, 12.86], // Q12
    [0.00,  7.14, 31.43, 48.57, 12.86], // Q13
];
const dignityJusticeBurnaby = [
    [1.82,  0.00, 14.55, 32.73, 50.91], // Q9
    [5.56,  9.26, 38.89, 37.04,  9.26], // Q10
    [1.82, 14.55, 27.27, 45.45, 10.91], // Q11
    [1.82,  9.09, 32.73, 41.82, 14.55], // Q12
    [0.00,  7.27, 27.27, 50.91, 14.55], // Q13
];
const dignityJusticeCourtenay = [
    [0.00,  0.00, 13.33, 60.00, 26.67], // Q9
    [0.00,  6.67, 20.00, 53.33, 20.00], // Q10
    [0.00, 20.00, 33.33, 40.00,  6.67], // Q11
    [0.00, 13.33, 46.67, 33.33,  6.67], // Q12
    [0.00,  6.67, 46.67, 40.00,  6.67], // Q13
];

// ─── English ──────────────────────────────────────────────────────────────────
export const en = {
    sectionTitle: "Belonging, Dignity and Justice in Recreation",
    sectionSubtitle: "Staff perspective on recreation access and inclusivity",
    responseLabels: responseLabelsEN,

    belonging: {
        title: "Belonging",
        questionLabels: [
            "Programs promote sense of belonging",
            "Diverse members participate",
            "Community members feel welcome",
        ],
        combined:  { lastUpdated: LAST_UPDATED_EN, series: toSeries(responseLabelsEN, belongingCombined)  },
        burnaby:   { lastUpdated: LAST_UPDATED_EN, series: toSeries(responseLabelsEN, belongingBurnaby)   },
        courtenay: { lastUpdated: LAST_UPDATED_EN, series: toSeries(responseLabelsEN, belongingCourtenay) },
    },

    dignity: {
        title: "Dignity",
        questionLabels: [
            "Know community's recreation needs",
            "Well prepared to provide opportunities",
            "Culturally appropriate recreation is hard work",
        ],
        combined:  { lastUpdated: LAST_UPDATED_EN, series: toSeries(responseLabelsEN, dignityCombined)  },
        burnaby:   { lastUpdated: LAST_UPDATED_EN, series: toSeries(responseLabelsEN, dignityBurnaby)   },
        courtenay: { lastUpdated: LAST_UPDATED_EN, series: toSeries(responseLabelsEN, dignityCourtenay) },
    },

    justice: {
        title: "Justice",
        questionLabels: [
            "Community has easy access to information",
            "Adequate financial supports exist",
        ],
        combined:  { lastUpdated: LAST_UPDATED_EN, series: toSeries(responseLabelsEN, justiceCombined)  },
        burnaby:   { lastUpdated: LAST_UPDATED_EN, series: toSeries(responseLabelsEN, justiceBurnaby)   },
        courtenay: { lastUpdated: LAST_UPDATED_EN, series: toSeries(responseLabelsEN, justiceCourtenay) },
    },

    dignityJustice: {
        title: "Dignity + Justice",
        questionLabels: [
            "Large variety of activities and spaces",
            "Community can easily provide feedback",
            "Community co-creates opportunities",
            "Prepared to work with underrepresented groups",
            "Easy ways to adapt for inclusivity",
        ],
        combined:  { lastUpdated: LAST_UPDATED_EN, series: toSeries(responseLabelsEN, dignityJusticeCombined)  },
        burnaby:   { lastUpdated: LAST_UPDATED_EN, series: toSeries(responseLabelsEN, dignityJusticeBurnaby)   },
        courtenay: { lastUpdated: LAST_UPDATED_EN, series: toSeries(responseLabelsEN, dignityJusticeCourtenay) },
    },
};

// ─── French ───────────────────────────────────────────────────────────────────
export const fr = {
    sectionTitle: "Appartenance, dignité et justice en loisir",
    sectionSubtitle: "Perspective du personnel sur l'accès aux loisirs et l'inclusivité",
    responseLabels: responseLabelsFR,

    belonging: {
        title: "Appartenance",
        questionLabels: [
            "Les programmes favorisent l'appartenance",
            "Des membres diversifiés participent",
            "Les membres se sentent bienvenus",
        ],
        combined:  { lastUpdated: LAST_UPDATED_FR, series: toSeries(responseLabelsFR, belongingCombined)  },
        burnaby:   { lastUpdated: LAST_UPDATED_FR, series: toSeries(responseLabelsFR, belongingBurnaby)   },
        courtenay: { lastUpdated: LAST_UPDATED_FR, series: toSeries(responseLabelsFR, belongingCourtenay) },
    },

    dignity: {
        title: "Dignité",
        questionLabels: [
            "Connaissance des besoins récréatifs",
            "Bien préparé à offrir des opportunités",
            "Loisir culturellement approprié demande des efforts",
        ],
        combined:  { lastUpdated: LAST_UPDATED_FR, series: toSeries(responseLabelsFR, dignityCombined)  },
        burnaby:   { lastUpdated: LAST_UPDATED_FR, series: toSeries(responseLabelsFR, dignityBurnaby)   },
        courtenay: { lastUpdated: LAST_UPDATED_FR, series: toSeries(responseLabelsFR, dignityCourtenay) },
    },

    justice: {
        title: "Justice",
        questionLabels: [
            "Accès facile aux informations",
            "Soutiens financiers adéquats",
        ],
        combined:  { lastUpdated: LAST_UPDATED_FR, series: toSeries(responseLabelsFR, justiceCombined)  },
        burnaby:   { lastUpdated: LAST_UPDATED_FR, series: toSeries(responseLabelsFR, justiceBurnaby)   },
        courtenay: { lastUpdated: LAST_UPDATED_FR, series: toSeries(responseLabelsFR, justiceCourtenay) },
    },

    dignityJustice: {
        title: "Dignité + Justice",
        questionLabels: [
            "Grande variété d'activités et espaces",
            "Facilité à donner des commentaires",
            "Co-création d'opportunités récréatives",
            "Préparé à travailler avec des groupes sous-représentés",
            "Façons faciles d'adapter pour plus d'inclusivité",
        ],
        combined:  { lastUpdated: LAST_UPDATED_FR, series: toSeries(responseLabelsFR, dignityJusticeCombined)  },
        burnaby:   { lastUpdated: LAST_UPDATED_FR, series: toSeries(responseLabelsFR, dignityJusticeBurnaby)   },
        courtenay: { lastUpdated: LAST_UPDATED_FR, series: toSeries(responseLabelsFR, dignityJusticeCourtenay) },
    },
};
