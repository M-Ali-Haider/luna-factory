import React from "react";
import HomeButton from "./HomeButton";
import { socials } from "@/utils/socials";
import Image from "next/image";

const LeftSide = () => {
  return (
    <div className="w-[50%] flex flex-col justify-end max-[1000px]:w-full">
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
        If you have any good creative ideas feel free to share them here
      </h2>
      <HomeButton className={"w-fit mb-4"} />
      <div className="flex gap-4 mb-4">
        {socials.map((item, index) => (
          <a
            href={item.href}
            target="_blank"
            key={index}
            className="size-6 md:size-14 relative rounded-sm overflow-hidden"
          >
            <Image src={item.src} alt="" fill className="" />
          </a>
        ))}
        {/* <img src="/insta.webp" alt="" className="w-14" />
        <img src="/tiktok.png" alt="" className="w-14" />
        <img src="/tiktok.png" alt="" className="w-14" /> */}
      </div>
      <h4 className="text-white font-bold text-lg md:text-2xl">Please Click</h4>
    </div>
  );
};

export default LeftSide;
