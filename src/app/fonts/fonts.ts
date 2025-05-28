import localFont from "next/font/local";
export const sourceHans = localFont({
  src: [
    {
      path: "./source-han-sans-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./source-han-sans.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-source-hans",
});

export const alibaba = localFont({
  src: [
    {
      path: "./alibaba-light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./alibaba-regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-alibaba",
});

export const quador = localFont({
  src: [{ path: "./Quador-UltraBold.woff", weight: "900", style: "normal" }],
  variable: "--font-quador",
});
