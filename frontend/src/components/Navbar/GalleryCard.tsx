import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { navModalContent } from '../../content/NavModalContent';
import NavLinkList from './NavLinkList';

type GalleryCardProps = {
    setCurrentNav?: (value: string | null) => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ setCurrentNav }) => {
    const { language } = useLanguage();
    const content = navModalContent[language].gallery;

    return (
        <div 
            key={`gallery-card-${language}`}
            className=" lg:w-1/3 mx-auto bg-white lg:p-6 rounded-lg justify-between  shadow-md flex flex-col " 
        >
            <div>
                {/* Header Section */}
                <div className="bg-white  py-2">
                    <p className="text-lg font-medium text-gray-400 uppercase tracking-wide font-dm-sans">
                        {content.header}
                    </p>
                </div>

                <div className="lg:h-60 max-h-60 m-auto p-0 ">
                    <img
                        src={content.image.src}
                        alt={content.image.alt}
                        width={400}
                        height={240}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-48 max-h-60 md:h-full object-cover rounded-lg"
                    />
                </div>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row">
                    {/* Left Content */}
                    <NavLinkList links={content.links} onNavigate={() => setCurrentNav?.(null)} className="flex-1 pt-3" />
                </div>
            </div>
        </div>
    );
};

export default GalleryCard;
