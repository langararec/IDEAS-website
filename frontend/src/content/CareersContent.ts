export type CareerListing = {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  applyEmail: string;
  applyCC?: string;
  applySubject?: string;
  applyInstructions?: string;
  additionalDetails?: { label: string; value: string }[];
  postedDate: string; // ISO date string
};

/** Manage open positions here. Remove entries to hide them (or clear the array for "no openings"). */
export const careerListings: CareerListing[] = [
  {
    id: "sra-2026-01",
    title: "Student Research Assistant (2 Positions)",
    department: "Applied Research Centre — IDEAs in Public Recreation",
    type: "Part-time",
    location: "Vancouver, BC, Canada",
    description:
      "We require 2 Student Research Assistants to work with the Applied Research Centre in the IDEAs in Public Recreation research project.\n\nThe Research Assistant will support this project through reviewing and compiling literature, writing annotated bibliographies, conducting one-on-one interviews, transcribing one-on-one interviews, recording fieldnotes, qualitative data analysis, and attending research meetings as needed. The specific duties performed by the Research Assistant will be determined by the current phase of the research project and the priority of research tasks.\n\nIn particular, we encourage students from racialized / visible minority groups who may speak a 2nd language other than English to apply for this position.\n\nAbout the project:\n\nThis research project aims to explore how immigrant and racialized groups perceive and access public recreation in British Columbia (BC), compared to current public recreation frameworks. It seeks sustainable engagement methods between the public recreation sector and equity-deserving groups, focusing on cocreating initiatives with immigrant and racialized communities and municipal recreation staff.\n\nThe study will concentrate on two BC locales with growing immigrant and racialized populations: a major metropolitan area in Greater Vancouver and a smaller community on Vancouver Island. The research emphasizes that enhanced access to public recreation for these communities could lead to better community integration, stronger community bonds, and greater social cohesion. The project's objectives include understanding if and how immigrant and racialized communities' views on recreation differ from those of native-born public recreation workers and identifying barriers to access, and establishing a sustainable, co-creative process for developing public recreation initiatives. The research project also aims to not only bridge gaps in access and understanding but also to model a blueprint for inclusive public recreation across Canada.\n\nAbout the Applied Research Centre (ARC):\n\nARC was founded in 2015 with the mandate to enhance and support applied research at Langara College. ARC has successfully identified funding and partnership opportunities and has cultivated relationships with businesses, not-for-profits, and First Nations which have resulted in many applied research projects. Importantly, these projects have enabled the training and mentorship of student employees at Langara.",
    responsibilities: [
      "Engaging with community to solicit survey submissions at recreation centres, parks, and public spaces",
      "Attending public events to promote the research project",
      "Transcribing interview recordings",
      "Assisting with focus group facilitation and interviews",
      "Attending research meetings as needed",
      "Other research duties as assigned by a supervisor",
    ],
    qualifications: [
      "Be a current Langara student (domestic or international)",
      "Experience working with Zotero (or other) reference management platforms",
      "Experience searching and compiling literature using journal databases / library databases",
      "Ideally have completed a research methods course and/or LIBR 3210: Online Research and Analysis",
      "Have well-developed written, oral and organizational skills",
      "Be capable of a high level of accuracy and attention to detail and have the ability to work quickly and accurately",
      "Be able to follow written procedures in carrying out routine tasks",
      "Be able to work effectively and independently in a small team environment",
      "Have a curious mindset and willingness to learn, adapt, and explore new techniques and approaches",
    ],
    applyEmail: "yccheng@langara.ca",
    applyCC: "skumaran@langara.ca",
    applySubject: "ARC-IDEAs in Public Recreation",
    applyInstructions:
      "Please email your resume and cover letter as ONE PDF. Name the file with your first initial and last name. State \"ARC-IDEAs in Public Recreation\" in the email subject line. Email yccheng@langara.ca and copy skumaran@langara.ca.",
    additionalDetails: [
      { label: "Position Type", value: "Part Time Employment" },
      { label: "Remote / On-Site", value: "On-site" },
      { label: "Location", value: "Vancouver, BC, Canada" },
      { label: "Desired Skills", value: "Mentorship, Creative Process, Literature, Applied Research, Recreation, Qualitative Data Analysis, Research Project" },
      { label: "Work Authorization", value: "Canadian Citizen; Permanent Resident of Canada; Refugee (status granted); Study Permit/Visitor" },
      { label: "Job Function", value: "Recreation; Research" },
      { label: "Duration", value: "4 months (extendable into May–August semester)" },
      { label: "Approximate Hours Per Week", value: "12-20" },
      { label: "Application Deadline", value: "April 12, 2026" },
    ],
    postedDate: "2026-03-24",
  },
];

export const careersContent = {
  en: {
    pageTitle: "Join Us",
    hiringBadge: "We're Hiring",
    openPositions: "Open Positions",
    noOpenings: "No open positions at this time. Check back soon!",
    type: "Type",
    department: "Department",
    location: "Location",
    posted: "Posted",
    responsibilities: "Responsibilities",
    qualifications: "Qualifications",
    additionalDetails: "Additional Details",
    apply: "Apply Now",
    howToApply: "How to Apply",
    showMore: "View details",
    showLess: "Show less",
  },
  fr: {
    pageTitle: "Rejoignez-Nous",
    pageSubtitle:
      "Aidez-nous à faire avancer la recherche sur les loisirs inclusifs dans le Grand Vancouver. Nous cherchons des personnes passionnées pour collaborer avec nous.",
    hiringBadge: "Nous Recrutons",
    openPositions: "Postes Ouverts",
    noOpenings: "Aucun poste ouvert pour l'instant. Revenez bientôt!",
    type: "Type",
    department: "Département",
    location: "Lieu",
    posted: "Publié le",
    responsibilities: "Responsabilités",
    qualifications: "Qualifications",
    additionalDetails: "Détails Supplémentaires",
    apply: "Postuler",
    howToApply: "Comment Postuler",
    showMore: "Voir les détails",
    showLess: "Réduire",
  },
};
