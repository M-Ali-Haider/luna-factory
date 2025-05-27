"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import MainButton from "../Button/MainButton";
import Input from "../InputField/Input";

export type AuthErrorResponse = { error: string };

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const disabled = email === "" || password === "";

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });
    setIsLoading(false);
    if (res?.error) {
      toast.error(res.code);
    } else if (res?.ok) {
      toast.success("Login successful");
      router.replace("/");
    } else {
      toast.error("Login Failed");
    }
  };
  return (
    // <div className="flex items-center gap-8 bg-white/90 px-10 py-16 rounded-2xl shadow-lg w-fit my-auto">
    //   <div className="flex flex-col items-center min-w-80">
    //     <p className="font-extrabold text-3xl mb-8">LOGIN</p>
    //     <form onSubmit={handleSubmit} className="w-full">
    //       <Input
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         label="E-MAIL"
    //         placeholder="email@gmail.com"
    //         className="mb-8"
    //       />
    //       <Input
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         label="PASSWORD"
    //         type="password"
    //         className="mb-14 flex"
    //       />
    //       <MainButton
    //         type="submit"
    //         label="Log In"
    //         disabled={disabled || isLoading}
    //         isLoading={isLoading}
    //       />
    //     </form>
    //   </div>
    //   <div>
    //     <div className="bg-primary rounded-2xl p-22 mb-8 shadow-lg shadow-black/50">
    //       <p className="text-3xl">Something</p>
    //     </div>
    //     <h2 className="font-extrabold text-6xl">Thank you</h2>
    //     <h4 className="text-primary font-extrabold text-2xl">
    //       Welcome to join us
    //     </h4>
    //   </div>
    // </div>
    <div className="flex flex-col items-center bg-white/90 py-16 px-10 rounded-2xl shadow-lg md:w-96">
      <p className="font-barlow font-extrabold text-3xl mb-8">LOG IN</p>
      {/* <p className="font-bold w-full">E-MAIL</p> */}
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center"
      >
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="E-MAIL"
          placeholder=""
          className="mb-8"
        />
        {/* <p className="font-bold w-full">PASSWORD</p> */}
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="PASSWORD"
          type="password"
          className="mb-14 flex"
        />
        <MainButton
          type="submit"
          label="Log In"
          disabled={disabled || isLoading}
          isLoading={isLoading}
          className="rounded-full text-xl font-medium w-28"
        />
      </form>
    </div>
  );
};

export default Form;
