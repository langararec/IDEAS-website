import { useState } from 'react';
import { Link } from 'react-router-dom';

type NavLinkListProps = {
    links: readonly { path: string; text: string }[];
    onNavigate?: () => void;
    className?: string;
};

const NavLinkList = ({ links, onNavigate, className = '' }: NavLinkListProps) => {
    const [highlight, setHighlight] = useState({ top: 0, height: 0, visible: false });

    const moveHighlight = (element: HTMLElement) => {
        setHighlight({ top: element.offsetTop, height: element.offsetHeight, visible: true });
    };

    const hideHighlight = () => {
        setHighlight(previous => ({ ...previous, visible: false }));
    };

    return (
        <div
            className={`navbar-link-list relative flex flex-col gap-2 ${className}`}
            onPointerLeave={event => {
                if (!event.currentTarget.querySelector(':focus-visible')) hideHighlight();
            }}
            onBlur={event => {
                if (!event.currentTarget.contains(event.relatedTarget)) hideHighlight();
            }}
        >
            <span
                aria-hidden="true"
                className="navbar-link-highlight"
                style={{
                    transform: `translateY(${highlight.top}px)`,
                    height: highlight.height,
                    opacity: highlight.visible ? 1 : 0,
                }}
            />
            {links.map((link, index) => (
                <Link
                    key={`${link.path}-${index}`}
                    to={link.path}
                    onClick={onNavigate}
                    onPointerEnter={event => moveHighlight(event.currentTarget)}
                    onFocus={event => moveHighlight(event.currentTarget)}
                    className="navbar-list-link relative z-10 block rounded-lg px-3 py-1.5 text-gray-700 text-lg font-medium font-dm-sans"
                >
                    {link.text}
                </Link>
            ))}
        </div>
    );
};

export default NavLinkList;