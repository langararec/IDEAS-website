import { Link } from 'react-router-dom';

const ReachingOutAbout = () => (
    <section aria-labelledby="rowi-about-title" className="bg-[#EBF2EB99]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[minmax(280px,0.75fr)_minmax(0,1.25fr)] lg:gap-16 lg:py-24">
            <div>
                <h2 id="rowi-about-title" className="max-w-md text-left font-dm-sans text-4xl font-bold leading-[1.08] text-[#23443B] sm:text-5xl lg:mx-auto lg:text-center lg:text-6xl">
                    Arts-based recreation for connection and belonging
                </h2>
            </div>
            <div className="font-dm-sans text-base leading-8 text-[#23443B] sm:text-xl sm:leading-9">
                <p>
                    Working with older adults, public recreation providers, and social housing partners, the project will co-create accessible community arts programming.
                </p>
                <p className="mt-4 sm:mt-5">
                    The research will explore how recreation can help older adults build connections and feel welcomed into their local communities.
                </p>
                <p className="mt-4 sm:mt-5">
                    Findings will inform training for staff who support older adults across recreation, civic, and social housing settings. The project will also develop a framework to help communities across Canada build stronger partnerships between public recreation and social housing.
                </p>
                <Link
                    to="/reaching-out-welcoming-in/about"
                    className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-[#ff5800] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#e94f00] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#23443B]"
                >
                    Learn more
                </Link>
            </div>
        </div>
    </section>
);

export default ReachingOutAbout;
