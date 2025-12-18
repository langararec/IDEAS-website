import React, { useEffect } from "react";
import { FaLinkedin } from "react-icons/fa";
import type { MemberInfo } from "./TeamCard";
import { MdClose } from "react-icons/md";

interface ExtendedMemberDescriptionProps {
    member: MemberInfo;
    onClose: () => void;
    isTransitioning?: boolean;
}

const ExtendedMemberDescription: React.FC<ExtendedMemberDescriptionProps> = ({ member, onClose }) => {
    const handleClose = () => {
        // Restore scrolling
        document.body.style.overflow = 'auto';
        onClose();
    };

    // Prevent scrolling when component mounts
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        
        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div 
            className="w-[95vw] max-w-7xl h-[90vh] bg-white rounded-2xl mx-auto my-[5vh] animate-scaleIn overflow-hidden relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
        >
            <div className="overflow-y-auto flex-1 rounded-2xl " style={{scrollbarWidth: 'none'}}>
            <button
                onClick={handleClose}
                className="absolute top-4 right-4 hover:cursor-pointer z-[10000] w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-all duration-200 hover:scale-110"
                aria-label="Close"
            >
                <MdClose className="w-6 h-6" />
            </button>
            
            <div className="pt-16 pb-8 px-4 sm:px-6 lg:py-16 lg:px-12">
                <div className="max-w-full mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        {/* Left Content */}
                        <div className="space-y-6">
                            {/* Name and LinkedIn */}
                            <div className="flex items-center gap-4">
                                <h1 className="text-4xl lg:text-5xl font-bold text-primary font-dm-sans">
                                    {member.name}
                                </h1>
                                {member.linkedin && (
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:text-blue-600 transition-colors"
                                    >
                                        <FaLinkedin size={32} />
                                    </a>
                                )}
                            </div>

                            {/* Role */}
                            {member.role && (
                                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-900 font-dm-sans">
                                    {member.role}
                                </h2>
                            )}

                            {/* Program - with conditional link */}
                            {member.program && (
                                <div>
                                    {member.programLink ? (
                                        <a
                                            href={member.programLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xl lg:text-2xl font-medium text-accent font-dm-sans hover:text-accent/80 transition-colors  decoration-accent/30 hover:decoration-accent/60"
                                        >
                                            {member.program}
                                        </a>
                                    ) : (
                                        <h3 className="text-xl lg:text-2xl font-medium text-accent font-dm-sans">
                                            {member.program}
                                        </h3>
                                    )}
                                </div>
                            )}

                            {/* Long Description */}
                            <div className="space-y-4">
                                {member.longDescription && member.longDescription.split('\n\n').map((paragraph, index) => (
                                    <p key={index} className="text-gray-700 leading-relaxed font-dm-sans text-lg">
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center lg:justify-end">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full max-w-md lg:max-w-lg h-auto object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default ExtendedMemberDescription;