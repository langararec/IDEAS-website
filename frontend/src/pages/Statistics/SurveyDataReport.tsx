
import { useLanguage } from "../../context/LanguageContext";
import { statisticsContent } from "../../content/StatisticsContent";
import SurveyParticipants from "./SurveyParticipants";

const SurveyDataReport: React.FC = () => {
    const { language } = useLanguage();
    const content = statisticsContent[language].surveyDataReport;


    return (
        <div key={`survey-data-report-${language}`}>
            <div className="mb-6 rounded-xl bg-white shadow-sm border-1 border-gray-200 max-w-7xl p-4 md:p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-dm-sans text-center my-auto">
                    {content.title}
                </h2>
            </div>
            <SurveyParticipants />
        </div>
    );

}

export default SurveyDataReport;