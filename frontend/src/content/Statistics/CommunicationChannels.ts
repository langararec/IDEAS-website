const BurnabyData = {
  "Less than 1 year": [12.5, 25, 2.08, 12.5, 27.08, 6.25, 14.58],
  "1-3 years": [10.81, 21.62, 2.7, 8.11, 27.03, 2.7, 27.03],
  "4-6 years": [17.74, 24.19, 3.23, 11.29, 11.29, 4.84, 27.42],
  "More than 6 years": [10.17, 23.31, 4.66, 18.64, 24.15, 5.51, 13.56],
};

const CourtenayData = {
  "Less than 1 year": [8.33, 25, 0, 8.33, 8.33, 16.67, 33.33],
  "1-3 years": [18.84, 28.99, 1.45, 10.14, 8.7, 13.04, 18.84],
  "4-6 years": [9.09,18.18,18.18,27.27,9.09,9.09,9.09],
  "More than 6 years": [7.25,23.67,5.8,13.53,24.64,7.25,17.87],
};

export const en = {
  title: "Where people find out recreation activities",
  subtitle:
    "How length of residency in BC influences communication channel preferences",
  chartLabel: "Percentage (%)",
  residencyGroups: [
    "Less than 1 year",
    "1-3 years",
    "4-6 years",
    "More than 6 years",
  ],
  channels: [
    "Community/Cultural Groups",
    "Friends/Family",
    "Newspaper/Radio",
    "Posters/Flyers/Signs",
    "Recreation Centre/Website",
    "School/Workplace",
    "Social Media",
  ],
  burnaby: {
    lastUpdated: "Last updated: 11-11-2025",
    keyInsightsLabel: "Key Insights:",
    keyInsights:
      "New residents rely more on social media, friends and community groups. While residents with longer time living in BC are more reliant through posters, schools, newspapers and city websites.",
    data: BurnabyData,
  },
  courtenay: {
    lastUpdated: "Last updated: 11-11-2025",
    keyInsightsLabel: "Key Insights:",
    keyInsights:
      "New residents rely more on community or cultural groups, schools/workplaces and social media. Long-term residents are the most users of all sources, especially city websites, local newspapers and posters/flyers.",
    data: CourtenayData,
  },
};

export const fr = {
  title: "Où les gens découvrent les activités récréatives",
  subtitle:
    "Comment la durée de résidence en C.-B. influence les préférences des canaux de communication",
  chartLabel: "Pourcentage (%)",
  residencyGroups: ["Moins d'1 an", "1-3 ans", "4-6 ans", "Plus de 6 ans"],
  channels: [
    "Groupes Communautaires/Culturels",
    "Amis/Famille",
    "Journal/Radio",
    "Affiches/Dépliants/Panneaux",
    "Centre de Loisirs/Site Web",
    "École/Lieu de Travail",
    "Médias Sociaux",
  ],
  burnaby: {
    lastUpdated: "Dernière mise à jour: 15-10-2025",
    keyInsightsLabel: "Aperçus Clés:",
    keyInsights:
      "Les nouveaux résidents comptent davantage sur les médias sociaux, les amis et les groupes communautaires. Alors que les résidents vivant en C.-B. depuis plus longtemps s'appuient davantage sur les affiches, les écoles, les journaux et les sites Web municipaux.",
    data: {
      "Moins d'1 an":BurnabyData['Less than 1 year'],
      "1-3 ans": BurnabyData['1-3 years'],
      "4-6 ans": BurnabyData['4-6 years'],
      "Plus de 6 ans": BurnabyData['More than 6 years'],
    },
  },
  courtenay: {
    lastUpdated: "Dernière mise à jour: 15-10-2025",
    keyInsightsLabel: "Aperçus Clés:",
    keyInsights:
      "Les nouveaux résidents comptent davantage sur les groupes communautaires ou culturels, les écoles/lieux de travail et les médias sociaux. Les résidents de longue date sont les plus grands utilisateurs de toutes les sources, en particulier les sites Web municipaux, les journaux locaux et les affiches/dépliants.",
    data: {
      "Moins d'1 an": CourtenayData['Less than 1 year'],
      "1-3 ans": CourtenayData['1-3 years'],
      "4-6 ans": CourtenayData['4-6 years'],
      "Plus de 6 ans": CourtenayData['More than 6 years'],
    },
  },
};
