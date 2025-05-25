import React from "react";
import Image from "next/image";
import Form from "./Form";

const SignUp = () => {
  return (
    <div className="relative flex justify-center min-h-[calc(100vh-64px)] py-10 px-4">
      <Image
        alt="background"
        src={"/registerBg.png"}
        fill
        className="-z-10 object-contain"
      />
      <Form />
    </div>
  );
};

export default SignUp;
