import React from "react";

interface DotGridSectionProps {
    residentLabel: string;
    immigrantLabel: string;
    residentCount: number;
    immigrantCount: number;
    residentDisplayValue?: string | number;
    immigrantDisplayValue?: string | number;
    residentDotCount?: number;
    immigrantDotCount?: number;
}

const DotGrid: React.FC<{ count: number; isResident: boolean }> = ({ count, isResident }) => {
    const dotColor = isResident ? '#0f4c28' : '#6b7280'; // Dark green for resident, gray for immigrant

    return (
        <div className="flex flex-wrap gap-1 min-h-[60px]">
            {Array.from({ length: count }).map((_, index) => (
                <div
                    key={index}
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: dotColor }}
                />
            ))}
        </div>
    );
};

const DotGridSection: React.FC<DotGridSectionProps> = ({
    residentLabel,
    immigrantLabel,
    residentCount,
    immigrantCount,
    residentDisplayValue,
    immigrantDisplayValue,
    residentDotCount,
    immigrantDotCount
}) => {
    // Use custom values if provided, otherwise fall back to residentCount/immigrantCount
    const displayResidentValue = residentDisplayValue !== undefined ? residentDisplayValue : residentCount;
    const displayImmigrantValue = immigrantDisplayValue !== undefined ? immigrantDisplayValue : immigrantCount;
    const actualResidentDots = residentDotCount !== undefined ? residentDotCount : residentCount;
    const actualImmigrantDots = immigrantDotCount !== undefined ? immigrantDotCount : immigrantCount;

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 ">
            {/* Resident Section */}
            <div className="mb-4 bg-base-100 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0f4c28]"></div>
                    <span className="text-sm font-semibold text-gray-700 font-dm-sans">
                        {residentLabel}
                    </span>
                    <span className="text-sm font-bold text-gray-900 ml-auto">
                        {displayResidentValue}
                    </span>
                </div>
                <DotGrid count={actualResidentDots} isResident={true} />
            </div>

            {/* Immigrant Section */}
            <div className="bg-base-100 border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-500"></div>
                    <span className="text-sm font-semibold text-gray-700 font-dm-sans">
                        {immigrantLabel}
                    </span>
                    <span className="text-sm font-bold text-gray-900 ml-auto">
                        {displayImmigrantValue}
                    </span>
                </div>
                <DotGrid count={actualImmigrantDots} isResident={false} />
            </div>
        </div>
    );
};

export default DotGridSection;
