import AboutUsCard from './AboutUsCard'
import OurTeamCard from './OurTeamCard'
import GalleryCard from './GalleryCard'

type DesktopNavModalProps = {
    currentNav: string | null;
    setCurrentNav: (value: string | null) => void;
}

const DesktopNavModal = ({ currentNav, setCurrentNav }: DesktopNavModalProps) => {

    const displayCurrentModal = () => {

        switch (currentNav) {
            case "About Us":
                return <AboutUsCard setCurrentNav={setCurrentNav} />;
            case "Our Team":
                return <OurTeamCard setCurrentNav={setCurrentNav} />;
            case "Gallery":
                return <GalleryCard setCurrentNav={setCurrentNav} />;
            default:
                return null;
        }
    }
    return (
        <div>
            {displayCurrentModal()}
        </div>
    );
}

export default DesktopNavModal;
