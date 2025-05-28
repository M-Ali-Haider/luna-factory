"use client";
import { cn } from "@/lib/utils";
import React from "react";

const HomeButton = ({ className }: { className?: string }) => {
  const scrollToJoinUs = () => {
    const section = document.getElementById("joinus");
    if (section) {
      const yOffset = -70; // Offset in pixels
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={scrollToJoinUs}
      className={cn(
        "bg-white text-primary font-semibold px-4 py-2 text-lg md:text-2xl rounded-full cursor-pointer",
        className
      )}
    >
      JOIN US
    </button>
  );
};

export default HomeButton;
