import React from "react";

interface DotGridSectionProps {
    residentLabel: string;
    immigrantLabel: string;
    residentCount: number;
    immigrantCount: number;
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
    immigrantCount
}) => {
    return (
        <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
            {/* Resident Section */}
            <div className="mb-4 bg-base-100 border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#0f4c28]"></div>
                    <span className="text-sm font-semibold text-gray-700 font-dm-sans">
                        {residentLabel}
                    </span>
                    <span className="text-sm font-bold text-gray-900 ml-auto">
                        {residentCount}
                    </span>
                </div>
                <DotGrid count={residentCount} isResident={true} />
            </div>

            {/* Immigrant Section */}
            <div className="bg-base-100 border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-gray-500"></div>
                    <span className="text-sm font-semibold text-gray-700 font-dm-sans">
                        {immigrantLabel}
                    </span>
                    <span className="text-sm font-bold text-gray-900 ml-auto">
                        {immigrantCount}
                    </span>
                </div>
                <DotGrid count={immigrantCount} isResident={false} />
            </div>
        </div>
    );
};

export default DotGridSection;
