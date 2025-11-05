import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { statisticsContent } from "../../content/StatisticsContent";

const ActivitySheets: React.FC = () => {
    const { language } = useLanguage();
 

    return (
        <div key={`activity-sheets-${language}`}>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-dm-sans">
                Activity Sheets
            </h2>
 
            {/* Add your activity sheets content here */}
        </div>
    );
}

export default ActivitySheets;