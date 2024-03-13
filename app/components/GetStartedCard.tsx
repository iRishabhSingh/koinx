import React from "react";
import Image from "next/image";
import Button from "./Button";

const GetStartedCard = () => {
  return (
    <div className="m-4 sm:m-0 flex flex-col justify-center items-center gap-2 bg-[#0052FE] rounded-xl p-4 lg:p-8 max-w-[426px]">
      <div className="flex flex-col-reverse lg:flex-col md:justify-between">
        <div className="m-0 md:m-2">
          <h2 className="text-white leading-10 font-semibold text-center text-sm md:text-base lg:text-2xl">
            Get Started with KoinX for FREE
          </h2>
          <p className="text-white my-2 md:my-2 lg:my-4 text-center text-[10px] md:text-xs lg:text-base">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </p>
        </div>
        <div className="h-fit m-auto p-2 w-[60%] md:w-[50%] flex justify-center md:mt-0">
          <Image
            src={"/CardDesign.svg"}
            alt="SVG Image"
            width={100}
            height={150}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
      <div>
        <Button text={"Get started for FREE"} arrow />
      </div>
    </div>
  );
};

export default GetStartedCard;
