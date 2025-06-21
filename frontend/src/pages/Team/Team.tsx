import type { MemberInfo } from "./TeamCard";
import { TeamContainer } from "./TeamContainer";

const principalResearchers: MemberInfo[] = [
    {
        name: "Yue-Ching Cheng",
        role: "Principal Researcher",
        image: "/team/yue-ching.webp",
        shortDescription: "Yue-Ching Cheng is the Chair of Recreation Studies, innovating pedagogy and specializing in recreation management, community services, and policy development.",
        longDescription: "Yue-Ching Cheng is the Department Chair of the Recreation Studies Department. He teaches in both the Bachelor of Recreation Management Program and the Recreation Leadership Diploma Program, pioneering new teaching pedagogy at the College through Virtual Exchange projects with Penn State University, and Hyflex learning. He has also previously held teaching positions in the Department of Geography & Geology, and Langara College's Centre for Intercultural Engagement (EDI Office). \n\n" +
            "He has a strong and diverse background in recreation and community services, with experience in both public and private sector organizations and governments. He has worked with non-profit sport organizations in swimming and triathlon. He has a diverse background in recreation delivery and community services, ranging from aquatic services to seniors services. Prior to joining Langara, he worked for a municipality overseeing the operations of aquatic and fitness facilities His areas of expertise within recreation management are in project management, facilities & operations, and policy development. ",
        linkedin: "https://www.linkedin.com/in/yccheng/",
    },
    {
        name: "Emmalene Courtney",
        role: "Principal Researcher",
        image: "/team/emma.webp",
        shortDescription: "John Doe is a leading researcher in the field of recreation studies, focusing on community engagement and policy innovation.",
        longDescription: "Emma is an experienced educator and leader with a passion for global leadership, systems thinking, intercultural  communication, epistemic justice, and decolonization. She hold a Masters in Global Leadership and have taught courses in leadership, recreation, and intercultural competencies. Emma is committed to empowering individuals and organizations to create positive change in the world. \n\n" +
            "Her approach to problem-solving and decision-making is informed by her experience as an emergent strategist and pleasure activist. She strive to  create learning environments that prioritize joy, pleasure, and  well-being, while also considering the complex interactions between people, processes, and structures. She is committed to creating a more just, equitable, and joyful world, and she believe that love is a fundamental component of creating positive change. \n\n" +
            "As an educator, researcher, and leader, she center love as a methodology in all that she do. She believe that by approaching her work with a deep sense of empathy, care, and compassion for her students, colleagues, and research participants, she can create spaces and experiences that honor and celebrate their shared humanity. Love allows her to hold space for  difference, engage in difficult conversations, and build meaningful  relationships with those around her. By centering love in her methodology, she is able to engage in reflexive and critical analysis that  acknowledges the multiple, complex layers of power and identity that  shape our experiences.",
        linkedin: "https://www.linkedin.com/in/emmalene-courtney/",
    }
]

const researchAssistants: MemberInfo[] = [
    {
        name: "Jennifer Mallari",
        role: "Junior Research Assistant",
        image: "/team/peng.webp",
        shortDescription: "Jennifer, also called as Peng, is a creative designer and researcher, currently applying her expertise to support recreation projects at Langara College.",
        longDescription: "Jennifer, also known as Peng, is a creative designer and researcher with a unique background in the satellite industry. After working for five years as a satellite controller, she made a bold career shift to follow her passion for designing intuitive digital platforms, studying Web Design and Development at Langara College. Her journey into recreation design began by supporting the Langara Recreation Department through lecture capture for recreation classes. This involvement evolved into more in-depth research work, including projects like Exploring How Recreation Organizations are Using Artificial Intelligence. \n\n" +
            "Over the past year, Jennifer has deepened her expertise in recreation research—giving her a unique lens for designing digital experiences that meet the needs of both users and staff in the recreation field. She is passionate about modernizing recreation websites and platforms to be more intuitive, inclusive, accessible, and user-centered. With skills in user research, usability testing, wireframing, prototyping, design systems, and front-end development, Jennifer creates experiences that are not only functional but also engaging and easy to navigate. \n\n" +
            "When she's not designing, you can find her practicing yoga, running, hiking, crocheting, playing the ukulele, or enjoying a good book—activities that keep her grounded and continually inspire her creative process.",
        linkedin: "https://www.linkedin.com/in/jennifergmallari/",
    }
];

