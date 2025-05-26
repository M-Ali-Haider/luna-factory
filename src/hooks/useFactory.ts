import {
  checkInterested,
  getFactories,
  getFactoryById,
  getFactoryCategories,
} from "@/actions/factory/action";
import { FactoryInterface } from "@/types/factory";
import { useQuery } from "@tanstack/react-query";

export interface FactoryResponse {
  data: FactoryInterface;
}

export const useFactories = (
  filter: string | null,
  pageSize: number,
  page: number,
  search: string,
  product: string | null
) => {
  return useQuery({
    queryKey: ["factories", filter, pageSize, page, search, product],
    queryFn: () => getFactories(filter, pageSize, page, search, product),
    staleTime: 1000 * 60 * 5,
  });
};

export const useFactory = (id: string) => {
  return useQuery<FactoryResponse>({
    queryKey: ["factory", id],
    queryFn: () => getFactoryById(id),
    enabled: !!id, // Only run if `id` exists
    refetchOnWindowFocus: false,
    retry: false,
  });
};

export const useFactorycategories = () => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: getFactoryCategories,
    staleTime: 1000 * 60 * 5,
  });
};

export const useCheckInterested = (id: string) => {
  return useQuery({
    queryKey: ["checkInterested", id],
    queryFn: () => checkInterested(id),
    enabled: !!id, // Only run if `id` exists
    refetchOnWindowFocus: false,
    refetchOnMount: false, // disable refetch on mount if data is stale
    refetchOnReconnect: false, // disable refetch on reconnect
    refetchInterval: false,
  });
};
