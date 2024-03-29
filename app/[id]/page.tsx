import React from "react";
import {
  AboutCryptoDiv,
  CoinDetailDiv,
  PerformanceDiv,
  SentimentDiv,
  SideCard,
  Team,
  Tokenomics,
  TrendingSectionDiv,
} from "../containers";
import { Breadcrumb, SearchBar } from "../components";
import team from "../teams";
import { CryptoPriceProps } from "../page";
import { PerformanceProp } from "../containers/PerformanceDiv";
import { TeamMemberCardProps } from "../components/TeamMemberCard";
import { TrendingCryptoCardProps } from "../components/TrendingCryptoCard";
import { CoinProps } from "../containers/AboutCryptoDiv";

const Home: React.FC<{ params: { id: string } }> = async ({
  params: { id },
}) => {
  try {
    const dataOne = await fetch(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    const trendingCryptoDataFetched = await dataOne.json();

    if (trendingCryptoDataFetched.error) {
      throw new Error("The requested cryptocurrency does not exist.");
    }

    const trendingCryptoData: TrendingCryptoCardProps[] =
      trendingCryptoDataFetched.coins;

    const dataTwo = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd%2Cinr&include_24hr_change=true`
    );
    const priceDataFetched = await dataTwo.json();
    const priceData: CryptoPriceProps = priceDataFetched[id];

    const dataThree = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
    );
    const coinDataFetched = await dataThree.json();
    const coinData: PerformanceProp = coinDataFetched[0];

    const coinDetailsData = await fetch(
      `https://api.coingecko.com/api/v3/coins/${id}?sparkline=true`
    );
    const coinDetailsFetched = await coinDetailsData.json();
    const coinDetails: CoinProps = coinDetailsFetched;

    const members: TeamMemberCardProps[] = team.members;

    return (
      <main className="bg-[#EDF0F3] min-w-[320px]">
        <Breadcrumb
          items={[
            { label: "Cryptocurrencies", href: "/" },
            { label: `${coinData.name}`, href: `/${id}` },
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
  } catch (error) {
    return (
      <div className="py-6 flex flex-col gap-6 items-center min-w-[320px]">
        <h1 className="text-center font-medium px-4">
          No such coin exists. But you can search...
        </h1>
        <SearchBar />
      </div>
    );
  }
};

export default Home;
