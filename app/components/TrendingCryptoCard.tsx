import React from "react";
import Image from "next/image";
import Chip from "./Chip";

export interface TrendingCryptoCardProps {
  small: string;
  symbol: string;
  data: {
    price: string;
  };
  sparkline: string;
}

const TrendingCryptoCard: React.FC<TrendingCryptoCardProps> = ({
  small,
  symbol,
  data: { price },
  sparkline,
}) => {
  return (
    <div className="inline-flex flex-col p-4 border border-gray-300 bg-white rounded-lg my-1 min-w-[250px]">
      {/* Logo and Name */}
      <div className="flex items-center mb-2 gap-2">
        <Image
          src={small}
          alt="Crypto Logo"
          className="w-8 h-8 md:w-6 md:h-6 rounded-full"
          width={150}
          height={150}
        />
        <p className="capitalize text-base md:text-xs font-medium">{symbol}</p>
        <Chip text={2} />
      </div>
      {/* Current Value */}
      <p className="text-lg md:text-sm font-semibold">{price}</p>
      {/* Graph */}
      <div className="w-[auto]">
        <Image
          src={sparkline}
          alt="Crypto Graph"
          className="w-full mt-2"
          width={200}
          height={100}
        />
      </div>
    </div>
  );
};

export default TrendingCryptoCard;
