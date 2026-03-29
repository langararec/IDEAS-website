import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { careersContent, careerListings } from "../../content/CareersContent";
import type { CareerListing } from "../../content/CareersContent";
import { LuMapPin } from "react-icons/lu";
import { BsCalendar3 } from "react-icons/bs";
import { IoChevronDownOutline } from "react-icons/io5";


const CareerRow: React.FC<{ listing: CareerListing; content: typeof careersContent.en }> = ({
    listing,
    content,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const formatDate = (iso: string) => {
        const d = new Date(iso);
        return d.toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" });
    };

    const mailtoHref = listing.applyCC
        ? `mailto:${listing.applyEmail}?cc=${listing.applyCC}&subject=${encodeURIComponent(listing.applySubject ?? listing.title)}`
        : `mailto:${listing.applyEmail}?subject=${encodeURIComponent(listing.applySubject ?? listing.title)}`;

    return (
        <div className="font-dm-sans border-t-gray-200 border-t-2 py-4">
            {/* Title */}
            <h3 className="text-2xl font-semibold text-primary leading-tight mb-1 font-dm-sans">
                {listing.title}
            </h3>

            {/* Department */}
            <p className="text-base font-medium text-gray-900 mb-3 font-dm-sans">{listing.department}</p>

            {/* Location & Posted date */}
            <div className="flex flex-wrap gap-5 text-gray-500 text-sm mb-5 font-dm-sans">
                <span className="flex items-center gap-1.5">
                    <LuMapPin className="size-4 text-accent flex-shrink-0" />
                    {listing.location}
                </span>
                <span className="flex items-center gap-1.5">
                    <BsCalendar3 className="size-3.5 text-accent flex-shrink-0" />
                    {content.posted}: {formatDate(listing.postedDate)}
                </span>
            </div>

            {/* Toggle */}
            <button
                onClick={() => setIsExpanded((prev) => !prev)}
                className="flex items-center gap-1.5 text-accent font-semibold text-sm font-dm-sans hover:underline focus:outline-none"
                aria-expanded={isExpanded}
            >
                {isExpanded ? content.showLess : content.showMore}
                <IoChevronDownOutline
                    className={`size-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                />
            </button>

            {/* Expanded content */}
            <div
                className={`transition-all duration-300 ease-in-out overflow-x-visible overflow-y-hidden ${
                    isExpanded ? "opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <div className="space-y-8 pt-6">
                    {/* Description */}
                    <div className="space-y-3 text-gray-600 leading-relaxed text-sm font-dm-sans">
                        {listing.description.split("\n\n").map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>

                    {/* Responsibilities */}
                    <div>
                        <h4 className="text-base font-semibold text-gray-900 mb-3 font-dm-sans">{content.responsibilities}</h4>
                        <ul className="list-disc list-inside space-y-1.5 text-gray-600 text-sm font-dm-sans">
                            {listing.responsibilities.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Qualifications */}
                    <div>
                        <h4 className="text-base font-semibold text-gray-900 mb-3 font-dm-sans">{content.qualifications}</h4>
                        <ul className="list-disc list-inside space-y-1.5 text-gray-600 text-sm font-dm-sans">
                            {listing.qualifications.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Additional Details */}
                    {listing.additionalDetails && listing.additionalDetails.length > 0 && (
                        <div>
                            <h4 className="text-base font-semibold text-gray-900 mb-4 font-dm-sans">{content.additionalDetails}</h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                                {listing.additionalDetails.map((detail, i) => (
                                    <div key={i} className="bg-gray-200/40 border border-gray-200 rounded-xl px-4 py-3">
                                            <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest block mb-1 font-dm-sans">{detail.label}</span>
                                            <p className="text-gray-700 text-sm font-medium font-dm-sans">{detail.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* How to Apply */}
                    <div className=" border-gray-200">
                        <h4 className="text-base font-semibold text-gray-900 mb-2 flex items-center gap-2 font-dm-sans">
                            {content.howToApply}
                        </h4>
                        {listing.applyInstructions && (
                            <p className="text-gray-600 text-sm leading-relaxed mb-5 font-dm-sans">{listing.applyInstructions}</p>
                        )}
                        <a
                            href={mailtoHref}
                            className="block w-fit sm:inline-block sm:w-auto text-center bg-accent hover:bg-accent/80 text-white font-semibold px-6 py-2.5 rounded-lg text-sm font-dm-sans transition-all duration-300"
                        >
                            {content.apply}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Careers: React.FC = () => {
    const { language } = useLanguage();
    const content = careersContent[language];

    return (
        <div key={`careers-${language}`} className="bg-base-100 min-h-[65vh]">
            {/* Content */}
            <div className="px-4 sm:px-6 lg:px-0 max-w-7xl mx-auto relative py-4">
                <h1 className="text-4xl font-bold font-dm-sans text-primary my-4">{content.pageTitle}</h1>
                {careerListings.length === 0 ? (
                    <p className="text-gray-500 font-dm-sans border-t-2 border-t-gray-200 pt-8 text-center py-16">
                        {content.noOpenings}
                    </p>
                ) : (
                    <div>
                        {careerListings.map((listing) => (
                            <CareerRow key={listing.id} listing={listing} content={content} />
                        ))}
                        {/* Closing border line */}
                        <div className="border-t-2 border-t-gray-200" />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Careers;

