import {
  en as thoughtsOnRecreationEN,
  fr as thoughtsOnRecreationFR,
} from "./Statistics/ThoughtsOnRecreation";
import {
  en as surveyDataReportEN,
  fr as surveyDataReportFR,
} from "./Statistics/SurveyDataReport";
import {
  en as demographicsEN,
  fr as demographicsFR,
} from "./Statistics/Demographics";
import {
  en as recreationBehaviorsEN,
  fr as recreationBehaviorsFR,
} from "./Statistics/RecreationBehaviors";
import {
  en as communicationChannelsEN,
  fr as communicationChannelsFR,
} from "./Statistics/CommunicationChannels";

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
    surveyDataReport: surveyDataReportEN,
    demographics: demographicsEN,
    recreationBehaviors: recreationBehaviorsEN,
    communicationChannels: communicationChannelsEN,
    thoughtsOnRecreation: thoughtsOnRecreationEN,
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
    surveyDataReport: surveyDataReportFR,
    demographics: demographicsFR,
    recreationBehaviors: recreationBehaviorsFR,
    communicationChannels: communicationChannelsFR,
    thoughtsOnRecreation: thoughtsOnRecreationFR,
  },
};

export type StatisticsContentType = typeof statisticsContent.en;
