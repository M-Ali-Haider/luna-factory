import { cn } from "@/lib/utils";
import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id?: string;
  className?: string;
  containerClassName?: string;
}

const Input = ({
  label,
  id,
  className,
  containerClassName,
  ...props
}: InputProps) => {
  return (
    <div className={cn(`w-full flex flex-col`, containerClassName)}>
      <label htmlFor={id} className="font-medium w-full">
        {label}
      </label>
      <input
        id={id}
        {...props}
        className={cn(`bg-primary px-4 py-2 rounded-full w-full`, className)}
      />
    </div>
  );
};

export default Input;
