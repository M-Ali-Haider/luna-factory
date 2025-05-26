import { toggleInterest } from "@/actions/factory/action";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AlertCircle, Heart, Loader2 } from "lucide-react";
import { toast } from "sonner";

const Interested = ({
  id,
  isInterested,
  isLoading,
  isError,
}: {
  id: string;
  isInterested: boolean;
  isLoading: boolean;
  isError: boolean;
}) => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: () => toggleInterest(id),
    onSuccess: (data) => {
      toast.success(data.message || "");
      queryClient.invalidateQueries({ queryKey: ["checkInterested", id] });
    },
    onError: (error) => {
      toast.error(
        error?.message || "An error occurred while toggling interest."
      );
    },
  });

  return (
    <>
      {isError ? (
        <div className="size-9 rounded-full bg-red-100 flex items-center justify-center text-red-500 animate-pulse">
          <AlertCircle size={18} />
        </div>
      ) : isLoading || mutation.isPending ? (
        <div className="size-9 rounded-full flex items-center justify-center animate-spin text-gray-500">
          <Loader2 size={18} />
        </div>
      ) : (
        <button
          onClick={() => mutation.mutate()}
          className={`${
            isInterested ? "text-primary" : "text-black"
          } size-9 rounded-full flex items-center justify-center
          hover:bg-black/10 cursor-pointer`}
        >
          <Heart fill={isInterested ? "currentColor" : "none"} />
        </button>
      )}
    </>
  );
};

export default Interested;

export const InterestedDisabled = () => (
  <button
    className={`text-black size-9 rounded-full flex items-center justify-center
    hover:bg-black/10 cursor-not-allowed`}
  >
    <Heart />
  </button>
);
