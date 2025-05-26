import { footerSocials } from "@/utils/paths";
import FooterLinks from "./links";

const Footer = () => {
  return (
    <div className="bg-primary text-white flex flex-col items-center pt-4 pb-6">
      <div className="max-w-[1280px] w-full px-4 flex flex-col gap-3 items-center">
        <div className="flex items-center gap-2">
          {footerSocials.map(({ Svg, href }, index) => (
            <a
              href={href}
              target="_blank"
              key={index}
              className="size-9 rounded-full bg-white flex items-center justify-center"
            >
              <Svg className="size-4" />
            </a>
          ))}
        </div>
        <FooterLinks />
      </div>
      <div className="h-[1px] bg-white w-full"></div>
      <div
        className="max-w-[1280px] w-full px-4
        flex items-center justify-center mt-3
        text-sm"
      >
        <div>Copyright ©2025. Luna With Fans. All Rights Reserved</div>
        {/* <div>Design & Develop by AdRankify Technologies</div> */}
      </div>
    </div>
  );
};

export default Footer;
