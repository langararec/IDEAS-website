export const statisticsContent = {
  en: {
    statisticsToggle: {
      tabs: [
        {
          id: "component1",
          label: "SURVEY DATA REPORT",
          shortLabel: "SURVEY",
        },
        {
          id: "component2",
          label: "DOTMOCRACY",
          shortLabel: "DOTMOCRACY",
        },
        {
          id: "component3",
          label: "ACTIVITY SHEETS",
          shortLabel: "ACTIVITIES",
        },
      ],
    },
    surveyDataReport: {
      title: "Preliminary Data - Survey Results Report",
      characteristicsTitle: "Characteristics of Survey Participants",
      chartLabel: "Percentage (%)",
      cities: {
        burnaby: "Burnaby",
        courtenay: "Courtenay",
      },
      burnaby: {
        lastUpdated: "Last updated: 11-11-2025",
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
        lastUpdated: "Last updated: 11-11-2025",
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
    },
    demographics: {
      title: "Demographics",
      genderIdentity: {
        title: "Gender Identity",
        subtitle: "How respondents describe themselves",
        burnaby: {
          lastUpdated: "Last updated: 11-11-2025",
          data: [
            { name: "Woman", percentage: 76.12 },
            { name: "Man", percentage: 22.39 },
            { name: "Non-binary", percentage: 0.75 },
            { name: "Transgender", percentage: 0.75 },
          ],
        },
        courtenay: {
          lastUpdated: "Last updated: 11-11-2025",
          data: [
            { name: "Woman", percentage: 65.26 },
            { name: "Man", percentage: 32.63 },
            { name: "Non-binary", percentage: 1.05 },
            { name: "Transgender", percentage: 1.05 },
          ],
        },
      },
      age: {
        title: "Age",
        subtitle: "Respondents age group",
        burnaby: {
          lastUpdated: "Last updated: 11-11-2025",
          data: [
            { name: "35-44", percentage: 26.28 },
            { name: "55 and above", percentage: 25.55 },
            { name: "45-54", percentage: 20.44 },
            { name: "25-34", percentage: 18.98 },
            { name: "18-24", percentage: 5.11 },
            { name: "Under 18", percentage: 3.65 },
          ],
        },
        courtenay: {
          lastUpdated: "Last updated: 11-11-2025",
          data: [
            { name: "55 and above", percentage: 27.37 },
            { name: "35-44", percentage: 24.21 },
            { name: "45-54", percentage: 21.05 },
            { name: "18-24", percentage: 13.68 },
            { name: "Under 18", percentage: 7.37 },
            { name: "25-34", percentage: 6.32 },
          ],
        },
      },
      timeLivingInBC: {
        title: "Time Living in BC",
        subtitle: "Years of living in British Columbia",
        burnaby: {
          lastUpdated: "Last updated: 11-11-2025",
          data: [
            { name: "More than 6 years", percentage: 62.22 },
            { name: "1-3 years", percentage: 14.07 },
            { name: "4-6 years", percentage: 13.33 },
            { name: "Less than 1 year", percentage: 10.37 },
          ],
        },
        courtenay: {
          lastUpdated: "Last updated: 11-11-2025",
          data: [
            { name: "More than 6 years", percentage: 58.95 },
            { name: "1-3 years", percentage: 25.26 },
            { name: "Less than 1 year", percentage: 10.53 },
            { name: "4-6 years", percentage: 5.26 },
          ],
        },
      },
    },
    recreationBehaviors: {
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
        lastUpdated: "Last updated: 11-11-2025",
        keyInsightsLabel: "Key Insights:",
        keyInsights:
          "Long-term residents (6+ years) consistently dominate across all motivations, with particularly strong representation in having fun (66.67%), connecting with community (65.91%), and cultural activities (65.22%). New residents (1-3 years) show higher engagement in enjoying nature (28.57%) and spending time with family/friends (23.53%).",
        data: {
          "Less than 1 year": [
            8.33, 8.64, 13.04, 7.14, 11.36, 5.0, 8.7, 11.25, 8.43, 10.71,
          ],
          "1-3 years": [
            16.67, 12.35, 26.09, 21.43, 18.18, 12.5, 26.09, 13.75, 14.46, 13.1,
          ],
          "4-6 years": [
            13.89, 11.11, 13.04, 21.43, 10.23, 17.5, 8.7, 11.25, 13.25, 11.9,
          ],
          "More than 6 years": [
            61.11, 67.9, 47.83, 50.0, 60.23, 65.0, 56.52, 63.75, 63.86, 64.29,
          ],
        },
      },
      courtenay: {
        lastUpdated: "Last updated: 11-11-2025",
        keyInsightsLabel: "Key Insights:",
        keyInsights:
          "Long-term residents (6+ years) show the highest participation across nearly all motivations, with enjoying nature (71.85%), spending time with family/friends (63.64%), and exercising/staying healthy (61.99%) leading the way. Newer residents show more interest in learning about Canadian culture (15.71%).",
        data: {
          "Less than 1 year": [
            11.11, 8.82, 35.71, 0.0, 9.21, 13.33, 13.04, 7.69, 10.0, 7.58,
          ],
          "1-3 years": [
            25.93, 30.88, 42.86, 36.36, 25.0, 33.33, 30.43, 20.0, 23.33, 27.27,
          ],
          "4-6 years": [
            7.41, 2.94, 0.0, 0.0, 3.95, 3.33, 4.35, 4.62, 5.0, 1.52,
          ],
          "More than 6 years": [
            55.56, 57.35, 21.43, 63.64, 61.84, 50.0, 52.17, 67.69, 61.67, 63.64,
          ],
        },
      },
    },
    communicationChannels: {
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
        data: {
          "Less than 1 year": [15, 11, 0, 11, 16, 12, 9],
          "1-3 years": [6, 9, 8, 7, 8, 6, 15],
          "4-6 years": [30, 17, 15, 11, 8, 18, 30],
          "More than 6 years": [48, 63, 77, 71, 68, 65, 47],
        },
      },
      courtenay: {
        lastUpdated: "Last updated: 11-11-2025",
        keyInsightsLabel: "Key Insights:",
        keyInsights:
          "New residents rely more on community or cultural groups, schools/workplaces and social media. Long-term residents are the most users of all sources, especially city websites, local newspapers and posters/flyers.",
        data: {
          "Less than 1 year": [4, 5, 0, 3, 2, 8, 9],
          "1-3 years": [46, 29, 7, 19, 12, 35, 27],
          "4-6 years": [4, 3, 14, 9, 2, 4, 2],
          "More than 6 years": [46, 63, 79, 69, 83, 54, 61],
        },
      },
    },
    thoughtsOnRecreation: {
      title: "Thoughts on Recreation",
      subtitle: "Community perspective on recreation access and inclusivity",
      scaleLabel: "1 = Strongly Disagree, 3 = Neutral, 5 = Strongly Agree",
      burnaby: {
        lastUpdated: "Last updated: 30-11-2025",
        keyInsightsLabel: "Key Insights:",
        keyInsights:
          "Survey responses indicate that there are differences in how strongly they agreed with each statement presented to them. More work needs to be done to understand the mechanisms behind these differences.",
        lowestAverage: {
          charts: [
            {
              question:
                "There are enough recreation activities in my community",
              average: 3.1,
              ethnicities: [
                { name: "Filipino", score: 1.5 },
                { name: "Southeast Asian", score: 2.0 },
                { name: "Japanese", score: 2.5 },
                { name: "Black", score: 2.7 },
                { name: "West Asian", score: 3.2 },
                { name: "Korean", score: 3.3 },
                { name: "South Asian", score: 3.5 },
                { name: "Chinese", score: 3.6 },
                { name: "White", score: 3.6 },
                { name: "Arab", score: 3.7 },
                { name: "Indigenous People", score: 4.0 },
                { name: "Latin American", score: 4.0 },
              ],
            },
            {
              question:
                "There are enough recreation activities for people of all ages in my community",
              average: 3.3,
              ethnicities: [
                { name: "Filipino", score: 2.5 },
                { name: "Japanese", score: 2.5 },
                { name: "Southeast Asian", score: 3.0 },
                { name: "West Asian", score: 3.0 },
                { name: "Black", score: 3.3 },
                { name: "Korean", score: 3.3 },
                { name: "Chinese", score: 3.5 },
                { name: "Arab", score: 3.5 },
                { name: "Latin American", score: 3.5 },
                { name: "White", score: 3.7 },
                { name: "Indigenous People", score: 4.0 },
                { name: "South Asian", score: 4.0 },
              ],
            },
          ],
        },
        highestAverage: {
          charts: [
            {
              question:
                "I feel welcome in places like parks and community centers",
              average: 4.3,
              ethnicities: [
                { name: "Japanese", score: 3.0 },
                { name: "Arab", score: 3.8 },
                { name: "Indigenous People", score: 4.0 },
                { name: "West Asian", score: 4.0 },
                { name: "South Asian", score: 4.2 },
                { name: "Black", score: 4.3 },
                { name: "Korean", score: 4.3 },
                { name: "Chinese", score: 4.4 },
                { name: "Filipino", score: 4.5 },
                { name: "White", score: 4.6 },
                { name: "Latin American", score: 4.8 },
                { name: "Southeast Asian", score: 5.0 },
              ],
            },
            {
              question:
                "I have fun when I do recreation activities in my community",
              average: 4.3,
              ethnicities: [
                { name: "Japanese", score: 3.0 },
                { name: "Indigenous People", score: 4.0 },
                { name: "Korean", score: 4.0 },
                { name: "South Asian", score: 4.0 },
                { name: "Arab", score: 4.0 },
                { name: "West Asian", score: 4.2 },
                { name: "Black", score: 4.3 },
                { name: "Chinese", score: 4.5 },
                { name: "White", score: 4.5 },
                { name: "Filipino", score: 4.5 },
                { name: "Latin American", score: 5.0 },
                { name: "Southeast Asian", score: 5.0 },
              ],
            },
          ],
        },
      },
      courtenay: {
        lastUpdated: "Last updated: 30-11-2025",
        keyInsightsLabel: "Key Insights:",
        keyInsights:
          "Survey responses indicate that there are differences in how strongly they agreed with each statement presented to them. More work needs to be done to understand the mechanisms behind these differences.",
        lowestAverage: {
          charts: [
            {
              question:
                "There are enough recreation activities in my community",
              average: 3.2,
              ethnicities: [
                { name: "Black", score: 1.5 },
                { name: "Indigenous People", score: 2.0 },
                { name: "Chinese", score: 3.0 },
                { name: "Korean", score: 3.0 },
                { name: "South Asian", score: 3.0 },
                { name: "White", score: 3.4 },
                { name: "Filipino", score: 3.5 },
                { name: "Japanese", score: 3.5 },
                { name: "Southeast Asian", score: 3.5 },
                { name: "Latin American", score: 4.0 },
                { name: "West Asian", score: 5.0 },
              ],
            },
            {
              question:
                "There are enough recreation activities for people of all ages in my community",
              average: 3.3,
              ethnicities: [
                { name: "Korean", score: 2.0 },
                { name: "Southeast Asian", score: 2.5 },
                { name: "South Asian", score: 2.8 },
                { name: "Chinese", score: 3.0 },
                { name: "Black", score: 3.5 },
                { name: "Filipino", score: 3.5 },
                { name: "White", score: 3.5 },
                { name: "Japanese", score: 4.0 },
                { name: "Latin American", score: 4.0 },
                { name: "West Asian", score: 4.0 },
                { name: "Prefer not to disclose", score: 4.5 },
              ],
            },
          ],
        },
        highestAverage: {
          charts: [
            {
              question:
                "I feel welcome in places like parks and community centers",
              average: 4.3,
              ethnicities: [
                { name: "Korean", score: 3.0 },
                { name: "South Asian", score: 3.4 },
                { name: "Indigenous People", score: 3.5 },
                { name: "Filipino", score: 4.0 },
                { name: "Chinese", score: 4.3 },
                { name: "White", score: 4.5 },
                { name: "Japanese", score: 4.5 },
                { name: "Southeast Asian", score: 4.5 },
                { name: "Latin American", score: 4.7 },
                { name: "Arab", score: 5.0 },
                { name: "Black", score: 5.0 },
                { name: "Prefer not to disclose", score: 5.0 },
                { name: "West Asian", score: 5.0 },
              ],
            },
            {
              question:
                "I have fun when I do recreation activities in my community",
              average: 4.3,
              ethnicities: [
                { name: "Korean", score: 2.0 },
                { name: "South Asian", score: 3.4 },
                { name: "Chinese", score: 3.7 },
                { name: "Black", score: 4.0 },
                { name: "Filipino", score: 4.0 },
                { name: "West Asian", score: 4.0 },
                { name: "White", score: 4.3 },
                { name: "Indigenous People", score: 4.5 },
                { name: "Prefer not to disclose", score: 4.5 },
                { name: "Southeast Asian", score: 4.5 },
                { name: "Latin American", score: 4.7 },
                { name: "Japanese", score: 5.0 },
              ],
            },
          ],
        },
      },
    },
    dotmocracy: {
      title: "Dotmocracy Results",
    },
    activitySheets: {
      title: "Activity Sheets",
    },
  },
  fr: {
    statisticsToggle: {
      tabs: [
        {
          id: "component1",
          label: "RAPPORT DE DONNÉES D'ENQUÊTE",
          shortLabel: "ENQUÊTE",
        },
        {
          id: "component2",
          label: "DOTMOCRATIE",
          shortLabel: "DOTMOCRATIE",
        },
        {
          id: "component3",
          label: "FEUILLES D'ACTIVITÉS",
          shortLabel: "ACTIVITÉS",
        },
      ],
    },
    surveyDataReport: {
      title: "Données Préliminaires - Rapport des Résultats du Sondage",
      characteristicsTitle: "Caractéristiques des Participants au Sondage",
      chartLabel: "Pourcentage (%)",
      cities: {
        burnaby: "Burnaby",
        courtenay: "Courtenay",
      },
      burnaby: {
        lastUpdated: "Dernière mise à jour: 15-10-2025",
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
        lastUpdated: "Dernière mise à jour: 15-10-2025",
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
    },
    demographics: {
      title: "Démographie",
      genderIdentity: {
        title: "Identité de Genre",
        subtitle: "Comment les répondants se décrivent",
        burnaby: {
          lastUpdated: "Dernière mise à jour: 15-10-2025",
          data: [
            { name: "Femme", percentage: 76.12 },
            { name: "Homme", percentage: 22.39 },
            { name: "Non-binaire", percentage: 0.75 },
            { name: "Transgenre", percentage: 0.75 },
          ],
        },
        courtenay: {
          lastUpdated: "Dernière mise à jour: 15-10-2025",
          data: [
            { name: "Femme", percentage: 65.26 },
            { name: "Homme", percentage: 32.63 },
            { name: "Non-binaire", percentage: 1.05 },
            { name: "Transgenre", percentage: 1.05 },
          ],
        },
      },
      age: {
        title: "Âge",
        subtitle: "Groupe d'âge des répondants",
        burnaby: {
          lastUpdated: "Dernière mise à jour: 15-10-2025",
          data: [
            { name: "35-44", percentage: 26.28 },
            { name: "55 et plus", percentage: 25.55 },
            { name: "45-54", percentage: 20.44 },
            { name: "25-34", percentage: 18.98 },
            { name: "18-24", percentage: 5.11 },
            { name: "Moins de 18", percentage: 3.65 },
          ],
        },
        courtenay: {
          lastUpdated: "Dernière mise à jour: 15-10-2025",
          data: [
            { name: "55 et plus", percentage: 27.37 },
            { name: "35-44", percentage: 24.21 },
            { name: "45-54", percentage: 21.05 },
            { name: "18-24", percentage: 13.68 },
            { name: "Moins de 18", percentage: 7.37 },
            { name: "25-34", percentage: 6.32 },
          ],
        },
      },
      timeLivingInBC: {
        title: "Temps Vécu en C.-B.",
        subtitle: "Années de vie en Colombie-Britannique",
        burnaby: {
          lastUpdated: "Dernière mise à jour: 15-10-2025",
          data: [
            { name: "Plus de 6 ans", percentage: 62.22 },
            { name: "1-3 ans", percentage: 14.07 },
            { name: "4-6 ans", percentage: 13.33 },
            { name: "Moins d'1 an", percentage: 10.37 },
          ],
        },
        courtenay: {
          lastUpdated: "Dernière mise à jour: 15-10-2025",
          data: [
            { name: "Plus de 6 ans", percentage: 58.95 },
            { name: "1-3 ans", percentage: 25.26 },
            { name: "Moins d'1 an", percentage: 10.53 },
            { name: "4-6 ans", percentage: 5.26 },
          ],
        },
      },
    },
    recreationBehaviors: {
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
        lastUpdated: "Dernière mise à jour: 15-10-2025",
        keyInsightsLabel: "Aperçus Clés:",
        keyInsights:
          "Les résidents de longue date (6+ ans) dominent constamment dans toutes les motivations, avec une représentation particulièrement forte pour s'amuser (66,67%), se connecter avec la communauté (65,91%) et les activités culturelles (65,22%). Les nouveaux résidents (1–3 ans) montrent un engagement plus élevé pour profiter de la nature (28,57%) et passer du temps avec la famille/les amis (23,53%).",
        data: {
          "Moins d'1 an": [
            8.33, 8.64, 13.04, 7.14, 11.36, 5.0, 8.7, 11.25, 8.43, 10.71,
          ],
          "1-3 ans": [
            16.67, 12.35, 26.09, 21.43, 18.18, 12.5, 26.09, 13.75, 14.46, 13.1,
          ],
          "4-6 ans": [
            13.89, 11.11, 13.04, 21.43, 10.23, 17.5, 8.7, 11.25, 13.25, 11.9,
          ],
          "Plus de 6 ans": [
            61.11, 67.9, 47.83, 50.0, 60.23, 65.0, 56.52, 63.75, 63.86, 64.29,
          ],
        },
      },
      courtenay: {
        lastUpdated: "Dernière mise à jour: 15-10-2025",
        keyInsightsLabel: "Aperçus Clés:",
        keyInsights:
          "Les résidents de longue date (6+ ans) montrent la plus haute participation dans presque toutes les motivations, avec profiter de la nature (71,85%), passer du temps avec la famille/les amis (63,64%) et faire de l'exercice/rester en santé (61,99%) en tête. Les nouveaux résidents montrent plus d'intérêt pour découvrir la culture canadienne (15,71%).",
        data: {
          "Moins d'1 an": [
            11.11, 8.82, 35.71, 0.0, 9.21, 13.33, 13.04, 7.69, 10.0, 7.58,
          ],
          "1-3 ans": [
            25.93, 30.88, 42.86, 36.36, 25.0, 33.33, 30.43, 20.0, 23.33, 27.27,
          ],
          "4-6 ans": [7.41, 2.94, 0.0, 0.0, 3.95, 3.33, 4.35, 4.62, 5.0, 1.52],
          "Plus de 6 ans": [
            55.56, 57.35, 21.43, 63.64, 61.84, 50.0, 52.17, 67.69, 61.67, 63.64,
          ],
        },
      },
    },
    communicationChannels: {
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
          "Moins d'1 an": [15, 11, 0, 11, 16, 12, 9],
          "1-3 ans": [6, 9, 8, 7, 8, 6, 15],
          "4-6 ans": [30, 17, 15, 11, 8, 18, 30],
          "Plus de 6 ans": [48, 63, 77, 71, 68, 65, 47],
        },
      },
      courtenay: {
        lastUpdated: "Dernière mise à jour: 15-10-2025",
        keyInsightsLabel: "Aperçus Clés:",
        keyInsights:
          "Les nouveaux résidents comptent davantage sur les groupes communautaires ou culturels, les écoles/lieux de travail et les médias sociaux. Les résidents de longue date sont les plus grands utilisateurs de toutes les sources, en particulier les sites Web municipaux, les journaux locaux et les affiches/dépliants.",
        data: {
          "Moins d'1 an": [4, 5, 0, 3, 2, 8, 9],
          "1-3 ans": [46, 29, 7, 19, 12, 35, 27],
          "4-6 ans": [4, 3, 14, 9, 2, 4, 2],
          "Plus de 6 ans": [46, 63, 79, 69, 83, 54, 61],
        },
      },
    },
    thoughtsOnRecreation: {
      title: "Pensées sur les Loisirs",
      subtitle:
        "Perspective communautaire sur l'accès et l'inclusivité des loisirs",
      scaleLabel: "1 = Fortement en désaccord, 3 = Neutre, 5 = Fortement d'accord",
      burnaby: {
        lastUpdated: "Dernière mise à jour: 30-11-2025",
        keyInsightsLabel: "Aperçus Clés:",
        keyInsights:
          "Les réponses au sondage indiquent qu'il existe des différences dans la force avec laquelle les participants ont approuvé chaque énoncé qui leur a été présenté. Davantage de travail est nécessaire pour comprendre les mécanismes derrière ces différences.",
        lowestAverage: {
          charts: [
            {
              question:
                "Il y a suffisamment d'activités récréatives dans ma communauté",
              average: 3.1,
              ethnicities: [
                { name: "Philippin", score: 1.5 },
                { name: "Asiatique du Sud-Est", score: 2.0 },
                { name: "Japonais", score: 2.5 },
                { name: "Noir", score: 2.7 },
                { name: "Asie de l'Ouest", score: 3.2 },
                { name: "Coréen", score: 3.3 },
                { name: "Sud-Asiatique", score: 3.5 },
                { name: "Chinois", score: 3.6 },
                { name: "Blanc", score: 3.6 },
                { name: "Arabe", score: 3.7 },
                { name: "Peuples autochtones", score: 4.0 },
                { name: "Latino-Américain", score: 4.0 },
              ],
            },
            {
              question:
                "Il y a suffisamment d'activités récréatives pour les personnes de tous âges dans ma communauté",
              average: 3.3,
              ethnicities: [
                { name: "Philippin", score: 2.5 },
                { name: "Japonais", score: 2.5 },
                { name: "Asiatique du Sud-Est", score: 3.0 },
                { name: "Asie de l'Ouest", score: 3.0 },
                { name: "Noir", score: 3.3 },
                { name: "Coréen", score: 3.3 },
                { name: "Chinois", score: 3.5 },
                { name: "Arabe", score: 3.5 },
                { name: "Latino-Américain", score: 3.5 },
                { name: "Blanc", score: 3.7 },
                { name: "Peuples autochtones", score: 4.0 },
                { name: "Sud-Asiatique", score: 4.0 },
              ],
            },
          ],
        },
        highestAverage: {
          charts: [
            {
              question:
                "Je me sens bienvenu dans des endroits comme les parcs et centres communautaires",
              average: 4.3,
              ethnicities: [
                { name: "Japonais", score: 3.0 },
                { name: "Arabe", score: 3.8 },
                { name: "Peuples autochtones", score: 4.0 },
                { name: "Asie de l'Ouest", score: 4.0 },
                { name: "Sud-Asiatique", score: 4.2 },
                { name: "Noir", score: 4.3 },
                { name: "Coréen", score: 4.3 },
                { name: "Chinois", score: 4.4 },
                { name: "Philippin", score: 4.5 },
                { name: "Blanc", score: 4.6 },
                { name: "Latino-Américain", score: 4.8 },
                { name: "Asiatique du Sud-Est", score: 5.0 },
              ],
            },
            {
              question:
                "Je m'amuse quand je fais des activités récréatives dans ma communauté",
              average: 4.3,
              ethnicities: [
                { name: "Japonais", score: 3.0 },
                { name: "Peuples autochtones", score: 4.0 },
                { name: "Coréen", score: 4.0 },
                { name: "Sud-Asiatique", score: 4.0 },
                { name: "Arabe", score: 4.0 },
                { name: "Asie de l'Ouest", score: 4.2 },
                { name: "Noir", score: 4.3 },
                { name: "Chinois", score: 4.5 },
                { name: "Blanc", score: 4.5 },
                { name: "Philippin", score: 4.5 },
                { name: "Latino-Américain", score: 5.0 },
                { name: "Asiatique du Sud-Est", score: 5.0 },
              ],
            },
          ],
        },
      },
      courtenay: {
        lastUpdated: "Dernière mise à jour: 30-11-2025",
        keyInsightsLabel: "Aperçus Clés:",
        keyInsights:
          "Les réponses au sondage indiquent qu'il existe des différences dans la force avec laquelle les participants ont approuvé chaque énoncé qui leur a été présenté. Davantage de travail est nécessaire pour comprendre les mécanismes derrière ces différences.",
        lowestAverage: {
          charts: [
            {
              question:
                "Il y a suffisamment d'activités récréatives dans ma communauté",
              average: 3.2,
              ethnicities: [
                { name: "Noir", score: 1.5 },
                { name: "Peuples autochtones", score: 2.0 },
                { name: "Chinois", score: 3.0 },
                { name: "Coréen", score: 3.0 },
                { name: "Sud-Asiatique", score: 3.0 },
                { name: "Blanc", score: 3.4 },
                { name: "Philippin", score: 3.5 },
                { name: "Japonais", score: 3.5 },
                { name: "Asiatique du Sud-Est", score: 3.5 },
                { name: "Latino-Américain", score: 4.0 },
                { name: "Asie de l'Ouest", score: 5.0 },
              ],
            },
            {
              question:
                "Il y a suffisamment d'activités récréatives pour les personnes de tous âges dans ma communauté",
              average: 3.3,
              ethnicities: [
                { name: "Coréen", score: 2.0 },
                { name: "Asiatique du Sud-Est", score: 2.5 },
                { name: "Sud-Asiatique", score: 2.8 },
                { name: "Chinois", score: 3.0 },
                { name: "Noir", score: 3.5 },
                { name: "Philippin", score: 3.5 },
                { name: "Blanc", score: 3.5 },
                { name: "Japonais", score: 4.0 },
                { name: "Latino-Américain", score: 4.0 },
                { name: "Asie de l'Ouest", score: 4.0 },
                { name: "Préfère ne pas divulguer", score: 4.5 },
              ],
            },
          ],
        },
        highestAverage: {
          charts: [
            {
              question:
                "Je me sens bienvenu dans des endroits comme les parcs et centres communautaires",
              average: 4.3,
              ethnicities: [
                { name: "Coréen", score: 3.0 },
                { name: "Sud-Asiatique", score: 3.4 },
                { name: "Peuples autochtones", score: 3.5 },
                { name: "Philippin", score: 4.0 },
                { name: "Chinois", score: 4.3 },
                { name: "Blanc", score: 4.5 },
                { name: "Japonais", score: 4.5 },
                { name: "Asiatique du Sud-Est", score: 4.5 },
                { name: "Latino-Américain", score: 4.7 },
                { name: "Arabe", score: 5.0 },
                { name: "Noir", score: 5.0 },
                { name: "Préfère ne pas divulguer", score: 5.0 },
                { name: "Asie de l'Ouest", score: 5.0 },
              ],
            },
            {
              question:
                "Je m'amuse quand je fais des activités récréatives dans ma communauté",
              average: 4.3,
              ethnicities: [
                { name: "Coréen", score: 2.0 },
                { name: "Sud-Asiatique", score: 3.4 },
                { name: "Chinois", score: 3.7 },
                { name: "Noir", score: 4.0 },
                { name: "Philippin", score: 4.0 },
                { name: "Asie de l'Ouest", score: 4.0 },
                { name: "Blanc", score: 4.3 },
                { name: "Peuples autochtones", score: 4.5 },
                { name: "Préfère ne pas divulguer", score: 4.5 },
                { name: "Asiatique du Sud-Est", score: 4.5 },
                { name: "Latino-Américain", score: 4.7 },
                { name: "Japonais", score: 5.0 },
              ],
            },
          ],
        },
      },
    },
  },
};

export type StatisticsContentType = typeof statisticsContent.en;
