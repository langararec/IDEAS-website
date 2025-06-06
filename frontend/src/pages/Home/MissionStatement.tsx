

const MissionStatement:React.FC = () => {
    return (
        <div className="bg-primary py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Main Quote Box */}
                <div className="bg-base-200/90 rounded-2xl p-8 lg:p-12 mb-8 text-center">
                    <h2 className="text-2xl lg:text-4xl font-bold text-primary leading-tight font-dm-sans">
                        We aim to understand the unique recreation needs of{" "}
                        <span className="text-accent">racialized</span> and{" "}
                        <span className="text-accent">immigrant</span> groups compared to Canadian-born residents.
                    </h2>
                </div>

                {/* Description Text */}
                <div className="text-center space-y-6 text-white font-dm-sans">
                    <p className="text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
                        By uncovering barriers to participation by looking through a lens of 'Belonging, Dignity, Justice, and Joy'
                        (Davis, 2021) we hope to build stronger community connections and foster a genuine sense of belonging for
                        everyone through more effective inclusive practices in recreation.
                    </p>

                    <p className="text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
                        Our project is dedicated to addressing the diverse needs of all community members, including those with
                        intersecting identities. We aim to create a model for inclusive public recreation that can inspire change
                        across Canada.
                    </p>

                    {/* Call to Action Button */}
                    <div className="pt-6">
                        <button className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 font-dm-sans uppercase tracking-wide">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MissionStatement;