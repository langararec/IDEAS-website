import Carousel from "./Carousel";

const Hero: React.FC = () => {
    return (
        <div className="px-4 pt-12">
            <div className="text-center max-w-6xl mx-auto">
                <h1 className="text-4xl lg:text-6xl leading-tight font-bold lg:font-bold font-dm-sans text-primary mb-8">
                    Inclusion, Diversity, Equity, and Accessibility in <span className="text-accent">Public Recreation</span>
                </h1>
                <p className="max-w-2xl text-lg lg:text-xl text-black mx-auto leading-relaxed mb-0 font-dm-sans">
                    Our research initiative focused on the experiences of immigrant and racialized communities in British Columbia's public recreation.
                </p>
                <Carousel />
            </div>
        </div>
    );
}

export default Hero;