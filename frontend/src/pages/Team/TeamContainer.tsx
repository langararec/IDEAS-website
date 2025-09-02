import type { MemberInfo } from "./TeamCard";
import { TeamCard } from "./TeamCard";
export const TeamContainer = ({ members }: { members: MemberInfo[] }) => {

    return (
        <div className="flex flex-col sm:flex-row justify-center gap-8 sm:flex-wrap ">
            {members.map((member, index) => (
                <div className="xl:w-1/5 lg:w-1/4 sm:w-5/12 w-full ">
                    <TeamCard key={index} {...member} />
                </div>
            ))}
        </div>
    );

}