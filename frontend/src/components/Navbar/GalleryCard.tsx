import React from 'react';
import { Link } from 'react-router-dom';

type AboutUsCardProps = {
    setCurrentNav: (value: string | null) => void;
}

const AboutUsCard: React.FC<AboutUsCardProps> = ({ setCurrentNav }) => {
    return (
        <div className="lg:w-1/2 xl:w-1/3 mx-auto bg-white p-6 rounded-lg justify-between  shadow-md flex flex-col " onMouseLeave={() => setCurrentNav(null)}>
            <div>
                {/* Header Section */}
                <div className="bg-white  py-2">
                    <p className="text-lg font-medium text-gray-400 uppercase tracking-wide font-dm-sans">
                        CHECK OUT OUR GALLERY
                    </p>
                </div>

                <div className="xl:h-60 m-auto p-0">
                    <img
                        src="/burnabyMetrotown.png"
                        alt="Community engagement - Team "
                        className="w-full h-48 md:h-full object-cover rounded-lg"
                    />
                </div>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row">
                    {/* Left Content */}
                    <div className="flex-1 px-6 pt-3 space-y-4 ">
                        <Link to="/gallery" className="block hover:bg-base-100 rounded-lg">
                            <div className="text-gray-700 text-lg font-medium cursor-pointer font-dm-sans">
                                Browse Photos
                            </div>
                        </Link>

                    </div>


                </div>
            </div>

        </div>
    );
};

export default AboutUsCard;
