const LAST_UPDATED_EN = "Last updated: 15-03-2026";
const LAST_UPDATED_FR = "Dernière mise à jour: 15-03-2026";

const burnabyPercentages = {
  moreThan10Years: 53,
  fiveToNineYears: 22,
  oneToFourYears:  20,
  lessThan1Year:    5,
};

const courtenayPercentages = {
  moreThan10Years: 29,
  fiveToNineYears: 21,
  oneToFourYears:  43,
  lessThan1Year:    7,
};

export const en = {
  title: "Years in Municipal Recreation",
  subtitle: "How many years have you worked in municipal recreation?",
  burnaby: {
    lastUpdated: LAST_UPDATED_EN,
    data: [
      { name: "More than 10 years", percentage: burnabyPercentages.moreThan10Years },
      { name: "5–9 years",          percentage: burnabyPercentages.fiveToNineYears },
      { name: "1–4 years",          percentage: burnabyPercentages.oneToFourYears },
      { name: "Less than 1 year",   percentage: burnabyPercentages.lessThan1Year },
    ],
  },
  courtenay: {
    lastUpdated: LAST_UPDATED_EN,
    data: [
      { name: "More than 10 years", percentage: courtenayPercentages.moreThan10Years },
      { name: "5–9 years",          percentage: courtenayPercentages.fiveToNineYears },
      { name: "1–4 years",          percentage: courtenayPercentages.oneToFourYears },
      { name: "Less than 1 year",   percentage: courtenayPercentages.lessThan1Year },
    ],
  },
};

export const fr = {
  title: "Années en Loisirs Municipaux",
  subtitle: "Depuis combien d'années travaillez-vous dans les loisirs municipaux?",
  burnaby: {
    lastUpdated: LAST_UPDATED_FR,
    data: [
      { name: "Plus de 10 ans", percentage: burnabyPercentages.moreThan10Years },
      { name: "5–9 ans",        percentage: burnabyPercentages.fiveToNineYears },
      { name: "1–4 ans",        percentage: burnabyPercentages.oneToFourYears },
      { name: "Moins d'un an",  percentage: burnabyPercentages.lessThan1Year },
    ],
  },
  courtenay: {
    lastUpdated: LAST_UPDATED_FR,
    data: [
      { name: "Plus de 10 ans", percentage: courtenayPercentages.moreThan10Years },
      { name: "5–9 ans",        percentage: courtenayPercentages.fiveToNineYears },
      { name: "1–4 ans",        percentage: courtenayPercentages.oneToFourYears },
      { name: "Moins d'un an",  percentage: courtenayPercentages.lessThan1Year },
    ],
  },
};
