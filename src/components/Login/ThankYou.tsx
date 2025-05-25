import { socials } from "@/utils/socials";
import Image from "next/image";

const ThankYou = () => {
  return (
    <div className="bg-white/75 rounded-2xl p-4 font-extrabold text-5xl">
      <h2>Thank</h2>
      <h2 className="text-primary">you.</h2>

      <div className="flex gap-4 my-4 justify-end">
        {socials.map((item, index) => (
          <a
            href={item.href}
            target="_blank"
            key={index}
            className="relative size-6"
          >
            <Image src={item.src} alt="" fill className="" />
          </a>
        ))}
      </div>
      <div className="font-bold text-base text-end">
        <p>Please Click</p>
        <p>get more information</p>
      </div>
    </div>
  );
};

export default ThankYou;
