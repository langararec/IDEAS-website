import React from "react";
import { IoLocation, IoMail } from "react-icons/io5";
import { Link } from "react-router-dom";
import { navContent } from "../content/NavContent";
import { navModalContent } from "../content/NavModalContent";
import { footerContent } from "../content/FooterContent";
import { useLanguage } from "../context/LanguageContext";

const Footer: React.FC = () => {

    const { language } = useLanguage();
    const content = navContent[language];
    const modalContent = navModalContent[language];
    const footerData = footerContent[language];

    return (
        <footer key={`footer-${language}`} className=" mt-16">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">

                    {/* Left Column - Logo & Contact Info */}
                    <div className="space-y-4 flex-shrink-0">
                        <div className="flex items-center gap-3">
                            <img src="/logo_rec.svg" alt="Innovate Recreation" className="h-10" />
                        </div>

                        <div className="space-y-2 text-gray-600">
                            <div className="flex items-start gap-2">
                                <IoLocation className="text-gray-500 mt-1 flex-shrink-0" />
                                <span className="font-dm-sans">100 W 49th Ave, Vancouver, BC V5X 3B3</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoMail className="text-gray-500 flex-shrink-0" />
                                <a href="mailto:idearesearch@langara.ca" className="font-dm-sans hover:text-primary transition-colors">
                                    idearesearch@langara.ca
                                </a>
                            </div>
                        </div>

                        <Link to="/get-involved" className="hover:cursor-pointer">
                            <button className="bg-accent hover:bg-accent/80 hover:cursor-pointer text-white font-semibold  py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 font-dm-sans tracking-wide ">
                                {navContent[language].getInvolved}
                            </button>
                        </Link>

                    </div>

                    {/* Right Side - Navigation Columns with justify-between */}
                    <div className="flex flex-col sm:flex-row justify-end gap-4 md:gap-16 flex-1 md:max-w-md">
                        
                        {/* About Us Column */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-bold text-gray-800 font-dm-sans">{content.about}</h3>
                            <div className="space-y-3">
                                <Link to="/project" className="block text-gray-600 hover:text-primary transition-colors font-dm-sans">
                                    {modalContent.aboutUs.links[0].text}
                                </Link>
                                <Link to="/updates" className="block text-gray-600 hover:text-primary transition-colors font-dm-sans">
                                    {modalContent.aboutUs.links[1].text}
                                </Link>
                                <Link to="/schedule" className="block text-gray-600 hover:text-primary transition-colors font-dm-sans">
                                    {modalContent.aboutUs.links[2].text}
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="border-t border-gray-200 pt-6">
                    <p className="text-center text-gray-600 font-dm-sans">
                        {footerData.copyright}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;