type PageHeroProps = {
    title: string;
    subtitle: string;
    ribbon?: boolean;
    tone?: 'base-100' | 'base-150' | 'base-200';
    fadeTo?: 'white' | 'base-100';
};

const heroTones = {
    'base-100': 'bg-base-100',
    'base-150': 'bg-base-150',
    'base-200': 'bg-base-200',
};

const PageHero = ({ title, subtitle, ribbon = false, tone = 'base-200', fadeTo }: PageHeroProps) => (
    <header className={`relative isolate overflow-hidden ${heroTones[tone]} font-dm-sans mb-4`}>
        <div className="max-w-7xl mx-auto px-6 pt-8 lg:pt-12">
            <h1 className="max-w-5xl text-4xl sm:text-5xl lg:text-6xl leading-[1.1] font-bold text-primary text-balance">
                {title}
            </h1>
        </div>
        <div className={`max-w-7xl mx-auto px-6 mt-4 sm:mt-6`}>
            <p className="max-w-3xl text-lg sm:text-xl text-muted">
                {subtitle}
            </p>
        </div>
        {ribbon && (
            <svg
                aria-hidden="true"
                focusable="false"
                className="page-hero-ribbon block my-3 h-12 lg:h-16 w-full pointer-events-none text-accent"
                viewBox="0 0 1000 180"
                preserveAspectRatio="none"
                fill="none"
            >
                <path
                    d="M -20 100 C 90 100 140 55 225 70 C 295 82 310 130 265 132 C 220 134 235 55 325 65 S 455 120 540 95 C 605 76 625 40 660 54 C 705 73 658 128 700 118 C 790 96 845 76 900 90 S 965 105 1000 86 L 1020 86"
                    stroke="currentColor"
                    strokeWidth="4"
                    vectorEffect="non-scaling-stroke"
                    strokeLinecap="round"
                />
            </svg>
        )}
        {fadeTo && (
            <div aria-hidden="true" className={`h-8 bg-linear-to-b from-transparent ${fadeTo === 'white' ? 'to-white' : 'to-base-100'}`} />
        )}
    </header>
);

export default PageHero;