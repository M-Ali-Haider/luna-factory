import Link from "next/link";
import React from "react";

const Account = ({ isLogin }: { isLogin: boolean }) => {
  return (
    <div className="text-sm">
      {isLogin ? (
        <>
          <span>New here? Create an account&nbsp;</span>
          <Link
            replace
            className="font-medium text-hover-blue hover:text-hover-blue-secondary hover:underline"
            href={"/register"}
          >
            Sign up
          </Link>
        </>
      ) : (
        <>
          <span>Already have an account?&nbsp;</span>
          <Link
            replace
            className="font-medium text-hover-blue hover:text-hover-blue-secondary hover:underline"
            href={"/login"}
          >
            Login
          </Link>
        </>
      )}
    </div>
  );
};

export default Account;
