export const navModalContent = {
  en: {
    aboutUs: {
      header: "KNOW MORE ABOUT",
      image: {
        src: "/about-nav-image.webp",
        alt: "Community engagement - hands coming together"
      },
      links: [
        {
          path: "/project",
          text: "The Project"
        },
        {
          path: "/updates",
          text: "Timeline & Updates"
        },
        {
          path: "/schedule",
          text: "Engagement Schedule"
        }
      ]
    },
    team: {
      header: "MEET OUR TEAM",
      image: {
        src: "/team-nav-image.webp",
        alt: "Community engagement - People in a photo"
      },
      links: [
        {
          path: "/team",
          text: "Principal Researchers"
        },
        {
          path: "/team",
          text: "Collaborators"
        },
        {
          path: "/team",
          text: "Research Assistants"
        },
        {
          path: "/team",
          text: "Student Research Assistants"
        }
      ]
    },
    gallery: {
      header: "CHECK OUT OUR GALLERY",
      image: {
        src: "/gallery-nav-image.webp",
        alt: "Community engagement - Team"
      },
      links: [
        {
          path: "/gallery",
          text: "Browse Photos"
        }
      ]
    }
  },
  fr: {
    aboutUs: {
      header: "EN SAVOIR PLUS SUR",
      image: {
        src: "/about-nav-image.webp",
        alt: "Engagement communautaire - mains qui se rassemblent"
      },
      links: [
        {
          path: "/project",
          text: "Le Projet"
        },
        {
          path: "/updates",
          text: "Chronologie et Mises à Jour"
        },
        {
          path: "/schedule",
          text: "Calendrier d'Engagement"
        }
      ]
    },
    team: {
      header: "RENCONTREZ NOTRE ÉQUIPE",
      image: {
        src: "/team-nav-image.webp",
        alt: "Engagement communautaire - Personnes dans une photo"
      },
      links: [
        {
          path: "/team",
          text: "Chercheurs Principaux"
        },
        {
          path: "/team",
          text: "Collaborateurs"
        },
        {
          path: "/team",
          text: "Assistants de Recherche"
        },
        {
          path: "/team",
          text: "Assistants de Recherche Étudiants"
        }
      ]
    },
    gallery: {
      header: "DÉCOUVREZ NOTRE GALERIE",
      image: {
        src: "/gallery-nav-image.webp",
        alt: "Engagement communautaire - Équipe"
      },
      links: [
        {
          path: "/gallery",
          text: "Parcourir les Photos"
        }
      ]
    }
  }
};

export type NavModalContentType = typeof navModalContent.en;
export type SectionKey = keyof NavModalContentType;
