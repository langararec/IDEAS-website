import { useEffect, useRef } from 'react';
import { LuCheck, LuChevronDown, LuHouse } from 'react-icons/lu';
import { Link, useLocation } from 'react-router-dom';
import { getResearchProject, researchProjects } from '../content/ResearchHubContent';

const ProjectSwitcher = ({ dark = false, compact = false }: { dark?: boolean; compact?: boolean }) => {
    const { pathname } = useLocation();
    const disclosure = useRef<HTMLDetailsElement>(null);
    const project = getResearchProject(pathname);
    const name = project?.name ?? 'Innovate Recreation';

    useEffect(() => {
        if (disclosure.current) disclosure.current.open = false;
    }, [pathname]);

    useEffect(() => {
        const closeOutside = (event: PointerEvent) => {
            if (event.target instanceof Node && !disclosure.current?.contains(event.target) && disclosure.current) {
                disclosure.current.open = false;
            }
        };
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape' && disclosure.current?.open) {
                disclosure.current.open = false;
                disclosure.current.querySelector<HTMLElement>('summary')?.focus();
            }
        };
        document.addEventListener('pointerdown', closeOutside);
        document.addEventListener('keydown', closeOnEscape);
        return () => {
            document.removeEventListener('pointerdown', closeOutside);
            document.removeEventListener('keydown', closeOnEscape);
        };
    }, []);

    const close = () => {
        if (disclosure.current) disclosure.current.open = false;
    };

    return (
        <details
            ref={disclosure}
            id="research-projects"
            lang="en"
            className="group relative min-w-0"
        >
            <summary
                aria-label={`Choose a research website. Current website: ${name}`}
                title={name}
                className={`flex min-h-10 cursor-pointer list-none items-center gap-2 rounded-md px-2 py-2 text-sm sm:text-lg font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden ${compact ? '' : ''} ${dark ? 'text-white hover:bg-white/10' : 'text-primary hover:bg-base-150'}`}
            >
                <span className={compact ? 'min-w-0 truncate whitespace-nowrap' : 'min-w-0 flex-1 truncate whitespace-nowrap'}>{name}</span>
                <LuChevronDown aria-hidden="true" className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-open:rotate-180 motion-reduce:transition-none" />
            </summary>
            <nav aria-label="Research websites" className="absolute left-0 top-full z-[60] mt-2 w-max min-w-full max-w-[calc(100vw-2rem)] rounded-lg border border-primary/15 bg-white p-1.5 text-primary shadow-lg animate-fadeIn motion-reduce:animate-none">
                <Link to="/" onClick={close} aria-current={!project ? 'true' : undefined} className="flex items-center gap-2 rounded-md px-3 py-3 text-xs sm:text-sm font-medium transition-colors duration-200 hover:bg-base-200 focus-visible:bg-base-200 focus-visible:outline-2 focus-visible:outline-secondary">
                    <LuHouse aria-hidden="true" className="h-4 w-4 shrink-0" />
                    <span className="min-w-0 flex-1 whitespace-nowrap">Innovate Recreation</span>
                    {!project && <LuCheck aria-hidden="true" className="h-4 w-4 shrink-0" />}
                </Link>
                <div className="my-1 border-t border-rule" />
                {researchProjects.map(entry => {
                    const active = project?.id === entry.id;
                    return (
                        <Link key={entry.id} to={entry.path} onClick={close} aria-current={active ? 'true' : undefined} className={`flex items-center gap-2 rounded-md px-3 py-3 text-xs sm:text-sm font-medium transition-colors duration-200 hover:bg-base-200 focus-visible:bg-base-200 focus-visible:outline-2 focus-visible:outline-secondary ${active ? 'bg-base-150' : ''}`}>
                            <span aria-hidden="true" className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: entry.color }} />
                            <span className="min-w-0 flex-1 whitespace-nowrap">{entry.name}</span>
                        </Link>
                    );
                })}
            </nav>
        </details>
    );
};

export default ProjectSwitcher;