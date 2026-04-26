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

const FitInData = {
  burnaby: {
    sixYearsOrLess: [4.5,  1.5, 25.4, 34.3, 34.3],
    moreThan6Years: [0.9,  2.8, 16.8, 48.6, 30.8],
  },
  courtenay: {
    sixYearsOrLess: [0.0,  7.9, 15.8, 34.2, 42.1],
    moreThan6Years: [2.7,  5.3, 14.7, 36.0, 41.3],
  },
  total: {
    sixYearsOrLess: [2.9,  3.8, 21.9, 34.3, 37.1],
    moreThan6Years: [1.6,  3.8, 15.9, 43.4, 35.2],
  },
};

const SharingIdeasData = {
  burnaby: {
    sixYearsOrLess: [2.9,  1.4, 14.3, 41.4, 40.0],
    moreThan6Years: [1.8,  2.8, 15.6, 42.2, 37.6],
  },
  courtenay: {
    sixYearsOrLess: [5.4,  0.0, 13.5, 35.1, 45.9],
    moreThan6Years: [1.3,  0.0, 13.3, 30.7, 54.7],
  },
  total: {
    sixYearsOrLess: [3.7,  0.9, 14.0, 39.3, 42.1],
    moreThan6Years: [1.6,  1.6, 14.7, 37.5, 44.6],
  },
};

const EnoughActivitiesData = {
  burnaby: {
    sixYearsOrLess: [6.0, 10.4, 20.9, 47.8, 14.9],
    moreThan6Years: [1.0, 23.1, 23.1, 41.3, 11.5],
  },
  courtenay: {
    sixYearsOrLess: [5.6, 11.1, 25.0, 30.6, 27.8],
    moreThan6Years: [4.1, 29.7, 29.7, 24.3, 12.2],
  },
  total: {
    sixYearsOrLess: [5.8, 10.7, 22.3, 41.7, 19.4],
    moreThan6Years: [2.2, 25.8, 25.8, 34.3, 11.8],
  },
};

const RightActivitiesData = {
  burnaby: {
    sixYearsOrLess: [4.5,  4.5, 28.4, 41.8, 20.9],
    moreThan6Years: [0.0,  9.7, 27.2, 51.5, 11.7],
  },
  courtenay: {
    sixYearsOrLess: [2.8,  8.3, 25.0, 41.7, 22.2],
    moreThan6Years: [1.4, 13.5, 24.3, 40.5, 20.3],
  },
  total: {
    sixYearsOrLess: [3.9,  5.8, 27.2, 41.7, 21.4],
    moreThan6Years: [0.6, 11.3, 26.0, 46.9, 15.3],
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
  belongingPlusDignity: {
    title: "Belonging + Dignity",
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
    fitIn: {
      question: "I feel like I fit in when I join recreation activities.",
      burnaby:   FitInData.burnaby,
      courtenay: FitInData.courtenay,
      total:     FitInData.total,
    },
    sharingIdeas: {
      question: "I am comfortable sharing my ideas about recreation activities.",
      burnaby:   SharingIdeasData.burnaby,
      courtenay: SharingIdeasData.courtenay,
      total:     SharingIdeasData.total,
    },
  },
  belongingPlusJustice: {
    title: "Belonging + Justice",
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
    enoughActivities: {
      question: "There are enough recreation activities in my community.",
      burnaby:   EnoughActivitiesData.burnaby,
      courtenay: EnoughActivitiesData.courtenay,
      total:     EnoughActivitiesData.total,
    },
    rightActivities: {
      question: "The recreation activities in my community are right for me.",
      burnaby:   RightActivitiesData.burnaby,
      courtenay: RightActivitiesData.courtenay,
      total:     RightActivitiesData.total,
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
  belongingPlusDignity: {
    title: "Appartenance + Dignité",
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
    fitIn: {
      question: "J'ai l'impression de m'intégrer lorsque je participe à des activités récréatives.",
      burnaby:   FitInData.burnaby,
      courtenay: FitInData.courtenay,
      total:     FitInData.total,
    },
    sharingIdeas: {
      question: "Je suis à l'aise de partager mes idées sur les activités récréatives.",
      burnaby:   SharingIdeasData.burnaby,
      courtenay: SharingIdeasData.courtenay,
      total:     SharingIdeasData.total,
    },
  },
  belongingPlusJustice: {
    title: "Appartenance + Justice",
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
    enoughActivities: {
      question: "Il y a suffisamment d'activités récréatives dans ma communauté.",
      burnaby:   EnoughActivitiesData.burnaby,
      courtenay: EnoughActivitiesData.courtenay,
      total:     EnoughActivitiesData.total,
    },
    rightActivities: {
      question: "Les activités récréatives dans ma communauté me conviennent.",
      burnaby:   RightActivitiesData.burnaby,
      courtenay: RightActivitiesData.courtenay,
      total:     RightActivitiesData.total,
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
