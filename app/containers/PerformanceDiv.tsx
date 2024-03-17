import { HoverForInfo, Scale, Tabs } from "../components";
import { CoinProps } from "./AboutCryptoDiv";

export interface PerformanceProp {
  id: string;
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
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
}

const numberWithCommas = (number: number) => {
  if (isNaN(number)) return number + "";
  return number.toLocaleString();
};

const formattedDate = (dateString: string): string => {
  const date = new Date(dateString);

  const getMonthAbbreviation = (month: number): string => {
    const months: string[] = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months[month];
  };

  const formattedDate: string = `${getMonthAbbreviation(
    date.getMonth()
  )} ${date.getDate()}, ${date.getFullYear()}`;

  const currentDate: Date = new Date();
  const timeDifferenceInDays: number = Math.floor(
    (currentDate.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );

  let timeString: string;

  if (timeDifferenceInDays >= 365) {
    const years = Math.floor(timeDifferenceInDays / 365);
    timeString = `${years} year${years > 1 ? "s" : ""}`;
  } else if (timeDifferenceInDays >= 30) {
    const months = Math.floor(timeDifferenceInDays / 30);
    timeString = `${months} month${months > 1 ? "s" : ""}`;
  } else {
    timeString = `${timeDifferenceInDays} day${
      timeDifferenceInDays > 1 ? "s" : ""
    }`;
  }

  return `${formattedDate} (about ${timeString})`;
};

const PerformanceDiv: React.FC<
  { coinData: PerformanceProp } & { coinDetails: CoinProps }
> = async ({ coinData, coinDetails }) => {
  const {
    id,
    name,
    current_price,
    market_cap,
    market_cap_rank,
    market_cap_change_percentage_24h,
    total_volume,
    high_24h,
    low_24h,
    ath,
    ath_change_percentage,
    ath_date,
    atl,
    atl_change_percentage,
    atl_date,
  } = coinData;

  const {
    market_data: {
      sparkline_7d: { price },
    },
  } = coinDetails;

  const ohlcDataFetched = await fetch(`
  https://api.coingecko.com/api/v3/coins/${id}/ohlc?vs_currency=usd&days=365`);
  const ohlcData: number[][] = await ohlcDataFetched.json();

  const findHighLow = (
    data: number[][]
  ): { high_1y: number; low_1y: number } => {
    const allHighs: number[] = [];
    const allLows: number[] = [];

    data.forEach((arr: number[]) => {
      allHighs.push(arr[2]);
      allLows.push(arr[3]);
    });

    const high_1y = Math.max(...allHighs);
    const low_1y = Math.min(...allLows);

    return { high_1y, low_1y };
  };

  const { high_1y, low_1y } = findHighLow(ohlcData);

  const high_7d = Math.max(...price);
  const low_7d = Math.min(...price);

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
            <Scale low={low_24h} high={high_24h} current={current_price} />
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
              <span className="text-[#44475B] text-sm sm:text-base">
                {numberWithCommas(low_1y)}
              </span>
            </div>
            <Scale low={low_1y} high={high_1y} current={current_price} />
            <div className="flex flex-col items-end ml-4 w-[20%]">
              <h3 className="text-xs sm:text-sm text-[#44475B] text-right">
                52W High
              </h3>
              <span className="text-[#44475B] text-sm sm:text-base">
                {numberWithCommas(high_1y)}
              </span>
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
                  ${numberWithCommas(low_7d)} / ${numberWithCommas(high_7d)}
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
                  {(total_volume / market_cap).toFixed(3)}
                </span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[#D3E0E6]">
                <span className="text-xs lg:text-sm text-[#768396]">
                  All-Time High
                </span>
                <div>
                  <div className="flex justify-end items-center">
                    <span className="text-xs lg:text-sm text-right font-medium px-1">
                      ${ath}
                    </span>
                    <span className="`text-xs lg:text-sm text-right font-medium px-1 text-[#F7324C]">
                      {ath_change_percentage.toFixed(2)}%
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 lg:text-sm text-right font-normal px-2">
                      {formattedDate(ath_date)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-[#D3E0E6]">
                <span className="text-xs lg:text-sm text-[#768396]">
                  All-Time Low
                </span>
                <div>
                  <div className="flex justify-end items-center">
                    <span className="text-xs lg:text-sm text-right font-medium px-1">
                      ${atl}
                    </span>
                    <span className="`text-xs lg:text-sm text-right font-medium px-1 text-[#0FBA83]">
                      {atl_change_percentage.toFixed(2)}%
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-500 lg:text-sm text-right font-normal px-2">
                      {formattedDate(atl_date)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceDiv;
