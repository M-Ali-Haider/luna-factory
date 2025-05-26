import {
  getInterestedFactories,
  getMe,
  getRequestsPosted,
} from "@/actions/member-details/actions";
import { useQuery } from "@tanstack/react-query";

interface ResponseData {
  user: {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    isPaid: boolean;
    isBusiness: boolean;
  };
}

export const useMe = () => {
  return useQuery<ResponseData>({
    queryKey: ["me"],
    queryFn: getMe,
    staleTime: 1000 * 60 * 5,
  });
};

export const useInterestedFactories = () => {
  return useQuery({
    queryKey: ["interestedFactories"],
    queryFn: () => getInterestedFactories(),
    staleTime: 1000 * 60 * 5,
  });
};

export const useRequestPost = () => {
  return useQuery({
    queryKey: ["requestsPosted"],
    queryFn: () => getRequestsPosted(),
    staleTime: 1000 * 60 * 5,
  });
};
