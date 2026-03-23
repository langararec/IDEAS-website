import { useLanguage } from "../../context/LanguageContext";
import { staffContent } from "../../content/StaffContent";
import StackedColumnChart from "../../components/StackedColumnChart";

const StaffYearsWorkedByArea: React.FC = () => {
  const { language } = useLanguage();
  const content = staffContent[language].yearsWorkedByArea;

  return (
    <StackedColumnChart
      title={content.title}
      subtitle={content.subtitle}
      burnaby={content.burnaby}
      courtenay={content.courtenay}
      total={content.total}
    />
  );
};

export default StaffYearsWorkedByArea;
