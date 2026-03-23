const LAST_UPDATED_EN = "Last updated: 15-03-2026";
const LAST_UPDATED_FR = "Dernière mise à jour: 15-03-2026";

const burnabyData = {
  coordinator:         { yes: 91.67,  no: 8.33  },
  frontLine:           { yes: 68.75,  no: 31.25 },
  frontLineSupervisor: { yes: 72.72,  no: 27.28 },
  manager:             { yes: 100, no: 0  },
};

const courtenayData = {
  coordinator:         { yes: 100, no: 0  },
  frontLine:           { yes: 37.5,  no: 62.5 },
  frontLineSupervisor: { yes: 50,  no: 50 },
  manager:             { yes: 100, no: 0  },
};

const totalData = {
  coordinator:         { yes: 92.3,  no: 7.69 },
  frontLine:           { yes: 62.5,  no: 37.5  },
  frontLineSupervisor: { yes: 69.23,  no: 30.77  },
  manager:             { yes: 100,  no: 0  },
};

export const en = {
  title: "EDI Training by Role",
  subtitle: "Have you ever participated in any Equity, Diversity, and Inclusion (EDI) training?",
  burnaby: {
    lastUpdated: LAST_UPDATED_EN,
    areas: [
      "Manager",
      "Coordinator",
      "Front-line Supervisor",
      "Front-line",
    ],
    series: [
      {
        name: "Yes",
        data: [
          burnabyData.manager.yes,
          burnabyData.coordinator.yes,
          burnabyData.frontLineSupervisor.yes,
          burnabyData.frontLine.yes,
        ],
      },
      {
        name: "No",
        data: [
          burnabyData.manager.no,
          burnabyData.coordinator.no,
          burnabyData.frontLineSupervisor.no,
          burnabyData.frontLine.no,
        ],
      },
    ],
  },
  courtenay: {
    lastUpdated: LAST_UPDATED_EN,
    areas: [
      "Manager",
      "Coordinator",
      "Front-line Supervisor",
      "Front-line",
    ],
    series: [
      {
        name: "Yes",
        data: [
          courtenayData.manager.yes,
          courtenayData.coordinator.yes,
          courtenayData.frontLineSupervisor.yes,
          courtenayData.frontLine.yes,
        ],
      },
      {
        name: "No",
        data: [
          courtenayData.manager.no,
          courtenayData.coordinator.no,
          courtenayData.frontLineSupervisor.no,
          courtenayData.frontLine.no,
        ],
      },
    ],
  },
  total: {
    lastUpdated: LAST_UPDATED_EN,
    areas: [
      "Manager",
      "Coordinator",
      "Front-line Supervisor",
      "Front-line",
    ],
    series: [
      {
        name: "Yes",
        data: [
          totalData.manager.yes,
          totalData.coordinator.yes,
          totalData.frontLineSupervisor.yes,
          totalData.frontLine.yes,
        ],
      },
      {
        name: "No",
        data: [
          totalData.manager.no,
          totalData.coordinator.no,
          totalData.frontLineSupervisor.no,
          totalData.frontLine.no,
        ],
      },
    ],
  },
};

export const fr = {
  title: "Formation EDI par Rôle",
  subtitle: "Avez-vous déjà participé à une formation sur l'équité, la diversité et l'inclusion (EDI)?",
  burnaby: {
    lastUpdated: LAST_UPDATED_FR,
    areas: [
      "Gestionnaire",
      "Coordinateur/trice",
      "Superviseur/euse de première ligne",
      "Première ligne",
    ],
    series: [
      {
        name: "Oui",
        data: [
          burnabyData.manager.yes,
          burnabyData.coordinator.yes,
          burnabyData.frontLineSupervisor.yes,
          burnabyData.frontLine.yes,
        ],
      },
      {
        name: "Non",
        data: [
          burnabyData.manager.no,
          burnabyData.coordinator.no,
          burnabyData.frontLineSupervisor.no,
          burnabyData.frontLine.no,
        ],
      },
    ],
  },
  courtenay: {
    lastUpdated: LAST_UPDATED_FR,
    areas: [
      "Gestionnaire",
      "Coordinateur/trice",
      "Superviseur/euse de première ligne",
      "Première ligne",
    ],
    series: [
      {
        name: "Oui",
        data: [
          courtenayData.manager.yes,
          courtenayData.coordinator.yes,
          courtenayData.frontLineSupervisor.yes,
          courtenayData.frontLine.yes,
        ],
      },
      {
        name: "Non",
        data: [
          courtenayData.manager.no,
          courtenayData.coordinator.no,
          courtenayData.frontLineSupervisor.no,
          courtenayData.frontLine.no,
        ],
      },
    ],
  },
  total: {
    lastUpdated: LAST_UPDATED_FR,
    areas: [
      "Gestionnaire",
      "Coordinateur/trice",
      "Superviseur/euse de première ligne",
      "Première ligne",
    ],
    series: [
      {
        name: "Oui",
        data: [
          totalData.manager.yes,
          totalData.coordinator.yes,
          totalData.frontLineSupervisor.yes,
          totalData.frontLine.yes,
        ],
      },
      {
        name: "Non",
        data: [
          totalData.manager.no,
          totalData.coordinator.no,
          totalData.frontLineSupervisor.no,
          totalData.frontLine.no,
        ],
      },
    ],
  },
};
