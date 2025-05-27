import { axiosInstance } from "@/utils/axios";
import axios from "axios";

export const login = async (email: string, password: string) => {
  try {
    const response = await axiosInstance.post(`/api/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Failed to Login");
    }
    throw error;
  }
};

export const register = async (
  name: string,
  email: string,
  password: string,
  phone: string,
  country: string,
  isBusiness: boolean,
  companyName: string | null,
  companyStatus: string | null
) => {
  try {
    const response = await axiosInstance.post(`/api/users/register`, {
      name,
      email,
      password,
      phone,
      country,
      isBusiness,
      companyName,
      companyStatus,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Failed to Register");
    }
    throw error;
  }
};

export const verifyOTP = async (otp: string, email: string) => {
  try {
    const response = await axiosInstance.post(`/api/users/verify-otp`, {
      email,
      otp,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Failed to Verify OTP");
    }
    throw error;
  }
};

export const resendOTP = async (email: string) => {
  try {
    const response = await axiosInstance.post(`/api/users/send-otp`, {
      email,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Failed to Resend OTP");
    }
    throw error;
  }
};
