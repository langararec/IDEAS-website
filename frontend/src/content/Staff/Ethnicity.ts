const LAST_UPDATED_EN = "Last updated: 15-03-2026";
const LAST_UPDATED_FR = "Dernière mise à jour: 15-03-2026";

const burnabyPercentages = {
  white: 72,
  southeastAsian: 7,
  latinAmerican: 7,
  chinese: 7,
  southAsian: 3,
  westAsian: 2,
  taiwanese: 2,
  indigenousPeoples: 2,
};

const courtenayPercentages = {
  white: 93,
  chinese: 7,
};

export const en = {
  title: "Staff Ethnicity",
  subtitle: "Ethnic background of staff members",
  burnaby: {
    lastUpdated: LAST_UPDATED_EN,
    data: [
      { name: "White",              percentage: burnabyPercentages.white },
      { name: "Southeast Asian",    percentage: burnabyPercentages.southeastAsian },
      { name: "Latin American",     percentage: burnabyPercentages.latinAmerican },
      { name: "Chinese",            percentage: burnabyPercentages.chinese },
      { name: "South Asian",        percentage: burnabyPercentages.southAsian },
      { name: "West Asian",         percentage: burnabyPercentages.westAsian },
      { name: "Taiwanese",          percentage: burnabyPercentages.taiwanese },
      { name: "Indigenous Peoples", percentage: burnabyPercentages.indigenousPeoples },
    ],
  },
  courtenay: {
    lastUpdated: LAST_UPDATED_EN,
    data: [
      { name: "White",   percentage: courtenayPercentages.white },
      { name: "Chinese", percentage: courtenayPercentages.chinese },
    ],
  },
};

export const fr = {
  title: "Ethnicité du Personnel",
  subtitle: "Origine ethnique des membres du personnel",
  burnaby: {
    lastUpdated: LAST_UPDATED_FR,
    data: [
      { name: "Blanc/Blanche",         percentage: burnabyPercentages.white },
      { name: "Asiatique du Sud-Est",  percentage: burnabyPercentages.southeastAsian },
      { name: "Latino-Américain/e",    percentage: burnabyPercentages.latinAmerican },
      { name: "Chinois/e",             percentage: burnabyPercentages.chinese },
      { name: "Asiatique du Sud",      percentage: burnabyPercentages.southAsian },
      { name: "Asiatique de l'Ouest",  percentage: burnabyPercentages.westAsian },
      { name: "Taïwanais/e",           percentage: burnabyPercentages.taiwanese },
      { name: "Peuples Autochtones",   percentage: burnabyPercentages.indigenousPeoples },
    ],
  },
  courtenay: {
    lastUpdated: LAST_UPDATED_FR,
    data: [
      { name: "Blanc/Blanche", percentage: courtenayPercentages.white },
      { name: "Chinois/e",     percentage: courtenayPercentages.chinese },
    ],
  },
};
