import React from "react";
import { Link } from "react-router-dom";
import { RxCaretDown, RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar: React.FC = () => {

    const [isAboutOpen, setIsAboutOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

    return (
        <div className='bg-white w-full fixed top-0 z-50 h-20'>
            <div className="w-full xl:max-w-7xl mx-auto h-full my-auto flex flex-row justify-between py-4 items-center">
                <div className="my-auto ml-4">
                    <Link to="/">
                        <img src="/logo_rec.svg" alt="Logo" className="h-10 " />
                    </Link>
                </div>

                {/* Desktop Navigation - Only shows on XL screens and above */}
                <div className="hidden xl:block">
                    <nav className="flex space-x-8 p-4">
                        <div>
                            <div
                                onMouseEnter={() => setIsAboutOpen(true)}
                                onMouseLeave={() => setIsAboutOpen(false)}
                                className="flex flex-row items-center relative"
                            >
                                <p className="text-primary cursor-pointer hover:text-primary/80 transition-colors font-medium text-xl font-dm-sans">
                                    About
                                </p>
                                <RxCaretDown className={`inline ml-1 text-primary transition-transform duration-200 ${isAboutOpen ? 'rotate-180' : ''}`} />

                                <div className={`${isAboutOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'} 
        absolute top-full left-1/2 transform -translate-x-1/2 mt-2 
        w-64 bg-white rounded-xl shadow-2xl border border-gray-100 
        transition-all duration-300 ease-out z-50`}>

                                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-gray-100"></div>

                                    <div className="p-6 space-y-4">

                                        <Link
                                            to="/project"
                                            className="block group p-3 rounded-lg hover:bg-primary/5 transition-all duration-200 font-dm-sans"
                                        >
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <p className="text-primary font-medium group-hover:text-primary/80">The Project</p>
                                                </div>
                                            </div>
                                        </Link>

                                        <Link
                                            to="/updates"
                                            className="block group p-3 rounded-lg hover:bg-primary/5 transition-all duration-200"
                                        >
                                            <div className="flex items-center space-x-3">
                                                <div>
                                                    <p className="text-primary font-medium group-hover:text-primary/80 font-dm-sans">Updates & Timeline</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to="/team" className="text-primary text-xl font-medium font-dm-sans">Team</Link>
                        </div>
                        <div>
                            <Link to="/get-involved" className="text-primary font-medium text-xl font-dm-sans">Get Involved</Link>
                        </div>
                    </nav>
                </div>

                {/* Mobile Menu Button - Shows up to XL screens */}
                <div className="xl:hidden mr-4 my-auto">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-primary text-2xl p-2"
                    >
                        {isMobileMenuOpen ? <RxCross2 /> : <RxHamburgerMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu - Shows up to XL screens */}
            <div className={`${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} 
                xl:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100`}>
                
                <div className="p-4 space-y-4">
                    {/* Mobile About Section */}
                    <div>
                        <button
                            onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                            className="flex items-center justify-between w-full text-left p-3 text-primary font-medium font-dm-sans text-lg"
                        >
                            About
                            <RxCaretDown className={`transition-transform duration-200 ${isMobileAboutOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        <div className={`${isMobileAboutOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} 
                            overflow-hidden transition-all duration-300 ease-in-out`}>
                            <div className="pl-4 space-y-2">
                                <Link
                                    to="/project"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block p-3 font-dm-sans text-primary/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                                >
                                    The Project
                                </Link>
                                <Link
                                    to="/updates"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block p-3 font-dm-sans  text-primary/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                                >
                                    Updates & Timeline
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Team Link */}
                    <Link
                        to="/team"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block p-3 font-dm-sans text-primary font-medium text-lg hover:bg-primary/5 rounded-lg transition-all duration-200"
                    >
                        Team
                    </Link>

                    {/* Mobile Get Involved Link */}
                    <Link
                        to="/get-involved"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block p-3 font-dm-sans   text-primary font-medium text-lg hover:bg-primary/5 rounded-lg transition-all duration-200"
                    >
                        Get Involved
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;