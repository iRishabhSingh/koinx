import { Breadcrumb } from "./components";
import { TrendingCryptoCardProps } from "./components/TrendingCryptoCard";
import { SideCard, TrendingSectionDiv } from "./containers";

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

  return (
    <main className="bg-[#EDF0F3] min-w-[320px]">
      <Breadcrumb
        items={[
          { label: "Cryptocurrencies", href: "/" },
          { label: "Bitcoin", href: "/bitcoin" },
        ]}
      />
      <div className="flex gap-4 flex-wrap">
        <div className="order-1 mx-4 sm:ml-[24px] sm:mr-0 md:ml-[56px] md:mr-0 rounded-md md:max-w-[60%] flex flex-col gap-4">
          CryptoBar
        </div>
        <div className="order-3 sm:order-2 sm:mr-[24px] sm:ml-0 md:mr-[56px] md:ml-0 rounded-md w-full sm:w-auto">
          <SideCard sideCardData={trendingCryptoData.slice(0, 3)} />
        </div>
        <div className="order-2 sm:order-3 p-0 sm:p-2 sm:px-[24px] md:py-[24px] md:px-[56px] mx-4 sm:mx-0 bg-white rounded-md sm:rounded-[0] max-w-[calc(100%-2rem)] sm:max-w-full">
          <TrendingSectionDiv trendingCryptoData={trendingCryptoData} />
        </div>
      </div>
    </main>
  );
}
