import { useForm } from '@formspree/react';

const GetInvolvedForm = () => {
    const [state, handleSubmit] = useForm('getInvolved');

    if (state.succeeded) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-16 text-center">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-green-800 mb-2">Thank you!</h2>
                    <p className="text-green-700">Thank you for your message, we will try to respond as soon as possible!</p>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-4 py-16 lg:py-30 justify-center">
            <div className="flex flex-col lg:flex-row  gap-12 justify-center items-center w-full">
                {/* Form Section */}
                <div className="space-y-4 w-full lg:w-1/3">
                    <form onSubmit={handleSubmit} className="space-y-4 w-full">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="name" className="block text-base font-medium text-gray-700 mb-2">
                                Name
                            </label>
                            <input 
                                id="name" 
                                type="text" 
                                name="name" 
                                required 
                                className="w-full px-3 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                            />
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                                Email
                            </label>
                            <input 
                                id="email" 
                                type="email" 
                                name="email" 
                                required 
                                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors"
                            />
                        </div>

                        {/* Subject Field */}
                        <div>
                            <label htmlFor="subject" className="block text-base font-medium text-gray-700 mb-2">
                                Subject
                            </label>
                            <select 
                                id="subject" 
                                name="subject" 
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors bg-white"
                            >
                                <option value="Workshops">Workshops</option>
                                <option value="Updates">Updates</option>
                                <option value="General Inquiry">General Inquiry</option>
                            </select>
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="message" className="block text-base font-medium text-gray-700 mb-2">
                                Message
                            </label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows={4} 
                                placeholder="Type message here" 
                                required
                                className="w-full px-3 py-2 border bg-white border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-colors resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button 
                            type="submit" 
                            disabled={state.submitting}
                            className="bg-accent hover:cursor-pointer hover:bg-accent/90 text-white font-medium py-2 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide"
                        >
                            {state.submitting ? 'SUBMITTING...' : 'SUBMIT'}
                        </button>
                    </form>
                </div>

                {/* Image Section */}
                <div className="lg:w-1/2">
                    <img
                        src="/holdinghands.webp"
                        alt="Team collaboration - hands coming together"
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

const GetInvolved = () => {
    return (
        <div className="bg-base-100">
            <GetInvolvedForm />
        </div>
    );
}

export default GetInvolved;