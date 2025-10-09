import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { homeContent } from "../../content/HomeContent";

const Partners: React.FC = () => {
    const { language } = useLanguage();
    const content = homeContent[language].partners;

    return (
        <div className="bg-base-100 py-16" key={`partners-${language}`}>
            <div className="px-4 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary font-dm-sans">
                        {content.title}
                    </h2>
                </div>

                <div className="flex justify-center gap-4 md:gap-8  lg:gap-12 items-center flex-wrap">
                    {content.partnersList.map((partner, index) => (
                        <div
                            key={`${language}-partner-${index}`}
                            className="p-3 md:p-6 rounded-xl transition-shadow duration-300 flex items-center justify-center w-2/5 md:w-1/4 lg:w-1/5"
                        >
                            <a
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={partner.ariaLabel}
                                className="block  duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                            >
                                <img
                                    src={"/partners/" + partner.image}
                                    alt={partner.name}
                                    width={120} 
                                    height={80}
                                    loading="lazy"
                                    decoding="async"
                                    className="max-w-full max-h-16 md:max-h-24 object-contain transition-all duration-300"
                                />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-gray-700 text-sm lg:text-base leading-relaxed font-dm-sans text-center my-4 max-w-3xl">
                        {content.supportText}
                    </p>

                    <img
                        src="/SSHRCC.webp"
                        alt={content.sshrcAlt}
                        width={800}
                        height={200}
                        loading="lazy"
                        className="max-w-2xl w-full"
                    />
                </div>
            </div>
        </div>
    );
}

export default Partners;