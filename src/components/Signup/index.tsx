import React from "react";
import Image from "next/image";
import Form from "./Form";

const SignUp = () => {
  return (
    <div className="relative flex justify-center min-h-[calc(100vh-64px)] py-10">
      <Image
        alt="background"
        src={"/background.jpg"}
        fill
        className="-z-10 object-cover"
      />
      <Form />
    </div>
  );
};

export default SignUp;
