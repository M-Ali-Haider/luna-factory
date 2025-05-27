import React from "react";
import Image from "next/image";
import Form from "./Form";

const SignUp = () => {
  return (
    <>
      <div className="relative flex justify-center min-h-[calc(100vh-64px)] py-10 px-4">
        <div className="absolute top-0 left-0 right-0 h-screen -z-10">
          <div className="relative size-full">
            <Image
              alt="background"
              src={"/registerBg.png"}
              fill
              className="object-contain"
            />
          </div>
        </div>
        <Form />
      </div>
    </>
  );
};

export default SignUp;
