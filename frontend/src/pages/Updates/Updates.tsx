import React from "react";
import PageHero from "../../components/PageHero";
import { useLanguage } from "../../context/LanguageContext";
import { updatesContent } from "../../content/UpdatesContent";
import Timeline from "./Timeline";


const Updates: React.FC = () => {
    const { language } = useLanguage();
    const content = updatesContent[language];

    return (
        <main className="bg-white">
            <PageHero title={content.title} subtitle={content.subtitle} ribbon tone="base-150" fadeTo="white" />
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <h2 className="mb-6 pl-24 sm:pl-0 text-4xl font-semibold font-dm-sans text-primary">
                        {content.timelineHeading}
                    </h2>
                    <Timeline />
                </div>
            </div>
        </main>
    );
};

export default Updates;