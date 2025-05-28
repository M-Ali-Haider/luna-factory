import React from "react";
import HomeButton from "./HomeButton";
import { socials } from "@/utils/socials";
import Image from "next/image";

const LeftSide = () => {
  return (
    <div className="min-h-screen xl:min-h-auto flex-1 flex flex-col justify-end">
      <h2 className="font-quador font-extrabold text-3xl text-white mb-4">
        <div>If you have any good creative ideas</div>
        <div>feel free to share them here</div>
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
      <h4 className="text-white font-bold text-lg md:text-xl font-quador">
        Please Click
      </h4>
    </div>
  );
};

export default LeftSide;
