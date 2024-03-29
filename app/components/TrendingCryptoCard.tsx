import React from "react";
import Image from "next/image";
import Chip from "./Chip";

export interface TrendingCryptoCardProps {
  item: {
    coin_id: number;
    id: string;
    small: string;
    name: string;
    symbol: string;
    data: {
      price: string;
      sparkline: string;
    };
  };
}

const TrendingCryptoCard: React.FC<TrendingCryptoCardProps> = ({
  item: {
    small,
    symbol,
    data: { price, sparkline },
  },
}) => {
  return (
    <div className="inline-flex flex-col p-2 sm:p-4 border border-gray-300 bg-white rounded-lg my-1 min-w-[200px] sm:min-w-[250px] max-w-[250px] h-fit">
      {/* Logo and Name */}
      <div className="flex items-center mb-2 gap-2">
        <Image
          src={small}
          alt={`${symbol}'s Logo`}
          width={150}
          height={150}
          className="w-6 sm:w-8 h-6 sm:h-8 rounded-full"
        />
        <p className="capitalize text-base md:text-xs font-medium">{symbol}</p>
        <Chip text={2} />
      </div>
      {/* Current Value */}
      <p className="text-lg md:text-sm font-medium overflow-x-scroll whitespace-nowrap carousel">
        {price}
      </p>
      {/* Graph */}
      <Image
        src={sparkline}
        alt={`${symbol}'s Graph`}
        width={100}
        height={100}
        className="w-[215px] h-[63.92px] mt-2 px-8 py-1"
      />
    </div>
  );
};

export default TrendingCryptoCard;
