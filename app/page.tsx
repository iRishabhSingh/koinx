import { Breadcrumb } from "./components";
import { TeamMemberCardProps } from "./components/TeamMemberCard";
import { TrendingCryptoCardProps } from "./components/TrendingCryptoCard";
import {
  AboutCryptoDiv,
  CoinDetailDiv,
  PerformanceDiv,
  SentimentDiv,
  SideCard,
  Team,
  Tokenomics,
  TrendingSectionDiv,
} from "./containers";
import { CoinProps } from "./containers/AboutCryptoDiv";
import { PerformanceProp } from "./containers/PerformanceDiv";
import team from "./teams";

export interface CryptoPriceProps {
  usd: number;
  usd_24h_change: number;
  inr: number;
}

export default async function Home() {
  let data = await fetch("https://api.coingecko.com/api/v3/search/trending");
  const trendingCryptoDataFetched = await data.json();
  const trendingCryptoData: TrendingCryptoCardProps[] =
    trendingCryptoDataFetched.coins;
  const members: TeamMemberCardProps[] = team.members;

  data = await fetch(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd%2Cinr&include_24hr_change=true"
  );
  const priceDataFetched = await data.json();
  const priceData: CryptoPriceProps = priceDataFetched.bitcoin;

  data = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
  );
  const coinDataFetched = await data.json();
  const coinData: PerformanceProp = coinDataFetched[0];

  data = await fetch(
    `https://api.coingecko.com/api/v3/coins/bitcoin?sparkline=true`
  );
  const coinDetailsFetched = await data.json();
  const coinDetails: CoinProps = coinDetailsFetched;

  return (
    <main className="bg-[#EDF0F3] min-w-[320px]">
      <Breadcrumb
        items={[
          { label: "Cryptocurrencies", href: "/" },
          { label: "Bitcoin", href: "/bitcoin" },
        ]}
      />
      <div className="flex gap-4 flex-wrap justify-between xl:m-auto max-w-[1440px]">
        <div className="order-1 mx-4 sm:ml-[24px] sm:mr-0 md:ml-[56px] md:mr-0 rounded-md max-w-[calc(100%-2rem)] sm:max-w-[calc(60%-32px)] md:max-w-[calc(60%-60px)] lg:max-w-[calc(60%-68px)] xl:max-w-[60%] flex flex-col gap-4">
          <CoinDetailDiv coinData={coinData} priceData={priceData} />
          <PerformanceDiv coinData={coinData} coinDetails={coinDetails} />
          <SentimentDiv />
          <AboutCryptoDiv coinDetails={coinDetails} />
          <Tokenomics />
          <Team members={members} />
        </div>
        <div className="order-3 sm:order-2 sm:mr-[24px] sm:ml-0 md:mr-[56px] md:ml-0 rounded-md w-full sm:w-auto sm:max-w-[calc(40%-32px)] md:max-w-[calc(40%-68px)] lg:max-w-[34%] xl:max-w-[30%]">
          <SideCard sideCardData={trendingCryptoData.slice(0, 3)} />
        </div>
        <div className="order-2 sm:order-3 p-0 sm:p-2 sm:px-[24px] md:py-[24px] md:px-[56px] mx-4 sm:mx-0 bg-white rounded-md sm:rounded-[0] max-w-[calc(100%-2rem)] sm:max-w-full">
          <TrendingSectionDiv trendingCryptoData={trendingCryptoData} />
        </div>
      </div>
    </main>
  );
}
