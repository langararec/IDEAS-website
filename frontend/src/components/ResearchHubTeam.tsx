import { useEffect, useRef, useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { teamContent } from '../content/TeamContent';

const roleRank = (role: string | undefined) => {
    if (/principal/i.test(role ?? '')) return 0;
    if (/collaborator/i.test(role ?? '')) return 1;
    if (/junior/i.test(role ?? '')) return 2;
    return 3;
};

const ResearchHubTeam = () => {
    const teamRail = useRef<HTMLDivElement>(null);
    const [teamPage, setTeamPage] = useState(0);
    const [teamPageCount, setTeamPageCount] = useState(1);
    const teamMembers = teamContent.en.members
        .slice()
        .sort((a, b) => {
            const rankDifference = roleRank(a.role) - roleRank(b.role);
            return rankDifference !== 0
                ? rankDifference
                : a.name.localeCompare(b.name);
        });

    const scrollTeam = (direction: -1 | 1) => {
        const rail = teamRail.current;
        if (!rail) return;
        const card = rail.querySelector<HTMLElement>('[data-team-card]');
        const distance = (card?.getBoundingClientRect().width ?? rail.clientWidth * 0.75) + 20;
        rail.scrollBy({ left: distance * direction, behavior: 'smooth' });
    };

    const updateTeamPage = () => {
        const rail = teamRail.current;
        if (!rail) return;
        const card = rail.querySelector<HTMLElement>('[data-team-card]');
        const distance = (card?.getBoundingClientRect().width ?? rail.clientWidth) + 20;
        setTeamPage(Math.round(rail.scrollLeft / distance));
    };

    const goToTeamPage = (page: number) => {
        const rail = teamRail.current;
        if (!rail) return;
        const card = rail.querySelector<HTMLElement>('[data-team-card]');
        const distance = (card?.getBoundingClientRect().width ?? rail.clientWidth) + 20;
        rail.scrollTo({ left: distance * page, behavior: 'smooth' });
        setTeamPage(page);
    };

    useEffect(() => {
        const rail = teamRail.current;
        if (!rail) return;

        const updatePagination = () => {
            const card = rail.querySelector<HTMLElement>('[data-team-card]');
            if (!card) return;
            const distance = card.getBoundingClientRect().width + 20;
            const maxScroll = Math.max(0, rail.scrollWidth - rail.clientWidth);
            setTeamPageCount(maxScroll === 0 ? 1 : Math.ceil(maxScroll / distance) + 1);
            setTeamPage(Math.round(rail.scrollLeft / distance));
        };

        updatePagination();
        const observer = new ResizeObserver(updatePagination);
        observer.observe(rail);
        return () => observer.disconnect();
    }, [teamMembers.length]);

    return (
        <section aria-labelledby="hub-team-title" className="bg-primary py-12 text-white sm:py-16">
            <div className="mx-auto max-w-7xl">
                <div className="px-6 text-center">
                    <h2 id="hub-team-title" className="text-3xl font-bold font-dm-sans sm:text-4xl">Our Team</h2>
                    <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
                        The researchers, collaborators and students behind Innovate Recreation.
                    </p>
                </div>
                <div
                    ref={teamRail}
                    onScroll={updateTeamPage}
                    className="mt-8 flex w-full max-w-full min-w-0 snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    aria-label="Innovate Recreation team"
                >
                    {teamMembers.map(member => (
                        <article
                            key={member.name}
                            data-team-card
                            className="group relative aspect-[4/4.5] w-[78%] shrink-0 snap-start overflow-hidden rounded-lg border-[6px] border-white bg-primary shadow-sm sm:w-[43%] lg:w-[calc((100%-60px)/4)]"
                        >
                            <img src={member.image} alt={member.name} loading="lazy" className="h-full w-full object-cover object-top" />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-4 pb-4 pt-16">
                                <div className="flex items-end justify-between gap-3">
                                    <div className="min-w-0">
                                        <div className="flex items-center gap-2">
                                            <h3 className="text-base font-bold font-dm-sans text-white sm:text-lg">{member.name}</h3>
                                            {member.linkedin && (
                                                <a
                                                    href={member.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={`${member.name} on LinkedIn`}
                                                    className="flex h-5 w-5 shrink-0 items-center justify-center text-[#0A66C2]"
                                                >
                                                    <FaLinkedin aria-hidden="true" className="h-4 w-4 rounded-[2px] text-white" />
                                                </a>
                                            )}
                                        </div>
                                        {member.role && <p className="mt-1 text-xs font-medium text-white/85 sm:text-sm">{member.role}</p>}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
                <div className="mt-8 flex items-center justify-between px-6">
                    <Link
                        to="/ideas/team"
                        className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-accent/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-6"
                    >
                        Meet the full team
                    </Link>
                    <div className="flex items-center gap-3">
                        <span className="hidden items-center gap-1.5 sm:flex" aria-label={`Team carousel position ${teamPage + 1}`}>
                            {Array.from({ length: teamPageCount }).map((_, index) => (
                                <button
                                    key={index}
                                    type="button"
                                    onClick={() => goToTeamPage(index)}
                                    aria-label={`Go to team carousel page ${index + 1}`}
                                    aria-current={index === teamPage ? 'true' : undefined}
                                    className={`h-2 cursor-pointer rounded-full transition-[width] ${index === teamPage ? 'w-8 bg-white' : 'w-2 bg-white/45'}`}
                                />
                            ))}
                        </span>
                        <button type="button" onClick={() => scrollTeam(-1)} aria-label="Previous team members" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/35 text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                            <LuChevronLeft aria-hidden="true" className="h-5 w-5" />
                        </button>
                        <button type="button" onClick={() => scrollTeam(1)} aria-label="Next team members" className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-primary transition-colors hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                            <LuChevronRight aria-hidden="true" className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResearchHubTeam;
