import type { Session } from "@auth/core/types";
import { ChevronsRight } from "lucide-react";
import Image from "next/image";

const MemberDetailsLeft = ({ session }: { session: Session | null }) => {
  return (
    <div className="w-[300px] flex flex-col items-center bg-white rounded-xl p-6">
      <h2 className="font-medium mb-5 text-xl">Personal Center</h2>
      <div className="size-28 relative">
        <Image
          src={"/member-details-pfp.png"}
          fill
          className="rounded-full"
          alt="pfp-image"
        />
        <div
          className="text-white font-extrabold size-6 rounded-full 
              flex items-center justify-center 
              bg-[#4dd60a] border border-[#2c7e3e]
              absolute bottom-3 right-0"
        >
          B
        </div>
      </div>
      <div className="my-3 text-primary font-bold text-2xl line-clamp-1">
        ID: {session?.user?.id || "XXXXXXX"}
      </div>
      <div
        className="flex items-center justify-center
            bg-primary text-white w-full rounded-full py-1.5"
      >
        <span className="-mt-0.5">Details</span>
        <ChevronsRight />
      </div>
      <div
        className="mt-4 bg-black p-3 w-full rounded-lg text-white 
        flex flex-col items-center text-sm"
      >
        <div className="font-bold text-lg text-primary flex flex-col items-center">
          <div className="mb-3 text-xl">LunaSourcing</div>
          <div>Exclusive</div>
          <div className="-mt-2">Service</div>
          <div className="-mt-2">Team</div>
        </div>
        <div className="mt-1">Whatsapp Number:</div>
        <div>+86 XXXXXXXXXXX</div>
      </div>
    </div>
  );
};

export default MemberDetailsLeft;
