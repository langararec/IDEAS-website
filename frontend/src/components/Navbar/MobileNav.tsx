import { Link } from "react-router-dom";
import { RxCaretDown } from "react-icons/rx";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { navContent } from "../../content/NavContent";
import AboutUsCard from "./AboutUsCard";
import OurTeamCard from "./OurTeamCard";
import GalleryCard from "./GalleryCard";

type MobileNavProps = {
    setIsMobileMenuOpen: (value: boolean) => void;
}

const MobileNav = ({ setIsMobileMenuOpen }: MobileNavProps) => {
    const [isGalleryExpanded, setIsGalleryExpanded] = useState(false);
    const [isAboutExpanded, setIsAboutExpanded] = useState(false);
    const [isTeamExpanded, setIsTeamExpanded] = useState(false);
    const location = useLocation();
    const { language } = useLanguage();

    // Close mobile menu when location changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
        setIsGalleryExpanded(false);
        setIsAboutExpanded(false);
        setIsTeamExpanded(false);
    }, [location.pathname, setIsMobileMenuOpen]);

    return (
        <div className="lg:hidden max-h-[calc(100dvh-7rem)] overflow-y-auto overflow-x-hidden">

            {/* Separated Menu Container with blur and rounded borders */}
            <div className="p-4 ">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                    <div className="px-6 py-4 space-y-4">
                        {/* About Us */}
                        <div className="py-3 border-b border-gray-100">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                            >
                                <Link to="/project">
                                    <span className="text-primary text-xl font-medium font-dm-sans">
                                        {navContent[language].about}
                                    </span>
                                </Link>
                                <RxCaretDown className={`text-primary text-xl transition-transform duration-200 ${isAboutExpanded ? 'rotate-180' : ''}`} />
                            </div>

                            {/* About Us Expanded Content */}
                            {isAboutExpanded && (
                                <div className="mt-4">
                                    <AboutUsCard />
                                </div>
                            )}
                        </div>

                        {/* Our Team */}
                        <div className="py-3 border-b border-gray-100">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => setIsTeamExpanded(!isTeamExpanded)}
                            >
                                <Link to="/team">
                                    <span className="text-primary text-xl font-medium font-dm-sans">
                                        {navContent[language].team}
                                    </span>
                                </Link>
                                <RxCaretDown className={`text-primary text-xl transition-transform duration-200 ${isTeamExpanded ? 'rotate-180' : ''}`} />
                            </div>

                            {/* Our Team Expanded Content */}
                            {isTeamExpanded && (
                                <div className="mt-4">
                                    <OurTeamCard />
                                </div>
                            )}
                        </div>

                        {/* Gallery */}
                        <div className="py-3 border-b border-gray-100">
                            <div
                                className="flex items-center justify-between cursor-pointer"
                                onClick={() => setIsGalleryExpanded(!isGalleryExpanded)}
                            >
                                <Link to="/gallery">
                                    <span className="text-primary text-xl font-medium font-dm-sans">
                                        {navContent[language].gallery}
                                    </span>
                                </Link>
                                <RxCaretDown className={`text-primary text-xl transition-transform duration-200 ${isGalleryExpanded ? 'rotate-180' : ''}`} />                            </div>

                            {/* Gallery Expanded Content */}
                            {isGalleryExpanded && (
                                <div className="mt-4">
                                    <GalleryCard />
                                </div>
                            )}
                        </div>

                                                {/* Findings */}
                        <div className="py-3 border-b border-gray-100">
                            <Link to="/findings">
                                <span className="text-primary text-xl font-medium font-dm-sans">
                                    {navContent[language].findings}
                                </span>
                            </Link>
                        </div>
                        {/* Get Involved Button */}
                        <div className="pt-4">
                            <Link to="/get-involved">
                                <button 
                                    className="bg-accent hover:bg-accent/80 hover:cursor-pointer text-white font-semibold  py-2 rounded-lg transition-all duration-300 transform hover:scale-105 font-dm-sans tracking-wide w-full"
                                    aria-label="Navigate to get involved page"
                                >
                                    {navContent[language].getInvolved}
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