"use client";
// import { resendOTP } from "@/actions/auth";
import { resendOTP, verifyOTP } from "@/actions/auth";
import AuthHeading from "@/components/Auth/heading";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import MainButton from "../Button/MainButton";
import Input from "../InputField/Input";
import { AuthErrorResponse } from "../Signup/Form";

export interface OTPProps {
  email: string;
}
const OTP = ({ email }: OTPProps) => {
  const [otp, setOtp] = useState("");
  const router = useRouter();
  const [cooldown, setCooldown] = useState(0);

  const disabled = otp === "";

  const verifyMutation = useMutation({
    mutationFn: () => verifyOTP(otp, email),
    onSuccess: async () => {
      toast.success("OTP Verification successful. Account created.");
      router.replace("/login");
    },
    onError: (error: unknown) => {
      const err = error as AuthErrorResponse;
      toast.error(err?.message || "Verify OTP Failed");
    },
  });

  const resendMutation = useMutation({
    mutationFn: () => resendOTP(email),
    onSuccess: () => {
      toast.success("OTP Resend successful");
    },
    onError: (error: unknown) => {
      const err = error as AuthErrorResponse;
      toast.error(err?.message || "Resend OTP Failed");
    },
  });

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setInterval(() => {
        setCooldown((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [cooldown]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-[500px] w-full px-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            verifyMutation.mutate();
          }}
          className="flex flex-col items-center gap-4 sm:gap-7 shadow-2xl p-9 rounded-lg"
        >
          <AuthHeading label="OTP Verification" />
          <div className="text-sm font-gilroy font-medium">
            A unique code has been sent to your email address. Please check your
            inbox and enter the code below to complete the verification process.
          </div>
          <div className="w-full flex flex-col gap-3">
            <Input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="OTP"
              label="Enter OTP"
              containerClassName="gap-2"
              type="number"
              className="appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            />
          </div>
          <div className="w-full flex flex-col gap-4">
            <MainButton
              label="Verify"
              type="submit"
              isLoading={verifyMutation.isPending}
              disabled={disabled || verifyMutation.isPending}
              className="w-full"
            />
            <MainButton
              type="button"
              label={cooldown > 0 ? `Resend in ${cooldown}s` : "Resend"}
              onClick={() => resendMutation.mutate()}
              isLoading={resendMutation.isPending}
              disabled={cooldown > 0 || resendMutation.isPending}
              className="w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default OTP;
