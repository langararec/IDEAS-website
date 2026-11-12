import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { teamContent } from "../../content/TeamContent";
import { TeamContainer } from "./TeamContainer";
import PageHero from "../../components/PageHero";

const Team: React.FC = () => {
    const { language } = useLanguage();
    const content = teamContent[language];
    const memberGroup = (role: string) => {
        if (/principal|collaborat/i.test(role)) return 'researchTeam';
        if (/junior/i.test(role)) return 'researchStaff';
        return 'students';
    };
    const groups = ['researchTeam', 'researchStaff', 'students'] as const;

    return (
        <main key={`team-${language}`} className="bg-white">
            <PageHero title={content.title} subtitle={content.subtitle} ribbon tone="base-150" fadeTo="white" />
            <div className="max-w-7xl mx-auto px-6 pb-16 space-y-10 lg:space-y-12">
                {groups.map(group => (
                    <section key={group} aria-labelledby={`team-${group}`}>
                        <div className="mb-8">
                            <h2 id={`team-${group}`} className="text-2xl sm:text-3xl font-semibold font-dm-sans text-primary">
                                {content.sections[group].title}
                            </h2>
                            <p className="mt-3 text-base sm:text-lg leading-relaxed font-dm-sans text-muted">
                                {content.sections[group].subtitle}
                            </p>
                        </div>
                        <TeamContainer members={content.members.filter(member => memberGroup(member.role) === group)} />
                    </section>
                ))}
            </div>
        </main>
    )
}

export default Team;

