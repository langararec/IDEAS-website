import { useLanguage } from "../../context/LanguageContext";
import { statisticsContent } from "../../content/StatisticsContent";
import DemographicChart from "./DemographicChart";

const Demographics: React.FC = () => {
  const { language } = useLanguage();
  const content = statisticsContent[language].demographics;

  return (
    <div className="mb-6 max-w-7xl mx-auto p-4 md:p-6">


      {/* Demographics Charts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <DemographicChart
          title={content.genderIdentity.title}
          subtitle={content.genderIdentity.subtitle}
          burnabyData={content.genderIdentity.burnaby}
          courtenayData={content.genderIdentity.courtenay}
        />
        
        <DemographicChart
          title={content.age.title}
          subtitle={content.age.subtitle}
          burnabyData={content.age.burnaby}
          courtenayData={content.age.courtenay}
        />
        
        <DemographicChart
          title={content.timeLivingInBC.title}
          subtitle={content.timeLivingInBC.subtitle}
          burnabyData={content.timeLivingInBC.burnaby}
          courtenayData={content.timeLivingInBC.courtenay}
        />
      </div>
    </div>
  );
};

export default Demographics;
