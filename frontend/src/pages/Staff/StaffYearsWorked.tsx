import { useLanguage } from "../../context/LanguageContext";
import { staffContent } from "../../content/StaffContent";
import DoughnutChart from "../../components/DoughnutChart";

const StaffYearsWorked: React.FC = () => {
  const { language } = useLanguage();
  const content = staffContent[language].yearsWorked;

  return (
    <div className="mb-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DoughnutChart
          title={content.title}
          subtitle={content.subtitle}
          burnaby={content.burnaby}
          courtenay={content.courtenay}
          total={content.total}
        />
      </div>
    </div>
  );
};

export default StaffYearsWorked;
