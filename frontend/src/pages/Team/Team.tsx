import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { teamContent } from "../../content/TeamContent";
import { TeamContainer } from "./TeamContainer";

const Team: React.FC = () => {
    const { language } = useLanguage();
    const content = teamContent[language];

    return (
        <div key={`team-${language}`} className="bg-base-100">
            <div className="max-w-7xl mx-auto px-6  py-16">
                <h1 className="text-primary text-4xl sm:text-5xl font-dm-sans mb-10 font-bold text-center ">
                    {content.title}
                </h1>
                <TeamContainer members={content.members} />
            </div>
        </div>
    )
}

export default Team;

