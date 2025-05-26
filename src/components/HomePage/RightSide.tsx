import React from "react";
import Image from "next/image";
import RightArrowSVG from "@/assets/right-arrow";

const RightSide = () => {
  return (
    <div className="w-fit self-center max-[1000px]:hidden">
      <div className="relative w-[300px] h-[300px]">
        {/* Top image with hover overlay */}
        <div className="absolute top-0 left-[25px] w-[225px] h-[280px] rounded-3xl overflow-hidden shadow-lg z-10 group cursor-pointer">
          <div className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110">
            <Image alt="" src={"/card1.png"} fill className="object-cover" />
            <div className="bg-black/10 absolute inset-0" />
            <div className="text-primary absolute top-12 left-4 font-extrabold text-lg">
              <div>I want to find</div>
              <div className="-mt-1">the source factory</div>
            </div>
          </div>
          <div className="text-black absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center flex-col p-4 text-center">
            <h2 className="text-2xl font-bold">Image Title</h2>
            <p className="text-sm mt-2">Some description for this image.</p>
          </div>
        </div>

        {/* Bottom image (slightly lower and to the right) */}
        <div className="absolute top-20 left-24 w-[225px] h-[280px] rounded-3xl overflow-hidden shadow-md z-0 group hover:z-20 cursor-pointer">
          <div className="w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110">
            <Image alt="" src={"/card2.png"} fill className="object-cover" />
            <div className="bg-white/50 absolute inset-0" />
            <div className="text-black absolute bottom-3.5 left-5 font-extrabold text-lg">
              <div>I want to find</div>
              <div className="-mt-1">the source factory</div>
            </div>
          </div>
          <div className="text-black absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center flex-col p-4 text-center">
            <h2 className="text-2xl font-bold">Image Title</h2>
            <p className="text-sm mt-2">Some description for this image.</p>
          </div>
        </div>
      </div>

      {/* Sourcing */}
      <div className="text-7xl font-bold text-end mt-18 text-black pr-2">
        <h1 className="text-6xl relative">
          Sourcing <RightArrowSVG className="absolute left-10 -top-7" />
        </h1>
        <h1>in China</h1>
      </div>
    </div>
  );
};

export default RightSide;
