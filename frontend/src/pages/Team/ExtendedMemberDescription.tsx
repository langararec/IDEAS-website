import { useEffect, useRef } from "react";
import type { MemberInfo } from "./TeamCard";
import { MdClose } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";
import { useLanguage } from "../../context/LanguageContext";

interface ExtendedMemberDescriptionProps {
    member: MemberInfo;
    onClose: () => void;
    panelId: string;
    isSwitching: boolean;
}

const ExtendedMemberDescription = ({ member, onClose, panelId, isSwitching }: ExtendedMemberDescriptionProps) => {
    const { language } = useLanguage();
    const headingRef = useRef<HTMLHeadingElement>(null);
    const closeLabel = language === 'fr' ? 'Fermer la biographie' : 'Close biography';

    useEffect(() => {
        headingRef.current?.focus({ preventScroll: true });
    }, [member.name]);

    return (
        <section
            id={panelId}
            aria-labelledby={`${panelId}-heading`}
            className="team-bio-panel relative mt-3 mb-1 rounded-xl border border-primary bg-primary p-5 sm:p-8 font-dm-sans"
        >
            <div className={`team-bio-content ${isSwitching ? 'is-switching' : ''}`}>
                <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                        <h3 ref={headingRef} id={`${panelId}-heading`} tabIndex={-1} className="text-xl sm:text-2xl font-semibold text-white outline-none [overflow-wrap:anywhere]">
                            {member.name}
                        </h3>
                        {member.role && <p className="mt-2 text-sm sm:text-base text-white/75">{member.role}</p>}
                        {member.program && (
                            <p className="mt-2 flex items-start gap-2 text-sm sm:text-base text-white/90">
                                <LuGraduationCap className="mt-0.5 h-4 w-4 sm:h-5 sm:w-5 shrink-0" aria-hidden="true" />
                                <span className="min-w-0">
                                    {member.programLink ? (
                                        <a href={member.programLink} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">
                                            {member.program}
                                        </a>
                                    ) : member.program}
                                </span>
                            </p>
                        )}
                    </div>
                    <button type="button" onClick={onClose} aria-label={closeLabel} title={closeLabel} className="team-person-control flex h-7 w-7 sm:h-9 sm:w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white">
                        <MdClose className="h-4 w-4 sm:h-5 sm:w-5" />
                    </button>
                </div>
                <div className="mt-6 max-w-4xl space-y-4 text-sm sm:text-base leading-relaxed text-white/90 [overflow-wrap:anywhere]">
                    {(member.longDescription || member.shortDescription || '').split(/\n\s*\n/).filter(Boolean).map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ExtendedMemberDescription;