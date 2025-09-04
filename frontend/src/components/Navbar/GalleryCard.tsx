import React from 'react';
import { Link } from 'react-router-dom';

type AboutUsCardProps = {
    setCurrentNav?: (value: string | null) => void;
}

const AboutUsCard: React.FC<AboutUsCardProps> = ({ setCurrentNav }) => {
    return (
        <div className=" lg:w-1/3 mx-auto bg-white lg:p-6 rounded-lg justify-between  shadow-md flex flex-col " onMouseLeave={() => setCurrentNav && setCurrentNav(null)}>
            <div>
                {/* Header Section */}
                <div className="bg-white  py-2">
                    <p className="text-lg font-medium text-gray-400 uppercase tracking-wide font-dm-sans">
                        CHECK OUT OUR GALLERY
                    </p>
                </div>

                <div className="lg:h-60 max-h-60 m-auto p-0 ">
                    <img
                        src="/gallery-nav-image.webp"
                        alt="Community engagement - Team "
                        className="w-full h-48 max-h-60 md:h-full object-cover rounded-lg"
                    />
                </div>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row">
                    {/* Left Content */}
                    <div className="flex-1  pt-3 space-y-2 ">
                        <Link to="/gallery" className="block hover:bg-base-200 hover:px-2 rounded-lg p-1 duration-300">
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
