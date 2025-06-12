
const Mission:React.FC = () => {

    return(
        <div className="w-full bg-white">
         <div className="max-w-6xl mx-auto px-4 py-16 bg-white">
                <div className="lg:flex lg:flex-row flex flex-col lg:items-center lg:gap-12 space-y-8 lg:space-y-0">
                    <div className="lg:flex-1">
                        <img
                            src="/mission.webp"
                            alt="Mission Image"
                            className="w-full h-auto rounded-2xl shadow-xl"
                        />
                    </div>
                    <div className=" lg:flex-1 lg:text-left text-center space-y-6">
                        <h2 className="text-3xl lg:text-4xl font-bold text-primary font-dm-sans">
                            Our Mission
                        </h2>
                        <p className="text-lg lg:text-xl text-black leading-relaxed font-dm-sans">
                            To enhance access and engagement by collaborating with communities and their municipal recreation staff to explore co-created initiatives to increase access to public recreation.
                        </p>
                    </div>
                </div>
            </div>
            </div>
    );
}

export default Mission;