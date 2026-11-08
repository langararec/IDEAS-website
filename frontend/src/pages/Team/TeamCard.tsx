import { FaLinkedin } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { useLanguage } from "../../context/LanguageContext";

export type MemberInfo = {
    name: string;
    role?: string;
    image: string;
    linkedin?: string;
    shortDescription?: string;
    longDescription?: string;
    program?: string;
    programLink?: string;
};

type TeamCardProps = {
    member: MemberInfo;
    isExpanded: boolean;
    panelId: string;
    onToggle: (button: HTMLButtonElement) => void;
};

export const TeamCard = ({ member, isExpanded, panelId, onToggle }: TeamCardProps) => {
    const { language } = useLanguage();
    const toggleLabel = language === 'fr'
        ? `${isExpanded ? 'Fermer' : 'Lire'} la biographie de ${member.name}`
        : `${isExpanded ? 'Close' : 'Read'} ${member.name}'s biography`;

    return (
        <article className="team-person relative min-w-0 cursor-pointer rounded-lg border border-transparent p-2 sm:p-3 font-dm-sans" data-expanded={isExpanded}>
            <div className="team-card-corners" aria-hidden="true">
                <span className="top-left" />
                <span className="top-right" />
                <span className="bottom-left" />
                <span className="bottom-right" />
            </div>
            <img
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                loading="lazy"
                decoding="async"
                className="block aspect-square w-full rounded-lg object-cover object-top"
            />
            <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto] gap-3 px-1 pt-4 pb-2">
                <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold leading-snug text-primary [overflow-wrap:anywhere]">
                        {member.name}
                    </h3>
                    {member.role && (
                        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-muted [overflow-wrap:anywhere]">
                            {member.role}
                        </p>
                    )}
                </div>
                <div className="flex items-start justify-start md:justify-end gap-2">
                    {member.linkedin && (
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} - LinkedIn`}
                            title="LinkedIn"
                            className="team-person-control relative z-10 flex h-6 w-6 md:h-8 md:w-8 shrink-0 items-center justify-center text-[#0A66C2] hover:text-[#004182]"
                        >
                            <FaLinkedin className="h-6 w-6 md:h-8 md:w-8 rounded-[4px]" />
                        </a>
                    )}
                    <button
                        type="button"
                        onClick={event => onToggle(event.currentTarget)}
                        aria-label={toggleLabel}
                        title={toggleLabel}
                        aria-expanded={isExpanded}
                        aria-controls={isExpanded ? panelId : undefined}
                        className="team-person-control flex h-6 w-6 md:h-8 md:w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-primary text-white hover:bg-secondary after:absolute after:inset-0 after:rounded-lg after:content-['']"
                    >
                        <FiPlus className={`h-3.5 w-3.5 md:h-5 md:w-5 transition-transform duration-200 motion-reduce:transition-none ${isExpanded ? 'rotate-45' : ''}`} />
                    </button>
                </div>
            </div>
        </article>
    );
};