// import { auth } from "@/auth";
import { ReactNode } from "react";

const CommonLayout = async ({ children }: { children: ReactNode }) => {
  // const session = await auth();
  // console.log("session:", session);
  return <>{children}</>;
};

export default CommonLayout;
