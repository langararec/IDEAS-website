import { Link } from "react-router-dom";
import { RxCaretDown } from "react-icons/rx";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutUsCard from "./AboutUsCard";
import OurTeamCard from "./OurTeamCard";
import GalleryCard from "./GalleryCard";

type MobileNavProps = {
    isMobileMenuOpen: boolean;
    isMobileAboutOpen: boolean;
    setIsMobileMenuOpen: (value: boolean) => void;
    setIsMobileAboutOpen: (value: boolean) => void;
}

const MobileNav = ({ isMobileMenuOpen, setIsMobileMenuOpen }: MobileNavProps) => {
    const [isGalleryExpanded, setIsGalleryExpanded] = useState(false);
    const [isAboutExpanded, setIsAboutExpanded] = useState(false);
    const [isTeamExpanded, setIsTeamExpanded] = useState(false);
    const location = useLocation();

    // Close mobile menu when location changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsGalleryExpanded(false);
        setIsAboutExpanded(false);
        setIsTeamExpanded(false);
    }, [location.pathname, setIsMobileMenuOpen]);

    return (
        <div className={`${isMobileMenuOpen ? 'max-h-[85dvh] opacity-100' : 'max-h-0 opacity-0'} 
                lg:hidden overflow-x-hidden transition-all duration-300 ease-in-out`}>

            {/* Separated Menu Container with blur and rounded borders */}
            <div className="p-4 ">
                <div className="bg-white backdrop-blur-sm rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 space-y-4">
                        {/* About Us */}
                        <div className="py-3 border-b border-gray-100">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                            >
                                <Link to="/project">
                                    <span className="text-primary text-xl font-medium font-dm-sans">
                                        About Us
                                    </span>
                                </Link>
                                <RxCaretDown className={`text-primary text-xl transition-transform duration-200 ${isAboutExpanded ? 'rotate-180' : ''}`} />
                            </div>

                            {/* About Us Expanded Content */}
                            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isAboutExpanded ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
                                }`}>
                                <AboutUsCard />
                            </div>
                        </div>

                        {/* Our Team */}
                        <div className="py-3 border-b border-gray-100">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => setIsTeamExpanded(!isTeamExpanded)}
                            >
                                <Link to="/team">
                                    <span className="text-primary text-xl font-medium font-dm-sans">
                                        Our Team
                                    </span>
                                </Link>
                                <RxCaretDown className={`text-primary text-xl transition-transform duration-200 ${isTeamExpanded ? 'rotate-180' : ''}`} />
                            </div>

                            {/* Our Team Expanded Content */}
                            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isTeamExpanded ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
                                }`}>
                                <OurTeamCard />
                            </div>
                        </div>

                        {/* Gallery */}
                        <div className="py-3 border-b border-gray-100">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => setIsGalleryExpanded(!isGalleryExpanded)}
                            >
                                <Link to="/gallery">
                                    <span className="text-primary text-xl font-medium font-dm-sans">
                                        Gallery
                                    </span>
                                </Link>
                                <RxCaretDown className={`text-primary text-xl transition-transform duration-200 ${isGalleryExpanded ? 'rotate-180' : ''}`} />                            </div>

                            {/* Gallery Expanded Content */}
                            <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isGalleryExpanded ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
                                }`}>
                                <GalleryCard />
                            </div>
                        </div>

                        {/* Get Involved Button */}
                        <div className="pt-4">
                            <Link to="/get-involved" className="hover:cursor-pointer">
                                <button className="bg-accent hover:bg-accent/80 hover:cursor-pointer text-white font-semibold  py-2 rounded-lg transition-all duration-300 transform hover:scale-105 font-dm-sans tracking-wide w-full">
                                    Get Involved
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileNav;