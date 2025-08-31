import React from 'react';
import { Link } from 'react-router-dom';

type AboutUsCardProps = {
    setCurrentNav: (value: string | null) => void;
}

const OurTeamCard: React.FC<AboutUsCardProps> = ({ setCurrentNav }) => {
    return (
        <div className="w-fit mx-auto bg-white p-6 rounded-lg justify-between gap-x-12 overflow-hidden shadow-md flex flex-row " onMouseLeave={() => setCurrentNav(null)}>
            {/* Right Image */}
            <div className="xl:h-48 m-auto p-0">
                <img
                    src="/OurTeamNav.jpg"
                    alt="Community engagement - People in a photo"
                    className="w-full h-48 md:h-full object-cover rounded-lg"
                />
            </div>
            <div>
                {/* Header Section */}
                <div className="bg-white px-6 py-2">
                    <p className="text-lg font-medium text-gray-400 uppercase tracking-wide font-dm-sans">
                        MEET OUR TEAM
                    </p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row">
                    {/* Left Content */}
                    <div className="flex-1 px-6 py-2 space-y-4 ">
                        <Link to="/team" className="block hover:bg-base-100 rounded-lg">
                            <div className="text-gray-700 text-lg font-medium cursor-pointer font-dm-sans">
                                Principal Researchers 
                            </div>
                        </Link>

                        <Link to="/team" className="block hover:bg-base-100 rounded-lg">
                            <div className="text-gray-700 text-lg font-medium cursor-pointer font-dm-sans">
                                Collaborators
                            </div>
                        </Link>

                        <Link to="/team" className="block hover:bg-base-100 rounded-lg">
                            <div className="text-gray-700 text-lg font-medium cursor-pointer font-dm-sans">
                                Research Assistants
                            </div>
                        </Link>

                         <Link to="/team" className="block hover:bg-base-100 rounded-lg">
                            <div className="text-gray-700 text-lg font-medium cursor-pointer font-dm-sans">
                                Student Research Assistants
                            </div>
                        </Link>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default OurTeamCard;
