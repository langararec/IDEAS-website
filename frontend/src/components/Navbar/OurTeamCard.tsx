import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { navModalContent } from '../../content/NavModalContent';

type AboutUsCardProps = {
    setCurrentNav?: (value: string | null) => void;
}

const OurTeamCard: React.FC<AboutUsCardProps> = ({ setCurrentNav }) => {
    const { language } = useLanguage();
    const content = navModalContent[language].team;

    return (
        <div 
            key={`team-card-${language}`}
            className="w-full lg:w-fit lg:mx-auto bg-white lg:p-6 rounded-lg lg:justify-between lg:gap-x-12 overflow-hidden lg:shadow-md flex flex-col lg:flex-row justify-start" 
            onMouseLeave={() => setCurrentNav && setCurrentNav(null)}
        >
            <div className="flex flex-col lg:block">
                {/* Header Section */}
                <div className="bg-white  py-2 order-1">
                    <p className="text-lg font-medium text-gray-400 uppercase tracking-wide font-dm-sans">
                        {content.header}
                    </p>
                </div>

                {/* Image Section - Shows after header on mobile, hidden on XL*/}
                <div className="lg:hidden order-2 py-2">
                    <img
                        src={content.image.src}
                        alt={content.image.alt}
                        width={400}
                        height={192}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-48 max-h-60 object-cover rounded-lg"
                    />
                </div>

                {/* Content Section - Shows last on mobile */}
                <div className="flex flex-col md:flex-row order-3">
                    {/* Content */}
                    <div className="flex-1  py-2 space-y-2">
                        {content.links.map((link, index) => (
                            <Link key={`${language}-team-link-${index}`} to={link.path} className="block hover:bg-base-200 hover:px-2 rounded-lg p-1 duration-300">
                                <div className="text-gray-700 text-lg font-medium cursor-pointer font-dm-sans">
                                    {link.text}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Left Image - Only shows on XL screens */}
            <div className="hidden lg:block lg:h-48 w-full lg:w-fit m-auto p-0">
                <img
                    src={content.image.src}
                    alt={content.image.alt}
                    width={400}
                    height={192}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-48 max-h-60 md:h-full object-cover rounded-lg"
                />
            </div>
        </div>
    );
};

export default OurTeamCard;
