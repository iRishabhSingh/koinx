import React from "react";
import Image from "next/image";
import Chip from "./Chip";
import { TrendingCryptoCardProps } from "./TrendingCryptoCard";

const TrendingCoin: React.FC<TrendingCryptoCardProps> = ({
  item: { small, name, symbol },
}) => {
  return (
    <div className="flex justify-between items-center py-2 m-1">
      <div className="flex items-center gap-2">
        <Image
          src={small}
          alt="Crypto Logo"
          width={26}
          height={26}
          className="rounded-full"
        />
        <p className="text-base md:text-md font-sm">
          {name} ({symbol})
        </p>
      </div>
      <Chip text={2} arrow />
    </div>
  );
};

export default TrendingCoin;
