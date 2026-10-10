import React, { useEffect, useRef, useState } from "react";
import type { FindingsContentType } from "../../content/FindingsContent";
import { posterBytes, posterLanguages, type City } from "../../content/Findings/data";
import { localeFor, type Language } from "./items";
import Reveal from "./Reveal";
import Section from "./Section";

type DownloadSectionProps = {
    city: City;
    content: FindingsContentType;
    language: Language;
};

const THUMB_WIDTH = 900;
const THUMB_HEIGHT = 1165;

const DownloadSection: React.FC<DownloadSectionProps> = ({ city, content, language }) => {
    const [selected, setSelected] = useState(0);
    const dialog = useRef<HTMLDialogElement>(null);
    const labels = content.download;
    const poster = posterLanguages[selected];
    const thumb = `/posters/findings-${city}-${poster.file}.avif`;
    const thumbAlt = labels.thumbAlt.replace("{language}", labels.languages[poster.id]);

    const megabytes = new Intl.NumberFormat(localeFor(language), {
        style: "unit",
        unit: "megabyte",
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    });

    useEffect(() => {
        const element = dialog.current;
        if (!element || "closedBy" in HTMLDialogElement.prototype) return;

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
        return () => element.removeEventListener("click", lightDismiss);
    }, []);

    return (
        <Section
            tone="tint"
            title={content.sections.download}
            intro={<p className="max-w-[70ch] leading-relaxed text-body md:text-lg">{labels.intro}</p>}
        >
            <Reveal delay={1} className="grid items-start gap-6 md:grid-cols-[auto_1fr] md:gap-12">
                <button
                    type="button"
                    onClick={() => dialog.current?.showModal()}
                    className="group grid cursor-pointer justify-items-start justify-self-start gap-2 pt-3 text-left"
                >
                    <img
                        src={thumb}
                        alt={thumbAlt}
                        width={THUMB_WIDTH}
                        height={THUMB_HEIGHT}
                        loading="lazy"
                        decoding="async"
                        className="w-48 rounded-xs shadow-poster transition-transform duration-300 group-hover:-translate-y-1 motion-reduce:transition-none md:w-60 lg:w-72"
                    />
                    <span className="text-sm font-semibold text-primary underline-offset-2 group-hover:underline">
                        {labels.viewLarger}
                    </span>
                </button>

                <ul className="grid max-w-160">
                    {posterLanguages.map((entry, index) => (
                        <li
                            key={entry.id}
                            className={`flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-t border-rule py-3 pr-2 transition-[background-color,padding] duration-200 last:border-b motion-reduce:transition-none ${index === selected ? "bg-white pl-3.5 shadow-[inset_2px_0_0_var(--color-accent)]" : "hover:bg-white hover:pl-2.5"}`}
                        >
                            <button
                                type="button"
                                onClick={() => setSelected(index)}
                                aria-pressed={index === selected}
                                className={`cursor-pointer text-left text-xl font-semibold transition-colors duration-200 ${index === selected ? "text-primary" : "text-ink hover:text-primary"}`}
                            >
                                <span lang={entry.hreflang} dir={"rtl" in entry ? "rtl" : undefined}>
                                    {entry.native}
                                </span>{" "}
                                <span className="ml-1 text-sm font-normal text-muted">{labels.languages[entry.id]}</span>
                            </button>
                            <a
                                href={`/posters/findings-${city}-${entry.file}.pdf`}
                                download
                                type="application/pdf"
                                hrefLang={entry.hreflang}
                                className="text-sm font-semibold text-primary underline-offset-2 hover:underline"
                            >
                                {labels.action}{" "}
                                <span className="ml-1 font-normal whitespace-nowrap text-muted">
                                    {labels.format}, {megabytes.format(posterBytes[city][entry.id] / 1_000_000)}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </Reveal>

            <dialog
                ref={dialog}
                closedby="any"
                aria-label={`${labels.preview} — ${labels.languages[poster.id]}`}
                className="m-auto max-h-[92dvh] max-w-[min(92vw,56rem)] rounded-lg bg-white p-4 backdrop:bg-black/60"
            >
                <div className="grid gap-3">
                    <img
                        src={thumb}
                        alt={thumbAlt}
                        width={THUMB_WIDTH}
                        height={THUMB_HEIGHT}
                        loading="lazy"
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
            </dialog>
        </Section>
    );
};

export default DownloadSection;
