const Hero: React.FC = () => {
    return (
        <div className="relative min-h-[32vh] flex items-center justify-center">

            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/aboutproject.jpg"
                    alt="Project Hero"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/10"></div>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-dm-sans">
                    About the Project
                </h1>
                <p className=" md:text-lg leading-relaxed font-dm-sans text-gray-200">
                    Our research project aims to transform public recreation access for immigrant and racialized
                    communities in British Columbia. Focusing on collaboration and understanding, we strive to
                    create a more inclusive and equitable recreational environment.
                </p>
            </div>
        </div>
    );
}

export default Hero;