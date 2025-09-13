import { useForm } from '@formspree/react';
import { IoChevronDownOutline } from "react-icons/io5";
import { useLanguage } from "../../context/LanguageContext";
import { getInvolvedContent } from "../../content/GetInvolvedContent";
import BentoGrid from '../Gallery/BentoGrid';

const GetInvolvedForm = () => {
    const { language } = useLanguage();
    const content = getInvolvedContent[language];
    const [state, handleSubmit] = useForm('getInvolved');

    if (state.succeeded) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-green-800 mb-2">{content.form.successTitle}</h2>
                    <p className="text-green-700">{content.form.successMessage}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 justify-center">
            <div className="flex flex-col lg:flex-row gap-8 justify-center items-center w-full bg-white p-6 rounded-2xl shadow-md">
                {/* Form Section */}
                <div className="space-y-4 w-full max-w-lg">
                    <form onSubmit={handleSubmit} className="space-y-4 w-full">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-base font-medium text-gray-800 mb-2">
                                {content.form.name.label}
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder={content.form.name.placeholder}
                                required
                                className="w-full px-3 py-3 text-base border-2 bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors placeholder-gray-500"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-base font-medium text-gray-800 mb-2">
                                {content.form.email.label}
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder={content.form.email.placeholder}
                                required
                                className="w-full px-3 py-3 text-base bg-gray-50 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors placeholder-gray-500"
                            />
                        </div>

                        {/* Subject Field */}
                        <div>
                            <label htmlFor="subject" className="block text-base font-medium text-gray-800 mb-2">
                                {content.form.subject.label}
                            </label>
                            <div className="relative">
                                <select
                                    id="subject"
                                    name="subject"
                                    required
                                    className="w-full px-3 py-3 text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary appearance-none bg-gray-50 hover:cursor-pointer pr-10 text-gray-700"
                                >
                                    {content.form.subject.options.map((option: any, index: number) => (
                                        <option key={`${language}-option-${index}`} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-600">
                                    <IoChevronDownOutline className="size-4" />
                                </div>
                            </div>
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-base font-medium text-gray-800 mb-2">
                                {content.form.message.label}
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                placeholder={content.form.message.placeholder}
                                required
                                className="w-full px-3 py-3 text-base border-2 bg-gray-50 border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none placeholder-gray-500"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={state.submitting}
                            className="w-fit bg-orange-500 hover:cursor-pointer hover:bg-orange-600 duration-300 text-white font-bold py-3 px-8 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide text-base"
                        >
                            {state.submitting ? content.form.submitting : content.form.submit}
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

const GetInvolved = () => {
    const { language } = useLanguage();
    const content = getInvolvedContent[language];

    const images = content.images.map((img, index) => ({
        ...(index < 1 ? { colSpan: 4, rowSpan: 1 } : { colSpan: 2, rowSpan: 1 }),
        ...img
    }));
    
    return (
        <div key={`get-involved-${language}`} className="bg-base-100">
            <div className='lg:py-24 py-8 max-w-7xl mx-auto'>
                <h2 className="text-3xl md:text-4xl md:w-3/4 lg:w-full md:mx-auto lg:mx-0 font-bold text-primary mb-6 font-dm-sans text-left px-4">
                    {content.title}
                </h2>
                <div className='flex flex-col lg:flex-row '>
                    <div className='sm:w-3/4 mx-auto lg:w-1/2 px-4 '>
                        <BentoGrid images={images} currentPage={1} setCurrentPage={() => { }} layoutChange={false} rowHeight={`10rem lg:20rem`}/>
                    </div>
                    <div className='my-auto lg:w-1/2'>
                        <GetInvolvedForm />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetInvolved;