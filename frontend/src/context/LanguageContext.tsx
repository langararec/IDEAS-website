import { useContext, useState, useEffect, createContext } from "react";

type LanguageContextType = {
    language: 'en' | 'fr';
    setLanguage: (lang: 'en' | 'fr') => void;
}


const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState<'en' | 'fr'>('en');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const storedLang = localStorage.getItem('lang');
        if (storedLang === 'en' || storedLang === 'fr') {
            setLanguage(storedLang);
        }
    }, []);

    useEffect(() => {
        if (mounted) {
            localStorage.setItem('lang', language);
            document.documentElement.lang = language;
        }
    }, [language, mounted]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}

export { LanguageContext };