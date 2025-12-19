export const en = {
  title: "Preliminary Data - Survey Results Report",
  characteristicsTitle: "Characteristics of Survey Participants",
  chartLabel: "Percentage (%)",
  cities: {
    burnaby: "Burnaby",
    courtenay: "Courtenay",
  },
  burnaby: {
    lastUpdated: "Last updated: 19-12-2025",
    keyInsightsLabel: "Key Insights:",
    keyInsights:
      "Chinese respondents make up the largest group of survey respondents at 32.85%, followed by White (23.36%) and Arab (16.79%).",
    ethnicities: [
      { name: "Chinese", percentage: 32.85 },
      { name: "White", percentage: 23.36 },
      { name: "Arab", percentage: 16.79 },
      {
        name: "South Asian (e.g., East Indian, Pakistani, Sri Lankan)",
        percentage: 5.11,
      },
      { name: "West Asian (e.g., Iranian, Afghan)", percentage: 5.11 },
      { name: "Japanese", percentage: 2.92 },
      { name: "Latin American", percentage: 2.92 },
      { name: "Prefer not to disclose", percentage: 2.92 },
      { name: "Black", percentage: 2.19 },
      { name: "Korean", percentage: 2.19 },
      { name: "Filipino", percentage: 1.46 },
      {
        name: "Southeast Asian (e.g., Vietnamese, Cambodian, Laotian, Thai)",
        percentage: 1.46,
      },
      { name: "Indigenous peoples", percentage: 0.73 },
    ],
  },
  courtenay: {
    lastUpdated: "Last updated: 19-12-2025",
    keyInsightsLabel: "Key Insights:",
    keyInsights:
      "White respondents dominate at 58.51%, followed by Chinese (10.64%) and South Asian (5.32%).",
    ethnicities: [
      { name: "White", percentage: 57.29 },
      { name: "Chinese", percentage: 10.42 },
      {
        name: "South Asian (e.g., East Indian, Pakistani, Sri Lankan)",
        percentage: 5.21,
      },
      { name: "Black", percentage: 4.17 },
      {
        name: "Southeast Asian (e.g., Vietnamese, Cambodian, Laotian, Thai)",
        percentage: 4.17,
      },
      { name: "Filipino", percentage: 3.13 },
      { name: "Indigenous peoples", percentage: 3.13 },
      { name: "Korean", percentage: 3.13 },
      { name: "Latin American", percentage: 3.13 },
      { name: "Japanese", percentage: 2.08 },
      { name: "Prefer not to disclose", percentage: 2.08 },
      { name: "Arab", percentage: 1.04 },
      { name: "West Asian (e.g., Iranian, Afghan)", percentage: 1.04 },
    ],
  },
};

export type SurveyDataReportType = typeof en;

export const fr: SurveyDataReportType = {
  title: "Données Préliminaires - Rapport des Résultats du Sondage",
  characteristicsTitle: "Caractéristiques des Participants au Sondage",
  chartLabel: "Pourcentage (%)",
  cities: {
    burnaby: "Burnaby",
    courtenay: "Courtenay",
  },
  burnaby: {
    lastUpdated: "Dernière mise à jour: 19-12-2025",
    keyInsightsLabel: "Aperçus Clés:",
    keyInsights:
          "Les répondants chinois constituent le plus grand groupe de répondants au sondage à 32,85%, suivis par les Blancs (23,36%) et les Arabes (16,79%).",
        ethnicities: [
          { name: "Chinois", percentage: 32.85 },
          { name: "Blanc", percentage: 23.36 },
          { name: "Arabe", percentage: 16.79 },
          {
            name: "Sud-Asiatique (p. ex., Indien de l'Est, Pakistanais, Sri Lankais)",
            percentage: 5.11,
          },
          {
            name: "Asie de l'Ouest (p. ex., Iranien, Afghan)",
            percentage: 5.11,
          },
          { name: "Japonais", percentage: 2.92 },
          { name: "Latino-Américain", percentage: 2.92 },
          { name: "Préfère ne pas divulguer", percentage: 2.92 },
          { name: "Noir", percentage: 2.19 },
          { name: "Coréen", percentage: 2.19 },
          { name: "Philippin", percentage: 1.46 },
          {
            name: "Asiatique du Sud-Est (p. ex., Vietnamien, Cambodgien, Laotien, Thaïlandais)",
            percentage: 1.46,
          },
          { name: "Peuples autochtones", percentage: 0.73 },
        ],
      },
      courtenay: {
        lastUpdated: "Dernière mise à jour: 19-12-2025",
        keyInsightsLabel: "Aperçus Clés:",
        keyInsights:
          "Les répondants blancs dominent à 58,51%, suivis par les Chinois (10,64%) et les Sud-Asiatiques (5,32%).",
        ethnicities: [
          { name: "Blanc", percentage: 57.29 },
          { name: "Chinois", percentage: 10.42 },
          {
            name: "Sud-Asiatique (p. ex., Indien de l'Est, Pakistanais, Sri Lankais)",
            percentage: 5.21,
          },
          { name: "Noir", percentage: 4.17 },
          {
            name: "Asiatique du Sud-Est (p. ex., Vietnamien, Cambodgien, Laotien, Thaïlandais)",
            percentage: 4.17,
          },
          { name: "Philippin", percentage: 3.13 },
          { name: "Peuples autochtones", percentage: 3.13 },
          { name: "Coréen", percentage: 3.13 },
          { name: "Latino-Américain", percentage: 3.13 },
          { name: "Japonais", percentage: 2.08 },
          { name: "Préfère ne pas divulguer", percentage: 2.08 },
          { name: "Arabe", percentage: 1.04 },
          {
            name: "Asie de l'Ouest (p. ex., Iranien, Afghan)",
            percentage: 1.04,
          },
        ],
      },
};