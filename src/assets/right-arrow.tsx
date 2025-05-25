import { SVGProps } from "@/types/svg";
import * as React from "react";
const RightArrowSVG = (props: SVGProps) => (
  <svg
    width={48}
    height={18}
    viewBox="0 0 48 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M48 9L33 0.339746V17.6603L48 9ZM0 9L0 10.5L34.5 10.5V9V7.5L0 7.5L0 9Z"
      fill="#000"
    />
  </svg>
);
export default RightArrowSVG;
