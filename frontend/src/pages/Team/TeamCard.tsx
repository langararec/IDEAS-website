import { useState } from "react";
import { FaLinkedin } from "react-icons/fa";
import ExtendedMemberDescription from "./ExtendedMemberDescription";

export type MemberInfo = {
    name: string;
    role?: string;
    image: string;
    linkedin?: string;
    shortDescription?: string;
    longDescription?: string;
    program?: string;
    programLink?: string;
};

export const TeamCard = (info: MemberInfo) => {

    const [isExtended, setIsExtended] = useState(false);

    const [isTransitioning, setIsTransitioning] = useState(false);

    const handleCloseExtended = () => {
        setIsTransitioning(true);
        setTimeout(() => {
            setIsExtended(false);
            setIsTransitioning(false);
        }, 500);
    };

    if (isExtended) {
        return (
            <div 
                className="fixed inset-0 z-[9999] bg-black/80 overflow-y-auto animate-fadeIn"
                style={{ backdropFilter: 'blur(10px)' }}
                onClick={handleCloseExtended}
            >
                <ExtendedMemberDescription
                    member={info}
                    onClose={handleCloseExtended}
                    isTransitioning={isTransitioning}
                />
            </div>
        );
    }
    return (
        <div className="relative rounded-2xl overflow-hidden shadow-md w-full max-w-xs hover:cursor-pointer mx-auto bg-white" onClick={() => setIsExtended(true)}>
            {/* Profile Image */}
            <img
                src={info.image}
                alt={info.name}
                className="w-full h-80 object-cover hover:scale-105 duration-300"
            />

            {/* Overlay with name, role, and LinkedIn */}
            <div className="absolute bottom-0 left-0 w-full bg-black/40 px-4 py-4 flex flex-col">
                <div className="flex items-center gap-2">
                    <span className="text-white text-lg font-bold font-dm-sans hover:text-accent/90 duration-300">
                        {info.name}
                    </span>
                    {info.linkedin && (
                        <a
                            href={info.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-blue-400 transition-colors"
                        >
                            <FaLinkedin size={22} />
                        </a>
                    )}
                </div>
                {info.role && (
                    <span className="text-white text-base font-dm-sans">
                        {info.role}
                    </span>
                )}
            </div>
        </div>
    );
};