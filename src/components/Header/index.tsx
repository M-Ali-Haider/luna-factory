import Image from "next/image";
import Link from "next/link";
import HeaderLink from "./link";
import MobileMenu from "./mobile-menu";
import HeaderPaths from "./paths";
import HeaderUser from "./user";

const Header = () => {
  return (
    <div className="font-alibaba flex justify-center bg-primary sticky top-0 z-30">
      <div className="flex justify-between w-full max-w-[1440px] px-4">
        {/* Logo section */}
        <div className="flex items-center">
          <MobileMenu />
          <div>
            <Link href={"/"}>
              <Image
                alt="Logo"
                src={"/logo.png"}
                width={100}
                height={50}
                loading="eager"
              />
            </Link>
          </div>
          {/* Desktop navigation */}
          <div className="hidden md:block ml-4">
            <HeaderPaths />
          </div>
        </div>

        {/* Right side items */}
        <div className="flex items-center justify-center gap-4">
          {/* Login/Register link - hidden on mobile */}
          <div className="block">
            <HeaderLink />
          </div>
          <HeaderUser />
        </div>
      </div>
    </div>
  );
};

export default Header;
