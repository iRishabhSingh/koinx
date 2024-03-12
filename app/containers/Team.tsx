import React from "react";
import { TeamMemberCardProps } from "../components/TeamMemberCard";
import { TeamMemberCard } from "../components";

interface TeamProps {
  members: TeamMemberCardProps[];
}
const Team: React.FC<TeamProps> = ({ members }) => {
  return (
    <div className="flex flex-col gap-4 w-full bg-white rounded-md p-3 md:p-6  border border-[#D3E0E6] sm:border-none">
      <h2 className="text-lg md:text-2xl font-medium md:font-medium">Team</h2>
      <p className="text-base text-medium w-auto">
        Our team comprises skilled professionals dedicated to excellence. With a
        focus on collaboration and innovation, we strive to deliver exceptional
        results for our clients. Each member brings unique talents and expertise
        to the table, ensuring comprehensive solutions tailored to meet your
        needs.
      </p>
      <div className="flex flex-col gap-4">
        {members.map((member: TeamMemberCardProps) => (
          <TeamMemberCard
            key={member.name}
            name={member.name}
            image={member.image}
            designation={member.designation}
            description={member.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
