import { Link } from 'react-router-dom';
import { researchHubContent, researchProjects } from '../../content/ResearchHubContent';
import ResearchHubTeam from '../../components/ResearchHubTeam';
import PartnersSection from '../../components/PartnersSection';
import { homeContent } from '../../content/HomeContent';

const ResearchHub = () => {
    const content = researchHubContent.en;
    const partners = homeContent.en.partners;

    return (
        <main lang="en" className="font-dm-sans">
            <section className="research-hub-hero relative isolate flex items-center justify-center overflow-hidden text-white">
            <img src="/innovate_recreation_hero.webp" alt="" fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 -z-10" style={{ background: 'linear-gradient(90.42deg, rgba(2, 40, 46, 0.736) 0.36%, rgba(2, 50, 56, 0.48) 53.83%, rgba(2, 63, 71, 0.08) 99.66%)' }} aria-hidden="true" />
            <div className="mx-auto w-full max-w-7xl px-6 py-10 text-left sm:py-12">
                <h1 className="max-w-4xl text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-balance">{content.title}</h1>
                <p className="mt-4 text-lg sm:text-2xl font-medium">{content.tagline}</p>
                <p className="mt-3 max-w-2xl text-sm sm:text-lg leading-relaxed text-white/90">{content.intro}</p>
                <div className="mt-6 flex flex-wrap justify-start gap-3 sm:mt-9">
                    <a
                        href="#hub-research-projects"
                        className="group relative isolate inline-flex min-h-12 items-center justify-center overflow-hidden rounded-md bg-accent px-3 py-3 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-6 sm:text-base"
                    >
                        <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none" />
                        <span className="relative">{content.explore}</span>
                    </a>
                    <Link to="/ideas/team" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white px-3 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-6 sm:text-base">
                        {content.team}
                    </Link>
                </div>
            </div>
            </section>
            <section id="hub-research-projects" aria-labelledby="hub-projects-title" className="scroll-mt-20 ">
                <div className="mx-auto max-w-7xl px-6 py-8 sm:py-16    ">
                    <h2 id="hub-projects-title" className="text-3xl font-bold font-dm-sans text-primary sm:text-4xl">Our Research Projects</h2>
                    <p className="mt-3 max-w-4xl text-base leading-relaxed text-neutral-700 sm:text-lg">
                        Explore how our research is helping recreation organizations better understand their communities, strengthen their practices, and respond to emerging challenges.
                    </p>
                    <ul className="mt-8 grid gap-6 md:grid-cols-2">
                        {researchProjects.map(project => (
                            <li key={project.id}>
                                <article className="flex h-full flex-col overflow-hidden rounded-lg border border-rule bg-white shadow-sm">
                                    <img
                                        src={project.image}
                                        alt=""
                                        loading="lazy"
                                        className="aspect-[16/9] w-full object-cover"
                                    />
                                    <div className="flex flex-1 flex-col p-6">
                                        <h3 className="text-2xl font-bold font-dm-sans text-primary">{project.name}</h3>
                                        <p className="mt-3 flex-1 text-base leading-relaxed text-neutral-700">
                                            {project.description}
                                        </p>
                                        <Link
                                            to={project.path}
                                            className="group relative mt-6 inline-flex min-h-11 w-fit items-center justify-center overflow-hidden rounded-md bg-accent px-5 py-2.5 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary sm:text-base"
                                        >
                                            <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none" />
                                            <span className="relative">Visit Project</span>
                                        </Link>
                                    </div>
                                </article>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <ResearchHubTeam />
            <PartnersSection
                title="Our Partners"
                supportText={partners.supportText}
                sshrcAlt={partners.sshrcAlt}
                partners={partners.partnersList}
            />
        </main>
    );
};

export default ResearchHub;