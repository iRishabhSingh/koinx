import React from "react";
import { CalculateAboutCryptoCard, Carousel } from "../components";

export interface CoinProps {
  id: string;
  name: string;
  symbol: string;
  description: {
    en: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
    low_24h: {
      usd: number;
    };
    high_24h: {
      usd: number;
    };
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_1y: number;
    sparkline_7d: {
      price: number[];
    };
  };
}

const AboutCryptoDiv: React.FC<{ coinDetails: CoinProps }> = async ({
  coinDetails,
}) => {
  const {
    id,
    name,
    description: { en },
  } = coinDetails;

  const linkRegex = /<a href="([^"]+)">([^<]+)<\/a>/g;
  const formatDescription = (en: string) => {
    return en.replace(
      linkRegex,
      '<a href="$1" class="text-[#0052fe]" target="_blank" rel="noopener noreferrer">$2</a>'
    );
  };

  return (
    <div className="flex flex-col gap-4 w-full bg-white rounded-md p-3 md:p-6 border border-[#D3E0E6] sm:border-none">
      <h2 className="text-lg md:text-2xl font-medium md:font-medium">
        About {name}
      </h2>
      <div className="border-b-[1px] border-[#C9CFDD99] pb-4">
        <h3 className="font-medium pb-2">
          What is {en === "" ? "Crypto" : name}?
        </h3>
        {en && (
          <p
            className="text-base w-auto"
            dangerouslySetInnerHTML={{ __html: formatDescription(en) }}
          />
        )}
        {!en && (
          <p className="text-base w-auto">
            Cryptocurrency is a revolutionary concept in the realm of finance,
            marked by its decentralized nature and cryptographic security
            protocols. Introduced with the advent of Bitcoin in 2009 by an
            enigmatic figure or group known as Satoshi Nakamoto, cryptocurrency
            operates independently of traditional financial institutions like
            banks or governments. Utilizing blockchain technology, a
            decentralized ledger system, cryptocurrencies enable peer-to-peer
            transactions, fostering transparency and security across the
            network. Bitcoin, the pioneering cryptocurrency, has gained
            widespread recognition as a store of value and a hedge against
            inflation, owing to its finite supply and decentralized framework.
            This digital currency phenomenon continues to reshape the financial
            landscape, inspiring the creation of numerous alternative
            cryptocurrencies and innovative blockchain projects across various
            industries.
          </p>
        )}
      </div>
      <div className="border-b-[1px] border-[#C9CFDD99] pb-4">
        <h3 className="font-medium pb-2">How Does Crypto Work?</h3>
        <p>
          Cryptocurrency operates on decentralized networks, leveraging
          blockchain technology to record transactions securely without the need
          for a central authority. Users initiate transactions by sending
          cryptocurrency to others, which are then verified and added to the
          blockchain by a network of computers using cryptographic techniques.
          Transactions rely on public and private keys for security, with miners
          validating transactions through complex puzzles in a process called
          mining. Consensus mechanisms like Proof of Work (PoW) ensure agreement
          among network nodes on transaction validity. Wallets enable users to
          store, send, and receive cryptocurrency securely, while decentralized
          applications (DApps) utilize cryptocurrencies for various functions
          across industries. In summary, cryptocurrencies facilitate
          decentralized, peer-to-peer transactions, supported by blockchain
          technology and cryptographic principles.
        </p>
      </div>
      <div className="border-b-[1px] border-[#C9CFDD99] pb-4">
        <h3 className="font-medium pb-2">Already Holding {name}?</h3>
        <div className="flex flex-wrap justify-start gap-4">
          <Carousel>
            <CalculateAboutCryptoCard
              title="Calculate your Profits"
              image="/CalculateProfits.png"
              colorTransition={["#79F1A4", "#0E5CAD"]}
            />
            <CalculateAboutCryptoCard
              title="Calculate your tax liability"
              image="/CalculateTaxLiability.png"
              colorTransition={["#FF9865", "#EF3031"]}
            />
          </Carousel>
        </div>
      </div>
      <p>
        Whether you&apos;re just diving into the world of cryptocurrencies or
        already have a stake, keeping abreast of the latest advancements and
        trends is crucial. Cryptocurrency, with its disruptive capabilities and
        expanding acceptance, remains at the forefront of reshaping both
        financial and technological landscapes. From Bitcoin&apos;s pioneering
        role to the ever-evolving ecosystem of alternative coins and blockchain
        projects, staying informed allows individuals to navigate this dynamic
        space and harness its potential for innovation and investment.
      </p>
    </div>
  );
};

export default AboutCryptoDiv;
