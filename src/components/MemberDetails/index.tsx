"use client";
import MemberDetailsLeft from "@/components/MemberDetails/left";
import { useMe } from "@/hooks/useMe";
import { ChevronsRight } from "lucide-react";

const MemberDetails = () => {
  const { data, isLoading, isError } = useMe();
  if (isLoading) {
    return <Skeleton />;
  }
  if (isError) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-red-100 text-red-700">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
          <p>We couldn’t load your profile. Please try again later.</p>
        </div>
      </div>
    );
  }
  return (
    <div className="py-10 min-h-screen flex justify-center bg-primary">
      <div
        className="max-w-[1440px] w-full px-4
        flex flex-col md:flex-row items-center gap-10 md:gap-5"
      >
        <MemberDetailsLeft user={data?.user} />
        <div className="w-full md:w-auto md:flex-1 bg-white p-6 rounded-xl">
          <Heading text="Requests I have Posted ( 用户提出的需求表单总览 )" />
          <div className="py-8 flex flex-wrap items-center gap-4">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="w-[200px] aspect-square rounded-md shadow bg-primary"
              ></div>
            ))}
          </div>
          <Heading text="Factories I am Interested ( 用户感兴趣的工厂总览 )" />
          <div className="py-8 flex flex-wrap items-center gap-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-[200px] aspect-square rounded-md shadow bg-primary"
              ></div>
            ))}
          </div>
          {!data?.user?.isPaid && (
            <div className="bg-secondary text-white h-fit w-full p-6 rounded-2xl shadow-lg shadow-black">
              <h1 className="text-2xl md:text-4xl font-extrabold text-primary">
                <div>Exclusive</div>
                <div>Memebership</div>
              </h1>
              <p className="mb-6 mt-2">
                Unlock exclusive resources verified
                <span className="text-primary">&nbsp;by Luna</span>
              </p>

              <div className="flex justify-end">
                <div className="flex flex-col items-end">
                  <p className="line-through text-primary text-center">
                    Orignal Price: <span>$39</span>
                  </p>
                  <div className="flex flex-wrap items-center gap-5">
                    <div className="text-4xl text-white font-extrabold">
                      now:
                    </div>
                    <h2 className="text-5xl font-extrabold text-primary">
                      ONLY $9.99
                      <span className="text-base font-medium ">/month</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;

const Heading = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-wrap items-end justify-between">
      <div className="font-medium">{text}</div>
      <div className="flex items-center text-sm text-gray-300">
        <span className="-mt-0.5">READ MORE</span> <ChevronsRight size={16} />
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className="py-10 min-h-screen flex justify-center bg-primary">
      <div className="max-w-[1440px] w-full px-4 flex flex-col md:flex-row items-center gap-10 md:gap-5">
        {/* Skeleton Left Card */}
        <div className="w-[300px] flex flex-col items-center bg-white rounded-xl p-6 animate-pulse">
          <div className="h-6 w-40 bg-gray-200 rounded mb-5" />
          <div className="size-28 rounded-full bg-gray-200 relative mb-5" />
          <div className="my-3 h-6 w-32 bg-gray-200 rounded" />
          <div className="h-10 w-full bg-gray-300 rounded-full mt-3" />
          <div className="mt-4 bg-black p-3 w-full rounded-lg text-white flex flex-col items-center text-sm gap-2">
            <div className="h-5 w-3/4 bg-gray-500 rounded" />
            <div className="h-4 w-1/2 bg-gray-500 rounded" />
            <div className="h-4 w-2/3 bg-gray-500 rounded" />
          </div>
        </div>

        {/* Skeleton Right Section */}
        <div className="w-full md:w-auto md:flex-1 bg-white p-6 rounded-xl animate-pulse">
          <div className="h-8 w-3/4 bg-gray-200 rounded mb-6" />
          <div className="py-8 flex flex-wrap items-center gap-4">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="w-[200px] aspect-square rounded-md bg-gray-200"
              />
            ))}
          </div>

          <div className="h-8 w-3/4 bg-gray-200 rounded mb-6" />
          <div className="py-8 flex flex-wrap items-center gap-4">
            {[...Array(4)].map((_, index) => (
              <div
                key={index}
                className="w-[200px] aspect-square rounded-md bg-gray-200"
              />
            ))}
          </div>

          {/* Skeleton for membership box */}
          <div className="bg-secondary text-white h-fit w-full p-6 rounded-2xl shadow-lg shadow-black space-y-4">
            <div className="h-8 w-1/2 bg-gray-400 rounded" />
            <div className="h-4 w-2/3 bg-gray-500 rounded" />
            <div className="flex justify-end">
              <div className="flex flex-col items-end gap-2">
                <div className="h-4 w-40 bg-gray-400 rounded" />
                <div className="h-10 w-48 bg-primary rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
