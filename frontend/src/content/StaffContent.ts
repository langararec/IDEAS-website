import { en as ethnicityEN, fr as ethnicityFR } from "./Staff/Ethnicity";
import { en as yearsWorkedEN, fr as yearsWorkedFR } from "./Staff/YearsWorked";
import { en as yearsWorkedByAreaEN, fr as yearsWorkedByAreaFR } from "./Staff/YearsWorkedByArea";
import { en as ediTrainingEN, fr as ediTrainingFR } from "./Staff/EDITraining";

export const staffContent = {
  en: {
    pageTitle: "Staff Data",
    ethnicity: ethnicityEN,
    yearsWorked: yearsWorkedEN,
    yearsWorkedByArea: yearsWorkedByAreaEN,
    ediTraining: ediTrainingEN,
  },
  fr: {
    pageTitle: "Données du Personnel",
    ethnicity: ethnicityFR,
    yearsWorked: yearsWorkedFR,
    yearsWorkedByArea: yearsWorkedByAreaFR,
    ediTraining: ediTrainingFR,
  },
};

export type StaffContentType = typeof staffContent.en;
