import { HoverForInfo, Tabs } from "../components";

export interface PerformanceProp {
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  market_cap_change_percentage_24h: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
}

const numberWithCommas = (number: number) => {
  if (isNaN(number)) return number + "";
  return number.toLocaleString();
};

const PerformanceDiv: React.FC<{ coinData: PerformanceProp }> = async ({
  coinData,
}) => {
  const {
    name,
    current_price,
    market_cap,
    market_cap_rank,
    market_cap_change_percentage_24h,
    total_volume,
    high_24h,
    low_24h,
  } = coinData;

  return (
    <div className="flex flex-col gap-4">
      <Tabs />
      <div className="flex flex-col gap-4 w-full bg-white p-3 md:p-6  border border-[#D3E0E6] rounded-md sm:border-none">
        <h2 className="text-lg md:text-2xl font-medium md:font-medium">
          Performance
        </h2>
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start mr-4 w-[20%]">
              <h3 className="text-xs sm:text-sm text-[#44475B]">
                Today&apos;s Low
              </h3>
              <span className="text-[#44475B] text-sm sm:text-base">
                {numberWithCommas(low_24h)}
              </span>
            </div>
            <div className="">Scale to be shown</div>
            <div className="flex flex-col items-end ml-4 w-[20%]">
              <h3 className="text-xs sm:text-sm text-[#44475B] text-right">
                Today&apos;s High
              </h3>
              <span className="text-[#44475B] text-sm sm:text-base">
                {numberWithCommas(high_24h)}
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start mr-4 w-[20%]">
              <h3 className="text-xs sm:text-sm text-[#44475B]">52W Low</h3>
              <span className="text-[#44475B] text-sm sm:text-base">$50</span>
            </div>
            <div className="">Scale to be shown</div>
            <div className="flex flex-col items-end ml-4 w-[20%]">
              <h3 className="text-xs sm:text-sm text-[#44475B] text-right">
                52W High
              </h3>
              <span className="text-[#44475B] text-sm sm:text-base">$300</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center">
            <h3 className="font-semibold text-[#44475B]">Fundamentals</h3>
            <HoverForInfo about="Fundamentals" />
          </div>
          <div className="flex flex-wrap md:flex-col lg:flex-row justify-between pb-6">
            <div className="w-full md:w-full lg:w-[45%]">
              <div className="flex justify-between py-4 border-b border-[#D3E0E6]">
                <span className="text-xs lg:text-sm text-[#768396]">
                  {name} Price
                </span>
                <span className="text-xs lg:text-sm text-right font-medium px-2">
                  ${numberWithCommas(current_price)}
                </span>
              </div>
              <div className="flex justify-between py-4 border-b border-[#D3E0E6]">
                <span className="text-xs lg:text-sm text-[#768396]">
                  24h Low / 24h High
                </span>
                <span className="text-xs lg:text-sm text-right font-medium px-2">
                  ${numberWithCommas(low_24h)} / ${numberWithCommas(high_24h)}
                </span>
              </div>
              <div className="flex justify-between py-4 border-b border-[#D3E0E6]">
                <span className="text-xs lg:text-sm text-[#768396]">
                  7d Low / 7d High
                </span>
                <span className="text-xs lg:text-sm text-right font-medium px-2">
                  $16,000 / $20,000
                </span>
              </div>
              <div className="flex justify-between py-4 border-b border-[#D3E0E6]">
                <span className="text-xs lg:text-sm text-[#768396]">
                  Trading Volume
                </span>
                <span className="text-xs lg:text-sm text-right font-medium px-2">
                  ${numberWithCommas(total_volume)}
                </span>
              </div>
              <div className="flex justify-between py-4 border-b border-[#D3E0E6]">
                <span className="text-xs lg:text-sm text-[#768396]">
                  Market Cap Rank
                </span>
                <span className="text-xs lg:text-sm text-right font-medium px-2">
                  #{market_cap_rank}
                </span>
              </div>
            </div>
            <div className="w-full md:w-full lg:w-[45%]">
              <div className="flex justify-between py-4 border-b border-[#D3E0E6]">
                <span className="text-xs lg:text-sm text-[#768396]">
                  Market Cap
                </span>
                <span className="text-xs lg:text-sm text-right font-medium px-2">
                  ${numberWithCommas(market_cap)}
                </span>
              </div>
              <div className="flex justify-between py-4 border-b border-[#D3E0E6]">
                <span className="text-xs lg:text-sm text-[#768396]">
                  Market Cap Dominance
                </span>
                <span className="text-xs lg:text-sm text-right font-medium px-2">
                  {market_cap_change_percentage_24h.toPrecision(2)}%
                </span>
              </div>
              <div className="flex justify-between py-4 border-b border-[#D3E0E6]">
                <span className="text-xs lg:text-sm text-[#768396]">
                  Volume / Market Cap
                </span>
                <span className="text-xs lg:text-sm text-right font-medium px-2">
                  NA
                </span>
              </div>
              <div className="flex justify-between py-4 border-b border-[#D3E0E6]">
                <span className="text-xs lg:text-sm text-[#768396]">
                  All Time High
                </span>
                <span className="text-xs lg:text-sm text-right font-medium px-2">
                  NA
                </span>
              </div>
              <div className="flex justify-between py-4 border-b border-[#D3E0E6]">
                <span className="text-xs lg:text-sm text-[#768396]">
                  All Time Low
                </span>
                <span className="text-xs lg:text-sm text-right font-medium px-2">
                  NA
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDiv;
