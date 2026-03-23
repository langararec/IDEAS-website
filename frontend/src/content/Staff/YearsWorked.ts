const LAST_UPDATED_EN = "Last updated: 15-03-2026";
const LAST_UPDATED_FR = "Dernière mise à jour: 15-03-2026";

const burnabyPercentages = {
  moreThan10Years: 53.12,
  fiveToNineYears: 21.87,
  oneToFourYears:  20.31,
  lessThan1Year:    4.68,
};

const courtenayPercentages = {
  moreThan10Years: 28.57,
  fiveToNineYears: 21.43,
  oneToFourYears:  42.86,
  lessThan1Year:    7.14,
};

const totalPercentages = {
  moreThan10Years: 48.71,
  fiveToNineYears: 21.79,
  oneToFourYears:  24.35,
  lessThan1Year:   5.13,
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
  total: {
    lastUpdated: LAST_UPDATED_EN,
    data: [
      { name: "More than 10 years", percentage: totalPercentages.moreThan10Years },
      { name: "5–9 years",          percentage: totalPercentages.fiveToNineYears },
      { name: "1–4 years",          percentage: totalPercentages.oneToFourYears },
      { name: "Less than 1 year",   percentage: totalPercentages.lessThan1Year },
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
  total: {
    lastUpdated: LAST_UPDATED_FR,
    data: [
      { name: "Plus de 10 ans", percentage: totalPercentages.moreThan10Years },
      { name: "5–9 ans",        percentage: totalPercentages.fiveToNineYears },
      { name: "1–4 ans",        percentage: totalPercentages.oneToFourYears },
      { name: "Moins d'un an",  percentage: totalPercentages.lessThan1Year },
    ],
  },
};
