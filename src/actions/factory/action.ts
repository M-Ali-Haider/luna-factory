import { axiosInstance } from "@/utils/axios";
import axios from "axios";

export class AccessDeniedError extends Error {
  data: {
    name: string;
    category: {
      name: string;
    };
    mainImage?: string;
  };

  constructor(data: AccessDeniedError["data"]) {
    super("Access Denied");
    this.name = "AccessDeniedError";
    this.data = data;
  }
}

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

// export const getFactoryById = async (id: string) => {
//   try {
//     const response = await axiosInstance.get(`/api/factory/${id}`);
//     return response.data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       throw error.response?.data || new Error("Failed to get factory data");
//     }
//     throw error;
//   }
// };

// export const getFactoryById = async (id: string) => {
//   try {
//     const response = await axiosInstance.get(`/api/factory/${id}`);

//     // Detect access denied from backend response
//     if (
//       response.data?.success === false &&
//       response.data?.message === "Access Denied"
//     ) {
//       const error: any = new Error("Access Denied");
//       error.name = "AccessDeniedError";
//       error.data = response.data.data; // publicData from backend
//       throw error;
//     }

//     return response.data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       throw error.response?.data || new Error("Failed to get factory data");
//     }
//     throw error;
//   }
// };

export const getFactoryById = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/api/factory/${id}`);

    if (
      response.data?.success === false &&
      response.data?.message === "Access Denied"
    ) {
      throw new AccessDeniedError(response.data.data);
    }

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

export const checkInterested = async (factoryId: string) => {
  try {
    const response = await axiosInstance.get(
      `/api/factory/${factoryId}/interest`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw (
        error.response?.data || new Error("Failed to check interested status")
      );
    }
    throw error;
  }
};

export const toggleInterest = async (id: string) => {
  try {
    const response = await axiosInstance.post(
      `/api/factory/${id}/interest/toggle`
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Failed to submit form");
    }
    throw error;
  }
};
