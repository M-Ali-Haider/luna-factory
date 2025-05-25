import { cn } from "@/lib/utils";
import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id?: string;
  className?: string;
}

const Input = ({ label, id, className, ...props }: InputProps) => {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor={id} className="font-bold w-full">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className={cn(`bg-primary px-4 py-2 rounded-md w-full`, className)}
      />
    </div>
  );
};

export default Input;
