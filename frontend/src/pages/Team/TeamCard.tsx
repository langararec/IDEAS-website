import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import ExtendedMemberDescription from "./ExtendedMemberDescription";

export type MemberInfo = {
    name: string;
    role?: string;
    image: string;
    shortDescription: string;
    longDescription: string;
    linkedin?: string;
    program?: string;
    programLink?: string;
}

export const TeamCard = (info: MemberInfo) => {
    const [showExtended, setShowExtended] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleExpandClick = () => {
        setIsTransitioning(true);
        // Wait for zoom out animation to complete, then show extended view
        setTimeout(() => {
            setShowExtended(true);
            setIsTransitioning(false);
        }, 500);
    };

    const handleCloseExtended = () => {
        setIsTransitioning(true);
        // Start zoom out of extended view
        setTimeout(() => {
            setShowExtended(false);
            setIsTransitioning(false);
        }, 500);
    };

    if (showExtended) {
        return (
            <div className="fixed inset-0 z-[9999] bg-white overflow-y-auto">
                <ExtendedMemberDescription
                    member={info}
                    onClose={handleCloseExtended}
                    isTransitioning={isTransitioning}
                />
            </div>
        );
    }

    return (
        <div
            className={`flex flex-col lg:flex-row gap-6 py-6 rounded-lg w-full sm:w-1/2 transition-all ${isTransitioning
                    ? 'scale-100 duration-400'
                    : 'scale-100 opacity-100 duration-500'
                }`}
            style={{
                animationTimingFunction: 'cubic-bezier(0.4, 0.0, 1, 1)'
            }}
        >
            {/* Profile Image */}
            <div className={`flex-shrink-0 lg:w-56 lg:h-56 w-10/12 mx-auto overflow-hidden rounded-lg
${isTransitioning ? 'scale-100 duration-400' : 'scale-100 opacity-100 duration-500'}`}>
                <img
                    src={info.image}
                    alt={info.name}
                    className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-110"
                    onClick={handleExpandClick}
                />
            </div>

            {/* Content */}
            <div className="flex-1 my-auto mx-auto">
                {/* Name and LinkedIn */}
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <h2
                        className="text-xl font-bold text-primary font-dm-sans cursor-pointer hover:text-primary/80 transition-colors"
                        onClick={handleExpandClick}
                    >
                        {info.name}
                    </h2>
                    {info.linkedin && (
                        <a
                            href={info.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                            <FaLinkedin size={28} />
                        </a>
                    )}
                </div>

                {/* Role */}
                <h3 className=" text-primary font-medium mb-2 font-dm-sans text-center lg:text-left">
                    {info.role}
                </h3>

                {/* Program - with conditional link */}
                {info.program && (
                    <div className="mb-4 mx-auto w-fit lg:mx-0">
                        {info.programLink ? (
                            <a
                                href={info.programLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-center lg:text-left text-accent font-medium font-dm-sans hover:text-accent/80 transition-colors "
                            >
                                {info.program}
                            </a>
                        ) : (
                            <p className="text-center lg:text-left text-accent font-medium font-dm-sans">
                                {info.program}
                            </p>
                        )}
                    </div>
                )}

                {/* Short Description */}
                <p className="text-gray-700 leading-relaxed font-dm-sans text-center lg:text-left px-4 sm:px-0 ">
                    {info.shortDescription}
                </p>
            </div>
        </div>
    );
}