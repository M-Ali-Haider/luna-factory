import Image from "next/image";
import Form from "./Form";
// import MemberShip from "./MemberShip";
// import ThankYou from "./ThankYou";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-64px)] pb-10">
      <Image
        alt="background"
        src={"/background.jpg"}
        fill
        className="-z-10 object-cover"
      />

      <div className="flex items-stretch">
        <Form />
        {/* <div className="flex flex-col gap-4 ml-4">
          <MemberShip />
          <ThankYou />
        </div> */}
      </div>
    </div>
  );
};

export default Login;