const collaborators: MemberInfo[] = [
    {
        name: "Keith Dormond",
        role: "Collaborator",
        program: "Department of Social Services",
        image: "/team/keith.webp",
        shortDescription: "Yue-Ching Cheng is the Chair of Recreation Studies, innovating pedagogy and specializing in recreation management, community services, and policy development.",
        longDescription: "Keith Dormond is an Instructor in the Department of Social Services at Langara College and teaches in the Social Service Worker Certificate and Diploma programs, as well as the Gerontology Diploma program. He has also instructed Criminology courses at Douglas College, The University of Fraser Valley, and Langara College.  Keith holds a PhD in Educational Studies from the University of British Columbia along with a Master degree of social work. His research interests include violence against women and men that is motivated by honour and shame (honour-related violence and oppression), anti-oppressive practice, and violence risk assessment and management. \n\n" +
        "He is currently a qualitative evaluator for research project at Langara entitled, “Innovating Virtual Reality in Inclusive and Anti-biased Early Learning Child Care Training.” Prior to entering academia, he worked a police officer in Vancouver for over 24 years and community organizer in Toronto and Vancouver.  As a police detective, he was assigned to units including domestic violence, mental health, and recruiting.  He practices, teaches and researches through an anti-racism and anti-oppressive framework." ,
        programLink: "https://langara.ca/programs-courses/social-service-worker-certificate-we"
    },
    {
        name: "Carolyn Wing",
        role: "Collaborator",
        program: "Office of Equity, Diversity, and Inclusion",
        image: "/team/carolyn.webp",
        shortDescription: "Carolyn is an Early Childhood Education faculty member and researcher specializing in equity, diversity, inclusion, and intercultural education.",
        longDescription: "Carolyn Wing MEd has been a faculty member in Langara College's Early Childhood Education program since 1997 and also holds a position in the college's Office of Equity, Diversity and Inclusion. \n\n"+
        "She has completed the Certificate in Intercultural Studies from UBC and is a Qualified Administrator for the Intercultural Development Inventory (IDI). As an early childhood educator (ECE) and special educator, Carolyn's work has always revolved in the intercultural, equity, diversity and inclusion space. \n\n" +
        "Carolyn is past vice president with SIETAR BC: The Society for Intercultural Education and Training and Research, BC Chapter. Currently, Carolyn is the principal investigator conducting a full time research project entitled:  Innovating Virtual Reality in Inclusive and Anti-biased Early Learning Child Care Training.",
        programLink: "https://students.langara.ca/about-langara/edi/"
    }
];

