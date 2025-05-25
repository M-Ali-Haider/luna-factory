"use client";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Link from "next/link";

const HeaderLink = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return null;
  }
  return (
    <>
      {!session?.user && (
        <div className="rounded-full relative flex bg-gray-200 text-sm md:text-base">
          <Link
            className="w-[75px] md:w-[100px] flex items-center justify-center py-3 
            rounded-full relative group"
            href={"/login"}
          >
            <span className="relative z-[4]">Login</span>
            <div
              className="absolute left-full group-hover:left-0
              transition-all duration-300
              w-[75px] md:w-[100px] h-full rounded-full z-[3]"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom right, #FFC107, #FFECB3)",
              }}
            />
          </Link>
          <Button href="/signup" />
        </div>
      )}
    </>
  );
};

export default HeaderLink;

const Button = ({ href, className }: { href: string; className?: string }) => {
  return (
    <Link
      className={cn(
        `w-[75px] md:w-[100px] flex items-center justify-center py-3 
        rounded-full relative z-[4]
        transition-all duration-300 text-sm md:text-base`,
        className
      )}
      href={href}
    >
      {href === "/login" ? "Login" : "Register"}
    </Link>
  );
};

// <button
//   className="cursor-pointer bg-gray-200 hover:bg-[#FFECB3] w-[100px] flex items-center justify-center py-3
//   rounded-full relative z-[4]
//   transition-all duration-300"
//   onClick={() => signOut()}
// >
//   Logout
// </button>
