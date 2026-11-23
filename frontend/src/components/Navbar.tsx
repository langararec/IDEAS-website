import React, { useState, useCallback, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { IoLanguage } from "react-icons/io5";
import { useLanguage } from "../context/LanguageContext";
import { navContent } from "../content/NavContent";
import DesktopNav from "./Navbar/DesktopNav";
import DesktopNavModal from "./Navbar/DesktopNavModal";
import MobileNav from "./Navbar/MobileNav";

const Navbar: React.FC<{ projectSwitcher?: React.ReactNode }> = ({ projectSwitcher }) => {

    const { setLanguage, language } = useLanguage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [currentNav, setCurrentNav] = useState<string | null>(null);
    const [displayedNav, setDisplayedNav] = useState<string | null>(null);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const cancelNavClose = useCallback(() => {
        if (closeTimer.current !== null) {
            clearTimeout(closeTimer.current);
            closeTimer.current = null;
        }
    }, []);

    const handleNavChange = useCallback((value: string | null) => {
        cancelNavClose();
        if (value !== null) {
            setDisplayedNav(value);
        }
        setCurrentNav(value);
    }, [cancelNavClose]);

    useEffect(() => cancelNavClose, [cancelNavClose]);

    const toggleLanguage = useCallback(() => {
        setLanguage(language === 'en' ? 'fr' : 'en');
    }, [language, setLanguage]);

    const toggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(prev => !prev);
    }, []);

    const handleNavLeave = useCallback(() => {
        cancelNavClose();
        closeTimer.current = setTimeout(() => {
            setCurrentNav(null);
            closeTimer.current = null;
        }, 150);
    }, [cancelNavClose]);

    return (
        <nav lang={language} className="bg-transparent w-full relative h-20" onMouseEnter={cancelNavClose} onMouseLeave={handleNavLeave}>
            <div className="w-full bg-primary">
                <div className={`w-full bg-primary max-w-7xl mx-auto h-20 my-auto flex items-center gap-2 px-4 py-2 relative`}>
                    {projectSwitcher && <div className="min-w-0 flex-1 max-w-54 sm:max-w-70 lg:flex-none">{projectSwitcher}</div>}
                    
                    {/* Desktop Navigation */}
                    <div className="hidden min-w-0 flex-1 justify-center lg:flex">
                        <DesktopNav currentNav={currentNav} setCurrentNav={handleNavChange} />
                    </div>
                    
                    {/* Desktop Language Toggle & CTA - Absolute positioned to right */}
                    <div className="hidden lg:flex shrink-0 items-center gap-2 hover:cursor-pointer">
                        <button
                            onClick={toggleLanguage}
                            aria-label={`Switch language to ${language === 'en' ? 'French' : 'English'}`}
                            className="flex items-center gap-2 px-2 py-2 rounded-lg hover:bg-white/15 transition-colors duration-300 font-dm-sans font-medium text-white"
                        >
                            <span className="text-sm uppercase font-semibold">{navContent[language].language}</span>
                            <IoLanguage className="text-lg" />
                        </button>

                        <Link to="/ideas/get-involved" className="hover:cursor-pointer">
                            <button 
                                className="bg-accent hover:bg-accent/80 hover:cursor-pointer text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 font-dm-sans tracking-wide"
                                aria-label="Navigate to get involved page"
                            >
                                {navContent[language].getInvolved}
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Language Toggle & Menu Button - Absolute positioned to right */}
                    <div className="lg:hidden my-auto ml-auto flex shrink-0 items-center gap-1">
                        <button
                            onClick={toggleLanguage}
                            aria-label={`Switch language to ${language === 'en' ? 'French' : 'English'}`}
                            className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white/15 transition-colors duration-300 font-dm-sans font-medium text-white"
                        >
                            <span className="text-sm uppercase font-semibold">{navContent[language].language}</span>
                            <IoLanguage className="text-lg" />
                        </button>

                        <button
                            onClick={toggleMobileMenu}
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMobileMenuOpen}
                            className="text-white text-2xl p-2 rounded-lg hover:bg-white/15 transition-colors duration-300"
                        >
                            {isMobileMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Separator for Active Desktop Navigation */}
            {currentNav && <div className="hidden lg:block absolute top-full w-full h-1 bg-white/20"></div>}

            {/* Mobile Menu - Shows up to XL screens */}
            <div
                className={`navbar-dropdown lg:hidden absolute top-full w-full py-4 ${isMobileMenuOpen ? "is-open" : "pointer-events-none"}`}
                aria-hidden={!isMobileMenuOpen}
                inert={!isMobileMenuOpen}
            >
                <MobileNav
                    setIsMobileMenuOpen={setIsMobileMenuOpen}
                />
            </div>

            {/* Desktop Navigation Content */}
            <div
                className={`navbar-dropdown hidden lg:block absolute top-full w-full py-4 ${currentNav ? "is-open" : "pointer-events-none"}`}
                aria-hidden={!currentNav}
                inert={!currentNav}
            >
                <DesktopNavModal currentNav={displayedNav} setCurrentNav={handleNavChange} />
            </div>
        </nav>
    )
}

export default Navbar;