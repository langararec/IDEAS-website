export const statisticsContent = {
  en: {
    statisticsToggle: {
      tabs: [
        {
          id: "component1",
          label: "SURVEY DATA REPORT",
          shortLabel: "SURVEY"
        },
        {
          id: "component2",
          label: "DOTMOCRACY",
          shortLabel: "DOTMOCRACY"
        },
        {
          id: "component3",
          label: "ACTIVITY SHEETS",
          shortLabel: "ACTIVITIES"
        }
      ]
    },
    surveyDataReport: {
      title: "Preliminary Data - Survey Results Report",
      characteristicsTitle: "Characteristics of Survey Participants",
      chartLabel: "Percentage (%)",
      cities: {
        burnaby: "Burnaby",
        courtenay: "Courtenay"
      },
      burnaby: {
        lastUpdated: "Last updated: 10-15-2025",
        keyInsightsLabel: "Key Insights:",
        keyInsights: "Chinese respondents make up the largest group of survey respondents at 33.83%, followed by White (24.06%) and Arab (17.29%). The research team is now seeking to engage with groups that are under represented in the survey (as compared to StatScan demographic data)",
        ethnicities: [
          { name: "Chinese", percentage: 33.83 },
          { name: "White", percentage: 24.06 },
          { name: "Arab", percentage: 17.29 },
          { name: "South Asian (e.g., East Indian, Pakistani, Sri Lankan)", percentage: 8.27 },
          { name: "West Asian (e.g., Iranian, Afghan)", percentage: 7.52 },
          { name: "Japanese", percentage: 4.51 },
          { name: "Latin American", percentage: 4.51 },
          { name: "Black", percentage: 3.76 },
          { name: "Korean", percentage: 3.01 },
          { name: "Filipino", percentage: 2.26 },
          { name: "Southeast Asian (e.g., Vietnamese, Cambodian, Laotian, Thai)", percentage: 1.50 },
          { name: "Indigenous peoples", percentage: 0.75 }
        ]
      },
      courtenay: {
        lastUpdated: "Last updated: 10-15-2025",
        keyInsightsLabel: "Key Insights:",
        keyInsights: "Data for Courtenay is currently being collected and analyzed. Results will be available soon.",
        ethnicities: [
          { name: "Data coming soon", percentage: 0 }
        ]
      }
    },
    demographics: {
      title: "Demographics",
      genderIdentity: {
        title: "Gender Identity",
        subtitle: "How respondents describe themselves",
        burnaby: {
          lastUpdated: "Last updated: 10-15-2025",
          data: [
            { name: "Woman", percentage: 75 },
            { name: "Man", percentage: 23 },
            { name: "Non-binary", percentage: 1 },
            { name: "Transgender", percentage: 1 }
          ]
        },
        courtenay: {
          lastUpdated: "Last updated: 10-15-2025",
          data: [
            { name: "Data coming soon", percentage: 0 }
          ]
        }
      },
      age: {
        title: "Age",
        subtitle: "Respondents age group",
        burnaby: {
          lastUpdated: "Last updated: 10-15-2025",
          data: [
            { name: "55 and above", percentage: 25 },
            { name: "45-54", percentage: 20 },
            { name: "35-44", percentage: 26 },
            { name: "25-34", percentage: 20 },
            { name: "18-24", percentage: 5 },
            { name: "Under 18", percentage: 4 }
          ]
        },
        courtenay: {
          lastUpdated: "Last updated: 10-15-2025",
          data: [
            { name: "Data coming soon", percentage: 0 }
          ]
        }
      },
      timeLivingInBC: {
        title: "Time Living in BC",
        subtitle: "Years of living in British Columbia",
        burnaby: {
          lastUpdated: "Last updated: 10-15-2025",
          data: [
            { name: "More than 6 years", percentage: 62 },
            { name: "4-6 years", percentage: 14 },
            { name: "1-3 years", percentage: 10 },
            { name: "Less than 1 year", percentage: 14 }
          ]
        },
        courtenay: {
          lastUpdated: "Last updated: 10-15-2025",
          data: [
            { name: "Data coming soon", percentage: 0 }
          ]
        }
      }
    },
    recreationBehaviors: {
      title: "Thoughts and Behaviours towards Recreation",
      subtitle: "How length of residency in BC influences motivations for recreation participation",
      chartLabel: "Percentage (%)",
      residencyGroups: ["Less than 1 year", "1-3 years", "4-6 years", "More than 6 years"],
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
        "To spend time with family or friends"
      ],
      burnaby: {
        lastUpdated: "Last updated: 10-15-2025",
        keyInsightsLabel: "Key Insights:",
        keyInsights: "Long-term residents (6+ years) consistently dominate across all motivations, with particularly strong representation in having fun (66.67%), connecting with community (65.91%), and cultural activities (65.22%). New residents (1-3 years) show higher engagement in enjoying nature (28.57%) and spending time with family/friends (23.53%).",
        data: {
          "Less than 1 year": [7.14, 7.69, 11.76, 4.35, 6.67, 9.09, 10, 7.69, 10, 11.76],
          "1-3 years": [14.29, 15.38, 17.65, 17.39, 28.57, 18.18, 20, 15.38, 16.67, 23.53],
          "4-6 years": [14.29, 7.69, 11.76, 13.04, 20, 6.82, 20, 15.38, 10, 11.76],
          "More than 6 years": [64.29, 69.23, 58.82, 65.22, 60, 65.91, 60, 61.54, 66.67, 58.82]
        }
      },
      courtenay: {
        lastUpdated: "Last updated: 10-15-2025",
        keyInsightsLabel: "Key Insights:",
        keyInsights: "Data for Courtenay is currently being collected and analyzed. Results will be available soon.",
        data: {
          "Less than 1 year": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          "1-3 years": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          "4-6 years": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          "More than 6 years": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
      }
    },
    dotmocracy: {
      title: "Dotmocracy Results",
    },
    activitySheets: {
      title: "Activity Sheets",
    }
  },
  fr: {
    statisticsToggle: {
      tabs: [
        {
          id: "component1",
          label: "RAPPORT DE DONNÉES D'ENQUÊTE",
          shortLabel: "ENQUÊTE"
        },
        {
          id: "component2",
          label: "DOTMOCRATIE",
          shortLabel: "DOTMOCRATIE"
        },
        {
          id: "component3",
          label: "FEUILLES D'ACTIVITÉS",
          shortLabel: "ACTIVITÉS"
        }
      ]
    },
    surveyDataReport: {
      title: "Données Préliminaires - Rapport des Résultats du Sondage",
      characteristicsTitle: "Caractéristiques des Participants au Sondage",
      chartLabel: "Pourcentage (%)",
      cities: {
        burnaby: "Burnaby",
        courtenay: "Courtenay"
      },
      burnaby: {
        lastUpdated: "Dernière mise à jour: 15-10-2025",
        keyInsightsLabel: "Aperçus Clés:",
        keyInsights: "Les répondants chinois constituent le plus grand groupe de répondants au sondage à 33,83%, suivis par les Blancs (24,06%) et les Arabes (17,29%). L'équipe de recherche cherche maintenant à s'engager avec des groupes qui sont sous-représentés dans le sondage (par rapport aux données démographiques de StatScan)",
        ethnicities: [
          { name: "Chinois", percentage: 33.83 },
          { name: "Blanc", percentage: 24.06 },
          { name: "Arabe", percentage: 17.29 },
          { name: "Sud-Asiatique (p. ex., Indien de l'Est, Pakistanais, Sri Lankais)", percentage: 8.27 },
          { name: "Asie de l'Ouest (p. ex., Iranien, Afghan)", percentage: 7.52 },
          { name: "Japonais", percentage: 4.51 },
          { name: "Latino-Américain", percentage: 4.51 },
          { name: "Noir", percentage: 3.76 },
          { name: "Coréen", percentage: 3.01 },
          { name: "Philippin", percentage: 2.26 },
          { name: "Asiatique du Sud-Est (p. ex., Vietnamien, Cambodgien, Laotien, Thaïlandais)", percentage: 1.50 },
          { name: "Peuples autochtones", percentage: 0.75 }
        ]
      },
      courtenay: {
        lastUpdated: "Dernière mise à jour: 15-10-2025",
        keyInsightsLabel: "Aperçus Clés:",
        keyInsights: "Les données pour Courtenay sont actuellement collectées et analysées. Les résultats seront bientôt disponibles.",
        ethnicities: [
          { name: "Données à venir", percentage: 0 }
        ]
      }
    },
    demographics: {
      title: "Démographie",
      genderIdentity: {
        title: "Identité de Genre",
        subtitle: "Comment les répondants se décrivent",
        burnaby: {
          lastUpdated: "Dernière mise à jour: 15-10-2025",
          data: [
            { name: "Femme", percentage: 75 },
            { name: "Homme", percentage: 23 },
            { name: "Non-binaire", percentage: 1 },
            { name: "Transgenre", percentage: 1 }
          ]
        },
        courtenay: {
          lastUpdated: "Dernière mise à jour: 15-10-2025",
          data: [
            { name: "Données à venir", percentage: 0 }
          ]
        }
      },
      age: {
        title: "Âge",
        subtitle: "Groupe d'âge des répondants",
        burnaby: {
          lastUpdated: "Dernière mise à jour: 15-10-2025",
          data: [
            { name: "55 et plus", percentage: 25 },
            { name: "45-54", percentage: 20 },
            { name: "35-44", percentage: 26 },
            { name: "25-34", percentage: 20 },
            { name: "18-24", percentage: 5 },
            { name: "Moins de 18", percentage: 4 }
          ]
        },
        courtenay: {
          lastUpdated: "Dernière mise à jour: 15-10-2025",
          data: [
            { name: "Données à venir", percentage: 0 }
          ]
        }
      },
      timeLivingInBC: {
        title: "Temps Vécu en C.-B.",
        subtitle: "Années de vie en Colombie-Britannique",
        burnaby: {
          lastUpdated: "Dernière mise à jour: 15-10-2025",
          data: [
            { name: "Plus de 6 ans", percentage: 62 },
            { name: "4-6 ans", percentage: 14 },
            { name: "1-3 ans", percentage: 10 },
            { name: "Moins d'1 an", percentage: 14 }
          ]
        },
        courtenay: {
          lastUpdated: "Dernière mise à jour: 15-10-2025",
          data: [
            { name: "Données à venir", percentage: 0 }
          ]
        }
      }
    },
    recreationBehaviors: {
      title: "Pensées et Comportements envers les Loisirs",
      subtitle: "Comment la durée de résidence en C.-B. influence les motivations pour la participation aux loisirs",
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
        "Passer du temps avec la famille ou les amis"
      ],
      burnaby: {
        lastUpdated: "Dernière mise à jour: 15-10-2025",
        keyInsightsLabel: "Aperçus Clés:",
        keyInsights: "Les résidents de longue date (6+ ans) dominent constamment dans toutes les motivations, avec une représentation particulièrement forte pour s'amuser (66,67%), se connecter avec la communauté (65,91%) et les activités culturelles (65,22%). Les nouveaux résidents (1-3 ans) montrent un engagement plus élevé pour profiter de la nature (28,57%) et passer du temps avec la famille/les amis (23,53%).",
        data: {
          "Moins d'1 an": [7.14, 7.69, 11.76, 4.35, 6.67, 9.09, 10, 7.69, 10, 11.76],
          "1-3 ans": [14.29, 15.38, 17.65, 17.39, 28.57, 18.18, 20, 15.38, 16.67, 23.53],
          "4-6 ans": [14.29, 7.69, 11.76, 13.04, 20, 6.82, 20, 15.38, 10, 11.76],
          "Plus de 6 ans": [64.29, 69.23, 58.82, 65.22, 60, 65.91, 60, 61.54, 66.67, 58.82]
        }
      },
      courtenay: {
        lastUpdated: "Dernière mise à jour: 15-10-2025",
        keyInsightsLabel: "Aperçus Clés:",
        keyInsights: "Les données pour Courtenay sont actuellement collectées et analysées. Les résultats seront bientôt disponibles.",
        data: {
          "Moins d'1 an": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          "1-3 ans": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          "4-6 ans": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
          "Plus de 6 ans": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        }
      }
    },
    dotmocracy: {
      title: "Résultats de Dotmocratie",
    },
    activitySheets: {
      title: "Feuilles d'Activités",
    }
  }
};

export type StatisticsContentType = typeof statisticsContent.en;