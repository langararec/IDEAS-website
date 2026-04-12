// --- Shared percentage data (language-independent) ---
// Each array: [StronglyDisagree%, Disagree%, Neutral%, Agree%, StronglyAgree%]

const WelcomeData = {
  burnaby: {
    sixYearsOrLess: [4.2,  4.2, 11.3, 36.6, 43.7],
    moreThan6Years: [2.7,  1.8, 12.6, 36.9, 45.9],
  },
  courtenay: {
    sixYearsOrLess: [0.0,  2.6, 12.8, 23.1, 61.5],
    moreThan6Years: [2.7,  0.0,  6.7, 25.3, 65.3],
  },
  total: {
    sixYearsOrLess: [2.7,  3.6, 11.8, 31.8, 50.0],
    moreThan6Years: [2.7,  1.1, 10.2, 32.3, 53.8],
  },
};

const PeopleLikeMeData = {
  burnaby: {
    sixYearsOrLess: [4.4,  2.9, 17.6, 44.1, 30.9],
    moreThan6Years: [2.7,  1.8, 16.4, 44.5, 34.5],
  },
  courtenay: {
    sixYearsOrLess: [5.3,  2.6, 15.8, 34.2, 42.1],
    moreThan6Years: [4.0,  2.7, 14.7, 28.0, 50.7],
  },
  total: {
    sixYearsOrLess: [4.7,  2.8, 17.0, 40.6, 34.9],
    moreThan6Years: [3.2,  2.2, 15.7, 37.8, 41.1],
  },
};

// --- Language-specific content ---

export const en = {
  title: "Belonging, Dignity and Justice in Recreation",
  subtitle: "Community perspective on recreation access and inclusivity",
  scaleLabel: "1 = Strongly Disagree, 3 = Neutral, 5 = Strongly Agree",
  belonging: {
    title: "Belonging",
    rowLabels: {
      sixYearsOrLess: "6 years or less",
      moreThan6Years: "More than 6 years",
    },
    responseLabels: [
      "Strongly Disagree",
      "Disagree",
      "Neutral",
      "Agree",
      "Strongly Agree",
    ],
    welcome: {
      question: "I feel welcome in places like parks and community centres",
      burnaby:   WelcomeData.burnaby,
      courtenay: WelcomeData.courtenay,
      total:     WelcomeData.total,
    },
    peopleLikeMe: {
      question: "I see people like me joining recreation activities.",
      burnaby:   PeopleLikeMeData.burnaby,
      courtenay: PeopleLikeMeData.courtenay,
      total:     PeopleLikeMeData.total,
    },
  },
  burnaby: {
    lastUpdated: "Last updated: 18-02-2026",
    keyInsightsLabel: "Key Insights:",
    keyInsights: "",
    lowestAverage: {
      charts: [] as {
        question: string;
        average: number;
        ethnicities: { name: string; score: number }[];
      }[],
    },
    highestAverage: {
      charts: [] as {
        question: string;
        average: number;
        ethnicities: { name: string; score: number }[];
      }[],
    },
  },
  courtenay: {
    lastUpdated: "Last updated: 18-02-2026",
    keyInsightsLabel: "Key Insights:",
    keyInsights: "",
    lowestAverage: {
      charts: [] as {
        question: string;
        average: number;
        ethnicities: { name: string; score: number }[];
      }[],
    },
    highestAverage: {
      charts: [] as {
        question: string;
        average: number;
        ethnicities: { name: string; score: number }[];
      }[],
    },
  },
};

export type BelongingDignityJusticeType = typeof en;

export const fr: BelongingDignityJusticeType = {
  title: "Appartenance, Dignité et Justice dans les Loisirs",
  subtitle: "Perspective communautaire sur l'accès et l'inclusivité des loisirs",
  scaleLabel: "1 = Fortement en désaccord, 3 = Neutre, 5 = Fortement d'accord",
  belonging: {
    title: "Appartenance",
    rowLabels: {
      sixYearsOrLess: "6 ans ou moins",
      moreThan6Years: "Plus de 6 ans",
    },
    responseLabels: [
      "Fortement en désaccord",
      "En désaccord",
      "Neutre",
      "D'accord",
      "Fortement d'accord",
    ],
    welcome: {
      question: "Je me sens bienvenu dans des endroits comme les parcs et les centres communautaires",
      burnaby:   WelcomeData.burnaby,
      courtenay: WelcomeData.courtenay,
      total:     WelcomeData.total,
    },
    peopleLikeMe: {
      question: "Je vois des gens comme moi participer à des activités récréatives.",
      burnaby:   PeopleLikeMeData.burnaby,
      courtenay: PeopleLikeMeData.courtenay,
      total:     PeopleLikeMeData.total,
    },
  },
  burnaby: {
    lastUpdated: "Dernière mise à jour: 18-02-2026",
    keyInsightsLabel: "Aperçus Clés:",
    keyInsights: "",
    lowestAverage: { charts: [] },
    highestAverage: { charts: [] },
  },
  courtenay: {
    lastUpdated: "Dernière mise à jour: 18-02-2026",
    keyInsightsLabel: "Aperçus Clés:",
    keyInsights: "",
    lowestAverage: { charts: [] },
    highestAverage: { charts: [] },
  },
};
