import { axiosInstance } from "@/utils/axios";
import axios from "axios";

export const getMe = async () => {
  try {
    const response = await axiosInstance.get(`/api/users/me`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Failed to get me information");
    }
    throw error;
  }
};
