export const researchProjects = [
    {
        id: 'ideas',
        name: 'IDEAs in Public Recreation',
        path: '/ideas',
        color: '#023f47',
        image: '/carousel2.webp',
        description: 'Focused on identifying and uncovering systemic barriers to participation. This project analyzes the experiences of immigrant, racialized, and marginalized groups in public recreation compared to native-born residents.',
    },
    {
        id: 'welcoming',
        name: 'Reaching Out Welcoming In',
        path: '/reaching-out-welcoming-in',
        color: '#23443B',
        image: '/Reaching_Out_Welcoming_In.webp',
        description: "As Canada's population ages and poverty among older adults grows, social isolation is a rising concern for health and wellbeing. Marginalized older adults often face barriers to community spaces, programs, and connection.",
    },
] as const;

export type ResearchProject = typeof researchProjects[number];

const ideasPaths = new Set(['/ideas', '/project', '/updates', '/team', '/get-involved', '/schedule', '/gallery', '/references', '/statistics', '/staff', '/findings']);

export const getResearchProject = (pathname: string): ResearchProject | null => {
    const path = pathname.replace(/\/$/, '') || '/';
    if (path === '/ideas' || path.startsWith('/ideas/') || ideasPaths.has(path)) return researchProjects[0];
    return researchProjects.slice(1).find(project => path === project.path || path.startsWith(`${project.path}/`)) ?? null;
};

export const researchHubContent = {
    en: {
        title: 'Innovate Recreation',
        tagline: 'Research. Collaboration. Impact.',
        intro: 'We work with communities, researchers, and recreation professionals to explore real-world challenges and turn research into practical solutions that make recreation more inclusive, accessible, and impactful.',
        explore: 'Explore our projects',
        team: 'Meet the team',
        projects: 'Research projects',
        hub: 'Innovate Recreation homepage',
    },
    fr: {
        title: 'Innovate Recreation',
        tagline: 'Recherche. Collaboration. Impact.',
        intro: 'Nous travaillons avec les communautés, les chercheurs et les professionnels des loisirs pour explorer des défis concrets et transformer la recherche en solutions pratiques qui rendent les loisirs plus inclusifs, accessibles et porteurs de changements.',
        explore: 'Explorer nos projets',
        team: "Rencontrer l'équipe",
        projects: 'Projets de recherche',
        hub: 'Accueil Innovate Recreation',
    },
};