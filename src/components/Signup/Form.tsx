"use client";
import { register } from "@/actions/auth";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import MainButton from "../Button/MainButton";
import Input from "../InputField/Input";
import { CountryDropdown } from "../ui/country-dropdown";
import { PhoneInput } from "../ui/phone-input";

export type AuthErrorResponse = { message: string };

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("China");
  const [isBusiness, setIsBusiness] = useState(false);

  const [companyInfo, setCompanyInfo] = useState("");
  const [businessStatus, setBusinessStatus] = useState("Start up (<3 months)");

  const router = useRouter();

  const registerMutation = useMutation({
    mutationFn: () =>
      register(
        name,
        email,
        password,
        phone,
        country,
        isBusiness,
        isBusiness ? companyInfo : null,
        isBusiness ? businessStatus : null
      ),
    onSuccess: () => {
      router.push(`/verify-otp?email=${email}`);
    },
    onError: (error: unknown) => {
      const err = error as AuthErrorResponse;
      toast.error(err?.message || "Registration Failed");
    },
  });

  const disabled =
    email === "" ||
    password === "" ||
    name === "" ||
    country === "" ||
    phone === "";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerMutation.mutate();
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-8 bg-white/90 px-10 py-16 rounded-2xl shadow-lg w-fit my-auto">
      <div className="flex flex-col items-center md:min-w-80">
        <p className="font-barlow font-extrabold text-3xl mb-8">register</p>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center"
        >
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="NAME"
            className="mb-4"
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="E-MAIL"
            className="mb-4"
          />
          <div className="w-full flex flex-col mb-4">
            <label htmlFor={"country"} className="font-medium w-full">
              PHONE NUMBER
            </label>
            <PhoneInput defaultCountry="CN" value={phone} onChange={setPhone} />
          </div>
          <div className="w-full flex flex-col mb-4">
            <label htmlFor={"country"} className="font-medium w-full">
              COUNTRY
            </label>
            <CountryDropdown
              placeholder="Select country"
              defaultValue="CHN"
              onChange={(selectedCountry) => setCountry(selectedCountry.name)}
            />
          </div>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="PASSWORD"
            type="password"
            className="mb-4"
          />
          <div className="w-full flex items-center space-x-2 mb-4">
            <Checkbox
              id="terms"
              checked={isBusiness}
              onCheckedChange={(checked) => setIsBusiness(Boolean(checked))}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Is this a business account?
            </label>
          </div>
          {isBusiness && (
            <>
              <Input
                value={companyInfo}
                onChange={(e) => setCompanyInfo(e.target.value)}
                label="Company Name or Website"
                className="mb-4"
              />
              <div className="w-full mb-4">
                <label className="block font-medium mb-2">
                  Business Status
                </label>
                <RadioGroup
                  value={businessStatus}
                  onValueChange={setBusinessStatus}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="Start up (<3 months)"
                      id="option-one"
                    />
                    <Label htmlFor="option-one">Start up (&lt;3 months)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="Growing (3 months - 1 year)"
                      id="option-two"
                    />
                    <Label htmlFor="option-two">
                      Growing (3 months - 1 year)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="Growing (1 - 2 years)"
                      id="option-three"
                    />
                    <Label htmlFor="option-three">Growing (1 - 2 years)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem
                      value="Stable (>3 years)"
                      id="option-four"
                    />
                    <Label htmlFor="option-four">Stable (&gt;3 years)</Label>
                  </div>
                </RadioGroup>
              </div>
            </>
          )}
          <MainButton
            label="START"
            disabled={disabled || registerMutation.isPending}
            isLoading={registerMutation.isPending}
            type="submit"
            className="rounded-full text-xl font-medium w-28 mt-14"
          />
        </form>
      </div>
      <div>
        <div className="bg-primary rounded-2xl p-22 mb-8 shadow-lg shadow-black/50">
          <p className="text-3xl">支付模块</p>
        </div>
        <h2 className="font-extrabold text-4xl md:text-6xl">Thank you</h2>
        <h4 className="text-primary font-extrabold text-lg md:text-2xl">
          Welcome to join us
        </h4>
      </div>
    </div>
  );
};

export default Form;
