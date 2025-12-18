import { useLanguage } from "../../context/LanguageContext";
import { useState, useEffect } from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const ActivitySheets: React.FC = () => {
    const { language } = useLanguage();
    const ACTIVITY_SHEET_COUNT = 25;

    const [activeSheet, setActiveSheet] = useState<null | number>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!activeSheet) return;

            if (e.key === 'ArrowLeft' && activeSheet > 1) {
                setActiveSheet(activeSheet - 1);
            } else if (e.key === 'ArrowRight' && activeSheet < ACTIVITY_SHEET_COUNT) {
                setActiveSheet(activeSheet + 1);
            } else if (e.key === 'Escape') {
                setActiveSheet(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeSheet]);

    const displayActivitySheets = () => {
        return Array.from({ length: ACTIVITY_SHEET_COUNT }, (_, i) => i + 1).map(i => (
            <div className="lg:w-1/6 sm:w-1/4 w-5/12 hover:cursor-pointer" onClick={() => { setActiveSheet(i) }} >
                <img
                    key={i}
                    src={`/activity-sheets/cropped_image_${i}.webp`}
                    alt={`${language === 'en' ? 'Activity Sheet' : 'Fiche d\'activité'} ${i}`}
                    className="w-full h-auto rounded-lg border border-gray-300"
                    loading="lazy"
                />
            </div>
        ));
    }

    return (
        <div className="w-full h-full" key={`activity-sheets-${language}`} onClick={() => { if (activeSheet) setActiveSheet(null) }}>
            <div className="mb-6 rounded-xl bg-white border-1 border-gray-200  max-w-7xl p-4 md:p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-primary font-dm-sans text-center my-auto">
                    {language === 'en' ? 'Participant Activity Sheets' : 'Fiches d\'activités des participants'}
                </h2>
            </div>

            <div className="mb-6 rounded-xl bg-white border-1 border-gray-200 max-w-7xl mx-auto p-4 md:p-6">

                <div className="flex flex-row flex-wrap gap-4 w-full justify-center">
                    {displayActivitySheets()}
                </div>
            </div>

            {activeSheet && (
                <div 
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4 animate-fadeIn"
                    onClick={() => setActiveSheet(null)}
                    style={{ backdropFilter: 'blur(10px)' }}
                >
                    {/* Close Button */}
                    <button
                        onClick={() => setActiveSheet(null)}
                        className="absolute top-4 right-4 z-10 lg:w-12 lg:h-12 h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 "
                        aria-label="Close"
                    >
                        <MdClose className="w-8 h-8" />
                    </button>

                    {/* Previous Button */}
                    {activeSheet > 1 && (
                        <button
                            onClick={(e) => { e.stopPropagation(); setActiveSheet(activeSheet - 1); }}
                            className="absolute left-4 z-10 lg:w-12 lg:h-12 h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white  duration-200 hover:scale-110"
                            aria-label="Previous"
                        >
                            <RxCaretLeft className="w-8 h-8" />
                        </button>
                    )}

                    {/* Image Container */}
                    <div 
                        className="relative lg:max-w-2xl w-2/3 max-h-[70vh] animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            key={`active-sheet-${activeSheet}`}
                            src={`/activity-sheets/cropped_image_${activeSheet}.webp`}
                            alt={`${language === 'en' ? 'Activity Sheet' : 'Fiche d\'activité'} ${activeSheet}`}
                            className="w-full h-auto max-h-[70vh] object-contain rounded-2xl "
                            loading="lazy"
                        />
                    </div>

                    {/* Next Button */}
                    {activeSheet < ACTIVITY_SHEET_COUNT && (
                        <button
                            onClick={(e) => { e.stopPropagation(); setActiveSheet(activeSheet + 1); }}
                            className="absolute right-4 z-10 lg:w-12 lg:h-12 h-10 w-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110"
                            aria-label="Next"
                        >
                            <RxCaretRight className="w-8 h-8" />
                        </button>
                    )}

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10  text-white text-sm font-medium">
                        {activeSheet} / {ACTIVITY_SHEET_COUNT}
                    </div>
                </div>
            )}
        </div>
    );
}

export default ActivitySheets;