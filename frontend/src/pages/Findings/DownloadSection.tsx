import React, { useEffect, useRef, useState } from "react";
import type { FindingsContentType } from "../../content/FindingsContent";
import { posters } from "../../content/Findings/data";
import Reveal from "./Reveal";
import Section from "./Section";

type DownloadSectionProps = {
    content: FindingsContentType;
    language: "en" | "fr";
};

const THUMB_WIDTH = 900;
const THUMB_HEIGHT = 1166;

const DownloadSection: React.FC<DownloadSectionProps> = ({ content, language }) => {
    const [selected, setSelected] = useState(0);
    const [open, setOpen] = useState(false);
    const dialog = useRef<HTMLDialogElement>(null);
    const labels = content.download;
    const poster = posters[selected];

    const megabytes = new Intl.NumberFormat(language === "fr" ? "fr-CA" : "en-CA", {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    });

    const sizeOf = (bytes: number) =>
        `${labels.format}, ${megabytes.format(bytes / 1_000_000)} ${labels.sizeUnit}`;

    const altFor = (name: string) => labels.thumbAlt.replace("{language}", name);

    useEffect(() => {
        const element = dialog.current;
        if (!element) return;
        const sync = () => setOpen(false);
        element.addEventListener("close", sync);

        if ("closedBy" in HTMLDialogElement.prototype) {
            return () => element.removeEventListener("close", sync);
        }

        const lightDismiss = (event: MouseEvent) => {
            if (event.target !== element) return;
            const box = element.getBoundingClientRect();
            const inside =
                box.top <= event.clientY &&
                event.clientY <= box.bottom &&
                box.left <= event.clientX &&
                event.clientX <= box.right;
            if (!inside) element.close();
        };
        element.addEventListener("click", lightDismiss);

        return () => {
            element.removeEventListener("close", sync);
            element.removeEventListener("click", lightDismiss);
        };
    }, []);

    const show = () => {
        setOpen(true);
        dialog.current?.showModal();
    };

    return (
        <Section>
            <div className="grid gap-9">
                <Reveal className="grid gap-3.5">
                    <h2 className="text-[clamp(1.65rem,2.9vw,2.3rem)] font-semibold leading-[1.12] tracking-[-0.012em] text-pretty text-primary">
                        {content.sections.download}
                    </h2>
                    <p className="max-w-[70ch] text-[1.02rem] leading-[1.75] text-body">{labels.intro}</p>
                </Reveal>

                <Reveal
                    delay={1}
                    className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-[clamp(1.5rem,4vw,3.5rem)] max-[760px]:grid-cols-[minmax(0,1fr)] max-[760px]:gap-6"
                >
                    <button
                        type="button"
                        onClick={show}
                        className="group grid cursor-pointer gap-2 pt-3 text-left"
                    >
                        <img
                            src={`/posters/findings-burnaby-${poster.file}.avif`}
                            alt={altFor(labels.languages[poster.id])}
                            width={THUMB_WIDTH}
                            height={THUMB_HEIGHT}
                            loading="lazy"
                            decoding="async"
                            className="w-[clamp(12rem,22vw,20rem)] rounded-sm shadow-[0_1px_2px_rgba(20,35,31,0.08),0_18px_40px_-18px_rgba(20,35,31,0.28)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_1px_2px_rgba(20,35,31,0.08),0_26px_50px_-18px_rgba(20,35,31,0.36)] motion-reduce:transition-none"
                        />
                        <span className="text-[0.82rem] font-semibold text-primary underline-offset-2 group-hover:underline">
                            {labels.viewLarger}
                        </span>
                    </button>

                    <ul className="grid">
                        {posters.map((entry, index) => (
                            <li
                                key={entry.id}
                                className={`flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-rule py-3 pr-2 transition-[background-color,padding,box-shadow] duration-200 motion-reduce:transition-none ${index === selected ? "bg-white pl-3.5 shadow-[inset_3px_0_0_var(--color-accent)]" : "hover:bg-white hover:pl-2.5"} ${index === posters.length - 1 ? "border-b" : ""}`}
                            >
                                <button
                                    type="button"
                                    onClick={() => setSelected(index)}
                                    aria-pressed={index === selected}
                                    className={`cursor-pointer text-left text-[1.2rem] font-semibold transition-colors duration-200 ${index === selected ? "text-primary" : "text-ink hover:text-primary"}`}
                                >
                                    <span lang={entry.hreflang} dir={"rtl" in entry ? "rtl" : undefined}>
                                        {entry.native}
                                    </span>
                                    <span className="ml-2 text-[0.88rem] font-normal text-muted">
                                        {labels.languages[entry.id]}
                                    </span>
                                </button>
                                <a
                                    href={`/posters/findings-burnaby-${entry.file}.pdf`}
                                    download
                                    type="application/pdf"
                                    hrefLang={entry.hreflang}
                                    className="text-[0.82rem] font-semibold text-primary underline-offset-2 hover:underline"
                                >
                                    {labels.action}
                                    <span className="ml-2 font-normal text-muted">{sizeOf(entry.bytes)}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </Reveal>
            </div>

            <dialog
                ref={dialog}
                closedby="any"
                aria-label={`${labels.preview} — ${labels.languages[poster.id]}`}
                className="m-auto max-h-[92dvh] max-w-[min(92vw,56rem)] rounded-lg bg-white p-4 backdrop:bg-black/60"
            >
                {open ? (
                    <div className="grid gap-3">
                        <img
                            src={`/posters/findings-burnaby-${poster.file}.avif`}
                            alt={altFor(labels.languages[poster.id])}
                            width={THUMB_WIDTH}
                            height={THUMB_HEIGHT}
                            decoding="async"
                            className="h-auto max-h-[78dvh] w-auto justify-self-center"
                        />
                        <button
                            type="button"
                            onClick={() => dialog.current?.close()}
                            className="w-fit cursor-pointer justify-self-end rounded-lg border border-rule px-4 py-1.5 text-sm font-semibold text-primary transition-colors duration-200 hover:bg-base-100"
                        >
                            {labels.close}
                        </button>
                    </div>
                ) : null}
            </dialog>
        </Section>
    );
};

export default DownloadSection;
