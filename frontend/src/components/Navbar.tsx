import React from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";
import DesktopNav from "./Navbar/DesktopNav";
import DesktopNavModal from "./Navbar/DesktopNavModal";
import MobileNav from "./Navbar/MobileNav";

const Navbar: React.FC = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
    const [currentNav, setCurrentNav] = useState<string | null>(null);

    return (
        <nav className={` bg-transparent w-full fixed top-0 z-50 ${currentNav ? "h-fit" : "h-20"} `} onMouseLeave={() => setCurrentNav(null)}>
            <div className="w-full bg-white">
            <div className={`w-full bg-white max-w-7xl  mx-auto h-20 my-auto flex flex-row justify-between py-4 items-center`}>
                <div className="my-auto ml-4">
                    <Link to="/">
                        <img src="/logo_rec.svg" alt="Logo" className="h-10 " />
                    </Link>
                </div>

                {/* Desktop Navigation - Only shows on XL screens and above */}
                <DesktopNav currentNav={currentNav} setCurrentNav={setCurrentNav} />

                {/*Desktop CTA*/}
                <div className="hidden lg:block hover:cursor-pointer mr-4">
                    <Link to="/get-involved" className="hover:cursor-pointer">
                        <button className="bg-accent hover:bg-accent/80 hover:cursor-pointer text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 font-dm-sans tracking-wide">
                            Get Involved
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Button - Shows up to XL screens */}
                <div className="lg:hidden mr-4 my-auto">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
             <div className={`relative transition-all duration-300 ease-in-out overflow-hidden ${
                isMobileMenuOpen 
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
            <div className={`relative transition-all duration-300 ease-in-out overflow-hidden ${
                currentNav 
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