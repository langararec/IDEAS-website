import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { homeContent } from "../../content/HomeContent";
import PartnersSection from "../../components/PartnersSection";

const Partners: React.FC = () => {
    const { language } = useLanguage();
    const content = homeContent[language].partners;
    const ideasPartnerImages = new Set([
        "city_of_burnaby.webp",
        "city_of_courtenay.webp",
        "SACH.webp",
        "bnh.webp",
        "iwc.webp",
        "mosaic-logo.png",
        "amssa.png",
        "bcrpa_new.png",
        "rec_studies.webp",
        "ARC.webp",
        "edi_langara.webp",
    ]);
    const partners = content.partnersList.filter(partner => ideasPartnerImages.has(partner.image));

    return (
        <PartnersSection
            key={`partners-${language}`}
            title={content.title}
            supportText={content.supportText}
            sshrcAlt={content.sshrcAlt}
            partners={partners}
        />
    );
}

export default Partners;