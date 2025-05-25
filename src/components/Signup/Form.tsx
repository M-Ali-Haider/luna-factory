"use client";
import React, { useState } from "react";
import Input from "../InputField/Input";
import MainButton from "../Button/MainButton";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { register } from "@/actions/auth";
import { AuthErrorResponse } from "../Login/Form";
import { toast } from "sonner";
import { signIn } from "next-auth/react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");

  const router = useRouter();

  const registerMutation = useMutation({
    mutationFn: () => register(name, email, password, phone, country),
    onSuccess: async () => {
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });
      if (res?.error) {
        toast.error(res.code || "Something went wrong");
      } else {
        toast.success("Registration Successful");
        router.replace(`/`);
      }
    },
    onError: (error: unknown) => {
      const err = error as AuthErrorResponse;
      toast.error(err?.error || "Registration Failed");
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
    <div className="flex items-center gap-8 bg-white/90 px-10 py-16 rounded-2xl shadow-lg w-fit my-auto">
      <div className="flex flex-col items-center min-w-80">
        <p className="font-extrabold text-3xl mb-8">REGISTER</p>
        <form onSubmit={handleSubmit} className="w-full">
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Name"
            placeholder="Name"
            className="mb-4"
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            placeholder="Email"
            className="mb-4"
          />
          <Input
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            label="PHONE NUMBER"
            placeholder="PHONE NUMBER"
            type="tel"
            className="mb-4"
          />
          <Input
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            label="COUNTRY"
            placeholder=""
            className="mb-4"
          />
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="PASSWORD"
            placeholder="Password"
            type="password"
            className="mb-14"
          />
          <MainButton
            label="START"
            disabled={disabled || registerMutation.isPending}
            isLoading={registerMutation.isPending}
            type="submit"
          />
        </form>
      </div>
      <div>
        <div className="bg-primary rounded-2xl p-22 mb-8 shadow-lg shadow-black/50">
          <p className="text-3xl">Something</p>
        </div>
        <h2 className="font-extrabold text-6xl">Thank you</h2>
        <h4 className="text-primary font-extrabold text-2xl">
          Welcome to join us
        </h4>
      </div>
    </div>
  );
};

export default Form;
