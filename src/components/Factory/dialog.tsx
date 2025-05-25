import { factoryForm } from "@/actions/factory/action";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useMutation } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useState } from "react";
import { toast } from "sonner";
import MainButton from "../Button/MainButton";
import Input from "../InputField/Input";
import { AuthErrorResponse } from "../Login/Form";
import { useSession } from "next-auth/react";

interface MutationParams {
  message: string;
  categories: string;
  name: string;
  userId: string;
}

const FactoryDialog = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { data: session, status } = useSession();

  const [message, setMessage] = useState("");
  const [categories, setCategories] = useState("");
  const [name, setName] = useState("");

  const mutation = useMutation({
    mutationFn: async ({ message, categories, name, userId }: MutationParams) =>
      factoryForm(message, categories, name, userId),
    onSuccess: () => {
      toast.success("Form submitted successfully");
    },
    onError: (error: unknown) => {
      const err = error as AuthErrorResponse;
      toast.error(err?.error || "Form submission Failed");
    },
  });

  const disabled = categories === "" || name === "";

  const handleSubmit = () => {
    if (status !== "authenticated" || !session.user.id) {
      toast.error("You must be logged in to post a category");
      return;
    }
    mutation.mutate({ message, categories, name, userId: session.user.id });
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
          <Input
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Input
            label="Categories"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          />
          <Input
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
