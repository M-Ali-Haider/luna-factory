import { axiosInstance } from "@/utils/axios";
import axios from "axios";

export const submitQuestionaire = async (
  name: string,
  email: string,
  phoneNumber: string,
  country: string,
  annualPurchasingVolume: string,
  hasCurrentBusiness: string,
  personalGoal: string
) => {
  try {
    const response = await axiosInstance.post(`/api/question/submit`, {
      name,
      email,
      phoneNumber,
      country,
      annualPurchasingVolume,
      hasCurrentBusiness,
      personalGoal,
    });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data || new Error("Failed to Submit Questionaire");
    }
    throw error;
  }
};
