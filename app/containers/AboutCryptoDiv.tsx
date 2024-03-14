import { CalculateAboutCryptoCard, Carousel } from "../components";

const AboutCryptoDiv = () => {
  return (
    <div className="flex flex-col gap-4 w-full bg-white rounded-md p-3 md:p-6 border border-[#D3E0E6] sm:border-none">
      <h2 className="text-lg md:text-2xl font-medium md:font-medium">
        About Bitcoin
      </h2>
      <div className="border-b-[1px] border-[#C9CFDD99] pb-4">
        <h3 className="font-medium pb-2">What is Bitcoin?</h3>
        <p className="text-base w-auto">
          Bitcoin is a decentralized digital currency, created by an unknown
          person or group of people using the pseudonym Satoshi Nakamoto in
          2009. It operates on a peer-to-peer network, allowing users to send
          and receive payments without the need for intermediaries like banks or
          governments. Bitcoin transactions are recorded on a public ledger
          called the blockchain, which ensures transparency and security. With
          its limited supply and decentralized nature, Bitcoin has emerged as a
          popular store of value and hedge against inflation in the digital age.
        </p>
      </div>
      <div className="border-b-[1px] border-[#C9CFDD99] pb-4">
        <h3 className="font-medium pb-2">How Does Bitcoin Work?</h3>
        <p>
          Bitcoin transactions are verified by network nodes through
          cryptography and recorded on the blockchain. Users store their Bitcoin
          in digital wallets, which are secured by private keys. Transactions
          are broadcasted to the network and confirmed by miners, who solve
          complex mathematical puzzles to add new blocks to the blockchain. This
          process, known as mining, ensures the security and integrity of the
          network. Bitcoin&apos;s supply is capped at 21 million coins, making
          it a deflationary asset. Its value is determined by supply and demand
          dynamics in the market, with factors such as adoption, regulation, and
          macroeconomic trends influencing its price.
        </p>
      </div>
      <div className="border-b-[1px] border-[#C9CFDD99] pb-4">
        <h3 className="font-medium pb-2">Already Holding Bitcoin?</h3>
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
        Whether you&apos;re new to Bitcoin or already holding, it&apos;s
        important to stay informed about the latest developments and trends in
        the cryptocurrency space. With its disruptive potential and growing
        adoption, Bitcoin continues to shape the future of finance and
        technology.
      </p>
    </div>
  );
};

export default AboutCryptoDiv;