const students: MemberInfo[] = [
    {
        name: "Paula Parman",
        role: "Student Research Assistant",
        program: "Department of Social Services",
        image: "/team/keith.webp",
        shortDescription: "Yue-Ching Cheng is the Chair of Recreation Studies, innovating pedagogy and specializing in recreation management, community services, and policy development.",
        longDescription: "Keith Dormond is an Instructor in the Department of Social Services at Langara College and teaches in the Social Service Worker Certificate and Diploma programs, as well as the Gerontology Diploma program. He has also instructed Criminology courses at Douglas College, The University of Fraser Valley, and Langara College.  Keith holds a PhD in Educational Studies from the University of British Columbia along with a Master degree of social work. His research interests include violence against women and men that is motivated by honour and shame (honour-related violence and oppression), anti-oppressive practice, and violence risk assessment and management. \n\n" +
        "He is currently a qualitative evaluator for research project at Langara entitled, “Innovating Virtual Reality in Inclusive and Anti-biased Early Learning Child Care Training.” Prior to entering academia, he worked a police officer in Vancouver for over 24 years and community organizer in Toronto and Vancouver.  As a police detective, he was assigned to units including domestic violence, mental health, and recruiting.  He practices, teaches and researches through an anti-racism and anti-oppressive framework." ,
        programLink: "https://langara.ca/programs-courses/social-service-worker-certificate-we"
    },
    {
        name: "Timothy Elias",
        role: "Student Research Assistant",
        program: "Office of Equity, Diversity, and Inclusion",
        image: "/team/carolyn.webp",
        shortDescription: "Carolyn is an Early Childhood Education faculty member and researcher specializing in equity, diversity, inclusion, and intercultural education.",
        longDescription: "Carolyn Wing MEd has been a faculty member in Langara College's Early Childhood Education program since 1997 and also holds a position in the college's Office of Equity, Diversity and Inclusion. \n\n"+
        "She has completed the Certificate in Intercultural Studies from UBC and is a Qualified Administrator for the Intercultural Development Inventory (IDI). As an early childhood educator (ECE) and special educator, Carolyn's work has always revolved in the intercultural, equity, diversity and inclusion space. \n\n" +
        "Carolyn is past vice president with SIETAR BC: The Society for Intercultural Education and Training and Research, BC Chapter. Currently, Carolyn is the principal investigator conducting a full time research project entitled:  Innovating Virtual Reality in Inclusive and Anti-biased Early Learning Child Care Training.",
        programLink: "https://students.langara.ca/about-langara/edi/"
    },
    {
        name: "Fraser Cameron",
        role: "Student Research Assistant",
        program: "Department of Social Services",
        image: "/team/keith.webp",
        shortDescription: "Yue-Ching Cheng is the Chair of Recreation Studies, innovating pedagogy and specializing in recreation management, community services, and policy development.",
        longDescription: "Keith Dormond is an Instructor in the Department of Social Services at Langara College and teaches in the Social Service Worker Certificate and Diploma programs, as well as the Gerontology Diploma program. He has also instructed Criminology courses at Douglas College, The University of Fraser Valley, and Langara College.  Keith holds a PhD in Educational Studies from the University of British Columbia along with a Master degree of social work. His research interests include violence against women and men that is motivated by honour and shame (honour-related violence and oppression), anti-oppressive practice, and violence risk assessment and management. \n\n" +
        "He is currently a qualitative evaluator for research project at Langara entitled, “Innovating Virtual Reality in Inclusive and Anti-biased Early Learning Child Care Training.” Prior to entering academia, he worked a police officer in Vancouver for over 24 years and community organizer in Toronto and Vancouver.  As a police detective, he was assigned to units including domestic violence, mental health, and recruiting.  He practices, teaches and researches through an anti-racism and anti-oppressive framework." ,
        programLink: "https://langara.ca/programs-courses/social-service-worker-certificate-we"
    },
    {
        name: "Brendan Tai",
        role: "Student Research Assistant",
        program: "Office of Equity, Diversity, and Inclusion",
        image: "/team/carolyn.webp",
        shortDescription: "Carolyn is an Early Childhood Education faculty member and researcher specializing in equity, diversity, inclusion, and intercultural education.",
        longDescription: "Carolyn Wing MEd has been a faculty member in Langara College's Early Childhood Education program since 1997 and also holds a position in the college's Office of Equity, Diversity and Inclusion. \n\n"+
        "She has completed the Certificate in Intercultural Studies from UBC and is a Qualified Administrator for the Intercultural Development Inventory (IDI). As an early childhood educator (ECE) and special educator, Carolyn's work has always revolved in the intercultural, equity, diversity and inclusion space. \n\n" +
        "Carolyn is past vice president with SIETAR BC: The Society for Intercultural Education and Training and Research, BC Chapter. Currently, Carolyn is the principal investigator conducting a full time research project entitled:  Innovating Virtual Reality in Inclusive and Anti-biased Early Learning Child Care Training.",
        programLink: "https://students.langara.ca/about-langara/edi/"
    },
    {
        name: "Axel Velasquez",
        role: "Web Developer",
        program: "Department of Social Services",
        image: "/team/keith.webp",
        shortDescription: "Yue-Ching Cheng is the Chair of Recreation Studies, innovating pedagogy and specializing in recreation management, community services, and policy development.",
        longDescription: "Keith Dormond is an Instructor in the Department of Social Services at Langara College and teaches in the Social Service Worker Certificate and Diploma programs, as well as the Gerontology Diploma program. He has also instructed Criminology courses at Douglas College, The University of Fraser Valley, and Langara College.  Keith holds a PhD in Educational Studies from the University of British Columbia along with a Master degree of social work. His research interests include violence against women and men that is motivated by honour and shame (honour-related violence and oppression), anti-oppressive practice, and violence risk assessment and management. \n\n" +
        "He is currently a qualitative evaluator for research project at Langara entitled, “Innovating Virtual Reality in Inclusive and Anti-biased Early Learning Child Care Training.” Prior to entering academia, he worked a police officer in Vancouver for over 24 years and community organizer in Toronto and Vancouver.  As a police detective, he was assigned to units including domestic violence, mental health, and recruiting.  He practices, teaches and researches through an anti-racism and anti-oppressive framework." ,
        programLink: "https://langara.ca/programs-courses/social-service-worker-certificate-we"
    },
    {
        name: "Dmitrii Zubarev",
        role: "Student Research Assistant",
        program: "Office of Equity, Diversity, and Inclusion",
        image: "/team/carolyn.webp",
        shortDescription: "Carolyn is an Early Childhood Education faculty member and researcher specializing in equity, diversity, inclusion, and intercultural education.",
        longDescription: "Carolyn Wing MEd has been a faculty member in Langara College's Early Childhood Education program since 1997 and also holds a position in the college's Office of Equity, Diversity and Inclusion. \n\n"+
        "She has completed the Certificate in Intercultural Studies from UBC and is a Qualified Administrator for the Intercultural Development Inventory (IDI). As an early childhood educator (ECE) and special educator, Carolyn's work has always revolved in the intercultural, equity, diversity and inclusion space. \n\n" +
        "Carolyn is past vice president with SIETAR BC: The Society for Intercultural Education and Training and Research, BC Chapter. Currently, Carolyn is the principal investigator conducting a full time research project entitled:  Innovating Virtual Reality in Inclusive and Anti-biased Early Learning Child Care Training.",
        programLink: "https://students.langara.ca/about-langara/edi/"
    },
    {
        name: "Moana Mudekereza",
        role: "Student Research Assistant",
        program: "Department of Social Services",
        image: "/team/keith.webp",
        shortDescription: "Yue-Ching Cheng is the Chair of Recreation Studies, innovating pedagogy and specializing in recreation management, community services, and policy development.",
        longDescription: "Keith Dormond is an Instructor in the Department of Social Services at Langara College and teaches in the Social Service Worker Certificate and Diploma programs, as well as the Gerontology Diploma program. He has also instructed Criminology courses at Douglas College, The University of Fraser Valley, and Langara College.  Keith holds a PhD in Educational Studies from the University of British Columbia along with a Master degree of social work. His research interests include violence against women and men that is motivated by honour and shame (honour-related violence and oppression), anti-oppressive practice, and violence risk assessment and management. \n\n" +
        "He is currently a qualitative evaluator for research project at Langara entitled, “Innovating Virtual Reality in Inclusive and Anti-biased Early Learning Child Care Training.” Prior to entering academia, he worked a police officer in Vancouver for over 24 years and community organizer in Toronto and Vancouver.  As a police detective, he was assigned to units including domestic violence, mental health, and recruiting.  He practices, teaches and researches through an anti-racism and anti-oppressive framework." ,
        programLink: "https://langara.ca/programs-courses/social-service-worker-certificate-we"
    },
]


