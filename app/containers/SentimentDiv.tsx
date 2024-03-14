import { Carousel, HoverForInfo, SentimentEventCard } from "../components";

const Sentiment = () => {
  return (
    <div className="flex flex-col gap-4 w-full bg-white rounded-md p-3 md:p-6  border border-[#D3E0E6] sm:border-none">
      <h2 className="text-lg md:text-2xl font-medium md:font-medium">
        Sentiment
      </h2>
      <div>
        <div className="flex items-center">
          <h3 className="font-semibold text-[#44475B]">Key Events</h3>
          <HoverForInfo about="Key Events" />
        </div>
        <Carousel>
          <SentimentEventCard image="/sentimentEventOne.svg" />
          <SentimentEventCard image="/sentimentEventTwo.svg" />
        </Carousel>
      </div>
      <div>
        <div className="flex items-center">
          <h3 className="font-semibold text-[#44475B]">Analyst Estimates</h3>
          <HoverForInfo about="Analyst Estimates" />
        </div>
        <div className="flex gap-4 items-center py-4">
          <div className="rounded-full flex justify-center items-center w-[100px] h-[100px] bg-[#EBF9F4]">
            <span className="text-[#0FBA83]">76%</span>
          </div>
          <div>Scales to be shown</div>
        </div>
      </div>
    </div>
  );
};

export default Sentiment;
