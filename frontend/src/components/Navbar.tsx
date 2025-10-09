import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { IoLanguage } from "react-icons/io5";
import { useLanguage } from "../context/LanguageContext";
import { navContent } from "../content/NavContent";
import DesktopNav from "./Navbar/DesktopNav";
import DesktopNavModal from "./Navbar/DesktopNavModal";
import MobileNav from "./Navbar/MobileNav";

const Navbar: React.FC = () => {

    const { setLanguage, language } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
    const [currentNav, setCurrentNav] = useState<string | null>(null);

    const toggleLanguage = useCallback(() => {
        setLanguage(language === 'en' ? 'fr' : 'en');
    }, [language, setLanguage]);

    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(prev => !prev);
    }, []);

    const handleNavLeave = useCallback(() => {
        setCurrentNav(null);
    }, []);

    return (
        <nav className={` bg-transparent w-full fixed top-0 z-50 ${currentNav ? "h-fit" : "h-20"} `} onMouseLeave={handleNavLeave}>
            <div className="w-full bg-white">
                <div className={`w-full bg-white max-w-7xl mx-auto h-20 my-auto flex items-center py-4 relative`}>
                    
                    {/* Logo - Absolute positioned to left */}
                    <div className="absolute left-4 my-auto">
                        <Link to="/">
                            <img 
                                src="/logo_rec.svg" 
                                alt="Logo" 
                                width={120}
                                height={40}
                                loading="eager"
                                fetchPriority="high"
                                className="h-10 " 
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation - Centered using full width and flex justify-center */}
                    <div className="w-full flex justify-center">
                        <DesktopNav currentNav={currentNav} setCurrentNav={setCurrentNav} />
                    </div>
                    
                    {/* Desktop Language Toggle & CTA - Absolute positioned to right */}
                    <div className="hidden lg:flex items-center gap-4 hover:cursor-pointer absolute right-4">
                        <button
                            onClick={toggleLanguage}
                            aria-label={`Switch language to ${language === 'en' ? 'French' : 'English'}`}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 font-dm-sans font-medium text-primary"
                        >
                            <span className="text-sm uppercase font-semibold">{navContent[language].language}</span>
                            <IoLanguage className="text-lg" />
                        </button>

                        <Link to="/get-involved" className="hover:cursor-pointer">
                            <button 
                                className="bg-accent hover:bg-accent/80 hover:cursor-pointer text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 font-dm-sans tracking-wide"
                                aria-label="Navigate to get involved page"
                            >
                                {navContent[language].getInvolved}
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Language Toggle & Menu Button - Absolute positioned to right */}
                    <div className="lg:hidden my-auto flex items-center gap-3 absolute right-4">
                        <button
                            onClick={toggleLanguage}
                            aria-label={`Switch language to ${language === 'en' ? 'French' : 'English'}`}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg  hover:bg-gray-200 transition-colors duration-300 font-dm-sans font-medium text-primary"
                        >
                            <span className="text-sm uppercase font-semibold">{navContent[language].language}</span>
                            <IoLanguage className="text-lg" />
                        </button>

                        <button
                            onClick={toggleMobileMenu}
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMobileMenuOpen}
                            className="text-primary text-2xl p-2"
                        >
                            {isMobileMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Separator for Active Desktop Navigation */}
            {currentNav && <div className="w-full h-1 bg-gray-100"></div>}

            {/* Mobile Menu - Shows up to XL screens */}
            <div className={`relative transition-all duration-300 ease-in-out overflow-hidden ${isMobileMenuOpen
                ? "max-h-[1000vh] opacity-100 py-4 backdrop-blur-sm transform translate-y-0 bg-gradient-to-b from-white/80 via-white-20 to-transparent"
                : "max-h-0 opacity-0 py-0 transform -translate-y-2"
                }`}>
                <MobileNav
                    isMobileMenuOpen={isMobileMenuOpen}
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                    isMobileAboutOpen={isMobileAboutOpen}
                    setIsMobileAboutOpen={setIsMobileAboutOpen}
                />
            </div>

            {/* Desktop Navigation Content */}
            <div className={`relative transition-all duration-300 ease-in-out overflow-hidden ${currentNav
                ? "max-h-screen opacity-100 py-4 backdrop-blur-xs transform translate-y-0 bg-gradient-to-b from-white/25 via-white/20 to-transparent"
                : "max-h-0 opacity-0 py-0 transform -translate-y-2"
                }`}>
                <div className={`transition-all duration-300  ${currentNav ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-4"}`}>
                    {DesktopNavModal({ currentNav, setCurrentNav })}
                </div>
            </div>
        </nav>
    )
}

export default Navbar;