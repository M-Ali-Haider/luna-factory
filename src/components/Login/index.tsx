import Image from "next/image";
import Form from "./Form";
import MemberShip from "./MemberShip";
import ThankYou from "./ThankYou";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)] pb-10 bg-primary">
      <Image
        alt="background"
        src={"/homepage.png"}
        fill
        className="object-contain z-[1]"
        loading="eager"
      />

      <div className="relative z-[2] flex flex-col md:flex-row px-4 gap-4">
        <Form />
        <div className="flex flex-col gap-4">
          <MemberShip />
          <ThankYou />
        </div>
      </div>
    </div>
  );
};

export default Login;
