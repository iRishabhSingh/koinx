import Image from "next/image";
import React from "react";

const SentimentEventCard: React.FC<{ image: string }> = ({ image }) => {
  return (
    <div className="border border-[#E8F4FD] bg-[#E8F4FD] p-4 rounded-lg flex gap-4 min-w-[450px]">
      <div className="min-w-[10%]">
        <Image
          src={image}
          alt="Event"
          width={100}
          height={100}
          style={{ width: "auto", height: "auto" }}
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h3 className="text-base font-medium md:text-lg pb-2">
          Bitcoin Conference 2024: A Recap
        </h3>
        <p className="text-sm md:text-base">
          The Bitcoin Conference 2024 was a groundbreaking event that brought
          together experts, enthusiasts, and investors from around the world.
        </p>
      </div>
    </div>
  );
};

export default SentimentEventCard;
