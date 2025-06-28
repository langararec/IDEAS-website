import React, { useEffect } from "react";
import { FaLinkedin, FaTimes } from "react-icons/fa";
import type { MemberInfo } from "./TeamCard";

interface ExtendedMemberDescriptionProps {
    member: MemberInfo;
    onClose: () => void;
    isTransitioning?: boolean;
}

const ExtendedMemberDescription: React.FC<ExtendedMemberDescriptionProps> = ({ member, onClose, isTransitioning }) => {
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
            className={`min-h-screen ${
                isTransitioning 
                    ? 'animate-out scale-0 lg:scale-50 fade-out duration-300 lg:duration-500' 
                    : 'animate-in scale-100 fade-in duration-500'
            }`}
            style={{
                animationTimingFunction: isTransitioning 
                    ? 'cubic-bezier(0.4, 0.0, 1, 1)' // Ease-in for exit
                    : 'cubic-bezier(0.0, 0.0, 0.2, 1)' // Ease-out for entrance
            }}
        >
            <button
                onClick={handleClose}
                className="absolute top-4 right-4 hover:cursor-pointer z-[10000] text-gray-500 hover:text-gray-700 transition-all duration-200 w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100"
            >
                <FaTimes size={16} />
            </button>
            
            <div className="py-8 lg:py-16 px-4 ">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
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
                                        className="text-blue-600 hover:text-blue-700 transition-colors"
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
                                {member.longDescription.split('\n\n').map((paragraph, index) => (
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
    );
}

export default ExtendedMemberDescription;