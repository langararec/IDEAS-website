import { useLanguage } from '../../context/LanguageContext';
import { navContent } from '../../content/NavContent';
import AboutUsCard from './AboutUsCard'
import OurTeamCard from './OurTeamCard'
import GalleryCard from './GalleryCard'

type DesktopNavModalProps = {
    currentNav: string | null;
    setCurrentNav: (value: string | null) => void;
}

const DesktopNavModal = ({ currentNav, setCurrentNav }: DesktopNavModalProps) => {
    const { language } = useLanguage();

    const displayCurrentModal = () => {

        switch (currentNav) {
            case navContent[language].about:
                return <AboutUsCard setCurrentNav={setCurrentNav} />;
            case navContent[language].team:
                return <OurTeamCard setCurrentNav={setCurrentNav} />;
            case navContent[language].gallery:
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
