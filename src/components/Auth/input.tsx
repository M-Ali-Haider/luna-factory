"use client";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

interface AuthInputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
  placeholder?: string;
}

const AuthInput: React.FC<AuthInputProps> = ({
  value,
  onChange,
  className,
  type,
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className={cn("relative flex items-center", className)}>
      <input
        type={showPassword ? "text" : type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className={`w-full p-2.5 border border-gray-text rounded-2xl
        placeholder:text-sm ${type === "password" && "pr-9"}`}
      />
      {type === "password" && (
        <div
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 cursor-pointer"
        >
          {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
        </div>
      )}
    </div>
  );
};

export default AuthInput;

{
  /* <Eye /> */
}
{
  /* <EyeOff /> */
}
