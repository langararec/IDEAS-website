import {
  en as thoughtsOnRecreationEN,
  fr as thoughtsOnRecreationFR,
} from "./Statistics/ThoughtsOnRecreation";
import {
  en as belongingDignityJusticeEN,
  fr as belongingDignityJusticeFR,
} from "./Statistics/BelongingDignityJustice";
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
import {
  en as whyParksEN,
  fr as whyParksFR,
} from "./Statistics/WhyParks";
import {
  en as barriersToRecreationEN,
  fr as barriersToRecreationFR,
} from "./Statistics/BarriersToRecreation";
import {
  en as recreationInfoSourcesEN,
  fr as recreationInfoSourcesFR,
} from "./Statistics/RecreationInfoSources";

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
        {
          id: "component4",
          label: "STAFF DATA",
          shortLabel: "STAFF",
        },
      ],
    },
    surveyDataReport: surveyDataReportEN,
    demographics: demographicsEN,
    recreationBehaviors: recreationBehaviorsEN,
    communicationChannels: communicationChannelsEN,
    thoughtsOnRecreation: thoughtsOnRecreationEN,
    belongingDignityJustice: belongingDignityJusticeEN,
    whyParks: whyParksEN,
    barriersToRecreation: barriersToRecreationEN,
    recreationInfoSources: recreationInfoSourcesEN,
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
        {
          id: "component4",
          label: "DONNÉES DU PERSONNEL",
          shortLabel: "PERSONNEL",
        },
      ],
    },
    surveyDataReport: surveyDataReportFR,
    demographics: demographicsFR,
    recreationBehaviors: recreationBehaviorsFR,
    communicationChannels: communicationChannelsFR,
    thoughtsOnRecreation: thoughtsOnRecreationFR,
    belongingDignityJustice: belongingDignityJusticeFR,
    whyParks: whyParksFR,
    barriersToRecreation: barriersToRecreationFR,
    recreationInfoSources: recreationInfoSourcesFR,
  },
};

export type StatisticsContentType = typeof statisticsContent.en;
