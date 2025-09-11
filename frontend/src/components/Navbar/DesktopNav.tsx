import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { navContent } from "../../content/NavContent";

type DesktopNavProps = {

    currentNav: string | null;
    setCurrentNav: (value: string | null) => void;

}

const DesktopNav = ({ currentNav, setCurrentNav }: DesktopNavProps) => {
    const { language } = useLanguage();

    return (

        <div className="hidden lg:block max-w-7xl" >
            <div className="flex space-x-8 p-4">
                <div onMouseEnter={() => setCurrentNav(navContent[language].about)} >
                    <Link to="/project" className="text-primary text-xl font-medium font-dm-sans">{navContent[language].about}</Link>
                        <span className={`block h-0.5 ${currentNav === navContent[language].about ? "w-full" : "w-0"} bg-accent mt-0.5 transition-all duration-200`}></span>
                    </div>
                <div onMouseEnter={() => setCurrentNav(navContent[language].team)} >
                    <Link to="/team" className="text-primary text-xl font-medium font-dm-sans">{navContent[language].team}</Link>
                    <span className={`block h-0.5 ${currentNav === navContent[language].team ? "w-full" : "w-0"} bg-accent mt-0.5 transition-all duration-200`}></span>
                </div>
                <div onMouseEnter={() => setCurrentNav(navContent[language].gallery)} >
                    <Link to="/gallery" className="text-primary font-medium text-xl font-dm-sans">{navContent[language].gallery}</Link>
                    <span className={`block h-0.5 ${currentNav === navContent[language].gallery ? "w-full" : "w-0"} bg-accent mt-0.5 transition-all duration-200`}></span>
                </div>
            </div>
        </div >
    );
}

export default DesktopNav;