import { useLanguage } from "../../context/LanguageContext";
import { staffContent } from "../../content/StaffContent";
import StackedColumnChart from "../../components/StackedColumnChart";

const StaffEDITraining: React.FC = () => {
  const { language } = useLanguage();
  const content = staffContent[language].ediTraining;

  return (
    <StackedColumnChart
      title={content.title}
      subtitle={content.subtitle}
      burnaby={content.burnaby}
      courtenay={content.courtenay}
      horizontal
      chartHeight={280}
    />
  );
};

export default StaffEDITraining;
