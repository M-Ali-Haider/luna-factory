import { SVGProps } from "@/types/svg";
import * as React from "react";
const FacebookSVG = (props: SVGProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={100}
    height={100}
    viewBox="0 0 24 24"
    className="w-full h-full"
    {...props}
  >
    <circle cx={12} cy={12} r={10} opacity={0} />
    <path
      fill="#000"
      d="M10.505,10.272v1.749H8.031v2.629h2.474v7.226C10.994,21.95,11.491,22,12,22c0.46,0,0.91-0.042,1.354-0.102V14.65h2.588 l0.406-2.629h-2.995v-1.437c0-1.092,0.357-2.061,1.379-2.061h1.642V6.229c-0.289-0.039-0.898-0.124-2.051-0.124 C11.916,6.105,10.505,7.376,10.505,10.272z"
    />
  </svg>
);
export default FacebookSVG;
