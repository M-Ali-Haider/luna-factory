"use client";
import { headerPaths } from "@/utils/paths";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathName = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      {/* Mobile menu button - only on mobile */}
      <button
        className="md:hidden p-2"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      {/* Mobile menu with grow animation */}
      <div
        className={`md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-40 transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <div className="py-2">
          <ul className="flex flex-col">
            {headerPaths.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`${
                  pathName === item.href ? "bg-black text-white" : ""
                } flex items-center h-12 px-6 hover:bg-black hover:text-white transition-colors`}
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
