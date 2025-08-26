import React, { useState } from "react";

interface CityData {
    id: 'burnaby' | 'courtenay';
    title: string;
    image: string;
    paragraphs: string[];
}

const citiesData: CityData[] = [
    {
        id: 'burnaby',
        title: 'City of Burnaby',
        image: '/burnabymap.webp',
        paragraphs: [
            'Burnaby is known as a "hyper diverse" city, with more than 67% of its population identifying as a visible minority.',
            'It is one of 8 cities in Canada without a "majority ethnic group".',
            'Major urban centre, with a total population of 250,000 people, 55% of whom are immigrants and non permanent residents.',
            'Two neighbourhoods in Burnaby in which a focus can be placed due to their diverse demographics and community services available. For the Lougheed area of Burnaby the borders are somewhat vague and could include a couple different neighbourhoods.'
        ]
    },
    {
        id: 'courtenay',
        title: 'City of Courtenay',
        image: '/courtenaymap.webp',
        paragraphs: [
            'Courtenay is a smaller urban center located on Vancouver Island, known for its natural beauty and outdoor recreation opportunities. It\'s a small community.',
            'The city has a growing diverse population and is working to enhance inclusivity in its recreational programming.',
            'Population of approximately 28,000 residents, with increasing immigrant and newcomer communities, made up of 25% immigrants and non-permanent residents.',
            'Focus areas include downtown core and surrounding neighborhoods where community services and recreational facilities are concentrated.'
        ]
    }
];

const CityToggle: React.FC = () => {

    const [activeTab, setActiveTab] = useState<'burnaby' | 'courtenay'>('burnaby');

    const CityComponent = ({ city }: { city: CityData }) => (
        <div className="py-6 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="my-auto">
                    <h2 className="text-2xl font-semibold text-primary mb-4 font-dm-sans">{city.title}</h2>
                    <div className="space-y-4 leading-relaxed">
                        {city.paragraphs.map((paragraph, index) => (
                            <p key={index} className="md:text-lg leading-relaxed font-dm-sans">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center">
                    <img
                        src={city.image}
                        alt={`${city.title} Map`}
                        className="w-full max-w-md h-auto rounded-xl "
                    />
                </div>
            </div>
        </div>
    );

    const currentCity = citiesData.find(city => city.id === activeTab)!;

    return (
        <div className="px-4 py-0">
            <div className="max-w-7xl mx-auto">
                {/* Tab Navigation */}
                <div className=" mb-6 rounded-xl md:py-2 md:px-4 bg-white shadow-sm">
                    <div className="flex space-x-2">
                        {citiesData.map((city) => (
                            <button
                                key={city.id}
                                onClick={() => setActiveTab(city.id)}
                                className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all font-dm-sans duration-300 ${activeTab === city.id
                                    ? 'bg-primary text-white shadow-md transform scale-[1.02] hover:cursor-pointer'
                                    : 'text-gray-500 hover:text-primary hover:bg-white/50 hover:cursor-pointer'
                                    }`}
                            >
                                {city.title}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="transition-all duration-300 ease-in-out">
                    <CityComponent city={currentCity} />
                </div>
            </div>
        </div>
    );
}

export default CityToggle;