import React from "react";
import DotGrid from "./DotGrid";

interface DotGridSectionProps {
    residentLabel: string;
    immigrantLabel: string;
    residentCount: number;
    immigrantCount: number;
    residentDisplayValue?: string | number;
    immigrantDisplayValue?: string | number;
    residentDotCount?: number;
    immigrantDotCount?: number;
    selectedCity: 'burnaby' | 'courtenay';
}

const DotGridSection: React.FC<DotGridSectionProps> = ({
    residentLabel,
    immigrantLabel,
    residentCount,
    immigrantCount,
    residentDisplayValue,
    immigrantDisplayValue,
    residentDotCount,
    immigrantDotCount,
    selectedCity
}) => {
    // Use custom values if provided, otherwise fall back to residentCount/immigrantCount
    const displayResidentValue = residentDisplayValue !== undefined ? residentDisplayValue : residentCount;
    const displayImmigrantValue = immigrantDisplayValue !== undefined ? immigrantDisplayValue : immigrantCount;
    const actualResidentDots = residentDotCount !== undefined ? residentDotCount : residentCount;
    const actualImmigrantDots = immigrantDotCount !== undefined ? immigrantDotCount : immigrantCount;

    const residentColor = selectedCity === 'burnaby' ? '#317039' : '#034F59';
    const immigrantColor = selectedCity === 'burnaby' ? '#75A37B' : '#398F9A';

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 ">
            {/* Resident Section */}
            <div className="mb-4 bg-base-100 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: residentColor }}></div>
                    <span className="text-sm font-semibold text-gray-700 font-dm-sans">
                        {residentLabel}
                    </span>
                    <span className="text-sm font-bold text-gray-900 ml-auto">
                        {displayResidentValue}
                    </span>
                </div>
                <DotGrid count={actualResidentDots} isResident={true} selectedCity={selectedCity} />
            </div>

            {/* Immigrant Section */}
            <div className="bg-base-100 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: immigrantColor }}></div>
                    <span className="text-sm font-semibold text-gray-700 font-dm-sans">
                        {immigrantLabel}
                    </span>
                    <span className="text-sm font-bold text-gray-900 ml-auto">
                        {displayImmigrantValue}
                    </span>
                </div>
                <DotGrid count={actualImmigrantDots} isResident={false} selectedCity={selectedCity} />
            </div>
        </div>
    );
};

export default DotGridSection;
