import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { updatesContent } from "../../content/UpdatesContent";

const ProjectUpdates: React.FC = () => {
  const { language } = useLanguage();
  const content = updatesContent[language].projectUpdate;

  return (
    <div key={`project-update-${language}`} className="flex flex-col items-center justify-center h-full">
      <h1 className="text-2xl font-bold mb-4 text-primary font-dm-sans">{content.title}</h1>
      <p className="text-gray-600 text-center font-dm-sans">{content.message}</p>
    </div>
  );
}

export default ProjectUpdates;