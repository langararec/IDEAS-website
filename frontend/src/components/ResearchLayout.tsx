import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { navContent } from '../content/NavContent';
import { getResearchProject, researchHubContent, researchProjects } from '../content/ResearchHubContent';
import type { ResearchProject } from '../content/ResearchHubContent';
import { LuMenu, LuX } from 'react-icons/lu';
import { RxCaretRight } from 'react-icons/rx';
import { IoLocation, IoMail } from 'react-icons/io5';
import Navbar from './Navbar';
import Footer from './Footer';
import ProjectSwitcher from './ProjectSwitcher';
import NavLinkList from './Navbar/NavLinkList';
import InnovateFooter from './InnovateFooter';
import ReachingOutStatement from './ReachingOutStatement';
import ReachingOutAbout from './ReachingOutAbout';
import PartnersSection from './PartnersSection';
import PageHero from './PageHero';
import { homeContent } from '../content/HomeContent';
import { LuHeartPulse, LuLandmark, LuScale } from 'react-icons/lu';
import Team from '../pages/Team/Team';

const HubNavbar = () => {
    const content = researchHubContent.en;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const container = useRef<HTMLDivElement>(null);
    const menuButton = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!isMenuOpen) return;
        const closeOutside = (event: PointerEvent) => {
            if (event.target instanceof Node && !container.current?.contains(event.target)) setIsMenuOpen(false);
        };
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
                menuButton.current?.focus();
            }
        };
        document.addEventListener('pointerdown', closeOutside);
        document.addEventListener('keydown', closeOnEscape);
        return () => {
            document.removeEventListener('pointerdown', closeOutside);
            document.removeEventListener('keydown', closeOnEscape);
        };
    }, [isMenuOpen]);

    return (
        <div ref={container} className="relative bg-white">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6">
                <Link to="/" aria-label={content.hub} className="flex shrink-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary">
                    <img src="/logo_rec.svg" alt="Innovate Recreation" width={160} height={48} className="h-auto w-32 sm:w-36" />
                </Link>
                <nav aria-label={content.projects} className="hidden items-center gap-8 lg:flex">
                    {researchProjects.map(entry => (
                        <Link key={entry.id} to={entry.path} className="group py-3 text-lg font-medium font-dm-sans whitespace-nowrap text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary">
                            {entry.name}
                            <span aria-hidden="true" className="mt-0.5 block h-0.5 w-0 bg-accent transition-[width] duration-200 group-hover:w-full group-focus-visible:w-full motion-reduce:transition-none" />
                        </Link>
                    ))}
                </nav>
                <button ref={menuButton} type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close projects menu' : 'Open projects menu'} aria-expanded={isMenuOpen} aria-controls="research-projects" className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-lg text-primary transition-colors hover:bg-base-200 focus-visible:outline-2 focus-visible:outline-secondary lg:hidden">
                    {isMenuOpen ? <LuX className="h-6 w-6" /> : <LuMenu className="h-6 w-6" />}
                </button>
            </div>
            <div id="research-projects" className={`navbar-dropdown absolute inset-x-0 top-full py-4 lg:hidden ${isMenuOpen ? 'is-open' : 'pointer-events-none'}`} aria-hidden={!isMenuOpen} inert={!isMenuOpen}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <nav aria-label={content.projects} className="max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-xl border border-gray-100 bg-white px-4 py-5 shadow-lg sm:px-6">
                        <p className="mb-3 px-3 text-xs font-medium uppercase tracking-wide text-muted">{content.projects}</p>
                        <NavLinkList links={researchProjects.map(entry => ({ path: entry.path, text: entry.name }))} onNavigate={() => setIsMenuOpen(false)} />
                    </nav>
                </div>
            </div>
        </div>
    );
};

