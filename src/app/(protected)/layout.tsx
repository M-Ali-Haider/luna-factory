import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const ProtectedLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  if (session === null) return redirect("/");
  return <>{children}</>;
};

export default ProtectedLayout;
