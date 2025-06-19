import React, { useState } from "react";

type UpdateType = 'timeline' | 'updates';

interface TimelineItem {
    id: string;
    year: string;
    phases: {
        dateRange: string;
        title: string;
        bullets: string[];
    }[];
}

interface UpdateItem {
    id: string;
    title: string;
    description: string;
    date: string;
}

const timelineData: TimelineItem[] = [
    {
        id: "2024",
        year: "2024",
        phases: [
            {
                dateRange: "September to December",
                title: "Preliminary Research",
                bullets: [
                    "Literature and academic study",
                    "Research engagement preparation",
                    "Announce project goals and objectives on the website."
                ]
            }
        ]
    },
    {
        id: "2025",
        year: "2025",
        phases: [
            {
                dateRange: "January to April",
                title: "Project Launch and Community Engagement",
                bullets: [
                    "Host community kickoff events in Burnaby and Courtenay.",
                    "Recruit participants through local networks and partners.",
                    "Distribute community surveys online and in-person."
                ]
            },
            {
                dateRange: "May to July",
                title: "Data Collection – Survey and Interviews",
                bullets: [
                    "Host community kickoff events in Burnaby and Courtenay.",
                    "Recruit participants through local networks and partners.",
                    "Distribute community surveys online and in-person."
                ]
            },
            {
                dateRange: "July to December",
                title: "Preliminary Analysis and Feedback",
                bullets: [
                    "Analyze survey and interview data.",
                    "Share initial findings with the community for input.",
                    "Host small feedback sessions with community members to validate findings."
                ]
            }
        ]
    },
    {
        id: "2026",
        year: "2026",
        phases: [
            {
                dateRange: "January to April",
                title: "EDI Training & Co-Creation Workshops",
                bullets: [
                    "Facilitate workshops with community members and municipal staff to co-create recreation initiatives.",
                    "Apply the BDJJ framework to design inclusive programs.",
                    "Develop and deliver EDI training for municipal staff."
                ]
            },
            {
                dateRange: "May – December",
                title: "Pilot Testing, Refinement, and Evaluation",
                bullets: [
                    "Implement pilot initiatives in selected locations.",
                    "Collect participant feedback on pilot programs.",
                    "Refine initiatives based on community and staff input.",
                    "Evaluate pilot initiatives using community feedback and outcome measures.",
                    "Share evaluation results with the community."
                ]
            }
        ]
    },
    {
        id: "2027",
        year: "2027",
        phases: [
            {
                dateRange: "January to May",
                title: "Final Reporting and Dissemination",
                bullets: [
                    "Publish a final report summarizing key findings, initiatives, and outcomes.",
                    "Host public presentations and open houses to share results.",
                    "Share recommendations with municipal partners and stakeholders.",
                    "Highlight stories of impact on the website."
                ]
            }
        ]
    }
];

const updatesData: UpdateItem[] = [
    {
        id: "update-1",
        title: "Project Website Launch",
        description: "Our project website is now live with comprehensive information about our research goals and methodology.",
        date: "October 2024"
    },
    {
        id: "update-2",
        title: "Partnership Confirmed",
        description: "Formal partnerships established with City of Burnaby and City of Courtenay recreation departments.",
        date: "November 2024"
    },
    {
        id: "update-3",
        title: "Literature Review Complete",
        description: "Completed comprehensive review of existing research on inclusive recreation programming.",
        date: "December 2024"
    }
];

const Updates: React.FC = () => {
    const [activeTab, setActiveTab] = useState<UpdateType>('timeline');

    const tabs = [
        { id: 'timeline' as UpdateType, label: 'PROJECT TIMELINE' },
        { id: 'updates' as UpdateType, label: 'PROJECT UPDATES' }
    ];

    return (
        <div className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-dm-sans">
                        Project Progress
                    </h2>
                </div>

                {/* Tab Navigation */}
                <div className="mb-12">
                    <div className="flex rounded-xl overflow-hidden shadow-sm max-w-2xl mx-auto">
                        {tabs.map((tab, index) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex-1 py-4 px-6 font-medium text-sm transition-all duration-300 ${
                                    activeTab === tab.id
                                        ? 'bg-primary text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                } ${index === 0 ? '' : 'border-l border-gray-300'}`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Timeline Content */}
                {activeTab === 'timeline' && (
                    <div className="relative">
                        {/* Continuous vertical line */}
                        <div className="absolute left-12 top-0 bottom-0 w-1 bg-orange-500"></div>
                        
                        <div className="space-y-0">
                            {timelineData.map((yearData, yearIndex) => (
                                <div key={yearData.id} className="relative">
                                    {/* Year Section */}
                                    <div className="flex items-start mb-6">
                                        {/* Orange circle for year */}
                                        <div className="relative z-10 flex items-center justify-center w-6 h-6 bg-orange-500 rounded-full border-4 border-orange-300 shadow-lg">
                                            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                                        </div>
                                        
                                        {/* Year number */}
                                        <h3 className="text-2xl font-bold text-primary ml-8 mt-0 font-dm-sans" style={{ color: '#1e5055' }}>
                                            {yearData.year}
                                        </h3>
                                    </div>

                                    {/* Phases */}
                                    <div className="ml-20 pb-8">
                                        {yearData.phases.map((phase, phaseIndex) => (
                                            <div key={phaseIndex} className="mb-8">
                                                {/* Date range */}
                                                <div className="mb-2">
                                                    <span className="text-primary font-medium font-dm-sans" style={{ color: '#1e5055' }}>
                                                        {phase.dateRange}
                                                    </span>
                                                </div>
                                                
                                                {/* Phase title */}
                                                <h4 className="text-xl font-semibold text-gray-900 mb-3 font-dm-sans">
                                                    {phase.title}
                                                </h4>
                                                
                                                {/* Bullets */}
                                                <ul className="space-y-2">
                                                    {phase.bullets.map((bullet, bulletIndex) => (
                                                        <li key={bulletIndex} className="flex items-start">
                                                            <span className="text-gray-600 mr-3 mt-1 text-sm">▶</span>
                                                            <span className="text-gray-700 font-dm-sans leading-relaxed">
                                                                {bullet}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Updates Content */}
                {activeTab === 'updates' && (
                    <div className="space-y-6">
                        {updatesData.map((update) => (
                            <div key={update.id} className="bg-gray-50 rounded-lg p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h4 className="text-xl font-semibold text-primary font-dm-sans">
                                        {update.title}
                                    </h4>
                                    <span className="text-sm text-gray-500 font-dm-sans">
                                        {update.date}
                                    </span>
                                </div>
                                <p className="text-gray-700 leading-relaxed font-dm-sans">
                                    {update.description}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Updates;