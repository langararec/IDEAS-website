import { Link } from "react-router-dom";

type DesktopNavProps = {

    currentNav: string | null;
    setCurrentNav: (value: string | null) => void;

}

const DesktopNav = ({ currentNav, setCurrentNav }: DesktopNavProps) => {

    return (

        <div className="hidden lg:block max-w-7xl" >
            <div className="flex space-x-8 p-4">
                <div onMouseEnter={() => setCurrentNav("About Us")} >
                    <Link to="/project" className="text-primary text-xl font-medium font-dm-sans">About Us</Link>
                        <span className={`block h-0.5 ${currentNav === "About Us" ? "w-full" : "w-0"} bg-accent mt-0.5 transition-all duration-200`}></span>
                    </div>
                <div onMouseEnter={() => setCurrentNav("Our Team")} >
                    <Link to="/team" className="text-primary text-xl font-medium font-dm-sans">Our Team</Link>
                    <span className={`block h-0.5 ${currentNav === "Our Team" ? "w-full" : "w-0"} bg-accent mt-0.5 transition-all duration-200`}></span>
                </div>
                <div onMouseEnter={() => setCurrentNav("Gallery")} >
                    <Link to="/gallery" className="text-primary font-medium text-xl font-dm-sans">Gallery</Link>
                    <span className={`block h-0.5 ${currentNav === "Gallery" ? "w-full" : "w-0"} bg-accent mt-0.5 transition-all duration-200`}></span>
                </div>
            </div>
        </div >
    );
}

export default DesktopNav;