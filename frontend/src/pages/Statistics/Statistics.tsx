import StatisticsToggle from "./StatisticsToggle";
import Demographics from "./Demographics";
import RecreationBehaviors from "./RecreationBehaviors";
import ThoughtsOnRecreation from "./ThoughtsOnRecreation";
import CommunicationChannels from "./CommunicationChannels";
const Statistics = () => {

    return (
        <div>
            <StatisticsToggle />
            <Demographics />
            <RecreationBehaviors />
            <ThoughtsOnRecreation />
            <CommunicationChannels />
        </div>
    );
};

export default Statistics;