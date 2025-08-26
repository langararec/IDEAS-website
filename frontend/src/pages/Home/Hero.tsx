import Carousel from "./Carousel";

const Hero: React.FC = () => {
    return (
        <div className="px-4 pt-12">
            <div className="text-center max-w-6xl mx-auto">
                <h1 className="text-4xl lg:text-6xl leading-tight tracking-wide font-semibold font-dm-sans text-primary mb-8">
                    Inclusion, Diversity, Equity, and Accessibility in <span className="text-accent">Public Recreation</span>
                </h1>
                <p className="max-w-2xl text-lg lg:text-xl text-black mx-auto leading-relaxed mb-0 font-dm-sans">
                    Our research initiative focused on the experiences of immigrant and racialized communities in British Columbia's public recreation.
                </p>
                <Carousel />
                <h3 className="text-lg lg:text-3xl leading-relaxed tracking-wide font-medium font-dm-sans text-primary mt-4"> Take our survey and be entered to win a $10 visa gift card! </h3>

                <div className="flex justify-center mb-14 mt-2">
                    <a 
                        href="https://ca.research.net/r/RecreationSurveyWeb" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Take the research survey (opens in new tab)"
                        className="inline-block bg-primary hover:bg-primary/80 text-white border-3 px-8 py-3 rounded-xl mt-4  focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-all font-medium text-center duration-300  hover:scale-105"
                    >
                        GO TO SURVEY
                    </a>
                </div>

            </div>
        </div>
    );
}

export default Hero;