import { factoryForm } from "@/actions/factory/action";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useMutation } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "sonner";
import MainButton from "../Button/MainButton";
import Input from "../InputField/Input";

interface MutationParams {
  message: string;
  category: string;
  name: string;
  userId: string;
}

export interface FactoryDialogInterface {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  categories: { id: string; name: string }[];
  isCategoriesLoading: boolean;
  isCategoriesError: boolean;
}
export type AuthErrorResponse = { message: string };

const FactoryDialog = ({
  open,
  setOpen,
  categories,
  isCategoriesLoading,
  isCategoriesError,
}: FactoryDialogInterface) => {
  const { data: session, status } = useSession();

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const mutation = useMutation({
    mutationFn: async ({ message, category, name, userId }: MutationParams) =>
      factoryForm(message, category, name, userId),
    onSuccess: () => {
      toast.success("Form submitted successfully");
      setOpen(false);
      setMessage("");
      setName("");
      setSelectedCategory("");
    },
    onError: (error: unknown) => {
      const err = error as AuthErrorResponse;
      toast.error(err?.message || "Form submission Failed");
    },
  });

  const disabled = !selectedCategory || name.trim() === "";

  const handleSubmit = () => {
    if (status !== "authenticated" || !session?.user?.id) {
      toast.error("You must be logged in to post a category");
      return;
    }
    mutation.mutate({
      message,
      category: selectedCategory,
      name,
      userId: session.user.id,
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-bold text-3xl">
            Post a Category
          </DialogTitle>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="mt-4 flex flex-col items-center gap-6"
        >
          {/* Category Select Dropdown */}
          <div className="w-full">
            <label className="mb-1 block font-bold text-black">Category</label>
            {isCategoriesLoading ? (
              <div>Loading categories...</div>
            ) : isCategoriesError ? (
              <div>Error loading categories</div>
            ) : (
              <Select
                value={selectedCategory}
                onValueChange={setSelectedCategory}
                disabled={isCategoriesLoading || isCategoriesError}
              >
                <SelectTrigger className="w-full bg-primary">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent className="bg-primary">
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.name}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          </div>

          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className="w-full flex flex-col">
            <label htmlFor={"message"} className="font-bold w-full">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="bg-primary px-4 py-2 rounded-md w-full resize-none"
            />
          </div>

          <MainButton
            isLoading={mutation.isPending}
            label="Post"
            disabled={disabled || mutation.isPending}
          />
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FactoryDialog;
