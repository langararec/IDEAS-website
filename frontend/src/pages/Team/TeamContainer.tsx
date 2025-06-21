import type { MemberInfo } from "./TeamCard";
import { TeamCard } from "./TeamCard";
export const TeamContainer = ({members}: {members:MemberInfo[]}) => {

    return (
        <div className="flex flex-col sm:flex-row justify-between sm:flex-wrap">
            {members.map((member, index) => (
                <TeamCard key={index} {...member} />
            ))}
        </div>
    );

}