"use client";
import { headerPaths } from "@/utils/paths";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const HeaderPaths = () => {
  const pathName = usePathname();
  return (
    <div>
      <ul className="flex">
        {headerPaths.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={`${
              pathName === item.href ? "bg-black text-white" : "text-black"
            } flex items-center justify-center 
            w-20 h-16
            font-light 
            hover:bg-black hover:text-white duration-200`}
          >
            {item.title}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default HeaderPaths;
