// --- Shared percentage data (language-independent) ---

const BurnabyGender = {
  Woman: 77.84,
  Man: 20.10,
  NonBinary: 1.55,
  Transgender: 0.52,
};

const CourtenayGender = {
  Woman: 61.72,
  Man: 36.72,
  NonBinary: 0.78,
  Transgender: 0.78,
};

const BurnabyAge = {
  Age35_44: 29.44,
  Age55AndAbove: 24.37,
  Age45_54: 19.29,
  Age25_34: 18.78,
  Age18_24: 5.58,
  Under18: 2.54,
};

const CourtenayAge = {
  Age35_44: 27.91,
  Age55AndAbove: 26.36,
  Age45_54: 20.93,
  Age18_24: 10.85,
  Age25_34: 7.75,
  Under18: 6.20,
};

const BurnabyTimeLivingInBC = {
  MoreThan6Years: 60.20,
  OneToThreeYears: 13.78,
  FourToSixYears: 13.78,
  LessThan1Year: 12.24,
};

const CourtenayTimeLivingInBC = {
  MoreThan6Years: 63.28,
  OneToThreeYears: 24.22,
  LessThan1Year: 7.81,
  FourToSixYears: 4.69,
};

const TotalGender = {
  Woman: 71.43,
  Man: 26.71,
  NonBinary: 1.24,
  Transgender: 0.62,
};

const TotalAge = {
  Age35_44: 28.83,
  Age55AndAbove: 25.15,
  Age45_54: 19.94,
  Age25_34: 14.42,
  Age18_24: 7.67,
  Under18: 3.99,
};

const TotalTimeLivingInBC = {
  MoreThan6Years: 61.42,
  OneToThreeYears: 17.90,
  LessThan1Year: 10.49,
  FourToSixYears: 10.19,
};

// --- Language-specific content ---

export const en = {
  title: "Demographics",
  genderIdentity: {
    title: "Gender Identity",
    subtitle: "How respondents describe themselves",
    burnaby: {
      lastUpdated: "Last updated: 18-02-2026",
      data: [
        { name: "Woman",       percentage: BurnabyGender.Woman },
        { name: "Man",         percentage: BurnabyGender.Man },
        { name: "Non-binary",  percentage: BurnabyGender.NonBinary },
        { name: "Transgender", percentage: BurnabyGender.Transgender },
      ],
    },
    courtenay: {
      lastUpdated: "Last updated: 18-02-2026",
      data: [
        { name: "Woman",       percentage: CourtenayGender.Woman },
        { name: "Man",         percentage: CourtenayGender.Man },
        { name: "Non-binary",  percentage: CourtenayGender.NonBinary },
        { name: "Transgender", percentage: CourtenayGender.Transgender },
      ],
    },
    total: {
      lastUpdated: "Last updated: 18-02-2026",
      data: [
        { name: "Woman",       percentage: TotalGender.Woman },
        { name: "Man",         percentage: TotalGender.Man },
        { name: "Non-binary",  percentage: TotalGender.NonBinary },
        { name: "Transgender", percentage: TotalGender.Transgender },
      ],
    },
  },
  age: {
    title: "Age",
    subtitle: "Respondents age group",
    burnaby: {
      lastUpdated: "Last updated: 18-02-2026",
      data: [
        { name: "35–44",        percentage: BurnabyAge.Age35_44 },
        { name: "55 and above", percentage: BurnabyAge.Age55AndAbove },
        { name: "45–54",        percentage: BurnabyAge.Age45_54 },
        { name: "25–34",        percentage: BurnabyAge.Age25_34 },
        { name: "18–24",        percentage: BurnabyAge.Age18_24 },
        { name: "Under 18",     percentage: BurnabyAge.Under18 },
      ],
    },
    courtenay: {
      lastUpdated: "Last updated: 18-02-2026",
      data: [
        { name: "35–44",        percentage: CourtenayAge.Age35_44 },
        { name: "55 and above", percentage: CourtenayAge.Age55AndAbove },
        { name: "45–54",        percentage: CourtenayAge.Age45_54 },
        { name: "18–24",        percentage: CourtenayAge.Age18_24 },
        { name: "25–34",        percentage: CourtenayAge.Age25_34 },
        { name: "Under 18",     percentage: CourtenayAge.Under18 },
      ],
    },
    total: {
      lastUpdated: "Last updated: 18-02-2026",
      data: [
        { name: "35–44",        percentage: TotalAge.Age35_44 },
        { name: "55 and above", percentage: TotalAge.Age55AndAbove },
        { name: "45–54",        percentage: TotalAge.Age45_54 },
        { name: "25–34",        percentage: TotalAge.Age25_34 },
        { name: "18–24",        percentage: TotalAge.Age18_24 },
        { name: "Under 18",     percentage: TotalAge.Under18 },
      ],
    },
  },
  timeLivingInBC: {
    title: "Time Living in BC",
    subtitle: "Years of living in British Columbia",
    burnaby: {
      lastUpdated: "Last updated: 18-02-2026",
      data: [
        { name: "More than 6 years", percentage: BurnabyTimeLivingInBC.MoreThan6Years },
        { name: "1–3 years",         percentage: BurnabyTimeLivingInBC.OneToThreeYears },
        { name: "4–6 years",         percentage: BurnabyTimeLivingInBC.FourToSixYears },
        { name: "Less than 1 year",  percentage: BurnabyTimeLivingInBC.LessThan1Year },
      ],
    },
    courtenay: {
      lastUpdated: "Last updated: 18-02-2026",
      data: [
        { name: "More than 6 years", percentage: CourtenayTimeLivingInBC.MoreThan6Years },
        { name: "1–3 years",         percentage: CourtenayTimeLivingInBC.OneToThreeYears },
        { name: "Less than 1 year",  percentage: CourtenayTimeLivingInBC.LessThan1Year },
        { name: "4–6 years",         percentage: CourtenayTimeLivingInBC.FourToSixYears },
      ],
    },
    total: {
      lastUpdated: "Last updated: 18-02-2026",
      data: [
        { name: "More than 6 years", percentage: TotalTimeLivingInBC.MoreThan6Years },
        { name: "1–3 years",         percentage: TotalTimeLivingInBC.OneToThreeYears },
        { name: "Less than 1 year",  percentage: TotalTimeLivingInBC.LessThan1Year },
        { name: "4–6 years",         percentage: TotalTimeLivingInBC.FourToSixYears },
      ],
    },
  },
};

