import React from "react";

const AuthHeading = ({ label }: { label: string }) => {
  return <h1 className="text-3xl sm:text-5xl font-bold">{label}</h1>;
};

export default AuthHeading;
