import { en as ethnicityEN, fr as ethnicityFR } from "./Staff/Ethnicity";
import { en as yearsWorkedEN, fr as yearsWorkedFR } from "./Staff/YearsWorked";
import { en as yearsWorkedByAreaEN, fr as yearsWorkedByAreaFR } from "./Staff/YearsWorkedByArea";
import { en as ediTrainingEN, fr as ediTrainingFR } from "./Staff/EDITraining";
import { en as demographyEN, fr as demographyFR } from "./Staff/Demography";
import { en as frontlineGapEN, fr as frontlineGapFR } from "./Staff/FrontlineGap";
import { en as staffPerceptionEN, fr as staffPerceptionFR } from "./Staff/StaffPerception";
import { en as staffWhyParksEN, fr as staffWhyParksFR } from "./Staff/StaffWhyParks";
import { en as belongingDignityJusticeEN, fr as belongingDignityJusticeFR } from "./Staff/BelongingDignityJustice";

export const staffContent = {
  en: {
    pageTitle: "Staff Survey Report",
    ethnicity: ethnicityEN,
    yearsWorked: yearsWorkedEN,
    yearsWorkedByArea: yearsWorkedByAreaEN,
    ediTraining: ediTrainingEN,
    demography: demographyEN,
    frontlineGap: frontlineGapEN,
    staffPerception: staffPerceptionEN,
    staffWhyParks: staffWhyParksEN,
    belongingDignityJustice: belongingDignityJusticeEN,
  },
  fr: {
    pageTitle: "Rapport de l'enquête sur le personnel",
    ethnicity: ethnicityFR,
    yearsWorked: yearsWorkedFR,
    yearsWorkedByArea: yearsWorkedByAreaFR,
    ediTraining: ediTrainingFR,
    demography: demographyFR,
    frontlineGap: frontlineGapFR,
    staffPerception: staffPerceptionFR,
    staffWhyParks: staffWhyParksFR,
    belongingDignityJustice: belongingDignityJusticeFR,
  },
};

export type StaffContentType = typeof staffContent.en;
