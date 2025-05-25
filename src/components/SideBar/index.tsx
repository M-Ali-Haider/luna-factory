"use client";
import { closeSidebar } from "@/store/sidebar";
import { AppDispatch, RootState } from "@/store/store";
import { navItems } from "@/utils/navItems";
import { ChevronRight } from "lucide-react";
import React, { SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";

export interface SidebarInterface {
  className?: string;
  categories: [{ id: string; name: string }];
  isCategoriesLoading: boolean;
  isCategoriesError: boolean;
  setFilter: React.Dispatch<SetStateAction<string | null>>;
  filter: string | null;
}

const SideBar = ({
  categories,
  isCategoriesLoading,
  isCategoriesError,
  setFilter,
}: // filter,
SidebarInterface) => {
  const isOpen = useSelector((state: RootState) => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch<AppDispatch>();
  // if (!isOpen) {
  //   return null;
  // }
  return (
    <div
      className={`${
        isOpen ? "bg-black/50" : "bg-black/0 pointer-events-none"
      } transition-all duration-500
      fixed top-0 left-0 w-full h-full z-50`}
      onClick={() => dispatch(closeSidebar())}
    >
      <div
        className={`fixed ${
          isOpen ? "left-0" : "-left-[360px]"
        } overflow-hidden bg-white  h-full
        transition-all duration-500`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-[360px]">
          <div className="bg-primary text-lg font-bold w-90 text-center p-4">
            Cannot Find the factory i need I want to port here
          </div>
          {isCategoriesError ? (
            <div className="text-red-500 text-sm mb-4">
              Failed to load categories. Please try again later.
            </div>
          ) : isCategoriesLoading ? (
            <ul>
              {navItems.map((item, index) => (
                <li
                  className="pl-8 pr-2 py-2 flex gap-8 justify-between hover:bg-gray-200 cursor-pointer"
                  key={index}
                >
                  {item}
                  <ChevronRight />
                </li>
              ))}
            </ul>
          ) : (
            <ul>
              {categories.map((item, index) => (
                <li
                  onClick={() => {
                    setFilter(item.id);
                    dispatch(closeSidebar());
                  }}
                  className="pl-8 pr-2 py-2 flex gap-8 justify-between hover:bg-gray-200 cursor-pointer"
                  key={index}
                >
                  {item.name}
                  <ChevronRight />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
