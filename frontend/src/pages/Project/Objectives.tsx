import React from "react";
import { HiLightBulb, HiUsers, HiUserGroup, HiCheckCircle } from "react-icons/hi";
import { FaHandHoldingHeart } from "react-icons/fa";


export interface Objective {
    id: string;
    title: string;
    description: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    colorClass: string;
}

export const objectivesData: Objective[] = [
    {
        id: "understand-perspectives",
        title: "Understand Perspectives",
        description: "Identify how immigrant and racialized communities experience recreation differently from native-born public recreation staff and how service context shapes design and delivery.",
        icon: HiLightBulb,
        colorClass: "primary"
    },
    {
        id: "co-creation-initiatives",
        title: "Co-creation Initiatives",
        description: "Develop a process for equity-deserving groups to collaborate with municipal recreation staff in creating initiatives that enhance access to public recreation.",
        icon: FaHandHoldingHeart,
        colorClass: "primary"
    },
    {
        id: "promote-engagement",
        title: "Promote Engagement",
        description: "Explore how Belonging, Dignity, Justice, and Joy (Davis, 2021) as guiding principles can be an alternative framework for fostering Inclusion, Equity, Diversity, and Access (IDEA) in public recreation.",
        icon: HiUserGroup,
        colorClass: "primary"
    },
    {
        id: "enhance-access",
        title: "Enhance Access",
        description: "Improve the lives of communities by uncovering gaps in services, identifying barriers, designing training and toolkits to help public recreation staff collaborate and co-create with their communities.",
        icon: HiCheckCircle,
        colorClass: "primary"
    }
];

const Objectives: React.FC = () => {
    return (
        <div className="py-8 px-4">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-3xl md:text-4xl font-bold text-primary my-4 font-dm-sans px-8">
                    Our Objectives
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {objectivesData.map((objective: Objective) => {
                        const IconComponent = objective.icon;
                        return (
                            <div key={objective.id} className=" p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`text-${objective.colorClass} bg-base-200 p-3 rounded-lg flex-shrink-0`}>
                                        <IconComponent className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-lg md:text-2xl font-semibold text-primary font-dm-sans">
                                        {objective.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600s md:text-lg leading-relaxed font-dm-sans">
                                    {objective.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Objectives;