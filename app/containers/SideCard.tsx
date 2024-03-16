import React from "react";
import { GetStartedCard, TrendingCoin } from "@/app/components";
import { TrendingCryptoCardProps } from "@/app/components/TrendingCryptoCard";
import Link from "next/link";

interface SideCardProps {
  sideCardData: TrendingCryptoCardProps[];
}
const SideCard: React.FC<SideCardProps> = ({ sideCardData }) => {
  return (
    <div className="flex flex-col gap-y-4 items-center">
      <GetStartedCard />
      <div className="flex flex-col gap-2 w-full md:max-w-[426px] bg-white rounded-md p-3 md:p-6">
        <h2 className="text-lg sm:text-lg md:text-2xl font-medium leading-10">
          Trending Coins (24h)
        </h2>
        <div>
          {sideCardData.map((data: TrendingCryptoCardProps) => (
            <Link href={data.item.id} key={data.item.coin_id}>
              <TrendingCoin item={data.item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideCard;
