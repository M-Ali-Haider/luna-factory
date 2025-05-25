import { cn } from "@/lib/utils";
import { SearchIcon } from "lucide-react";
import React from "react";

const Search = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "relative w-96 shadow-lg shadow-black/30 rounded-2xl",
        className
      )}
    >
      <SearchIcon className="absolute top-1/2 -translate-y-1/2 left-4" />
      <input
        type="text"
        className="w-full pl-12 py-3 outline-0"
        placeholder="Search"
      />
      <button className="px-4 transition-transform text-white cursor-pointer hover:scale-105 rounded-2xl font-light h-full absolute right-0 top-1/2 -translate-y-1/2 bg-primary">
        SEARCH
      </button>
    </div>
  );
};

export default Search;
