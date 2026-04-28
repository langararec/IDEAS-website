import { en as ethnicityEN, fr as ethnicityFR } from "./Staff/Ethnicity";
import { en as yearsWorkedEN, fr as yearsWorkedFR } from "./Staff/YearsWorked";
import { en as yearsWorkedByAreaEN, fr as yearsWorkedByAreaFR } from "./Staff/YearsWorkedByArea";
import { en as ediTrainingEN, fr as ediTrainingFR } from "./Staff/EDITraining";
import { en as demographyEN, fr as demographyFR } from "./Staff/Demography";

export const staffContent = {
  en: {
    pageTitle: "Staff Survey Report",
    ethnicity: ethnicityEN,
    yearsWorked: yearsWorkedEN,
    yearsWorkedByArea: yearsWorkedByAreaEN,
    ediTraining: ediTrainingEN,
    demography: demographyEN,
  },
  fr: {
    pageTitle: "Rapport de l'enquête sur le personnel",
    ethnicity: ethnicityFR,
    yearsWorked: yearsWorkedFR,
    yearsWorkedByArea: yearsWorkedByAreaFR,
    ediTraining: ediTrainingFR,
    demography: demographyFR,
  },
};

export type StaffContentType = typeof staffContent.en;
