import React from "react";

interface Outcome {
    id: string;
    title: string;
    description: string;
    image: string;
}

const outcomesData: Outcome[] = [
    {
        id: "comprehensive-insights",
        title: "Comprehensive Insights",
        description: "Understand immigrant and racialized communities' recreation needs, identify access initiatives, and address barriers through systemic change.",
        image: "/CollaborativeIntegration.webp"
    },
    {
        id: "social-integration",
        title: "Social Integration",
        description: "Create pathways to strengthen societal integration and boost civic engagement within immigrant and racialized communities.",
        image: "/SocialIntegration.webp"
    },
    {
        id: "collaborative-processes",
        title: "Collaborative Processes",
        description: "Build impactful partnerships between municipal recreation staff and immigrant and racialized communities to co-create accessible programs.",
        image: "/CollaborativeProcess.webp"
    },
    {
        id: "research-artifacts",
        title: "Research Artifacts",
        description: "Produce exemplary initiatives that can be adapted and implemented in other Canadian communities to improve access for equity-deserving groups.",
        image: "/ResearchArtifacts.webp"
    },
    {
        id: "intersectional-data",
        title: "Intersectional Data",
        description: "Capture data on the intersectional identities within immigrant and racialized communities to inform future research and support for other equity-deserving groups.",
        image: "/IntersectionalData.webp"
    },
    {
        id: "positive-community-impact",
        title: "Positive Community Impact",
        description: "Ensure co-created initiatives benefit target populations and intersecting communities, including those with disabilities and diverse gender identities.",
        image: "/PositiveCommunityImpact.webp"
    }
];

const Outcomes: React.FC = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap gap-8 justify-center py-6">
                    {outcomesData.map((outcome) => (
                        <div
                            key={outcome.id}
                            className="overflow-hidden flex-1 min-w-80 max-w-96 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="aspect-w-16 aspect-h-10 rounded-lg">
                                <img
                                    src={outcome.image}
                                    alt={outcome.title}
                                    className="w-full h-60 object-cover rounded-lg "
                                />
                            </div>
                            
                            <div className="py-4">
                                <h3 className="text-xl font-semibold text-primary mb-3 font-dm-sans">
                                    {outcome.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed font-dm-sans">
                                    {outcome.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Outcomes;