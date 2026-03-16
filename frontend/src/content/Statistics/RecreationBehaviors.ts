const BurnabyData = {
  "Less than 1 year": [
    7.69, 10.71, 14.81, 6.25, 13.33, 6.0, 14.29, 12.96, 11.82, 11.71,
  ],
  "1-3 years": [
    17.31, 12.5, 25.93, 18.75, 16.67, 10.0, 21.43, 12.96, 15.45, 12.61,
  ],
  "4-6 years": [
    13.46, 11.61, 14.81, 25.0, 10.83, 14.0, 10.71, 12.04, 11.82, 13.51,
  ],
  "More than 6 years": [
    61.54, 65.18, 44.44, 50.0, 59.17, 70.0, 53.57, 62.04, 60.91, 62.16,
  ],
};

const CourtenayData = {
  "Less than 1 year": [9.38, 7.41, 33.33, 0.0, 7.45, 10.81, 11.11, 5.81, 7.89, 6.49],
  "1-3 years": [
    21.88, 28.4, 40.0, 28.57, 20.21, 27.03, 25.93, 16.28, 21.05, 24.68,
  ],
  "4-6 years": [6.25, 2.47, 0.0, 0.0, 4.26, 2.7, 3.7, 4.65, 3.95, 1.3],
  "More than 6 years": [
    62.5, 61.73, 26.67, 71.43, 68.09, 59.46, 59.26, 73.26, 67.11, 67.53,
  ],
};

export const en = {
  title: "Thoughts and Behaviours towards Recreation",
  subtitle:
    "How length of residency in BC influences motivations for recreation participation",
  chartLabel: "Percentage (%)",
  residencyGroups: [
    "Less than 1 year",
    "1-3 years",
    "4-6 years",
    "More than 6 years",
  ],
  motivations: [
    "To learn new skills or try new activities",
    "To relax",
    "To learn about Canadian culture",
    "Because it is part of my culture or tradition",
    "To enjoy nature",
    "To connect with the community",
    "To meet new people",
    "To exercise and stay healthy",
    "To have fun",
    "To spend time with family or friends",
  ],
  burnaby: {
    lastUpdated: "Last updated: 22/02/2026",
    keyInsightsLabel: "Key Insights:",
    keyInsights:
      "Long-term residents (6+ years) tend to identify with many of the motivators simultaneously compared to respondents who have lived in BC for less than 6 years. \nRelaxing, having fun, and connecting with community were the most commonly identified motivators for long-term residents.\nRespondents who have lived in BC for less time seem to discern more between the motivators, and only selecting some (rather than many) motivators.",
    data: BurnabyData,
  },
  courtenay: {
    lastUpdated: "Last updated: 22/02/2026",
    keyInsightsLabel: "Key Insights:",
    keyInsights:
      "Long-term residents (6+ years) tend to identify with many of the motivators simultaneously compared to respondents who have lived in BC for less than 6 years.\nExercising/health, spending time with family/friends and cultural/traditional motivators were the most common for long-term residents.\nAlmost half of respondents who have lived in BC between 1-3 years participate in recreation to learn about Canadian culture, with over a third of respondents in this category motivated by connection to community and cultural reasons.\nRespondents who have lived in BC for less time seem to discern more between the motivators, and only selecting some (rather than many) motivators.",
    data: CourtenayData
  },
};

export const fr = {
  title: "Pensées et Comportements envers les Loisirs",
  subtitle:
    "Comment la durée de résidence en C.-B. influence les motivations pour la participation aux loisirs",
  chartLabel: "Pourcentage (%)",
  residencyGroups: ["Moins d'1 an", "1-3 ans", "4-6 ans", "Plus de 6 ans"],
  motivations: [
    "Apprendre de nouvelles compétences ou essayer de nouvelles activités",
    "Se détendre",
    "Découvrir la culture canadienne",
    "Parce que cela fait partie de ma culture ou tradition",
    "Profiter de la nature",
    "Se connecter avec la communauté",
    "Rencontrer de nouvelles personnes",
    "Faire de l'exercice et rester en santé",
    "S'amuser",
    "Passer du temps avec la famille ou les amis",
  ],
  burnaby: {
    lastUpdated: "Dernière mise à jour: 22/02/2026",
    keyInsightsLabel: "Aperçus Clés:",
    keyInsights:
      "Les résidents de longue date (6+ ans) ont tendance à s'identifier avec plusieurs des motivateurs simultanément comparé aux répondants qui ont vécu en C.-B. pour moins de 6 ans. \nSe détendre, s'amuser, et se connecter avec la communauté étaient les motivateurs les plus communément identifiés pour les résidents de longue date.\nLes répondants avec qui ont vécu en C.-B. pour moins de temps semblent discerner plus entre les motivateurs, et seulement sélectionner quelques (plutôt que plusieurs) motivateurs.",
    data: {
      "Moins d'1 an": BurnabyData["Less than 1 year"],
      "1-3 ans": BurnabyData["1-3 years"],
      "4-6 ans": BurnabyData["4-6 years"],
      "Plus de 6 ans": BurnabyData["More than 6 years"],
    },
  },
  courtenay: {
    lastUpdated: "Dernière mise à jour: 22/02/2026",
    keyInsightsLabel: "Aperçus Clés:",
    keyInsights:
      "Les résidents de longue date (6+ ans) ont tendance à s'identifier avec plusieurs des motivateurs simultanément comparé aux répondants qui ont vécu en C.-B. pour moins de 6 ans.\nFaire de l'exercice/santé, passer du temps avec la famille/les amis et les motivateurs culturels/traditionnels étaient les plus communs pour les résidents de longue date.\nPresque la moitié des répondants qui ont vécu en C.-B. entre 1-3 ans participent aux loisirs pour découvrir la culture canadienne, avec plus d'un tiers des répondants dans cette catégorie motivés par la connexion à la communauté et les raisons culturelles.\nLes répondants avec qui ont vécu en C.-B. pour moins de temps semblent discerner plus entre les motivateurs, et seulement sélectionner quelques (plutôt que plusieurs) motivateurs.",
    data: {
      "Moins d'1 an": CourtenayData['Less than 1 year'],
      "1-3 ans": CourtenayData['1-3 years'],
      "4-6 ans": CourtenayData['4-6 years'],
      "Plus de 6 ans": CourtenayData['More than 6 years'],
    },
  },
};
