import { IoLocation, IoMail } from 'react-icons/io5';
import { Link } from 'react-router-dom';

const InnovateFooter = () => (
    <footer className="border-t border-rule bg-base-100">
        <div className="mx-auto max-w-7xl px-6 py-10">
            <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                <div className="space-y-4">
                    <img src="/logo_rec.svg" alt="Innovate Recreation" className="h-10" />
                    <div className="flex items-start gap-2 text-gray-600">
                        <IoLocation aria-hidden="true" className="mt-1 flex-shrink-0" />
                        <span className="font-dm-sans">100 W 49th Ave, Vancouver, BC V5X 3B3</span>
                    </div>
                </div>
                <div className="grid gap-8 sm:grid-cols-2">
                    <div>
                        <h2 className="font-dm-sans text-lg font-bold text-primary">Projects</h2>
                        <div className="mt-4 space-y-3 font-dm-sans">
                            <Link to="/ideas" className="block text-gray-600 transition-colors hover:text-primary">
                                IDEAs in Public Recreation
                            </Link>
                            <Link to="/reaching-out-welcoming-in" className="block text-gray-600 transition-colors hover:text-primary">
                                Reaching Out Welcoming In
                            </Link>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-dm-sans text-lg font-bold text-primary">Contact</h2>
                        <div className="mt-4 space-y-3 font-dm-sans">
                            <a href="mailto:idearesearch@langara.ca" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-primary">
                                <IoMail aria-hidden="true" className="shrink-0" />
                                idearesearch@langara.ca
                            </a>
                            <a href="mailto:rowiresearch@langara.ca" className="flex items-center gap-2 text-gray-600 transition-colors hover:text-primary">
                                <IoMail aria-hidden="true" className="shrink-0" />
                                rowiresearch@langara.ca
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-10 border-t border-gray-200 pt-6 text-center font-dm-sans text-sm text-gray-600">
                &copy; {new Date().getFullYear()} Innovate Recreation. All rights reserved.
            </div>
        </div>
    </footer>
);

export default InnovateFooter;
