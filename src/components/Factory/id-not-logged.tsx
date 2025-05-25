"use client";
import React, { useEffect } from "react";
import { Skeleton } from "./id";
import { toast } from "sonner";

const FactoryIdNotLoggedIn = () => {
  useEffect(() => {
    // let toastId: string | number | undefined;
    const toastId = toast.error("Login to access this feature.", {
      duration: Infinity,
      closeButton: true,
    });
    return () => {
      if (toastId) {
        toast.dismiss(toastId);
      }
    };
  }, []);
  return <Skeleton />;
};

export default FactoryIdNotLoggedIn;
