import React from "react";
import { Carousel, TrendingCryptoCard } from "../components";
import { TrendingCryptoCardProps } from "../components/TrendingCryptoCard";

interface TrendingSectionDivProps {
  trendingCryptoData: TrendingCryptoCardProps[];
}

const TrendingSectionDiv: React.FC<TrendingSectionDivProps> = ({
  trendingCryptoData,
}) => {
  return (
    <div className="bg-white rounded-md p-4 sm:px-0 flex flex-col gap-6 border border-[#D3E0E6] sm:border-none">
      <div className="flex flex-col gap-2">
        <h2 className="text-lg md:text-2xl font-medium md:font-medium">
          You May Also Like
        </h2>
        <Carousel>
          {trendingCryptoData.map((data: TrendingCryptoCardProps) => (
            <TrendingCryptoCard key={data.item.coin_id} item={data.item} />
          ))}
        </Carousel>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg md:text-2xl font-medium md:font-medium">
          Trending Coins
        </h2>
        <Carousel>
          {trendingCryptoData.map((data: TrendingCryptoCardProps) => (
            <TrendingCryptoCard key={data.item.coin_id} item={data.item} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TrendingSectionDiv;
