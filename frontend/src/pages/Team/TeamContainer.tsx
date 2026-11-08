import { useEffect, useId, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { MemberInfo } from "./TeamCard";
import { TeamCard } from "./TeamCard";
import ExtendedMemberDescription from "./ExtendedMemberDescription";

export const TeamContainer = ({ members }: { members: MemberInfo[] }) => {
    const panelId = useId();
    const gridRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement | null>(null);
    const switchTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [displayedIndex, setDisplayedIndex] = useState<number | null>(null);
    const [isSwitching, setIsSwitching] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [origin, setOrigin] = useState(50);
    const [columns, setColumns] = useState(() => window.matchMedia('(min-width: 64rem)').matches ? 4 : 2);

    useEffect(() => () => {
        if (switchTimer.current !== null) clearTimeout(switchTimer.current);
    }, []);

    useEffect(() => {
        const query = window.matchMedia('(min-width: 64rem)');
        const updateColumns = () => setColumns(query.matches ? 4 : 2);
        query.addEventListener('change', updateColumns);
        return () => query.removeEventListener('change', updateColumns);
    }, []);

    useEffect(() => {
        const grid = gridRef.current;
        if (!grid || selectedIndex === null) return;
        const observer = new ResizeObserver(() => {
            const button = grid.querySelector<HTMLButtonElement>('button[aria-expanded="true"]');
            if (!button) return;
            triggerRef.current = button;
            const gridBounds = grid.getBoundingClientRect();
            const cardBounds = button.closest('.team-person')?.getBoundingClientRect() ?? button.getBoundingClientRect();
            if (gridBounds.width > 0) {
                setOrigin(Math.max(4, Math.min(96, (cardBounds.left + cardBounds.width / 2 - gridBounds.left) / gridBounds.width * 100)));
            }
        });
        observer.observe(grid);
        return () => observer.disconnect();
    }, [selectedIndex, columns]);

    const rows = Array.from({ length: Math.ceil(members.length / columns) }, (_, rowIndex) => (
        members.slice(rowIndex * columns, (rowIndex + 1) * columns)
    ));

    const closePanel = () => {
        if (switchTimer.current !== null) {
            clearTimeout(switchTimer.current);
            switchTimer.current = null;
        }
        setIsSwitching(false);
        setIsOpen(false);
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setSelectedIndex(null);
            setDisplayedIndex(null);
        }
        triggerRef.current?.focus({ preventScroll: true });
    };

    const toggleMember = (index: number, button: HTMLButtonElement) => {
        if (switchTimer.current !== null) {
            clearTimeout(switchTimer.current);
            switchTimer.current = null;
        }
        if (selectedIndex === index && isOpen) {
            closePanel();
            return;
        }
        const gridBounds = gridRef.current?.getBoundingClientRect();
        const cardBounds = button.closest('.team-person')?.getBoundingClientRect() ?? button.getBoundingClientRect();
        const nextOrigin = gridBounds && gridBounds.width > 0
            ? Math.max(4, Math.min(96, (cardBounds.left + cardBounds.width / 2 - gridBounds.left) / gridBounds.width * 100))
            : 50;
        const sameRow = selectedIndex !== null && Math.floor(selectedIndex / columns) === Math.floor(index / columns);
        triggerRef.current = button;

        if (isOpen && displayedIndex !== null && displayedIndex !== index && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setIsSwitching(true);
            if (sameRow) {
                setSelectedIndex(index);
                setOrigin(nextOrigin);
            }
            switchTimer.current = setTimeout(() => {
                setSelectedIndex(index);
                setDisplayedIndex(index);
                setOrigin(nextOrigin);
                setIsSwitching(false);
                switchTimer.current = null;
            }, 160);
            return;
        }
        if (gridBounds && gridBounds.width > 0) {
            setOrigin(nextOrigin);
        }
        setSelectedIndex(index);
        setDisplayedIndex(index);
        setIsSwitching(false);
        setIsOpen(true);
    };

    return (
        <div
            ref={gridRef}
            className="space-y-6 sm:space-y-8"
            onKeyDown={event => {
                if (event.key === 'Escape' && isOpen) {
                    event.stopPropagation();
                    closePanel();
                }
            }}
        >
            {rows.map((row, rowIndex) => (
                <div key={rowIndex}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 items-stretch gap-x-4 sm:gap-x-6">
                        {row.map((member, columnIndex) => {
                            const index = rowIndex * columns + columnIndex;
                            return (
                                <TeamCard
                                    key={member.name}
                                    member={member}
                                    isExpanded={selectedIndex === index && isOpen}
                                    panelId={panelId}
                                    onToggle={button => toggleMember(index, button)}
                                />
                            );
                        })}
                    </div>
                    {selectedIndex !== null && Math.floor(selectedIndex / columns) === rowIndex && (
                        <div
                            className={`team-detail-slot mt-4 ${isOpen ? 'is-open' : ''}`}
                            style={{ '--team-panel-origin': `${origin}%` } as CSSProperties}
                            aria-hidden={!isOpen}
                            inert={!isOpen}
                            onTransitionEnd={event => {
                                if (event.target === event.currentTarget && event.propertyName === 'grid-template-rows' && !isOpen) {
                                    setSelectedIndex(null);
                                    setDisplayedIndex(null);
                                }
                            }}
                        >
                            <div className="min-h-0 overflow-hidden">
                                <ExtendedMemberDescription
                                    member={members[displayedIndex ?? selectedIndex]}
                                    onClose={closePanel}
                                    panelId={panelId}
                                    isSwitching={isSwitching}
                                />
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}