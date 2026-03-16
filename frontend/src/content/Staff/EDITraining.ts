const LAST_UPDATED_EN = "Last updated: 15-03-2026";
const LAST_UPDATED_FR = "Dernière mise à jour: 15-03-2026";

const burnabyData = {
  coordinator:         { yes: 92,  no: 8  },
  frontLine:           { yes: 69,  no: 31 },
  frontLineSupervisor: { yes: 73,  no: 27 },
  manager:             { yes: 100, no: 0  },
};

const courtenayData = {
  coordinator:         { yes: 100, no: 0  },
  frontLine:           { yes: 38,  no: 63 },
  frontLineSupervisor: { yes: 50,  no: 50 },
  manager:             { yes: 100, no: 0  },
};

export const en = {
  title: "EDI Training by Role",
  subtitle: "Have you ever participated in any Equity, Diversity, and Inclusion (EDI) training?",
  burnaby: {
    lastUpdated: LAST_UPDATED_EN,
    areas: [
      "Coordinator",
      "Front-line",
      "Front-line Supervisor",
      "Manager",
    ],
    series: [
      {
        name: "Yes",
        data: [
          burnabyData.coordinator.yes,
          burnabyData.frontLine.yes,
          burnabyData.frontLineSupervisor.yes,
          burnabyData.manager.yes,
        ],
      },
      {
        name: "No",
        data: [
          burnabyData.coordinator.no,
          burnabyData.frontLine.no,
          burnabyData.frontLineSupervisor.no,
          burnabyData.manager.no,
        ],
      },
    ],
  },
  courtenay: {
    lastUpdated: LAST_UPDATED_EN,
    areas: [
      "Coordinator",
      "Front-line",
      "Front-line Supervisor",
      "Manager",
    ],
    series: [
      {
        name: "Yes",
        data: [
          courtenayData.coordinator.yes,
          courtenayData.frontLine.yes,
          courtenayData.frontLineSupervisor.yes,
          courtenayData.manager.yes,
        ],
      },
      {
        name: "No",
        data: [
          courtenayData.coordinator.no,
          courtenayData.frontLine.no,
          courtenayData.frontLineSupervisor.no,
          courtenayData.manager.no,
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
      "Coordinateur/trice",
      "Première ligne",
      "Superviseur/euse de première ligne",
      "Gestionnaire",
    ],
    series: [
      {
        name: "Oui",
        data: [
          burnabyData.coordinator.yes,
          burnabyData.frontLine.yes,
          burnabyData.frontLineSupervisor.yes,
          burnabyData.manager.yes,
        ],
      },
      {
        name: "Non",
        data: [
          burnabyData.coordinator.no,
          burnabyData.frontLine.no,
          burnabyData.frontLineSupervisor.no,
          burnabyData.manager.no,
        ],
      },
    ],
  },
  courtenay: {
    lastUpdated: LAST_UPDATED_FR,
    areas: [
      "Coordinateur/trice",
      "Première ligne",
      "Superviseur/euse de première ligne",
      "Gestionnaire",
    ],
    series: [
      {
        name: "Oui",
        data: [
          courtenayData.coordinator.yes,
          courtenayData.frontLine.yes,
          courtenayData.frontLineSupervisor.yes,
          courtenayData.manager.yes,
        ],
      },
      {
        name: "Non",
        data: [
          courtenayData.coordinator.no,
          courtenayData.frontLine.no,
          courtenayData.frontLineSupervisor.no,
          courtenayData.manager.no,
        ],
      },
    ],
  },
};
