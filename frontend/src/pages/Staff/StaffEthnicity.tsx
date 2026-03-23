import { useLanguage } from "../../context/LanguageContext";
import { staffContent } from "../../content/StaffContent";
import HorizontalBarChart from "../../components/HorizontalBarChart";

const StaffEthnicity: React.FC = () => {
  const { language } = useLanguage();
  const content = staffContent[language].ethnicity;

  return (
    <HorizontalBarChart
      title={content.title}
      subtitle={content.subtitle}
      burnaby={content.burnaby}
      courtenay={content.courtenay}
      total={content.total}
    />
  );
};

export default StaffEthnicity;
