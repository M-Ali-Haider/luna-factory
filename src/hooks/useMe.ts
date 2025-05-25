import { getMe } from "@/actions/member-details/actions";
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
