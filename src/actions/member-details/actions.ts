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

export const getInterestedFactories = async () => {
  try {
    const response = await axiosInstance.get(`/api/factory/interested/user`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw (
        error.response?.data || new Error("Failed to get interested factories")
      );
    }
    throw error;
  }
};

export const getRequestsPosted = async () => {
  try {
    const response = await axiosInstance.get(`/api/post/posts`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw (
        error.response?.data ||
        new Error("Failed to get requests posted by user")
      );
    }
    throw error;
  }
};
