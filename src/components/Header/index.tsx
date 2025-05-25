import Image from "next/image";
import Link from "next/link";
import Wrapper from "../Wrapper";
import HeaderLink from "./link";
import MobileMenu from "./mobile-menu";
import HeaderPaths from "./paths";
import { auth } from "@/auth";
import HeaderUser from "./user";

const Header = async () => {
  const session = await auth();
  return (
    <Wrapper className="flex justify-center bg-primary sticky top-0 z-30">
      <div className="flex justify-between w-full max-w-[1440px] px-4">
        {/* Logo section */}
        <div className="flex items-center">
          <div>
            <Link href={"/"}>
              <Image alt="Logo" src={"/logo.png"} width={100} height={50} />
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
          <div className="hidden md:block">
            <HeaderLink />
          </div>

          {/* User avatar - shown on desktop only */}
          {session?.user && <HeaderUser email={session.user.email || ""} />}
          <MobileMenu />
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
