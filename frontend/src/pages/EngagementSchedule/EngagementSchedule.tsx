import EngagementEventsCalendar from "./EngagementEventsCalendar";

const engagementEvents = [
    // June events
    {
        month: "June",
        events: [
            {
                date: "03",
                sessions: [
                    {
                        time: "08:00 AM - 12:00 PM",
                        title: "Lobby Engagement",
                        description: "Community Surveys & Activities",
                        location: "Bonsor Recreation Centre",
                        mapUrl: "https://maps.google.com/?q=Bonsor+Recreation+Centre+Burnaby"
                    },
                    {
                        time: "10:00 AM - 02:00 PM",
                        title: "Lobby Engagement",
                        description: "Community Surveys & Activities",
                        location: "Cameron Recreation Centre",
                        mapUrl: "https://maps.google.com/?q=Cameron+Recreation+Centre+Burnaby"
                    }
                ]
            },
            {
                date: "04",
                sessions: [
                    {
                        time: "12:00 PM - 05:00 PM",
                        title: "Lobby Engagement",
                        description: "Community Surveys & Activities",
                        location: "Bonsor Recreation Centre",
                        mapUrl: "https://maps.google.com/?q=Bonsor+Recreation+Centre+Burnaby"
                    },
                    {
                        time: "01:00 PM - 05:00 PM",
                        title: "Lobby Engagement",
                        description: "Community Surveys & Activities",
                        location: "Cameron Recreation Centre",
                        mapUrl: "https://maps.google.com/?q=Cameron+Recreation+Centre+Burnaby"
                    }
                ]
            },
            {
                date: "05",
                sessions: [
                    {
                        time: "11:00 AM - 04:00 PM",
                        title: "Lobby Engagement",
                        description: "Community Surveys & Activities",
                        location: "Edmonds Recreation Centre",
                        mapUrl: "https://maps.google.com/?q=Edmonds+Recreation+Centre+Burnaby"
                    }
                ]
            },
            {
                date: "06",
                sessions: [
                    {
                        time: "06:00 PM - 10:00 PM",
                        title: "Lobby Engagement",
                        description: "Community Surveys & Activities",
                        location: "Edmonds Recreation Centre",
                        mapUrl: "https://maps.google.com/?q=Edmonds+Recreation+Centre+Burnaby"
                    }
                ]
            },
            {
                date: "07",
                sessions: [
                    {
                        time: "10:00 AM - 02:00 PM",
                        title: "Lobby Engagement",
                        description: "Community Surveys & Activities",
                        location: "Bonsor Recreation Centre",
                        mapUrl: "https://maps.google.com/?q=Bonsor+Recreation+Centre+Burnaby"
                    },
                    {
                        time: "10:00 AM - 02:00 PM",
                        title: "Lobby Engagement",
                        description: "Community Surveys & Activities",
                        location: "Edmonds Recreation Centre",
                        mapUrl: "https://maps.google.com/?q=Edmonds+Recreation+Centre+Burnaby"
                    },
                    {
                        time: "12:00 PM - 04:00 PM",
                        title: "Lobby Engagement",
                        description: "Community Surveys & Activities",
                        location: "Cameron Recreation Centre",
                        mapUrl: "https://maps.google.com/?q=Cameron+Recreation+Centre+Burnaby"
                    }
                ]
            },
              {
                date: "08",
                sessions: [
                    {
                        time: "11:00 AM - 03:00 PM",
                        title: "Community Engagement",
                        description: "Community Surveys & Activities",
                        location: "Taylor Park",
                        mapUrl: "https://maps.google.com/?q=Taylor+Park+Burnaby"
                    },
                    {
                        time: "11:00 AM - 03:00 PM",
                        title: "Community Engagement",
                        description: "Community Surveys & Activities",
                        location: "Central Park",
                        mapUrl: "https://maps.google.com/?q=Central+Park+Burnaby"
                    }
                ]
            },
            {
                date: "20",
                sessions: [
                    {
                        time: "01:00 PM - 05:00 PM",
                        title: "Community Engagement",
                        description: "Community Surveys & Activities",
                        location: "Confederation Park",
                        mapUrl: "https://maps.google.com/?q=Confederation+Park+Burnaby"
                    }
                ]
            },
            {
                date: "21",
                sessions: [
                    {
                        time: "11:00 AM - 03:00 PM",
                        title: "Community Engagement",
                        description: "Community Surveys & Activities",
                        location: "Central Park",
                        mapUrl: "https://maps.google.com/?q=Central+Park+Burnaby"
                    },
                    {
                        time: "11:00 AM - 03:00 PM",
                        title: "Community Engagement",
                        description: "Community Surveys & Activities",
                        location: "Edmonds Park",
                        mapUrl: "https://maps.google.com/?q=Edmonds+Park+Burnaby"
                    }
                ]
            },
            {
                date: "22",
                sessions: [
                    {
                        time: "10:00 AM - 03:00 PM",
                        title: "Community Engagement",
                        description: "Community Surveys & Activities",
                        location: "Central Park",
                        mapUrl: "https://maps.google.com/?q=Central+Park+Burnaby"
                    },
                    {
                        time: "10:00 PM - 03:00 PM",
                        title: "Community Engagement",
                        description: "Community Surveys & Activities",
                        location: "Confederation Park",
                        mapUrl: "https://maps.google.com/?q=Confederation+Park+Burnaby"
                    }
                ]
            }
        ]
    },
];

const EngagementSchedule: React.FC = () => {
    return (
        <div>
            <div className="bg-base-100 relative">
                <div className="relative h-92">
                    <div className="absolute inset-0">
                        <img
                            src="/EngagementSchedule.webp"
                            alt="Community engagement activities at recreation centers and parks"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-1 bg-black/10"></div>
                    </div>
                </div>

                <div className="p-6 lg:px-0 max-w-7xl mx-auto relative py-8">
                    <h1 className="text-4xl leading-wide font-bold tracking-wider  font-dm-sans text-primary mb-8">
                        Community Engagement Schedule
                    </h1>

                    <EngagementEventsCalendar engagementEvents={engagementEvents} />
                </div>
            </div>
        </div>
    );
}

export default EngagementSchedule;