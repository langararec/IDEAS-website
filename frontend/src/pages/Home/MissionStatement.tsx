import { Link } from "react-router-dom";

const MissionStatement: React.FC = () => {
    return (
        <div className="relative">
            {/* Spacer to account for overlapping box */}
            <div className="h-20 lg:h-32"></div>

            <div className="bg-primary py-16 px-4 relative">
                <div className="max-w-6xl mx-auto relative">
                    {/* Main Quote Box - Overlapping */}
                    <div className="bg-base-200 rounded-2xl p-6  lg:p-12 text-center absolute -top-40 md:-top-24 lg:-top-36 left-1/2 transform -translate-x-1/2 w-11/12 lg:w-10/12  z-10">
                        <h2 className="text-2xl lg:text-3xl xl:text-4xl font-medium text-primary leading-tight font-dm-sans">
                            We aim to understand the unique recreation needs of{" "}
                            <span className="text-accent">racialized</span> and{" "}
                            <span className="text-accent">immigrant</span> groups compared to Canadian-born residents.
                        </h2>
                    </div>

                    {/* Description Text - More top padding to account for quote box */}
                    <div className="text-center space-y-6 text-white font-dm-sans pt-28 lg:pt-38 w-11/12 mx-auto">
                        <p className="text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
                            We are committed to supporting communities in Greater Vancouver and a smaller Vancouver Island area.
                            By uncovering barriers to participation and encouraging inclusive practices,
                            we hope to build stronger community connections and foster a genuine sense of belonging for everyone.
                        </p>

                        <p className="text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
                            Our project is dedicated to addressing the diverse needs of all community members, including those with
                            intersecting identities. We aim to create a model for inclusive public recreation that can inspire change
                            across Canada.
                        </p>

                        {/* Call to Action Button */}
                        <div className="pt-6">
                            <Link to="/project" aria-label="Learn more about the project">
                                <button className="bg-accent hover:bg-accent/80 hover:cursor-pointer text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 font-dm-sans uppercase tracking-wide">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MissionStatement;