import { axiosInstance } from "@/utils/axios";
import axios from "axios";

export const getFactories = async (
  filter: string | null,
  pageSize: number,
  page: number,
  search: string,
  product: string | null
) => {
  const filterParam = filter ? `filter=${filter}` : "";
  const productParam = product ? `product=${product}` : "";
  const searchParam = search ? `search=${search}` : "";
  const queryParams = [filterParam, searchParam, productParam]
    .filter(Boolean)
    .join("&");
  const queryString = queryParams ? `&${queryParams}` : "";
  const final = `/api/factory?pageSize=${pageSize}${queryString}&page=${page}`;
  console.log(final);
  try {
    const response = await axiosInstance.get(final);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Failed to get factories data");
    }
    throw error;
  }
};

export const getFactoryById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/api/factory/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Failed to get factory data");
    }
    throw error;
  }
};

export const getFactoryCategories = async () => {
  try {
    const response = await axiosInstance.get(`/api/category`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw (
        error.response?.data || new Error("Failed to get factory categories")
      );
    }
    throw error;
  }
};

export const factoryForm = async (
  message: string,
  category: string,
  productName: string,
  userId: string
) => {
  try {
    const response = await axiosInstance.post(`/api/post`, {
      message,
      category,
      productName,
      userId,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Failed to submit form");
    }
    throw error;
  }
};