export type DemographicsType = typeof en;

export const fr: DemographicsType = {
  title: "Démographie",
  genderIdentity: {
    title: "Identité de Genre",
    subtitle: "Comment les répondants se décrivent",
    burnaby: {
      lastUpdated: "Dernière mise à jour: 18-02-2026",
      data: [
        { name: "Femme",      percentage: BurnabyGender.Woman },
        { name: "Homme",      percentage: BurnabyGender.Man },
        { name: "Non-binaire",percentage: BurnabyGender.NonBinary },
        { name: "Transgenre", percentage: BurnabyGender.Transgender },
      ],
    },
    courtenay: {
      lastUpdated: "Dernière mise à jour: 18-02-2026",
      data: [
        { name: "Femme",      percentage: CourtenayGender.Woman },
        { name: "Homme",      percentage: CourtenayGender.Man },
        { name: "Non-binaire",percentage: CourtenayGender.NonBinary },
        { name: "Transgenre", percentage: CourtenayGender.Transgender },
      ],
    },
    total: {
      lastUpdated: "Dernière mise à jour: 18-02-2026",
      data: [
        { name: "Femme",      percentage: TotalGender.Woman },
        { name: "Homme",      percentage: TotalGender.Man },
        { name: "Non-binaire",percentage: TotalGender.NonBinary },
        { name: "Transgenre", percentage: TotalGender.Transgender },
      ],
    },
  },
  age: {
    title: "Âge",
    subtitle: "Groupe d'âge des répondants",
    burnaby: {
      lastUpdated: "Dernière mise à jour: 18-02-2026",
      data: [
        { name: "35–44",    percentage: BurnabyAge.Age35_44 },
        { name: "55 et plus",percentage: BurnabyAge.Age55AndAbove },
        { name: "45–54",    percentage: BurnabyAge.Age45_54 },
        { name: "25–34",    percentage: BurnabyAge.Age25_34 },
        { name: "18–24",    percentage: BurnabyAge.Age18_24 },
        { name: "Moins de 18", percentage: BurnabyAge.Under18 },
      ],
    },
    courtenay: {
      lastUpdated: "Dernière mise à jour: 18-02-2026",
      data: [
        { name: "35–44",    percentage: CourtenayAge.Age35_44 },
        { name: "55 et plus",percentage: CourtenayAge.Age55AndAbove },
        { name: "45–54",    percentage: CourtenayAge.Age45_54 },
        { name: "18–24",    percentage: CourtenayAge.Age18_24 },
        { name: "25–34",    percentage: CourtenayAge.Age25_34 },
        { name: "Moins de 18", percentage: CourtenayAge.Under18 },
      ],
    },
    total: {
      lastUpdated: "Dernière mise à jour: 18-02-2026",
      data: [
        { name: "35–44",       percentage: TotalAge.Age35_44 },
        { name: "55 et plus",  percentage: TotalAge.Age55AndAbove },
        { name: "45–54",       percentage: TotalAge.Age45_54 },
        { name: "25–34",       percentage: TotalAge.Age25_34 },
        { name: "18–24",       percentage: TotalAge.Age18_24 },
        { name: "Moins de 18", percentage: TotalAge.Under18 },
      ],
    },
  },
  timeLivingInBC: {
    title: "Temps Vécu en C.-B.",
    subtitle: "Années de vie en Colombie-Britannique",
    burnaby: {
      lastUpdated: "Dernière mise à jour: 18-02-2026",
      data: [
        { name: "Plus de 6 ans", percentage: BurnabyTimeLivingInBC.MoreThan6Years },
        { name: "1–3 ans",       percentage: BurnabyTimeLivingInBC.OneToThreeYears },
        { name: "4–6 ans",       percentage: BurnabyTimeLivingInBC.FourToSixYears },
        { name: "Moins d'1 an",  percentage: BurnabyTimeLivingInBC.LessThan1Year },
      ],
    },
    courtenay: {
      lastUpdated: "Dernière mise à jour: 18-02-2026",
      data: [
        { name: "Plus de 6 ans", percentage: CourtenayTimeLivingInBC.MoreThan6Years },
        { name: "1–3 ans",       percentage: CourtenayTimeLivingInBC.OneToThreeYears },
        { name: "Moins d'1 an",  percentage: CourtenayTimeLivingInBC.LessThan1Year },
        { name: "4–6 ans",       percentage: CourtenayTimeLivingInBC.FourToSixYears },
      ],
    },
    total: {
      lastUpdated: "Dernière mise à jour: 18-02-2026",
      data: [
        { name: "Plus de 6 ans", percentage: TotalTimeLivingInBC.MoreThan6Years },
        { name: "1–3 ans",       percentage: TotalTimeLivingInBC.OneToThreeYears },
        { name: "Moins d'1 an",  percentage: TotalTimeLivingInBC.LessThan1Year },
        { name: "4–6 ans",       percentage: TotalTimeLivingInBC.FourToSixYears },
      ],
    },
  },
};