const Team: React.FC = () => {

    return (
        <div className="bg-base-100">
            <div className="max-w-7xl mx-auto px-2  py-16">

                <h1 className="text-primary text-4xl sm:text-5xl font-dm-sans mb-4 font-bold text-center sm:text-left">Our Team</h1>
                <p className="text-black mb-12 text-center sm:text-left">
                    Meet our dedicated team committed to making public recreation inclusive and accessible for everyone.
                </p>

                <div className="py-4">
                    <h2 className="text-primary text-3xl sm:text-4xl font-dm-sans font-semibold text-center sm:text-left"> Principal Researchers </h2>
                    <TeamContainer members={principalResearchers} />
                </div>

                <div className="py-4">
                    <h2 className="text-primary text-3xl sm:text-4xl font-dm-sans font-semibold text-center sm:text-left"> Research Assistants </h2>
                    <TeamContainer members={researchAssistants} />
                </div>

                <div className="py-4">
                    <h2 className="text-primary text-3xl sm:text-4xl font-dm-sans font-semibold text-center sm:text-left"> Collaborators </h2>
                    <TeamContainer members={collaborators} />
                </div>

                <div className="py-4">
                    <h2 className="text-primary text-3xl sm:text-4xl font-dm-sans font-semibold text-center sm:text-left"> Students </h2>
                    <TeamContainer members={students} />
                </div>


            </div>


        </div>
    )
}

export default Team;

