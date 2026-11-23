import React from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { teamContent } from "../../content/TeamContent";
import { TeamContainer } from "./TeamContainer";
import type { MemberInfo } from "./TeamCard";
import PageHero from "../../components/PageHero";

const Team: React.FC = () => {
    const { language } = useLanguage();
    const { pathname } = useLocation();
    const isRowi = pathname === '/reaching-out-welcoming-in/team';
    const content = teamContent[isRowi ? 'en' : language];
    const memberGroup = (role?: string) => {
        if (/principal|collaborat/i.test(role ?? '')) return 'researchTeam';
        if (/junior/i.test(role ?? '')) return 'researchStaff';
        return 'students';
    };
    const groups = ['researchTeam', 'researchStaff', 'students'] as const;
    const allMembers = content.members as MemberInfo[];
    const visibleGroups = isRowi ? ['researchTeam'] as const : groups;
    const visibleMembers = isRowi
        ? allMembers
            .filter(member => member.projects?.includes('/reaching-out-welcoming-in'))
            .map(member => ({
                ...member,
                role: member.roleByProject?.['/reaching-out-welcoming-in'] ?? member.role,
            }))
            .sort((left, right) =>
                (/principal/i.test(left.role ?? '') ? 0 : 1) -
                (/principal/i.test(right.role ?? '') ? 0 : 1)
            )
        : pathname === '/ideas' || pathname === '/ideas/team' || pathname === '/team'
            ? allMembers
                .filter(member => !member.projects || member.projects.includes('/ideas'))
                .map(member => member.projects?.includes('/ideas')
                    ? { ...member, role: member.roleByProject?.['/ideas'] ?? member.role }
                    : member)
            : allMembers;
    const pageTitle = isRowi ? 'The people behind Reaching Out, Welcoming In' : content.title;
    const pageSubtitle = isRowi
        ? 'The researchers and collaborators working with older adults, public recreation providers, and social housing partners.'
        : content.subtitle;

    return (
        <main key={`team-${language}`} className="bg-white">
            <PageHero title={pageTitle} subtitle={pageSubtitle} ribbon tone="base-150" fadeTo="white" />
            <div className="max-w-7xl mx-auto px-6 pb-16 space-y-10 lg:space-y-12">
                {visibleGroups.map(group => (
                    <section key={group} aria-labelledby={`team-${group}`}>
                        <div className="mb-8">
                            <h2 id={`team-${group}`} className="text-2xl sm:text-3xl font-semibold font-dm-sans text-primary">
                                {content.sections[group].title}
                            </h2>
                            <p className="mt-3 text-base sm:text-lg leading-relaxed font-dm-sans text-muted">
                                {content.sections[group].subtitle}
                            </p>
                        </div>
                        <TeamContainer members={visibleMembers.filter(member => memberGroup(member.role) === group)} />
                    </section>
                ))}
            </div>
        </main>
    )
}

export default Team;

