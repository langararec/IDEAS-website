import React from "react";

export interface Objective {
    id: string;
    title: string;
    description: string;
    icon: React.FC;
    colorClass: string;
}

// Your custom SVG components
const LightBulb = () => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1V2M2 11H1M4.5 4.5L3.8999 3.8999M17.5 4.5L18.1002 3.8999M21 11H20M9 12.5H13M11 12.5V17.5M14.5 15.874C16.0141 14.7848 17 13.0075 17 11C17 7.68629 14.3137 5 11 5C7.68629 5 5 7.68629 5 11C5 13.0075 5.98593 14.7848 7.5 15.874V17.8C7.5 18.9201 7.5 19.4802 7.71799 19.908C7.90973 20.2843 8.21569 20.5903 8.59202 20.782C9.01984 21 9.57989 21 10.7 21H11.3C12.4201 21 12.9802 21 13.408 20.782C13.7843 20.5903 14.0903 20.2843 14.282 19.908C14.5 19.4802 14.5 18.9201 14.5 17.8V15.874Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

const Hand = () => {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 19.0801H7.61029C7.95063 19.0801 8.28888 19.1208 8.61881 19.2021L11.3769 19.8748C11.9753 20.0211 12.5988 20.0353 13.2035 19.9174L16.253 19.322C17.0585 19.1645 17.7996 18.7773 18.3803 18.2103L20.5379 16.1038C21.154 15.5032 21.154 14.5287 20.5379 13.9271C19.9832 13.3855 19.1047 13.3245 18.4771 13.7838L15.9626 15.6251C15.6025 15.8893 15.1643 16.0316 14.7137 16.0316H12.2855L13.8311 16.0315C14.7022 16.0315 15.4079 15.3426 15.4079 14.492V14.1842C15.4079 13.4779 14.9156 12.8621 14.2141 12.6914L11.8286 12.1091C11.4404 12.0146 11.0428 11.9669 10.6431 11.9669C9.67833 11.9669 7.93189 12.7686 7.93189 12.7686L5 13.9992M1 13.5728L1 19.3941C1 19.9562 1 20.2373 1.10899 20.452C1.20487 20.6408 1.35785 20.7944 1.54601 20.8906C1.75992 21 2.03995 21 2.6 21H3.4C3.96005 21 4.24008 21 4.45399 20.8906C4.64215 20.7944 4.79513 20.6408 4.89101 20.452C5 20.2373 5 19.9562 5 19.3941V13.5728C5 13.0106 5 12.7296 4.89101 12.5149C4.79513 12.326 4.64215 12.1725 4.45399 12.0763C4.24008 11.9669 3.96005 11.9669 3.4 11.9669H2.6C2.03995 11.9669 1.75992 11.9669 1.54601 12.0763C1.35785 12.1725 1.20487 12.326 1.10899 12.5149C1 12.7296 1 13.0106 1 13.5728ZM16.1914 2.5245C15.5946 1.27104 14.2186 0.606996 12.8804 1.24794C11.5423 1.88887 10.9722 3.40887 11.5325 4.74321C11.8787 5.56786 12.8707 7.16928 13.5781 8.27236C13.8394 8.67993 13.9701 8.88372 14.161 9.00293C14.3247 9.10519 14.5297 9.16031 14.7224 9.15391C14.9471 9.14645 15.1618 9.03555 15.5912 8.81374C16.7532 8.21342 18.4101 7.3244 19.1208 6.78399C20.2707 5.90958 20.5556 4.30234 19.6947 3.08052C18.8338 1.85871 17.3327 1.73848 16.1914 2.5245Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

const CheckMark = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_1167_472)">
                <path d="M18.3332 9.23794V10.0046C18.3321 11.8016 17.7503 13.5502 16.6743 14.9895C15.5983 16.4288 14.0859 17.4817 12.3626 17.9912C10.6394 18.5007 8.79755 18.4395 7.1119 17.8168C5.42624 17.194 3.98705 16.043 3.00897 14.5355C2.03089 13.028 1.56633 11.2447 1.68457 9.45154C1.80281 7.65841 2.49751 5.95155 3.66507 4.5855C4.83263 3.21946 6.41049 2.26743 8.16333 1.8714C9.91617 1.47537 11.7501 1.65655 13.3915 2.38794M18.3332 3.33317L9.99984 11.6748L7.49984 9.17484" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_1167_472">
                    <rect width="20" height="20" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

const Collaborate = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.3332 15L15.8332 12.5M15.8332 12.5L18.3332 15M15.8332 12.5V17.5M12.9165 2.7423C14.1381 3.23679 14.9998 4.43443 14.9998 5.83333C14.9998 7.23224 14.1381 8.42988 12.9165 8.92437M9.99984 12.5H6.6665C5.11337 12.5 4.3368 12.5 3.72423 12.7537C2.90747 13.092 2.25855 13.741 1.92024 14.5577C1.6665 15.1703 1.6665 15.9469 1.6665 17.5M11.2498 5.83333C11.2498 7.67428 9.75745 9.16667 7.9165 9.16667C6.07555 9.16667 4.58317 7.67428 4.58317 5.83333C4.58317 3.99238 6.07555 2.5 7.9165 2.5C9.75745 2.5 11.2498 3.99238 11.2498 5.83333Z" stroke="#023F47" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
}

export const objectivesData: Objective[] = [
    {
        id: "understand-perspectives",
        title: "Understand Perspectives",
        description: "Identify how immigrant and racialized communities experience recreation differently from native-born public recreation staff and how service context shapes design and delivery.",
        icon: LightBulb,
        colorClass: "primary"
    },
    {
        id: "co-creation-initiatives",
        title: "Co-creation Initiatives",
        description: "Develop a process for equity-deserving groups to collaborate with municipal recreation staff in creating initiatives that enhance access to public recreation.",
        icon: Hand,
        colorClass: "primary"
    },
    {
        id: "promote-engagement",
        title: "Promote Engagement",
        description: "Explore how Belonging, Dignity, Justice, and Joy (Davis, 2021) as guiding principles can be an alternative framework for fostering Inclusion, Equity, Diversity, and Access (IDEA) in public recreation.",
        icon: Collaborate,
        colorClass: "primary"
    },
    {
        id: "enhance-access",
        title: "Enhance Access",
        description: "Improve the lives of communities by uncovering gaps in services, identifying barriers, designing training and toolkits to help public recreation staff collaborate and co-create with their communities.",
        icon: CheckMark,
        colorClass: "primary"
    }
];

const Objectives: React.FC = () => {
    return (
        <div className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 font-dm-sans">
                    Our Objectives
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {objectivesData.map((objective: Objective) => {
                        const IconComponent = objective.icon;
                        return (
                            <div key={objective.id} className="p-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`text-${objective.colorClass} bg-base-200 p-3 rounded-lg flex-shrink-0 [&>svg]:size-7`}>
                                        <IconComponent />
                                    </div>
                                    <h3 className="text-xl font-semibold text-primary font-dm-sans">
                                        {objective.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed font-dm-sans">
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