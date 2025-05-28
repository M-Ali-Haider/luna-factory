import React from "react";
import Image from "next/image";
import RightArrowSVG from "@/assets/right-arrow";

const RightSide = () => {
  return (
    <div className="w-full xl:w-fit self-center min-h-screen xl:min-h-auto bg-primary xl:bg-transparent">
      <div className="relative w-full h-[300px]">
        {/* Top image with hover overlay */}
        <div
          className="max-w-[280px] aspect-[321/341] w-full 
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
            <div className="font-quador group-hover:opacity-0 text-primary absolute top-12 left-4 font-extrabold text-lg">
              <div>I want to find</div>
              <div className="-mt-1">the source factory</div>
            </div>
          </div>
          <div className="text-black absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
            <div className="relative size-full">
              <div className="text-black absolute top-12 left-4 font-extrabold text-lg">
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
          className="max-w-[280px] aspect-[321/421] w-full 
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
            <div className="font-quador group-hover:opacity-0 text-black absolute bottom-3.5 left-5 font-extrabold text-lg">
              <div>I want to find</div>
              <div className="-mt-1">the source factory</div>
            </div>
          </div>
          <div className="text-black absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-80 transition-opacity duration-300">
            <div className="relative size-full">
              <div className="text-black absolute top-12 left-4 font-extrabold text-lg">
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
      <div className="text-[120px] leading-[1] font-barlow font-extrabold text-end mt-18 text-black pr-2">
        <h1 className="text-[90px] leading-[1] relative">
          Sourcing <RightArrowSVG className="absolute left-14 -top-7" />
        </h1>
        <h1>in China</h1>
      </div>
    </div>
  );
};

export default RightSide;
