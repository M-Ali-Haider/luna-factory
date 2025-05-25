import { getProductsByCategory } from "@/actions/products/actions";
import { useQuery } from "@tanstack/react-query";

export const useProducts = (id: string | null) => {
  return useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductsByCategory(id as string),
    enabled: !!id, // Only run if `id` exists
  });
};
