export type PartnerInfo = {
    image: string;
    name: string;
    url: string;
    ariaLabel: string;
};

type PartnersSectionProps = {
    title: string;
    supportText: string;
    sshrcAlt: string;
    partners: PartnerInfo[];
};

const PartnersSection = ({ title, supportText, sshrcAlt, partners }: PartnersSectionProps) => (
    <section className="bg-base-100 py-16" aria-labelledby="partners-title">
        <div className="mx-auto max-w-6xl px-4">
            <div className="mb-12 text-center">
                <h2 id="partners-title" className="font-dm-sans text-3xl font-bold text-primary lg:text-4xl">
                    {title}
                </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 lg:gap-12">
                {partners.map(partner => (
                    <div
                        key={partner.name}
                        className="flex w-2/5 items-center justify-center rounded-xl p-3 md:w-1/4 md:p-6 lg:w-1/5"
                    >
                        <a
                            href={partner.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={partner.ariaLabel}
                            className="block rounded focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        >
                            <img
                                src={`/partners/${partner.image}`}
                                alt={partner.name}
                                width={120}
                                height={80}
                                loading="lazy"
                                decoding="async"
                                className="max-h-16 max-w-full object-contain transition-all duration-300 md:max-h-24"
                            />
                        </a>
                    </div>
                ))}
            </div>

            <div className="flex flex-col items-center">
                <p className="my-4 max-w-3xl text-center font-dm-sans text-sm leading-relaxed text-gray-700 lg:text-base">
                    {supportText}
                </p>
                <img
                    src="/SSHRCC.webp"
                    alt={sshrcAlt}
                    width={800}
                    height={200}
                    loading="lazy"
                    className="w-full max-w-2xl"
                />
            </div>
        </div>
    </section>
);

export default PartnersSection;
