const Tokenomics = () => {
  return (
    <div className="flex flex-col gap-4 w-full bg-white rounded-md p-3 md:p-6 border border-[#D3E0E6] sm:border-none">
      <h2 className="text-lg md:text-2xl font-medium md:font-medium">
        Tokenomics
      </h2>
      <div className="w-full">
        <h3 className="font-medium pb-2">Initial Distribution</h3>
        {/* Insert your graph component here */}
      </div>
      <p className="text-base w-auto">
        Tokenomics refers to the economics of a cryptocurrency token. It
        encompasses various factors such as the token&apos;s distribution,
        supply, utility, and governance mechanisms. Understanding tokenomics is
        crucial for investors and stakeholders to assess the long-term viability
        and potential of a cryptocurrency project. In tokenomics analysis,
        factors like token allocation, vesting schedules, inflation rates, and
        token utility are carefully evaluated to gauge the token&apos;s value
        proposition and sustainability.
      </p>
    </div>
  );
};

export default Tokenomics;
