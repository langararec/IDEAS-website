import React from 'react';
import { Link } from 'react-router-dom';

type AboutUsCardProps = {
    setCurrentNav?: (value: string | null) => void;
}

const OurTeamCard: React.FC<AboutUsCardProps> = ({ setCurrentNav }) => {
    return (
        <div className="w-full xl:w-fit xl:mx-auto bg-white xl:p-6 rounded-lg xl:justify-between xl:gap-x-12 overflow-hidden xl:shadow-md flex flex-col xl:flex-row justify-start" onMouseLeave={() => setCurrentNav && setCurrentNav(null)}>
            <div className="flex flex-col xl:block">
                {/* Header Section */}
                <div className="bg-white xl:px-6 py-2 order-1">
                    <p className="text-lg font-medium text-gray-400 uppercase tracking-wide font-dm-sans">
                        MEET OUR TEAM
                    </p>
                </div>

                {/* Image Section - Shows after header on mobile, hidden on XL*/}
                <div className="xl:hidden order-2 py-2">
                    <img
                        src="/OurTeamNav.jpg"
                        alt="Community engagement - People in a photo"
                        className="w-full h-48 max-h-60 object-cover rounded-lg"
                    />
                </div>

                {/* Content Section - Shows last on mobile */}
                <div className="flex flex-col md:flex-row order-3">
                    {/* Content */}
                    <div className="flex-1 xl:px-6 py-2 space-y-2">
                        <Link to="/team" className="block hover:bg-base-200 rounded-lg p-1">
                            <div className="text-gray-700 text-lg font-medium cursor-pointer font-dm-sans">
                                Principal Researchers 
                            </div>
                        </Link>

                        <Link to="/team" className="block hover:bg-base-200 rounded-lg p-1">
                            <div className="text-gray-700 text-lg font-medium cursor-pointer font-dm-sans">
                                Collaborators
                            </div>
                        </Link>

                        <Link to="/team" className="block hover:bg-base-200 rounded-lg p-1">
                            <div className="text-gray-700 text-lg font-medium cursor-pointer font-dm-sans">
                                Research Assistants
                            </div>
                        </Link>

                        <Link to="/team" className="block hover:bg-base-200 rounded-lg p-1">
                            <div className="text-gray-700 text-lg font-medium cursor-pointer font-dm-sans">
                                Student Research Assistants
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Left Image - Only shows on XL screens */}
            <div className="hidden xl:block xl:h-48 w-full xl:w-fit m-auto p-0">
                <img
                    src="/OurTeamNav.jpg"
                    alt="Community engagement - People in a photo"
                    className="w-full h-48 max-h-60 md:h-full object-cover rounded-lg"
                />
            </div>
        </div>
    );
};

export default OurTeamCard;
