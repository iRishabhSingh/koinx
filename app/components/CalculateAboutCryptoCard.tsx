import Image from "next/image";
import React from "react";
import Button from "./Button";

interface CalculateAboutCryptoCardProps {
  image: string;
  title: string;
  colorTransition: [from: string, to: string];
  onClick?: () => void;
}

const CalculateAboutCryptoCard: React.FC<CalculateAboutCryptoCardProps> = ({
  image,
  title,
  colorTransition: [from, to],
  onClick,
}) => {
  const gradient = `bg-gradient-to-br  from-[${from}] to-[${to}]`;
  const toClassName = ``;

  return (
    <div
      className={`bg-[#0050FF] ${gradient} inline-flex gap-3 rounded-lg p-3 max-w-[310px]`}
    >
      <Image
        src={image}
        alt="AboutHolding"
        width={100}
        height={100}
        loading="lazy"
      />
      <div className="flex flex-col gap-3 px-2">
        <h4 className="text-base sm:text-base md:text-xl text-white font-semibold">
          {title}
        </h4>
        <Button text="Get Started" arrow onClick={onClick} />
      </div>
    </div>
  );
};

export default CalculateAboutCryptoCard;
