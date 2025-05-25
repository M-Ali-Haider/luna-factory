import { auth } from "@/auth";
import MemberDetailsLeft from "@/components/MemberDetails/left";
import { ChevronsRight } from "lucide-react";

const Page = async () => {
  const session = await auth();
  return (
    <div className="py-10 min-h-screen flex justify-center bg-primary">
      <div
        className="max-w-[1440px] w-full px-4
        flex flex-col md:flex-row items-center gap-10 md:gap-5"
      >
        <MemberDetailsLeft session={session} />
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
          <div className="bg-secondary text-white h-fit w-full p-6 rounded-2xl shadow-lg shadow-black">
            <h1 className="text-4xl font-extrabold text-primary">
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
                <div className="flex items-center gap-5">
                  <div className="text-4xl text-white font-extrabold">now:</div>
                  <h2 className="text-5xl font-extrabold text-primary">
                    ONLY $9.99
                    <span className="text-base font-medium ">/month</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

const Heading = ({ text }: { text: string }) => {
  return (
    <div className="flex items-end justify-between">
      <div className="font-medium">{text}</div>
      <div className="flex items-center text-sm text-gray-300">
        <span className="-mt-0.5">READ MORE</span> <ChevronsRight size={16} />
      </div>
    </div>
  );
};
