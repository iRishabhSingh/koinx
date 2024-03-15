import React from "react";
import Image from "next/image";
import { Chip, WidgetCoinGraph } from "../components";
import { PerformanceProp } from "./PerformanceDiv";
import { CryptoPriceProps } from "../page";

const CoinDetailDiv: React.FC<{
  coinData: PerformanceProp;
  priceData: CryptoPriceProps;
}> = ({ coinData, priceData }) => {
  const { name, image, symbol, market_cap_rank } = coinData;

  const { usd, inr } = priceData;

  return (
    <div className="mt-2 sm:bg-white sm:p-3 md:p-6 rounded-lg">
      <div className="flex gap-6 mb-6">
        <div className="flex items-center gap-2">
          <Image
            src={image}
            alt={`${name} Logo`}
            width={30}
            height={30}
            className="rounded-full"
          />
          <span className="text-lg md:text-2xl font-medium">{name}</span>
          <span className="text-[#768396] text-sm font-medium">
            {symbol.toUpperCase()}
          </span>
        </div>
        <div className="bg-[#768396] rounded-md px-4 py-2 flex justify-center items-center">
          <span className="text-white text-[12px] font-medium">
            Rank #{market_cap_rank}
          </span>
        </div>
      </div>
      <div className="sm:p-0 p-3 border sm:border-none border-[#DEE1E6] rounded-md bg-white">
        <div className="flex gap-6 pb-6 border-b-[#DEE1E6]">
          <div>
            <h2 className="text-xl font-medium md:text-2xl">${usd}</h2>
            <span className="text-xs font-normal md:text-sm">₹{inr}</span>
          </div>
          <div className="flex pt-2 h-6 items-center">
            <Chip text={2} arrow />
            <span className="uppercase text-[#768396] text-[12px] font-medium md:text-base">
              (24h)
            </span>
          </div>
        </div>
        <div className="h-[250px] sm:h-[350px] pb-6">
          <WidgetCoinGraph symbol={symbol} />
        </div>
      </div>
    </div>
  );
};

export default CoinDetailDiv;