const ReachingOutTimeline = () => {
    const timeline = [
        {
            year: '2026–2027',
            phases: [
                {
                    phase: 'Phase 1',
                    dateRange: 'Sep 2026 – Apr 2027',
                    title: 'Foundations',
                    bullets: [
                        'Create intersectional ageing training for research team',
                        'Advisory committee (AC) formed (researcher, student, partner and SH resident members)',
                        'AC collaborates on project design and identifies key stakeholders at each site',
                        'Ethics approval submitted',
                    ],
                },
                {
                    phase: 'Phase 2',
                    dateRange: 'Apr 2027 – Aug 2027',
                    title: 'Connection events & training',
                    bullets: [
                        'Research team pilots & evaluates intersectional ageing training module with AC',
                        'Students and Volunteers training',
                        'AC plans and delivers 4 ABR connection events (2 per SH site) with SH residents to understand lived experience, identify resident priorities, build connections, and co-design CEA programs',
                        'Community assets and SH community connectors identified through these events',
                    ],
                },
            ],
        },
        {
            year: '2027–2028',
            phases: [
                {
                    phase: 'Phase 3',
                    dateRange: 'Sep 2027 – Dec 2027',
                    title: 'Co-designing the arts program',
                    bullets: [
                        'Refine online intersectional ageing module for broader municipal, nonprofit and SH staff',
                        'Co-design of CEA program with artist, AC, researchers and other stakeholders as identified (to address any EDI gaps in program design and ensure CEA program is relevant to SH)',
                    ],
                },
                {
                    phase: 'Phase 4',
                    dateRange: 'Jan 2028 – Aug 2028',
                    title: 'Arts programs & sharing early findings',
                    bullets: [
                        'Online Intersectional Ageing module presented to broader municipal and SH participants',
                        'Arts program cycles run per site (4 total), ending celebrations & sharing of participant art',
                        'Knowledge dissemination of early data from Phase 2 & 3 to AC, project partners, affiliated research/industry networks such as City Councils, BC Nonprofit Housing Association',
                    ],
                },
            ],
        },
        {
            year: '2028–2029',
            phases: [
                {
                    phase: 'Phase 5',
                    dateRange: 'Sep 2028 – Aug 2029',
                    title: 'Launch, evaluation & legacy',
                    bullets: [
                        'Launch of Intersectional Ageing Module',
                        'Final analysis and evaluation of CEA projects',
                        'Framework for Collaboration co-designed and drafted',
                        'Project legacy video',
                        'Development of succession and sustainability plans with AC and partners for ongoing arts programming',
                    ],
                },
            ],
        },
    ];

    return (
        <main lang="en" className="bg-white font-dm-sans">
            <PageHero
                title="Project timeline"
                subtitle="September 2026 – August 2029"
                ribbon
                tone="base-150"
                fadeTo="white"
            />
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-8">
                    <h2 className="mb-8 text-4xl font-semibold text-primary">What happens, and when</h2>
                    <div>
                        {timeline.flatMap(yearData =>
                            yearData.phases.map(phase => ({ ...phase, year: yearData.year }))
                        ).map((phase, phaseIndex, phases) => {
                            const showYear = phaseIndex === 0 || phase.year !== phases[phaseIndex - 1].year;
                            return (
                                <div key={phase.phase} className="relative grid grid-cols-[80px_minmax(0,1fr)] sm:grid-cols-[224px_96px_minmax(0,1fr)]">
                                    <div className="hidden pt-1 sm:block">
                                        {showYear && <h3 className="mt-1 text-4xl font-bold text-primary">{phase.year}</h3>}
                                    </div>
                                    <div className="relative flex w-20 justify-center sm:w-24">
                                        {phaseIndex < phases.length - 1 && (
                                            <div className="absolute left-[39px] top-8 bottom-0 w-1 bg-[#ff5800] sm:left-[47px]" aria-hidden="true" />
                                        )}
                                        <div className="relative z-10 mt-0 flex h-16 w-16 flex-none items-center justify-center rounded-full bg-[#ffb66a]/50">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ff9a42]">
                                                <div className="h-6 w-6 rounded-full bg-[#f05a22]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`min-w-0 ${phaseIndex === phases.length - 1 ? '' : 'pb-16'}`}>
                                        <div className="mb-2 flex flex-wrap items-center gap-3">
                                            <span className="rounded-md bg-[#f05a22] px-3 py-1 text-xs font-bold uppercase text-white">{phase.phase}</span>
                                            <span className="text-lg font-medium text-primary sm:text-xl">{phase.dateRange}</span>
                                        </div>
                                        <h4 className="mb-3 text-xl font-bold text-primary sm:text-2xl">{phase.title}</h4>
                                        <ul className="space-y-2">
                                            {phase.bullets.map(bullet => (
                                                <li key={bullet} className="flex items-start text-base leading-relaxed text-primary/75">
                                                    <RxCaretRight aria-hidden="true" className="mr-1 mt-0.5 size-5 shrink-0 text-[#ff5800]" />
                                                    <span>{bullet}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
};

const PlaceholderNav = ({ project }: { project: ResearchProject }) => {
    const labels = navContent.en;
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const container = useRef<HTMLElement>(null);
    const menuButton = useRef<HTMLButtonElement>(null);
    const isWelcoming = project.id === 'welcoming';
    const links = isWelcoming
        ? [
            { path: `${project.path}/about`, label: 'About' },
            { path: `${project.path}/timeline`, label: 'Timeline' },
            { path: `${project.path}/team`, label: 'The Team' },
        ]
        : [
            { path: project.path, label: labels.home },
            { path: `${project.path}/about`, label: labels.about },
            { path: `${project.path}/team`, label: labels.team },
        ];

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (!isMenuOpen) return;
        const closeOutside = (event: PointerEvent) => {
            if (event.target instanceof Node && !container.current?.contains(event.target)) setIsMenuOpen(false);
        };
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsMenuOpen(false);
                menuButton.current?.focus();
            }
        };
        document.addEventListener('pointerdown', closeOutside);
        document.addEventListener('keydown', closeOnEscape);
        return () => {
            document.removeEventListener('pointerdown', closeOutside);
            document.removeEventListener('keydown', closeOnEscape);
        };
    }, [isMenuOpen]);

    return (
        <nav ref={container} lang="en" aria-label={project.name} style={{ backgroundColor: project.color }} className="relative text-white font-dm-sans">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6">
                <div className={isWelcoming ? 'min-w-0 max-w-96 flex-1 lg:max-w-[28rem] lg:flex-none' : 'min-w-0 max-w-64 flex-1 lg:flex-none'}><ProjectSwitcher dark compact={isWelcoming} /></div>
                <div className="hidden shrink-0 items-center gap-8 text-lg lg:flex">
                    {links.map(link => <Link key={link.path} to={link.path} className="hover:underline underline-offset-4">{link.label}</Link>)}
                </div>
                <button ref={menuButton} type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={isMenuOpen} aria-controls={`${project.id}-navigation`} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md hover:bg-white/10 lg:hidden">
                    {isMenuOpen ? <LuX className="h-5 w-5" /> : <LuMenu className="h-5 w-5" />}
                </button>
            </div>
            <div id={`${project.id}-navigation`} className={`navbar-dropdown absolute inset-x-0 top-full py-4 lg:hidden ${isMenuOpen ? 'is-open' : 'pointer-events-none'}`} aria-hidden={!isMenuOpen} inert={!isMenuOpen}>
                <div className="mx-auto max-w-7xl px-4 sm:px-6">
                    <nav aria-label={`${project.name} pages`} className="max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-xl border border-gray-100 bg-white px-4 py-5 shadow-lg sm:px-6">
                        <NavLinkList links={links.map(link => ({ path: link.path, text: link.label }))} onNavigate={() => setIsMenuOpen(false)} />
                    </nav>
                </div>
            </div>
        </nav>
    );
};

export const ResearchPlaceholder = ({ project }: { project: ResearchProject }) => {
    const { pathname } = useLocation();
    const labels = navContent.en;
    const title = pathname.endsWith('/team') ? labels.team : pathname.endsWith('/about') ? labels.about : project.name;

    if (project.id === 'welcoming' && pathname === `${project.path}/team`) {
        return <Team />;
    }

    if (project.id === 'welcoming' && pathname === `${project.path}/timeline`) {
        return <ReachingOutTimeline />;
    }

    if (project.id === 'welcoming' && pathname === `${project.path}/about`) {
        return (
            <main lang="en" className="bg-white font-dm-sans">
                <PageHero
                    title="About the Project"
                    subtitle="This project aims to improve the social connection and wellbeing of low-income older adults living in social housing by co-creating, implementing and evaluating arts-based recreation programming in partnership with public recreation systems."
                    ribbon
                    tone="base-150"
                    fadeTo="base-100"
                />
                <section className="bg-[#23443B] px-6 py-16 text-white sm:py-20 lg:px-8 lg:py-24">
                    <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
                        <p className="max-w-xl text-[28px] leading-[1.35] sm:text-[36px] lg:mx-auto lg:self-center">
                            As <span className="font-medium text-[#F0A92E]">trusted local community members</span>, public recreation providers already facilitate essential programs that promote health, belonging, and community cohesion.
                        </p>
                        <div className="lg:mx-auto lg:w-full lg:max-w-xl">
                            <p className="mb-6 text-lg font-normal leading-8 text-white/80 sm:text-xl">
                                Arts-based recreation represents an evidence-informed strategy that:
                            </p>
                            <div className="border-t border-white/25">
                                <div className="flex items-center gap-5 border-b border-white/25 py-6">
                                    <LuLandmark aria-hidden="true" className="h-7 w-7 shrink-0 text-[#F0A92E]" />
                                    <p className="text-lg leading-7 sm:text-xl">Aligns with municipal priorities</p>
                                </div>
                                <div className="flex items-center gap-5 border-b border-white/25 py-6">
                                    <LuHeartPulse aria-hidden="true" className="h-7 w-7 shrink-0 text-[#F0A92E]" />
                                    <p className="text-lg leading-7 sm:text-xl">Addresses social determinants of health</p>
                                </div>
                                <div className="flex items-center gap-5 border-b border-white/25 py-6">
                                    <LuScale aria-hidden="true" className="h-7 w-7 shrink-0 text-[#F0A92E]" />
                                    <p className="text-lg leading-7 sm:text-xl">Supports equitable access to services that promote the wellbeing of older adults living in social housing</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-[#EBF2EB99] px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
                    <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
                        <img
                            src="/pathway_to_community.webp"
                            alt="Older adults taking part in a community arts activity"
                            className="aspect-[4/3] w-full rounded-[28px] object-cover"
                        />
                        <div>
                            <h2 className="text-4xl font-bold leading-[1.1] text-[#23443B] sm:text-5xl lg:text-5xl">
                                A pathway into community
                            </h2>
                            <div className="mt-6 space-y-5 text-lg leading-8 text-[#5F7A72] sm:text-xl sm:leading-9">
                                <p>
                                    Drawing on Arts-Based Research methodology and employing Community Engaged Arts programming, this research project will explore the unique needs of older adults in social housing and establish a pathway for them to participate in their own communities.
                                </p>
                                <p>
                                    In the process, participants will be introduced to, and feel welcomed by, their local recreation services, thereby expanding their networks for social connection.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-white px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
                    <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
                        <div>
                            <h2 className="mt-5 text-4xl font-bold leading-[1.1] text-[#23443B] sm:text-5xl">
                                Two products to guide Canadian municipalities
                            </h2>
                            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5F7A72] sm:text-xl sm:leading-9">
                                The data from this project will be used to create two products for municipalities seeking to deepen their supports for older adults in the community.
                            </p>
                            <div className="mt-6 border-t border-[#23443B]/15">
                                <div className="grid grid-cols-[52px_1fr] gap-3 border-b border-[#23443B]/15 py-5">
                                    <span className="text-xl font-bold text-[#23443B]">01</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#23443B]">Intersectional Ageing Module</h3>
                                        <p className="mt-2 text-base leading-7 text-[#5F7A72] sm:text-lg">
                                            An online module for the training of seniors-serving staff in civic, recreation, and social housing positions.
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[52px_1fr] gap-3 border-b border-[#23443B]/15 py-5">
                                    <span className="text-xl font-bold text-[#23443B]">02</span>
                                    <div>
                                        <h3 className="text-xl font-bold text-[#23443B]">Framework for Collaboration</h3>
                                        <p className="mt-2 text-base leading-7 text-[#5F7A72] sm:text-lg">
                                            Enhancing public recreation opportunities for older adults through partnerships between public recreation providers and social housing operators.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Link
                                to="/reaching-out-welcoming-in/timeline"
                                className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#ff5800] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#e94f00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#23443B]"
                            >
                                View project timeline
                            </Link>
                        </div>
                        <img
                            src="/guidance_products.webp"
                            alt="Older adults and a recreation professional taking part in a conversation"
                            className="aspect-[4/3] w-full rounded-[28px] object-cover"
                        />
                    </div>
                </section>
            </main>
        );
    }

    if (project.id === 'welcoming' && pathname === project.path) {
        return (
            <main lang="en" className="bg-white font-dm-sans">
                <section className="mx-auto grid min-h-[500px] max-w-7xl items-center gap-8 px-6 py-8 md:grid-cols-2 md:gap-10 md:py-12">
                    <div className="max-w-xl md:col-start-1 md:row-start-1 md:flex md:min-h-[460px] md:flex-col md:justify-center">
                        <h1 className="text-4xl font-bold leading-[1.02] text-[#23443B] sm:text-6xl lg:text-7xl">
                            Reaching Out,
                            <span className="block text-[#ff5800]">Welcoming In.</span>
                        </h1>
                        <p className="mt-5 max-w-xl text-sm leading-6 text-[#23443B]/80 sm:mt-8 sm:text-lg sm:leading-8">
                            This project explores how arts-based recreation can strengthen social connection and wellbeing for low-income older adults living in social housing.
                        </p>
                    </div>
                    <div className="relative mx-auto w-[70%] max-w-[460px] sm:w-[82%] md:col-start-2 md:row-span-2 md:row-start-1 md:w-full">
                        <div
                            aria-hidden="true"
                            className="absolute hidden left-[-18px] right-[18px] top-[-18px] h-[calc(100%-18px)] md:block"
                            style={{
                                backgroundColor: '#EBF2EB99',
                                borderRadius: '48% 48% 18px 18px',
                            }}
                        />
                        <img
                            src="/carousel3.webp"
                            alt="Older adult taking part in an arts-based recreation activity"
                            className="relative z-10 aspect-[4/4.7] w-full object-cover object-center"
                            style={{
                                borderRadius: '48% 48% 18px 18px',
                            }}
                        />
                        <p className="absolute z-20 bottom-16 left-[-28px] rotate-[-3deg] rounded-full bg-[#ff5800] px-5 py-3 text-sm font-semibold text-white sm:left-[-48px] sm:text-base">
                            Arts · Connection · Belonging
                        </p>
                    </div>
                </section>
                <ReachingOutStatement />
                <ReachingOutAbout />
                <PartnersSection
                    title="Our Partners"
                    supportText="This project is supported in part by funding from the Social Sciences and Humanities Research Council."
                    sshrcAlt="SSHRCC Canada"
                    partners={homeContent.en.partners.partnersList.filter(partner =>
                        ['ncs.png', 'nvrc.png', 'vancouver_park_board.png', 'rec_studies.webp', 'ARC.webp', 'edi_langara.webp'].includes(partner.image)
                    )}
                />
            </main>
        );
    }

    return (
        <main lang="en" className="mx-auto min-h-[60svh] max-w-7xl px-6 py-16 font-dm-sans">
            <h1 className="max-w-4xl text-4xl sm:text-5xl font-semibold leading-tight" style={{ color: project.color }}>{title}</h1>
        </main>
    );
};

const ResearchLayout = ({ children }: { children: ReactNode }) => {
    const { pathname } = useLocation();
    const { language } = useLanguage();
    const project = getResearchProject(pathname);
    const projectKey = project?.id ?? 'hub';
    const activeIndex = researchProjects.findIndex(entry => entry.id === project?.id);
    const [motion, setMotion] = useState({ key: projectKey, index: activeIndex, direction: 'forward', animate: false });

    if (motion.key !== projectKey) {
        setMotion({ key: projectKey, index: activeIndex, direction: activeIndex < motion.index ? 'backward' : 'forward', animate: true });
    }

    return (
        <>
            <header lang="en" className="research-header fixed inset-x-0 top-0 z-50 bg-white">
                {!project && <HubNavbar />}
                <div className="research-attached-nav" key={projectKey} style={{ '--project-color': project?.color ?? 'transparent' } as CSSProperties}>
                    {project?.id === 'ideas' ? <Navbar projectSwitcher={<ProjectSwitcher dark />} /> : project ? <PlaceholderNav project={project} /> : null}
                </div>
            </header>
            <div
                key={projectKey}
                lang={project?.id === 'ideas' ? language : 'en'}
                className={motion.animate ? `research-project-page research-project-${motion.direction}` : ''}
                style={{ paddingTop: '80px' }}
                onAnimationEnd={event => {
                    if (event.target === event.currentTarget) setMotion(previous => ({ ...previous, animate: false }));
                }}
            >
                {children}
                {project?.id === 'ideas' && <Footer />}
                {project?.id === 'welcoming' && (
                    <footer className="border-t border-rule bg-base-100">
                        <div className="mx-auto max-w-7xl px-6 py-8">
                            <div className="mb-8 flex flex-col justify-between gap-8 md:flex-row">
                                <div className="space-y-4">
                                    <img src="/logo_rec.svg" alt="Innovate Recreation" className="h-10" />
                                    <div className="space-y-2 text-gray-600">
                                        <div className="flex items-start gap-2">
                                            <IoLocation aria-hidden="true" className="mt-1 flex-shrink-0 text-gray-500" />
                                            <span className="font-dm-sans">100 W 49th Ave, Vancouver, BC V5X 3B3</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <IoMail aria-hidden="true" className="flex-shrink-0 text-gray-500" />
                                            <a href="mailto:rowiresearch@langara.ca" className="font-dm-sans hover:text-primary">
                                                rowiresearch@langara.ca
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <nav aria-label="Reaching Out Welcoming In" className="flex flex-col justify-end sm:flex-row sm:gap-16 md:max-w-md md:flex-1">
                                    <div className="space-y-4">
                                        <h2 className="font-dm-sans text-lg font-bold text-primary">Links</h2>
                                        <div className="space-y-3 font-dm-sans">
                                            <Link to="/reaching-out-welcoming-in/about" className="block text-gray-600 hover:text-primary">About</Link>
                                            <Link to="/reaching-out-welcoming-in/timeline" className="block text-gray-600 hover:text-primary">Timeline</Link>
                                            <Link to="/reaching-out-welcoming-in/team" className="block text-gray-600 hover:text-primary">The Team</Link>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                            <div className="mt-8 border-t border-gray-200 pt-6 text-center font-dm-sans text-sm text-gray-600">
                                &copy; {new Date().getFullYear()} Innovate Recreation. All rights reserved.
                            </div>
                        </div>
                    </footer>
                )}
                {!project && <InnovateFooter />}
            </div>
        </>
    );
};

export default ResearchLayout;