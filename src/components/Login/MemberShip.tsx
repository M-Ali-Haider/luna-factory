import React from "react";

const MemberShip = () => {
  return (
    <div className="bg-secondary text-white h-fit md:w-80 p-4 rounded-2xl shadow-lg shadow-black">
      <h1 className="text-4xl font-extrabold text-primary">
        Exclusive Memebership
      </h1>
      <p className="mb-6">
        Unlock exclusive resources verified{" "}
        <span className="text-primary">by Luna</span>
      </p>

      <div className="flex items-end justify-between">
        <h3>now:</h3>
        <div>
          <p className="line-through text-primary text-center">
            Orignal Price: <span>$39</span>
          </p>
          <h1 className="text-5xl font-extrabold text-primary">
            $9.99<span className="text-base font-medium ">/month</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default MemberShip;
