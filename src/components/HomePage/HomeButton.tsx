import { cn } from "@/lib/utils";
import React from "react";

const HomeButton = ({ className }: { className?: string }) => {
  return (
    <button
      className={cn(
        "bg-white text-primary font-bold px-4 py-2 text-lg md:text-2xl rounded-full",
        className
      )}
    >
      JOIN US
    </button>
  );
};

export default HomeButton;
