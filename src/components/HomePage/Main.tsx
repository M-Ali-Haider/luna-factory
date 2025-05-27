import React from "react";
import Image from "next/image";
import RightSide from "./RightSide";
import MaxWidth from "../Wrapper/MaxWidth";
import LeftSide from "./LeftSide";

const Main = () => {
  return (
    <div className="font-barlow flex justify-between relative w-full h-screen max-h-[1200px]">
      <Image
        alt=""
        src={"/homepage.png"}
        fill
        objectFit="contain"
        className="-z-10 bg-primary"
        priority
      />
      <MaxWidth className="w-full pb-10 md:pb-0 h-full md:h-[70%] my-auto px-6 md:px-20">
        <div className="w-full h-full flex justify-between">
          <LeftSide />
          <RightSide />
        </div>
      </MaxWidth>
    </div>
  );
};

export default Main;
