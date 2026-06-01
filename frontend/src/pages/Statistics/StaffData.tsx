import { useLanguage } from "../../context/LanguageContext";
import { staffContent } from "../../content/StaffContent";
import StaffDemography from "../Staff/StaffDemography";
import StaffBelongingDignityJustice from "../Staff/StaffBelongingDignityJustice";
import StaffFrontlineGap from "../Staff/StaffFrontlineGap";
import StaffPerception from "../Staff/StaffPerception";
import StaffWhyParks from "../Staff/StaffWhyParks";

const StaffData: React.FC = () => {
    const { language } = useLanguage();
    const content = staffContent[language];

    return (
        <div className="max-w-7xl mx-auto">
            {/* Page Header */}
            <div className="mb-6 rounded-xl bg-white border border-gray-200 max-w-7xl p-4 md:p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-dm-sans text-center my-auto">
                    {content.pageTitle}
                </h2>
            </div>

            {/* Content */}
            <StaffDemography />

            <StaffFrontlineGap />
            <StaffPerception />
            <StaffBelongingDignityJustice />
            <StaffWhyParks />
        </div>
    );
};

export default StaffData;
