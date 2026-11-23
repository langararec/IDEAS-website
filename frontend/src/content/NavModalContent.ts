export const navModalContent = {
  en: {
    aboutUs: {
      header: "KNOW MORE ABOUT",
      image: {
        src: "/holdinghands-nav.webp",
        alt: "Community engagement - hands coming together"
      },
      links: [
        {
          path: "/ideas/project",
          text: "The Project"
        },
        {
          path: "/ideas/updates",
          text: "Project timeline"
        },
        {
          path: "/ideas/schedule",
          text: "Engagement Schedule"
        }
      ]
    },
    team: {
      header: "MEET OUR TEAM",
      image: {
        src: "/team-nav-thumbnail.webp",
        alt: "Community engagement - People in a photo"
      },
      links: [
        {
          path: "/ideas/team",
          text: "Principal Researchers"
        },
        {
          path: "/ideas/team",
          text: "Collaborators"
        },
        {
          path: "/ideas/team",
          text: "Research Assistants"
        },
        {
          path: "/ideas/team",
          text: "Student Research Assistants"
        }
      ]
    },
    gallery: {
      header: "CHECK OUT OUR GALLERY",
      image: {
        src: "/gallery-nav-thumbnail.webp",
        alt: "Community engagement - Team"
      },
      links: [
        {
          path: "/ideas/gallery",
          text: "Browse Photos"
        }
      ]
    }
  },
  fr: {
    aboutUs: {
      header: "EN SAVOIR PLUS SUR",
      image: {
        src: "/holdinghands-nav.webp",
        alt: "Engagement communautaire - mains qui se rassemblent"
      },
      links: [
        {
          path: "/ideas/project",
          text: "Le Projet"
        },
        {
          path: "/ideas/updates",
          text: "Chronologie du projet"
        },
        {
          path: "/ideas/schedule",
          text: "Calendrier d'Engagement"
        }
      ]
    },
    team: {
      header: "RENCONTREZ NOTRE ÉQUIPE",
      image: {
        src: "/team-nav-thumbnail.webp",
        alt: "Engagement communautaire - Personnes dans une photo"
      },
      links: [
        {
          path: "/ideas/team",
          text: "Chercheurs Principaux"
        },
        {
          path: "/ideas/team",
          text: "Collaborateurs"
        },
        {
          path: "/ideas/team",
          text: "Assistants de Recherche"
        },
        {
          path: "/ideas/team",
          text: "Assistants de Recherche Étudiants"
        }
      ]
    },
    gallery: {
      header: "DÉCOUVREZ NOTRE GALERIE",
      image: {
        src: "/gallery-nav-thumbnail.webp",
        alt: "Engagement communautaire - Équipe"
      },
      links: [
        {
          path: "/ideas/gallery",
          text: "Parcourir les Photos"
        }
      ]
    }
  }
};

export type NavModalContentType = typeof navModalContent.en;
export type SectionKey = keyof NavModalContentType;
