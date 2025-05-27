import OTP from "@/components/Auth/otp";
import React from "react";

interface VerifyOTPPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}
const VerifyOTPPage = async ({ searchParams }: VerifyOTPPageProps) => {
  const resolvedSearchParams = await searchParams;
  const email = resolvedSearchParams.email as string;
  return <OTP email={email} />;
};

export default VerifyOTPPage;
