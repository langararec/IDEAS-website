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
import { en as whyParksEN, fr as whyParksFR } from "./Statistics/WhyParks";
import {
  en as barriersToRecreationEN,
  fr as barriersToRecreationFR,
} from "./Statistics/BarriersToRecreation";
import {
  en as recreationInfoSourcesEN,
  fr as recreationInfoSourcesFR,
} from "./Statistics/RecreationInfoSources";
import { en as swimmingAbilityEN, fr as swimmingAbilityFR } from "./Statistics/SwimmingAbility";
import { en as swimmingComfortEN, fr as swimmingComfortFR } from "./Statistics/SwimmingComfort";
import { en as swimmingBarriersEN, fr as swimmingBarriersFR } from "./Statistics/SwimmingBarriers";

export const statisticsContent = {
  en: {
    statisticsToggle: {
      tabs: [
        {
          id: "component1",
          label: "COMMUNITY SURVEY REPORT",
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
          label: "STAFF SURVEY REPORT",
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
    swimmingAbility: swimmingAbilityEN,
    swimmingComfort: swimmingComfortEN,
    swimmingBarriers: swimmingBarriersEN,
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
          label: "RAPPORT D'ENQUÊTE COMMUNAUTAIRE",
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
          label: "RAPPORT D'ENQUÊTE DU PERSONNEL",
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
    swimmingAbility: swimmingAbilityFR,
    swimmingComfort: swimmingComfortFR,
    swimmingBarriers: swimmingBarriersFR,
    dotmocracy: {
      title: "Résultats de la Dotmocratie",
    },
    activitySheets: {
      title: "Feuilles d'Activités",
    },
  },
};

export type StatisticsContentType = typeof statisticsContent.en;
