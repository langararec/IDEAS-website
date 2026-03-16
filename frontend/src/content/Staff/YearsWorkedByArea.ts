const LAST_UPDATED_EN = "Last updated: 15-03-2026";
const LAST_UPDATED_FR = "Dernière mise à jour: 15-03-2026";

// Burnaby columns: Parks, Recreation, Culture
const burnabyData = {
  moreThan10Years: { parks: 0,   recreation: 58, culture: 46 },
  fiveToNineYears: { parks: 0,   recreation: 22, culture: 15 },
  oneToFourYears:  { parks: 100, recreation: 13, culture: 38 },
  lessThan1Year:   { parks: 0,   recreation: 7,  culture: 0  },
};

// Courtenay column: Recreation only
const courtenayData = {
  moreThan10Years: { recreation: 31 },
  fiveToNineYears: { recreation: 15 },
  oneToFourYears:  { recreation: 46 },
  lessThan1Year:   { recreation: 8  },
};

export const en = {
  title: "Years in Recreation by Area",
  subtitle: "How many years have you worked in municipal recreation, by area of public recreation?",
  burnaby: {
    lastUpdated: LAST_UPDATED_EN,
    areas: ["Parks", "Recreation", "Culture"],
    series: [
      { name: "More than 10 years", data: [burnabyData.moreThan10Years.parks, burnabyData.moreThan10Years.recreation, burnabyData.moreThan10Years.culture] },
      { name: "5–9 years",          data: [burnabyData.fiveToNineYears.parks, burnabyData.fiveToNineYears.recreation, burnabyData.fiveToNineYears.culture] },
      { name: "1–4 years",          data: [burnabyData.oneToFourYears.parks,  burnabyData.oneToFourYears.recreation,  burnabyData.oneToFourYears.culture] },
      { name: "Less than 1 year",   data: [burnabyData.lessThan1Year.parks,   burnabyData.lessThan1Year.recreation,   burnabyData.lessThan1Year.culture] },
    ],
  },
  courtenay: {
    lastUpdated: LAST_UPDATED_EN,
    areas: ["Recreation"],
    series: [
      { name: "More than 10 years", data: [courtenayData.moreThan10Years.recreation] },
      { name: "5–9 years",          data: [courtenayData.fiveToNineYears.recreation] },
      { name: "1–4 years",          data: [courtenayData.oneToFourYears.recreation] },
      { name: "Less than 1 year",   data: [courtenayData.lessThan1Year.recreation] },
    ],
  },
};

export const fr = {
  title: "Années en Loisirs par Secteur",
  subtitle: "Depuis combien d'années travaillez-vous dans les loisirs municipaux, par secteur?",
  burnaby: {
    lastUpdated: LAST_UPDATED_FR,
    areas: ["Parcs", "Loisirs", "Culture"],
    series: [
      { name: "Plus de 10 ans", data: [burnabyData.moreThan10Years.parks, burnabyData.moreThan10Years.recreation, burnabyData.moreThan10Years.culture] },
      { name: "5–9 ans",        data: [burnabyData.fiveToNineYears.parks, burnabyData.fiveToNineYears.recreation, burnabyData.fiveToNineYears.culture] },
      { name: "1–4 ans",        data: [burnabyData.oneToFourYears.parks,  burnabyData.oneToFourYears.recreation,  burnabyData.oneToFourYears.culture] },
      { name: "Moins d'un an",  data: [burnabyData.lessThan1Year.parks,   burnabyData.lessThan1Year.recreation,   burnabyData.lessThan1Year.culture] },
    ],
  },
  courtenay: {
    lastUpdated: LAST_UPDATED_FR,
    areas: ["Loisirs"],
    series: [
      { name: "Plus de 10 ans", data: [courtenayData.moreThan10Years.recreation] },
      { name: "5–9 ans",        data: [courtenayData.fiveToNineYears.recreation] },
      { name: "1–4 ans",        data: [courtenayData.oneToFourYears.recreation] },
      { name: "Moins d'un an",  data: [courtenayData.lessThan1Year.recreation] },
    ],
  },
};
