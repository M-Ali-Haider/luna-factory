import Image from "next/image";
import React from "react";
import HomeButton from "./HomeButton";
import { socials } from "@/utils/socials";
import RightArrowSVG from "@/assets/right-arrow";

const Main2 = () => {
  return (
    <div className="min-h-screen flex flex-col xl:flex-row bg-primary">
      <ImageBackground />
      <div
        className="flex-1 px-4 md:pl-20 md:pr-0 pb-32 min-h-screen relative z-[3] 
        flex items-end"
      >
        <div className="flex flex-col justify-end">
          <h2 className="font-quador font-extrabold text-xl md:text-3xl text-white mb-4">
            <div className="hidden md:block">
              If you have any good creative ideas
            </div>
            <div className="hidden md:block">feel free to share them here</div>
            <div className="md:hidden">
              If you have any good creative ideas feel free to share them here
            </div>
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
      </div>
      <div
        className="flex-1 px-4 xl:pr-20 xl:pl-0 min-h-screen relative z-[3] 
        flex justify-center items-center xl:items-end xl:justify-end"
      >
        <div className="xl:w-fit xl:self-center">
          <div className="relative w-full h-[300px]">
            {/* Top image with hover overlay */}
            <div
              className="max-w-[200px] md:max-w-[280px] aspect-[321/341] w-full 
              absolute right-[80px] -top-[64px]
              rounded-3xl overflow-hidden shadow-lg z-10 group cursor-pointer"
            >
              <div className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110">
                <Image
                  alt=""
                  src={"/card1.png"}
                  fill
                  className="object-cover"
                  loading="eager"
                />
                <div className="bg-black/10 absolute inset-0" />
                <div className="font-quador group-hover:opacity-0 text-primary absolute top-12 left-4 font-extrabold md:text-lg">
                  <div>I want to find</div>
                  <div className="-mt-1">the source factory</div>
                </div>
              </div>
              <div className="text-black absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                <div className="relative size-full">
                  <div className="text-black absolute top-12 left-4 font-extrabold md:text-lg">
                    <div className="font-quador">I want to find</div>
                    <div className="-mt-1 font-quador">the source factory</div>
                    <div className="mt-5 text-sm font-medium">
                      <div>We have a professional team.</div>
                      <div className="">You can directly find high-quality</div>
                      <div className="">source factories on the website.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom image (slightly lower and to the right) */}
            <div
              className="max-w-[200px] md:max-w-[280px] aspect-[321/421] w-full 
              absolute right-0
              rounded-3xl overflow-hidden shadow-md z-0 group hover:z-20 cursor-pointer"
            >
              <div className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110">
                <Image
                  alt=""
                  src={"/card2.png"}
                  fill
                  className="object-cover"
                  loading="eager"
                />
                <div className="bg-white/50 absolute inset-0" />
                <div className="font-quador group-hover:opacity-0 text-black absolute bottom-3.5 left-5 font-extrabold md:text-lg">
                  <div>I want to find</div>
                  <div className="-mt-1">the source factory</div>
                </div>
              </div>
              <div className="text-black absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                <div className="relative size-full">
                  <div className="text-black absolute top-12 left-4 font-extrabold md:text-lg">
                    <div className="font-quador">I want to find</div>
                    <div className="-mt-1 font-quador">the source factory</div>
                    <div className="mt-5 text-sm font-medium">
                      <div>We have a professional team.</div>
                      <div className="">You can directly find high-quality</div>
                      <div className="">source factories on the website.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sourcing */}
          <div className="text-7xl md:text-[120px] leading-[1] font-barlow font-extrabold text-end md:mt-18 text-black pr-2">
            <h1 className="text-6xl md:text-[90px] leading-[1] relative">
              Sourcing <RightArrowSVG className="absolute md:left-14 -top-7" />
            </h1>
            <h1>in China</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main2;

const ImageBackground = () => (
  <div className="absolute top-0 right-0 left-0 h-screen">
    <div className="relative size-full">
      <Image
        alt=""
        src={"/homepage.png"}
        loading="eager"
        fill
        className="bg-primary object-left object-cover md:object-center md:object-contain z-[2]"
        priority
        quality={100}
      />
    </div>
  </div>
);
