import { Link } from "react-router-dom";
import { RxCaretDown } from "react-icons/rx";

type MobileNavProps = {
    isMobileMenuOpen: boolean;
    isMobileAboutOpen: boolean; 
    setIsMobileMenuOpen: (value: boolean) => void;
    setIsMobileAboutOpen: (value: boolean) => void;
}

const MobileNav = ({ isMobileMenuOpen, setIsMobileMenuOpen, setIsMobileAboutOpen, isMobileAboutOpen }: MobileNavProps) => {
    return (
        <div className={`${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} 
                xl:hidden overflow-x-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100`}>

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

                    <div className={`${isMobileAboutOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} 
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
                            <Link
                                to="/schedule"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block p-3 font-dm-sans  text-primary/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                            >
                                Engagement Schedule
                            </Link>
                            <Link
                                to="/gallery"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block p-3 font-dm-sans  text-primary/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                            >
                                Gallery
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
    )
}

export default MobileNav;