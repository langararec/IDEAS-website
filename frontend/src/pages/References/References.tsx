import { useLanguage } from "../../context/LanguageContext";
import { referencesContent } from "../../content/References";

const References = () => {

    const { language } = useLanguage();
    const content = referencesContent[language];

    return (
        <div className="bg-base-100">
            <div className='max-w-7xl mx-auto py-12 px-4'>
                <h2 className="text-3xl md:text-4xlmd:mx-auto lg:mx-0 font-bold text-primary mb-6 font-dm-sans text-left">
                    {content.title}
                </h2>

                <div className="py-4">
                    {
                        content.references.length > 0 && content.references.map((ref, index) => {
                            return (
                                <div key={"reference" + index} className="mb-4">
                                    <a href={ref.url} target="_blank" rel="noopener noreferrer" className="underline lg:text-lg">{ref.citing}</a>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default References;
