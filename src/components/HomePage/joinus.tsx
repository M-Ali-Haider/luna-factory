import { cn } from "@/lib/utils";
import { UsersRound } from "lucide-react";
import React, { ReactNode } from "react";
import ScaleInView from "../Animators/ScaleInView";
import { AnimatedProgressBar } from "./AnimatedBar";

const JoinUs = () => {
  return (
    <div className="flex flex-col gap-10 items-center mb-8 mt-8">
      <div className="w-full max-w-[1546px]">
        <div
          className="max-w-max px-10 py-4
            text-white bg-primary font-bold text-3xl
            rounded-r-full shadow-2xl"
        >
          Join Us
        </div>
      </div>

      <ScaleInView>
        <div className="max-w-[768px] px-4 w-full flex items-center flex-wrap gap-10">
          <CardWrapper>
            <div className="flex-1 flex flex-col items-center justify-center p-6 gap-8">
              <div className="bg-primary text-white font-bold text-3xl size-12 rounded-full flex items-center justify-center">
                1
              </div>
              <div className="text-center">
                <p>We have a professional team.</p>
                <p>
                  You can directly find high quality source factories on the
                  website .
                </p>
              </div>
            </div>
            <div className="text-white bg-primary py-4 flex items-center justify-center text-2xl">
              General Registration
            </div>
          </CardWrapper>

          <CardWrapper>
            <div className="flex-1 bg-primary flex flex-col items-center justify-center p-6 gap-8">
              <div className="bg-white text-primary font-bold text-3xl size-12 rounded-full flex items-center justify-center">
                2
              </div>
              <div className="text-center">
                <p>We have a professional team.</p>
                <p>
                  You can directly find high quality source factories on the
                  website .
                </p>
              </div>
            </div>
            <div className="text-primary py-4 flex items-center justify-center text-2xl">
              Paid Membership
            </div>
          </CardWrapper>
        </div>
      </ScaleInView>

      <div className="max-w-[768px] w-full max-[1200px]:w-[300px]">
        <div className="flex items-center gap-4">
          <AnimatedProgressBar value={50} />
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-4 text-primary">
            <UsersRound />
            <div className="text-xl font-medium">5000</div>
          </div>
          <div className="font-medium text-primary text-xl max-[1200px]:text-lg text-center">
            Paid Membership
          </div>
          <div className="flex items-center gap-4 text-gray-300">
            <UsersRound />
            <div className="text-xl font-medium">10000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;

const CardWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `flex-1 shadow-2xl rounded-xl min-w-[250px] overflow-hidden aspect-[11/12] flex flex-col`,
        className
      )}
    >
      {children}
    </div>
  );
};
