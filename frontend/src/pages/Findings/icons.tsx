import React from "react";

const ICON = "size-5 shrink-0 text-data";

export const findingIcons: Record<string, React.ReactNode> = {
    friendsFamily: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6.5" cy="8" r="2.4"/><circle cx="17.5" cy="8" r="2.4"/><circle cx="12" cy="7" r="2.9"/><path d="M2.5 19c0-2.8 1.8-4.8 4.2-4.8M21.5 19c0-2.8-1.8-4.8-4.2-4.8M6.5 20.5c0-3.6 2.5-6.2 5.5-6.2s5.5 2.6 5.5 6.2"/>
        </svg>
    ),
    socialMedia: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <rect x="6.5" y="2.5" width="11" height="19" rx="2.2"/><path d="M10.5 18.5h3M12 13.5s-3-1.8-3-3.6a1.6 1.6 0 0 1 3-.8 1.6 1.6 0 0 1 3 .8c0 1.8-3 3.6-3 3.6z"/>
        </svg>
    ),
    cityWebsite: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <g fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M23.25 19.5v.635a1.62 1.62 0 0 1-1.615 1.615H2.25a1.5 1.5 0 0 1-1.5-1.5v-.75m0-11.25V3.865A1.62 1.62 0 0 1 2.365 2.25h19.278a1.61 1.61 0 0 1 1.607 1.607V8.25m0-1.5H.75m7.5 4.5a3 3 0 0 0 0 6m4.5-6a1.5 1.5 0 0 0-1.5 1.5v3a1.5 1.5 0 1 0 3 0v-3a1.5 1.5 0 0 0-1.5-1.5m9 6v-6L19.5 15l-2.25-3.75v6"/><path d="M2.625 17.25a.375.375 0 0 1 0-.75m0 .75a.375.375 0 0 0 0-.75"/></g>
        </svg>
    ),
    culturalGroups: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M3.5 24v-6.5a2 2 0 0 0-2-2v-8s1.5-1 4-1a9 9 0 0 1 2.251.286M10.501 24v-5.5H7v-.25l.072-.15A25 25 0 0 0 9.5 7.352v-.329a8.6 8.6 0 0 1 3-.523c1.288 0 2.311.266 3 .523v.329a25 25 0 0 0 .116 2.406M20.75 24v-3.426c0-1.146.784-2.074 1.75-2.074v-6.463S21.188 11 19 11s-3.5 1.037-3.5 1.037V18.5c.967 0 1.75.929 1.75 2.074V24M5.35 4.5s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C7.246 3.5 5.65 4.5 5.65 4.5zm7 0s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0c0 1.25-1.596 2.25-1.596 2.25zM18.873 9S17.5 8.125 17.5 7.031c0-.845.672-1.531 1.502-1.531s1.498.686 1.498 1.531C20.5 8.125 19.13 9 19.13 9z"/>
        </svg>
    ),
    enjoyNature: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M3 13V9a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3"/><path d="m10 3.5l1.16-1.16a1.16 1.16 0 0 1 1.686.047l3.947 4.406a.707.707 0 0 1-.5 1.207H15l3.793 3.793a.707.707 0 0 1-.5 1.207H17l3.793 3.793a.707.707 0 0 1-.5 1.207H12m1 0v4M7 11v11"/></g>
        </svg>
    ),
    haveFun: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9"/><path d="M8 14c1 1.5 2.3 2.2 4 2.2s3-.7 4-2.2M9 9.5h.01M15 9.5h.01"/>
        </svg>
    ),
    familyFriends: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path fill="none" stroke="currentColor" strokeWidth="1.5" d="M3.5 24v-6.5a2 2 0 0 0-2-2v-8s1.5-1 4-1a9 9 0 0 1 2.251.286M10.501 24v-5.5H7v-.25l.072-.15A25 25 0 0 0 9.5 7.352v-.329a8.6 8.6 0 0 1 3-.523c1.288 0 2.311.266 3 .523v.329a25 25 0 0 0 .116 2.406M20.75 24v-3.426c0-1.146.784-2.074 1.75-2.074v-6.463S21.188 11 19 11s-3.5 1.037-3.5 1.037V18.5c.967 0 1.75.929 1.75 2.074V24M5.35 4.5s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0C7.246 3.5 5.65 4.5 5.65 4.5zm7 0s-1.6-1-1.6-2.25a1.747 1.747 0 1 1 3.496 0c0 1.25-1.596 2.25-1.596 2.25zM18.873 9S17.5 8.125 17.5 7.031c0-.845.672-1.531 1.502-1.531s1.498.686 1.498 1.531C20.5 8.125 19.13 9 19.13 9z"/>
        </svg>
    ),
    relax: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6.6" cy="5.2" r="2.1"/><path d="M2.5 20.5h19M4.6 20.5 3.2 13M19.4 20.5 18 15.6M5 13h12.4M3.2 13 2.4 9.4a1.2 1.2 0 0 1 .9-1.4l3-.7a1.2 1.2 0 0 1 1.4.9l.8 3.3"/>
        </svg>
    ),
    parks: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round" d="m21.68 13.26l.36 1.97l-19.69 3.54L2 16.8l2.95-.53l-.35-1.97c-.1-.54.26-1.06.81-1.16c.54-.1 1.06.26 1.16.81l.35 1.96l9.84-1.76l-.35-1.97c-.1-.55.26-1.07.81-1.18c.54-.08 1.06.28 1.16.82l.35 1.97zM10.06 18.4L8 22h8l-2.42-4.23z"/>
        </svg>
    ),
    swimming: (
        <svg viewBox="0 0 256 256" aria-hidden="true" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <g stroke="none"><path fill="currentColor" d="M176 104a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-48a16 16 0 1 1-16 16a16 16 0 0 1 16-16m46.16 129.24a8 8 0 0 1-1 11.26c-17.36 14.39-32.86 19.5-47 19.5c-18.58 0-34.82-8.82-49.93-17c-25.35-13.76-47.24-25.65-79.07.74a8 8 0 1 1-10.22-12.31c40.17-33.29 70.32-16.93 96.93-2.49c25.35 13.77 47.24 25.65 79.07-.74a8 8 0 0 1 11.22 1.04M34.89 147.42a8 8 0 1 0 10.22 12.31c31.83-26.38 53.72-14.5 79.07-.74c15.11 8.2 31.35 17 49.93 17c14.14 0 29.64-5.11 47-19.5a8 8 0 1 0-10.22-12.31a75.8 75.8 0 0 1-19.28 12.06l-53.84-53.82A103.34 103.34 0 0 0 64.24 72H40a8 8 0 0 0 0 16h24.24a87.66 87.66 0 0 1 41.88 10.56l-29.63 29.61c-12.67 1.18-26.42 6.67-41.6 19.25m91.57-33.67l46.13 46.12c-14-.43-26.88-7.39-40.77-14.93c-10.75-5.84-22.09-12-34.42-15.05l22.26-22.26a87 87 0 0 1 6.8 6.12"/></g>
        </svg>
    ),
    events: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <g stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round"><path fill="currentColor" d="M2.692 21.5q.61-1.85.809-3.755t.249-3.841q-.975-.298-1.612-1.183Q1.5 11.837 1.5 10.5V9.346q2.76-.912 5.622-2.765T12 2.616q2.016 2.111 4.878 3.965T22.5 9.346V10.5q0 1.337-.638 2.221q-.637.885-1.612 1.183q.05 1.936.249 3.841t.809 3.755zm1.054-12h16.508q-2.335-1.023-4.407-2.435T12 4.008q-1.775 1.644-3.847 3.057Q6.081 8.477 3.746 9.5M14.5 13q.914 0 1.457-.755T16.5 10.5h-4q0 .99.543 1.745T14.5 13m-5 0q.914 0 1.457-.755T11.5 10.5h-4q0 .99.543 1.745T9.5 13m-5 0q.914 0 1.457-.755T6.5 10.5h-4q0 .99.543 1.745T4.5 13m-.504 7.5h3.771q.264-1.692.399-3.37q.134-1.676.19-3.388q-.398-.183-.748-.493T7 12.45q-.356.664-.937 1.065t-1.313.468q-.05 1.655-.194 3.283t-.56 3.234m4.777 0h6.454q-.258-1.625-.39-3.24q-.131-1.616-.187-3.266q-.842.046-1.562-.39q-.72-.435-1.088-1.225q-.367.79-1.093 1.226t-1.557.39q-.056 1.65-.187 3.265q-.132 1.615-.39 3.24m7.46 0h3.77q-.414-1.606-.559-3.234q-.144-1.627-.194-3.283q-.73-.068-1.335-.469q-.603-.4-.915-1.102q-.22.507-.588.827q-.37.32-.768.503q.056 1.712.193 3.389t.396 3.369M19.5 13q.914 0 1.457-.755T21.5 10.5h-4q0 .99.543 1.745T19.5 13"/></g>
        </svg>
    ),
    lackAwareness: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9"/><path d="M9.6 9.4a2.5 2.5 0 1 1 3.4 2.4c-.6.3-1 .9-1 1.6v.4M12 17h.01"/>
        </svg>
    ),
    lackInformation: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 3h8l4 4v14H6zM14 3v4h4M9 12h6M9 16h6"/>
        </svg>
    ),
    language: (
        <svg viewBox="0 0 36 36" aria-hidden="true" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <g stroke="currentColor" strokeWidth="0.25" strokeLinejoin="round"><path fill="currentColor" d="M30 3H14v5h2V5h14c.6 0 1 .4 1 1v11c0 .6-.4 1-1 1H17v7h-5.3L8 27.9V25H5c-.6 0-1-.4-1-1V13c0-.6.4-1 1-1h13v-2H5c-1.7 0-3 1.3-3 3v11c0 1.7 1.3 3 3 3h1v5.1l6.3-5.1H19v-7h11c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3"/><path fill="currentColor" d="M6.2 22.9h2.4l.6-1.6h3.1l.6 1.6h2.4L11.9 14H9.5zm4.5-6.4l1 3.1h-2z"/><path fill="currentColor" d="M20 17c1.1 0 2.6-.3 4-1c1.4.7 3 1 4 1v-2s-1 0-2.1-.4c1.2-1.2 2.1-3 2.1-5.6V8h-3V6h-2v2h-3v2h5.9c-.2 1.8-1 2.9-1.9 3.6c-.6-.5-1.2-1.2-1.6-2.1h-2.1c.4 1.3 1 2.3 1.8 3.1c-1 .4-1.9.4-2.1.4z"/></g>
        </svg>
    ),
    lackTime: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.4 2"/>
        </svg>
    ),
    safety: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3l8 3v6c0 4.5-3.5 7.5-8 9-4.5-1.5-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>
        </svg>
    ),
    cannotSwim: (
        <svg viewBox="0 0 640 640" aria-hidden="true" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path fill="none" stroke="currentColor" strokeWidth="30" strokeLinejoin="round" strokeLinecap="round" d="M264 152c0-30.9 25.1-56 56-56s56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56m-130.1-22.4c16.8-5.6 34.9 3.5 40.5 20.2l10.9 32.8c9.4 28.3 33.2 49.5 62.5 55.6q8.4 1.8 17.1 1.8h88c17.2 0 34.3-2.8 50.6-8.2l114.4-38.1c16.8-5.6 34.9 3.5 40.5 20.2s-3.5 34.9-20.2 40.5l-114.5 38.1c-8.4 2.8-17 5.1-25.7 6.9l-26.5 88.3c-6.1 3.4-12.1 7.3-17.9 11.7c-22.1 16.6-29.1 16.6-51.2 0c-26.2-19.7-56.9-30.2-87.8-31.3l20.2-67.2c-51.5-10.7-93.5-48.1-110.2-98l-10.9-32.8c-5.6-16.8 3.5-34.9 20.2-40.5m269.5 346.5C379.1 494.3 351.1 512 320 512s-59.1-17.7-83.4-35.9c-21.3-16.1-49.9-16.1-71.2 0c-23.8 17.9-54.1 35.5-88.1 35.3c-20.4-.1-40.7-6.7-59.8-21.1c-10.6-8-12.7-23-4.7-33.6s23-12.7 33.6-4.7c11.3 8.5 21.6 11.4 31.2 11.5c17.6.1 37.3-9.4 58.9-25.7c38.4-29 90.5-29 129 0c24 18.1 40.7 26.3 54.5 26.3s30.5-8.2 54.5-26.3c38.4-29 90.5-29 129 0c16.9 12.7 32.9 21.5 47.8 24.6c13.7 2.8 27.4.9 42.3-10.3c10.6-8 25.6-5.9 33.6 4.7s5.9 25.6-4.7 33.6c-26.4 19.9-54.2 24.4-80.7 19.1c-25.3-5.1-48.1-18.9-67.2-33.3c-21.3-16.1-49.9-16.1-71.2 0z"/>
        </svg>
    ),
    swimwear: (
        <svg viewBox="0 0 32 32" aria-hidden="true" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <g stroke="none"><path fill="currentColor" d="M5.205 10.696a5.4 5.4 0 0 1-.197-1.828V2.88a2.9 2.9 0 0 1 2.9-2.9h.19a2.9 2.9 0 0 1 2.9 2.9v1.21h9.022V2.9a2.9 2.9 0 0 1 2.9-2.9h.19a2.9 2.9 0 0 1 2.9 2.9v6.025a5.2 5.2 0 0 1-.2 1.804l-1.716 6.002l2.512 5.433a3.05 3.05 0 0 1-.61 3.427l-.137.138l-7.768 5.243a4.88 4.88 0 0 1-5.69-.019l-7.308-5.232l-.136-.145a3.05 3.05 0 0 1-.5-3.445l2.449-5.398zm18.685-.526c.112-.38.153-.776.12-1.17V2.9a.9.9 0 0 0-.9-.9h-.19a.9.9 0 0 0-.9.9v2.25a.94.94 0 0 1-.276.665a.94.94 0 0 1-.665.275H9.94A.94.94 0 0 1 9 5.15V2.88a.9.9 0 0 0-.9-.9h-.19a.9.9 0 0 0-.9.9v6.06a3.4 3.4 0 0 0 .12 1.21L7.933 13H23.08l-.001.003zm-1.35 4.718a1 1 0 0 0-.035.112H8.495l.282 1h13.446zM22.477 18H8.527l-2.269 5a1.05 1.05 0 0 0 .16 1.21l7.15 5.12a2.88 2.88 0 0 0 3.38 0l7.631-5.15a1.05 1.05 0 0 0 .21-1.18z"/></g>
        </svg>
    ),
    alone: (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={ICON} fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="8.4" cy="6.4" r="2.6"/><path d="M3.9 20.5v-4.6a4.5 4.5 0 0 1 9 0v4.6"/><g strokeDasharray="2.2 2.2" opacity=".55"><circle cx="17.6" cy="7.4" r="2.1"/><path d="M14 20.5v-3.7a3.6 3.6 0 0 1 7.2 0v3.7"/></g>
        </svg>
    ),
};
