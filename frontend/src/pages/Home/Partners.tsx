const partnerUrls = ["partner1.webp", "partner2.webp", "partner3.webp", "partner4.webp", "partner5.webp", "partner6.webp", "partner7.webp"];

const Partners: React.FC = () => {

    return (
        <div className="bg-base-100 py-16">
            <div className="px-4 max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-primary font-dm-sans">
                        Our Partners
                    </h2>
                </div>

                <div className="flex justify-center gap-4 md:gap-8 lg:gap-12 items-center flex-wrap">
                    {partnerUrls.map((partnerUrl, index) => (
                        <div
                            key={index}
                            className="p-3 md:p-6 rounded-xl transition-shadow duration-300 flex items-center justify-center w-2/5 md:w-1/4 lg:w-1/5"
                        >
                            <img
                                src={partnerUrl}
                                alt={`Partner ${index + 1}`}
                                className="max-w-full max-h-16 md:max-h-24 object-contain transition-all duration-300"
                            />
                        </div>
                    ))}
                </div>

                <p className="px-6 text-gray-700 leading-relaxed font-dm-sans text-center my-4">This project is supported in part by funding from the Social Sciences and Humanities Research Council.</p>\

                <img src="/SSHRCC.webp" alt="SSHRCC Canada" className="w-full"></img>
            </div>
        </div>
    );
}

export default Partners;