import { axiosInstance } from "@/utils/axios";
import axios from "axios";

export const getProductsByCategory = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/api/product/category/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Failed to get factory data");
    }
    throw error;
  }
};
