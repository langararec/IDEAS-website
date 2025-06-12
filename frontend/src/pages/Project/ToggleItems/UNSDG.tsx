import React from "react";

type UNSDGItem = {
    title:string;
    description: string;
    image: string;
}

const unsdgItems: UNSDGItem[] = [
    {
        title: "Good Health & Well-being",
        description: "By enhancing access to recreation services, the project supports physical activity and social engagement, which are vital for physical and mental health.",
        image: "/SDG3.webp"
    },
    {
        title: "Quality Education",
        description: "The project's educational components, such as EDI training for staff and community workshops, foster understanding and appreciation of cultural diversity and inclusion.",
        image: "/SDG4.webp"
    },
    {
        title: "Reduced Inequalities",
        description: "The project aims to reduce inequalities by ensuring that public recreation services are accessible and welcoming to immigrant and racialized communities.",
        image: "/SDG10.webp"
    },
    {
        title: "Sustainable Cities and Communities",
        description: "By enhancing access to recreation services, the project supports physical activity and social engagement, which are vital for physical and mental health.",
        image: "/SDG11.webp"
    },
    {
        title: "Peace, Justice and Strong Institutions",
        description: "The project's community-based participatory research approach ensures that marginalized voices are included in decision-making processes related to public recreation services.",
        image: "/SDG16.webp"
    },
    {
        title: "Partnerships for the Goals",
        description: "The project fosters partnerships among municipal recreation departments, community organizations, and immigrant communities to collaboratively enhance recreation services.",
        image: "/SDG17.webp"
    }
];

const UNSDG: React.FC = () => {

    return (
        <div>
            <p className="my-4 md:text-lg leading-relaxed font-dm-sans">The project aligns with several United Nations Sustainable Development Goals (SDGs) by promoting inclusive and equitable public recreation services for immigrant and racialized communities in British Columbia.</p>
            <p className="my-4 md:text-lg leading-relaxed font-dm-sans">Here's how the project's objectives correspond with specific SDGs:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
                {unsdgItems.map((item, index) => (
                    <div key={index} className=" py-6 flex flex-col">
                        <img src={item.image} alt={item.title} className="w-1/2 h-auto mb-4 rounded-lg" />
                        <h3 className="text-xl font-semibold text-primary mb-2 font-dm-sans">{item.title}</h3>
                        <p className="md:text-lg leading-relaxed font-dm-sans">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UNSDG;