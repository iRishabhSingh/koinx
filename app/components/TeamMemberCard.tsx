import Image from "next/image";
import React from "react";

export interface TeamMemberCardProps {
  name: string;
  image: string;
  designation: string;
  description: string;
}

const TeamPlayerCard: React.FC<TeamMemberCardProps> = ({
  name,
  image,
  designation,
  description,
}) => {
  return (
    <div className="bg-[#E8F4FD] rounded-lg p-3 flex flex-wrap md:flex-nowrap justify-center items-center gap-4">
      <div className="text-center text-nowrap">
        <Image
          className="mb-2 rounded-md"
          src={image}
          alt={`${name}'s Profile Image`}
          width={100}
          height={100}
        />
        <div>
          <h3>{name}</h3>
          <p className="text-[#788F9B] text-[12px]">{designation}</p>
        </div>
      </div>
      <p className="text-sm text-center sm:text-left font-light md:font-normal">
        {description}
      </p>
    </div>
  );
};

export default TeamPlayerCard;
