const LAST_UPDATED_EN = "Last updated: 15-03-2026";
const LAST_UPDATED_FR = "Dernière mise à jour: 15-03-2026";

// ─── Time living in the community ────────────────────────────────────────────
// Placeholder data — replace with actual survey values

const timeBurnaby = {
    lessThan5:   15,
    fiveToTen:   25,
    elevenToTwenty: 30,
    moreThan20:  30,
};

const timeCourtenay = {
    lessThan5:    7,
    fiveToTen:   21,
    elevenToTwenty: 29,
    moreThan20:  43,
};

const timeTotal = {
    lessThan5:   13,
    fiveToTen:   24,
    elevenToTwenty: 30,
    moreThan20:  33,
};

// ─── Area of work ─────────────────────────────────────────────────────────────
// Placeholder data — replace with actual survey values

const areaBurnaby = {
    parks:       5,
    recreation: 69,
    culture:    26,
};

const areaCourtenay = {
    recreation: 100,
};

const areaTotal = {
    parks:       4,
    recreation: 72,
    culture:    24,
};

// ─── English ──────────────────────────────────────────────────────────────────
export const en = {
    sectionTitle: "Staff Demography",
    sectionSubtitle: "Demographic breakdown of staff members by city",

    timeLivingInCommunity: {
        title: "Time Living in the Community",
        subtitle: "How long have you lived in your community?",
        burnaby: {
            lastUpdated: LAST_UPDATED_EN,
            data: [
                { name: "Less than 5 years",  percentage: timeBurnaby.lessThan5 },
                { name: "5–10 years",          percentage: timeBurnaby.fiveToTen },
                { name: "11–20 years",         percentage: timeBurnaby.elevenToTwenty },
                { name: "More than 20 years",  percentage: timeBurnaby.moreThan20 },
            ],
        },
        courtenay: {
            lastUpdated: LAST_UPDATED_EN,
            data: [
                { name: "Less than 5 years",  percentage: timeCourtenay.lessThan5 },
                { name: "5–10 years",          percentage: timeCourtenay.fiveToTen },
                { name: "11–20 years",         percentage: timeCourtenay.elevenToTwenty },
                { name: "More than 20 years",  percentage: timeCourtenay.moreThan20 },
            ],
        },
        total: {
            lastUpdated: LAST_UPDATED_EN,
            data: [
                { name: "Less than 5 years",  percentage: timeTotal.lessThan5 },
                { name: "5–10 years",          percentage: timeTotal.fiveToTen },
                { name: "11–20 years",         percentage: timeTotal.elevenToTwenty },
                { name: "More than 20 years",  percentage: timeTotal.moreThan20 },
            ],
        },
    },

    areaOfWork: {
        title: "Area of Work",
        subtitle: "Which area of public recreation do you work in?",
        burnaby: {
            lastUpdated: LAST_UPDATED_EN,
            data: [
                { name: "Parks",       percentage: areaBurnaby.parks },
                { name: "Recreation",  percentage: areaBurnaby.recreation },
                { name: "Culture",     percentage: areaBurnaby.culture },
            ],
        },
        courtenay: {
            lastUpdated: LAST_UPDATED_EN,
            data: [
                { name: "Recreation",  percentage: areaCourtenay.recreation },
            ],
        },
        total: {
            lastUpdated: LAST_UPDATED_EN,
            data: [
                { name: "Parks",       percentage: areaTotal.parks },
                { name: "Recreation",  percentage: areaTotal.recreation },
                { name: "Culture",     percentage: areaTotal.culture },
            ],
        },
    },
};

// ─── French ───────────────────────────────────────────────────────────────────
export const fr = {
    sectionTitle: "Démographie du Personnel",
    sectionSubtitle: "Répartition démographique des membres du personnel par ville",

    timeLivingInCommunity: {
        title: "Temps de résidence dans la communauté",
        subtitle: "Depuis combien de temps habitez-vous dans votre communauté?",
        burnaby: {
            lastUpdated: LAST_UPDATED_FR,
            data: [
                { name: "Moins de 5 ans",   percentage: timeBurnaby.lessThan5 },
                { name: "5–10 ans",          percentage: timeBurnaby.fiveToTen },
                { name: "11–20 ans",         percentage: timeBurnaby.elevenToTwenty },
                { name: "Plus de 20 ans",    percentage: timeBurnaby.moreThan20 },
            ],
        },
        courtenay: {
            lastUpdated: LAST_UPDATED_FR,
            data: [
                { name: "Moins de 5 ans",   percentage: timeCourtenay.lessThan5 },
                { name: "5–10 ans",          percentage: timeCourtenay.fiveToTen },
                { name: "11–20 ans",         percentage: timeCourtenay.elevenToTwenty },
                { name: "Plus de 20 ans",    percentage: timeCourtenay.moreThan20 },
            ],
        },
        total: {
            lastUpdated: LAST_UPDATED_FR,
            data: [
                { name: "Moins de 5 ans",   percentage: timeTotal.lessThan5 },
                { name: "5–10 ans",          percentage: timeTotal.fiveToTen },
                { name: "11–20 ans",         percentage: timeTotal.elevenToTwenty },
                { name: "Plus de 20 ans",    percentage: timeTotal.moreThan20 },
            ],
        },
    },

    areaOfWork: {
        title: "Secteur de travail",
        subtitle: "Dans quel secteur des loisirs publics travaillez-vous?",
        burnaby: {
            lastUpdated: LAST_UPDATED_FR,
            data: [
                { name: "Parcs",    percentage: areaBurnaby.parks },
                { name: "Loisirs",  percentage: areaBurnaby.recreation },
                { name: "Culture",  percentage: areaBurnaby.culture },
            ],
        },
        courtenay: {
            lastUpdated: LAST_UPDATED_FR,
            data: [
                { name: "Loisirs",  percentage: areaCourtenay.recreation },
            ],
        },
        total: {
            lastUpdated: LAST_UPDATED_FR,
            data: [
                { name: "Parcs",    percentage: areaTotal.parks },
                { name: "Loisirs",  percentage: areaTotal.recreation },
                { name: "Culture",  percentage: areaTotal.culture },
            ],
        },
    },
};
