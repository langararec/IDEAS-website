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
    communicationChannels: {
      title: "Where people find out recreation activities",
      subtitle: "How length of residency in BC influences communication channel preferences",
      chartLabel: "Percentage (%)",
      residencyGroups: ["Less than 1 year", "1-3 years", "4-6 years", "More than 6 years"],
      channels: [
        "Community/Cultural Groups",
        "Friends/Family",
        "Newspaper/Radio",
        "Posters/Flyers/Signs",
        "Recreation Centre/Website",
        "School/Workplace",
        "Social Media"
      ],
      burnaby: {
        lastUpdated: "Last updated: 10-15-2025",
        keyInsightsLabel: "Key Insights:",
        keyInsights: "New residents rely more on social media, friends and community groups. While residents with longer time living in BC are more reliant through posters, schools, newspapers and city websites.",
        data: {
          "Less than 1 year": [8, 7, 10, 9, 14, 5, 13],
          "1-3 years": [6, 8, 7, 8, 7, 4, 14],
          "4-6 years": [18, 13, 15, 19, 28, 17, 18],
          "More than 6 years": [65, 62, 67, 64, 49, 71, 50]
        }
      },
      courtenay: {
        lastUpdated: "Last updated: 10-15-2025",
        keyInsightsLabel: "Key Insights:",
        keyInsights: "Data for Courtenay is currently being collected and analyzed. Results will be available soon.",
        data: {
          "Less than 1 year": [0, 0, 0, 0, 0, 0, 0],
          "1-3 years": [0, 0, 0, 0, 0, 0, 0],
          "4-6 years": [0, 0, 0, 0, 0, 0, 0],
          "More than 6 years": [0, 0, 0, 0, 0, 0, 0]
        }
      }
    },
    thoughtsOnRecreation: {
      title: "Thoughts on Recreation",
      subtitle: "Community perspective on recreation access and inclusivity",
      lowestAverage: {
        title: "Answers with lowest average",
        charts: [
          {
            question: "There are enough recreation activities in my community",
            average: 3.1,
            ethnicities: [
              { name: "Filipino", score: 2.5 },
              { name: "Southeast Asian", score: 2.7 },
              { name: "Japanese", score: 2.8 },
              { name: "Black", score: 2.9 },
              { name: "West Asian", score: 3.0 },
              { name: "Korean", score: 3.1 },
              { name: "South Asian", score: 3.2 },
              { name: "Chinese", score: 3.3 },
              { name: "White", score: 3.4 },
              { name: "Arab", score: 3.5 },
              { name: "Indigenous People", score: 3.6 },
              { name: "Latin American", score: 3.7 }
            ]
          },
          {
            question: "There are enough recreation activities for people of all ages in my community",
            average: 3.3,
            ethnicities: [
              { name: "Filipino", score: 2.8 },
              { name: "Japanese", score: 3.0 },
              { name: "Southeast Asian", score: 3.1 },
              { name: "West Asian", score: 3.2 },
              { name: "Black", score: 3.3 },
              { name: "Korean", score: 3.4 },
              { name: "Chinese", score: 3.5 },
              { name: "Arab", score: 3.6 },
              { name: "White", score: 3.7 },
              { name: "Latin American", score: 3.8 },
              { name: "Indigenous People", score: 3.9 },
              { name: "South Asian", score: 4.0 }
            ]
          }
        ]
      },
      highestAverage: {
        title: "Answers with highest average",
        charts: [
          {
            question: "I feel welcome in places like parks and community centers",
            average: 4.3,
            ethnicities: [
              { name: "Japanese", score: 3.8 },
              { name: "Arab", score: 3.9 },
              { name: "Indigenous People", score: 4.0 },
              { name: "West Asian", score: 4.1 },
              { name: "South Asian", score: 4.2 },
              { name: "Black", score: 4.3 },
              { name: "Korean", score: 4.4 },
              { name: "Chinese", score: 4.5 },
              { name: "Filipino", score: 4.6 },
              { name: "White", score: 4.7 },
              { name: "Latin American", score: 4.8 },
              { name: "Southeast Asian", score: 4.9 }
            ]
          },
          {
            question: "I have fun when I do recreation activities in my community",
            average: 4.3,
            ethnicities: [
              { name: "Japanese", score: 3.9 },
              { name: "Arab", score: 4.0 },
              { name: "Indigenous People", score: 4.1 },
              { name: "Korean", score: 4.2 },
              { name: "South Asian", score: 4.3 },
              { name: "Arab", score: 4.4 },
              { name: "West Asian", score: 4.5 },
              { name: "Black", score: 4.6 },
              { name: "Chinese", score: 4.7 },
              { name: "White", score: 4.8 },
              { name: "Latin American", score: 4.9 },
              { name: "Southeast Asian", score: 5.0 }
            ]
          }
        ]
      },
      burnaby: {
        lastUpdated: "Last updated: 10-15-2025",
        keyInsightsLabel: "Key Insights:",
        keyInsights: "Chinese, South Asian and White participants response are positive. Filipino, Japanese, West Asians have lower scores on the recreation activities available in their community."
      },
      courtenay: {
        lastUpdated: "Last updated: 10-15-2025",
        keyInsightsLabel: "Key Insights:",
        keyInsights: "Data for Courtenay is currently being collected and analyzed. Results will be available soon."
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
    communicationChannels: {
      title: "Où les gens découvrent les activités récréatives",
      subtitle: "Comment la durée de résidence en C.-B. influence les préférences des canaux de communication",
      chartLabel: "Pourcentage (%)",
      residencyGroups: ["Moins d'1 an", "1-3 ans", "4-6 ans", "Plus de 6 ans"],
      channels: [
        "Groupes Communautaires/Culturels",
        "Amis/Famille",
        "Journal/Radio",
        "Affiches/Dépliants/Panneaux",
        "Centre de Loisirs/Site Web",
        "École/Lieu de Travail",
        "Médias Sociaux"
      ],
      burnaby: {
        lastUpdated: "Dernière mise à jour: 15-10-2025",
        keyInsightsLabel: "Aperçus Clés:",
        keyInsights: "Les nouveaux résidents comptent davantage sur les médias sociaux, les amis et les groupes communautaires. Alors que les résidents vivant en C.-B. depuis plus longtemps s'appuient davantage sur les affiches, les écoles, les journaux et les sites Web municipaux.",
        data: {
          "Moins d'1 an": [8, 7, 10, 9, 14, 5, 13],
          "1-3 ans": [6, 8, 7, 8, 7, 4, 14],
          "4-6 ans": [18, 13, 15, 19, 28, 17, 18],
          "Plus de 6 ans": [65, 62, 67, 64, 49, 71, 50]
        }
      },
      courtenay: {
        lastUpdated: "Dernière mise à jour: 15-10-2025",
        keyInsightsLabel: "Aperçus Clés:",
        keyInsights: "Les données pour Courtenay sont actuellement collectées et analysées. Les résultats seront bientôt disponibles.",
        data: {
          "Moins d'1 an": [0, 0, 0, 0, 0, 0, 0],
          "1-3 ans": [0, 0, 0, 0, 0, 0, 0],
          "4-6 ans": [0, 0, 0, 0, 0, 0, 0],
          "Plus de 6 ans": [0, 0, 0, 0, 0, 0, 0]
        }
      }
    },
    thoughtsOnRecreation: {
      title: "Pensées sur les Loisirs",
      subtitle: "Perspective communautaire sur l'accès et l'inclusivité des loisirs",
      lowestAverage: {
        title: "Réponses avec la moyenne la plus basse",
        charts: [
          {
            question: "Il y a suffisamment d'activités récréatives dans ma communauté",
            average: 3.1,
            ethnicities: [
              { name: "Philippin", score: 2.5 },
              { name: "Asiatique du Sud-Est", score: 2.7 },
              { name: "Japonais", score: 2.8 },
              { name: "Noir", score: 2.9 },
              { name: "Asie de l'Ouest", score: 3.0 },
              { name: "Coréen", score: 3.1 },
              { name: "Sud-Asiatique", score: 3.2 },
              { name: "Chinois", score: 3.3 },
              { name: "Blanc", score: 3.4 },
              { name: "Arabe", score: 3.5 },
              { name: "Peuples autochtones", score: 3.6 },
              { name: "Latino-Américain", score: 3.7 }
            ]
          },
          {
            question: "Il y a suffisamment d'activités récréatives pour les personnes de tous âges dans ma communauté",
            average: 3.3,
            ethnicities: [
              { name: "Philippin", score: 2.8 },
              { name: "Japonais", score: 3.0 },
              { name: "Asiatique du Sud-Est", score: 3.1 },
              { name: "Asie de l'Ouest", score: 3.2 },
              { name: "Noir", score: 3.3 },
              { name: "Coréen", score: 3.4 },
              { name: "Chinois", score: 3.5 },
              { name: "Arabe", score: 3.6 },
              { name: "Blanc", score: 3.7 },
              { name: "Latino-Américain", score: 3.8 },
              { name: "Peuples autochtones", score: 3.9 },
              { name: "Sud-Asiatique", score: 4.0 }
            ]
          }
        ]
      },
      highestAverage: {
        title: "Réponses avec la moyenne la plus élevée",
        charts: [
          {
            question: "Je me sens bienvenu dans des endroits comme les parcs et centres communautaires",
            average: 4.3,
            ethnicities: [
              { name: "Japonais", score: 3.8 },
              { name: "Arabe", score: 3.9 },
              { name: "Peuples autochtones", score: 4.0 },
              { name: "Asie de l'Ouest", score: 4.1 },
              { name: "Sud-Asiatique", score: 4.2 },
              { name: "Noir", score: 4.3 },
              { name: "Coréen", score: 4.4 },
              { name: "Chinois", score: 4.5 },
              { name: "Philippin", score: 4.6 },
              { name: "Blanc", score: 4.7 },
              { name: "Latino-Américain", score: 4.8 },
              { name: "Asiatique du Sud-Est", score: 4.9 }
            ]
          },
          {
            question: "Je m'amuse quand je fais des activités récréatives dans ma communauté",
            average: 4.3,
            ethnicities: [
              { name: "Japonais", score: 3.9 },
              { name: "Arabe", score: 4.0 },
              { name: "Peuples autochtones", score: 4.1 },
              { name: "Coréen", score: 4.2 },
              { name: "Sud-Asiatique", score: 4.3 },
              { name: "Arabe", score: 4.4 },
              { name: "Asie de l'Ouest", score: 4.5 },
              { name: "Noir", score: 4.6 },
              { name: "Chinois", score: 4.7 },
              { name: "Blanc", score: 4.8 },
              { name: "Latino-Américain", score: 4.9 },
              { name: "Asiatique du Sud-Est", score: 5.0 }
            ]
          }
        ]
      },
      burnaby: {
        lastUpdated: "Dernière mise à jour: 15-10-2025",
        keyInsightsLabel: "Aperçus Clés:",
        keyInsights: "Les participants chinois, sud-asiatiques et blancs ont des réponses positives. Les Philippins, Japonais et Asiatiques de l'Ouest ont des scores plus bas concernant les activités récréatives disponibles dans leur communauté."
      },
      courtenay: {
        lastUpdated: "Dernière mise à jour: 15-10-2025",
        keyInsightsLabel: "Aperçus Clés:",
        keyInsights: "Les données pour Courtenay sont actuellement collectées et analysées. Les résultats seront bientôt disponibles."
      }
    },
  }
};

export type StatisticsContentType = typeof statisticsContent.en;