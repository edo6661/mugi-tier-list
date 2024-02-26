"use client";

import { useTransition } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { initialValuesAddUser } from "@/constant/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { addUserSchema } from "@/schema/user";
import { createUser } from "@/actions/user";
import { toast } from "sonner";
import { useGlobalState } from "@/store/useGlobalState";

const FormAddUser = () => {
  const falseIsOpen = useGlobalState((state) => state.falseIsOpen);
  const [isPending, startTransition] = useTransition();

  const { control, register, handleSubmit, formState, reset } = useForm<
    z.infer<typeof addUserSchema>
  >({
    resolver: zodResolver(addUserSchema),
    defaultValues: {
      ...initialValuesAddUser,
    },
    mode: "onChange",
  });

  const onSubmit = (data: z.infer<typeof addUserSchema>) => {
    startTransition(() =>
      createUser(data).then((name) => {
        toast.success(`User ${name} has been added`);
        falseIsOpen();
        reset();
      }),
    );
  };

  const disabled = isPending || !formState.isValid;

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-2">
        <Label htmlFor="username" className="text-right">
          Username
        </Label>
        <Input id="username" {...register("username")} placeholder="username" />
        {formState.errors.username && (
          <p className="text-sm text-red-500">
            {formState.errors.username.message}
          </p>
        )}
      </div>
      <DialogFooter>
        <Button disabled={disabled}>Submit</Button>
        <DialogClose asChild>
          <Button variant="outline">Close</Button>
        </DialogClose>
      </DialogFooter>
    </form>
  );
};

export default FormAddUser;
