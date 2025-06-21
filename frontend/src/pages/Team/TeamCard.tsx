import { FaLinkedin } from "react-icons/fa";

export type MemberInfo = {
    name: string;
    role?: string;
    image: string;
    shortDescription: string;
    longDescription: string;
    linkedin?: string;
    program?: string;
    programLink?: string;
}

export const TeamCard = (info: MemberInfo) => {
    return (
        <div className="flex flex-col lg:flex-row gap-6 py-6 pr-4 rounded-lg w-full sm:w-1/2   ">
            {/* Profile Image */}
            <div className="flex-shrink-0">
                <img
                    src={info.image}
                    alt={info.name}
                    className="w-10/12 mx-auto lg:w-56 lg:h-56 object-cover rounded-lg"
                />
            </div>

            {/* Content */}
            <div className="flex-1 my-auto mx-auto">
                {/* Name and LinkedIn */}
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                    <h2 className="text-xl font-bold text-primary font-dm-sans  ">
                        {info.name}
                    </h2>
                    {info.linkedin && (
                        <a
                            href={info.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-700 transition-colors"
                        >
                            <FaLinkedin size={28} />
                        </a>
                    )}
                </div>

                {/* Role */}
                <h3 className=" text-primary font-medium mb-2 font-dm-sans text-center lg:text-left">
                    {info.role}
                </h3>

                {/* Program - with conditional link */}
                {info.program && (
                    <div className="mb-4 mx-auto w-fit lg:mx-0">
                        {info.programLink ? (
                            <a
                                href={info.programLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-center lg:text-left text-accent font-medium font-dm-sans hover:text-accent/80 transition-colors "
                            >
                                {info.program}
                            </a>
                        ) : (
                            <p className="text-center lg:text-left text-accent font-medium font-dm-sans">
                                {info.program}
                            </p>
                        )}
                    </div>
                )}

                {/* Short Description */}
                <p className="text-gray-700 leading-relaxed font-dm-sans text-center lg:text-left px-4 sm:px-0 ">
                    {info.shortDescription}
                </p>
            </div>
        </div>
    );
}