const partners = [
    { image: "partner1.webp", name: "City of Burnaby", url: "https://www.burnaby.ca/" },
    { image: "partner2.webp", name: "City of Courtenay", url: "https://www.courtenay.ca/" },
    { image: "partner3.webp", name: "SACH", url: "https://www.sachbc.ca/" },
    { image: "partner4.webp", name: "BC Recreation and Parks Association", url: "https://www.bcrpa.bc.ca/" },
    { image: "partner8.webp", name: "Burnaby Neighbourhood House", url: "https://burnabynh.ca/" },
    { image: "iwc.webp", name: "Immigrant Welcome Centre", url: "https://immigrantwelcome.ca/" },
    { image: "partner5.webp", name: "Recreation Studies Langara", url: "https://langara.ca/programs-and-courses/programs/recreation-studies/" },
    { image: "partner6.webp", name: "Applied Research Centre Langara", url: "https://students.langara.ca/about-langara/applied-research/index.html" },
    { image: "partner7.webp", name: "Office of Equity, Diversity and Inclusion Langara", url: "https://students.langara.ca/about-langara/edi/" },

];

const Partners: React.FC = () => {

    return (
        <div className="bg-base-100 py-16">
            <div className="px-4 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary font-dm-sans">
                        Our Partners
                    </h2>
                </div>

                <div className="flex justify-center gap-4 md:gap-8  lg:gap-12 items-center flex-wrap">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="p-3 md:p-6 rounded-xl transition-shadow duration-300 flex items-center justify-center w-2/5 md:w-1/4 lg:w-1/5"
                        >
                            <a
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit ${partner.name} website (opens in new tab)`}
                                className="block  duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                            >
                                <img
                                    src={"/partners/" + partner.image}
                                    alt={partner.name}
                                    className="max-w-full max-h-16 md:max-h-24 object-contain transition-all duration-300"
                                />
                            </a>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col items-center">
                    <p className="text-gray-700 text-sm lg:text-base leading-relaxed font-dm-sans text-center my-4 max-w-3xl">This project is supported in part by funding from the Social Sciences and Humanities Research Council.</p>

                    <img src="/SSHRCC.webp" alt="SSHRCC Canada" className="max-w-2xl w-full "></img>
                </div>
            </div>
        </div>
    );
}

export default Partners;