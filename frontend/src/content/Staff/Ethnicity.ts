const LAST_UPDATED_EN = "Last updated: 15-03-2026";
const LAST_UPDATED_FR = "Dernière mise à jour: 15-03-2026";

const burnabyPercentages = {
  white: 72.13,
  southeastAsian: 6.56,
  latinAmerican: 6.56,
  chinese: 6.56,
  southAsian: 3.27,
  westAsian: 1.64,
  taiwanese: 1.64,
  indigenousPeoples: 1.64,
};

const courtenayPercentages = {
  white: 92.85,
  chinese: 7.15,
};

const totalPercentages = {
  white: 76,
  southeastAsian: 5.33,
  latinAmerican: 5.33,
  chinese: 6.67,
  southAsian: 2.67,
  westAsian: 1.33,
  taiwanese: 1.33,
  indigenousPeoples: 1.33,
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
  total: {
    lastUpdated: LAST_UPDATED_EN,
    data: [
      { name: "White",              percentage: totalPercentages.white },
      { name: "Southeast Asian",    percentage: totalPercentages.southeastAsian },
      { name: "Latin American",     percentage: totalPercentages.latinAmerican },
      { name: "Chinese",            percentage: totalPercentages.chinese },
      { name: "South Asian",        percentage: totalPercentages.southAsian },
      { name: "West Asian",         percentage: totalPercentages.westAsian },
      { name: "Taiwanese",          percentage: totalPercentages.taiwanese },
      { name: "Indigenous Peoples", percentage: totalPercentages.indigenousPeoples },
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
  total: {
    lastUpdated: LAST_UPDATED_FR,
    data: [
      { name: "Blanc/Blanche",         percentage: totalPercentages.white },
      { name: "Asiatique du Sud-Est",  percentage: totalPercentages.southeastAsian },
      { name: "Latino-Américain/e",    percentage: totalPercentages.latinAmerican },
      { name: "Chinois/e",             percentage: totalPercentages.chinese },
      { name: "Asiatique du Sud",      percentage: totalPercentages.southAsian },
      { name: "Asiatique de l'Ouest",  percentage: totalPercentages.westAsian },
      { name: "Taïwanais/e",           percentage: totalPercentages.taiwanese },
      { name: "Peuples Autochtones",   percentage: totalPercentages.indigenousPeoples },
    ],
  },
};
