import React from "react";
import Image from "next/image";
import RightSide from "./RightSide";
import MaxWidth from "../Wrapper/MaxWidth";
import LeftSide from "./LeftSide";

const Main = () => {
  return (
    <div className="font-barlow flex justify-between relative w-full xl:h-screen xl:max-h-[1200px]">
      <div className="absolute top-0 right-0 left-0 h-screen">
        <div className="relative size-full">
          <Image
            alt=""
            src={"/homepage.png"}
            loading="eager"
            fill
            objectFit="contain"
            className="-z-10 bg-primary"
            priority
          />
        </div>
      </div>

      <MaxWidth className="w-full pb-10 md:pb-0 h-full xl:h-[70%] my-auto px-6 md:px-20">
        <div className="w-full h-full flex flex-col xl:flex-row xl:justify-between">
          <LeftSide />
          <RightSide />
        </div>
      </MaxWidth>
    </div>
  );
};

export default Main;
