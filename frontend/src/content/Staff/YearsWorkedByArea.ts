const LAST_UPDATED_EN = "Last updated: 15-03-2026";
const LAST_UPDATED_FR = "Dernière mise à jour: 15-03-2026";

// Burnaby columns: Parks, Recreation, Culture
const burnabyData = {
  moreThan10Years: { parks: 0,   recreation: 57.78, culture: 46.15 },
  fiveToNineYears: { parks: 0,   recreation: 22.22, culture: 15.38 },
  oneToFourYears:  { parks: 100, recreation: 13.33, culture: 38.46 },
  lessThan1Year:   { parks: 0,   recreation: 6.67,  culture: 0  },
};

// Courtenay column: Recreation only
const courtenayData = {
  moreThan10Years: { recreation: 30.77 },
  fiveToNineYears: { recreation: 15.38 },
  oneToFourYears:  { recreation: 46.15 },
  lessThan1Year:   { recreation: 7.69  },
};

const totalData = {
  moreThan10Years: { parks: 0,  recreation: 51.72, culture: 46.15 },
  fiveToNineYears: { parks: 0,  recreation: 20.69, culture: 15.38 },
  oneToFourYears:  { parks: 100,  recreation: 20.69, culture: 38.46 },
  lessThan1Year:   { parks: 0,  recreation: 6.9, culture: 0 },
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
  total: {
    lastUpdated: LAST_UPDATED_EN,
    areas: ["Parks", "Recreation", "Culture"],
    series: [
      { name: "More than 10 years", data: [totalData.moreThan10Years.parks, totalData.moreThan10Years.recreation, totalData.moreThan10Years.culture] },
      { name: "5–9 years",          data: [totalData.fiveToNineYears.parks, totalData.fiveToNineYears.recreation, totalData.fiveToNineYears.culture] },
      { name: "1–4 years",          data: [totalData.oneToFourYears.parks,  totalData.oneToFourYears.recreation,  totalData.oneToFourYears.culture] },
      { name: "Less than 1 year",   data: [totalData.lessThan1Year.parks,   totalData.lessThan1Year.recreation,   totalData.lessThan1Year.culture] },
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
  total: {
    lastUpdated: LAST_UPDATED_FR,
    areas: ["Parcs", "Loisirs", "Culture"],
    series: [
      { name: "Plus de 10 ans", data: [totalData.moreThan10Years.parks, totalData.moreThan10Years.recreation, totalData.moreThan10Years.culture] },
      { name: "5–9 ans",        data: [totalData.fiveToNineYears.parks, totalData.fiveToNineYears.recreation, totalData.fiveToNineYears.culture] },
      { name: "1–4 ans",        data: [totalData.oneToFourYears.parks,  totalData.oneToFourYears.recreation,  totalData.oneToFourYears.culture] },
      { name: "Moins d'un an",  data: [totalData.lessThan1Year.parks,   totalData.lessThan1Year.recreation,   totalData.lessThan1Year.culture] },
    ],
  },
};
