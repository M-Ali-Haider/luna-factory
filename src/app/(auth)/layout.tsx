import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (session?.user) {
    redirect("/");
  }
  return <>{children}</>;
};

export default AuthLayout;
