import React from "react";
import Image from "next/image";
import SlideInView from "../Animators/SlideOnView";

const FactoryInformation = () => {
  return (
    <div className="relative">
      <Image src={"/grafiti.png"} fill alt="grafiti" className="-z-[1]" />
      <div className="mt-20 text-7xl text-end font-barlow font-extrabold text-primary mb-8 max-[1200px]:text-4xl">
        <h1>Factory</h1>
        <h1>Information</h1>
      </div>

      {/* Image */}
      <SlideInView from="right">
        <div className="relative w-full h-[67.5vh] max-h-[700px] flex justify-end max-[1200px]:h-[300px]">
          <div className="relative h-[calc(100%-20px)] w-[90%] mr-7">
            {/* Background box behind the image */}
            <div className="absolute top-8 left-7 w-full h-full bg-primary -z-10" />

            {/* Foreground image */}
            <Image
              alt=""
              src={"/factory-homepage.png"}
              fill
              style={{ objectFit: "cover" }}
              className=""
            />
          </div>

          <div className="absolute w-[300px] rounded-t-full h-2/3 left-0 -top-50 bg-gradient-to-b from-primary to-transparent max-[1200px]:hidden">
            <div className="font-barlow text-black text-[56px] leading-none font-extrabold mt-20 px-10">
              <SlideInView from="left" delay={0.3}>
                <h1 className="">See</h1>
              </SlideInView>
              <SlideInView from="right" delay={0.3}>
                <h1 className="text-end">more</h1>
              </SlideInView>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-end">
          <div className="text-end">
            <div>
              We have a professional team. You can directly find high-quality
            </div>
            <div>
              source factories on the website. You can also express your own
            </div>
            creative ideas and find the minded partners.
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <div className="h-[5px] bg-primary w-[175px]"></div>
        </div>
      </SlideInView>
    </div>
  );
};

export default FactoryInformation;
