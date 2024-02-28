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
import { UploadDropzone, cn } from "@/lib/utils";
import Image from "next/image";
import ImageUpload from "../ImageUpload";
import { AnimatePresence, motion } from "framer-motion";
import { basicHiddenVars, useBasicVars } from "@/motion";
import { X } from "lucide-react";
import FooterModal from "../modal/FooterModal";

interface FormAddUserProps {
  falseIsOpen: () => void;
}

const FormAddUser = ({ falseIsOpen }: FormAddUserProps) => {
  const [isPending, startTransition] = useTransition();

  const { register, handleSubmit, formState, reset, setValue, watch } = useForm<
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

  return (
    <motion.form layout className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-3">
        <Label
          htmlFor="username"
          className={cn("", {
            "text-destructive": formState.errors.username,
          })}
        >
          Username
        </Label>
        <Input
          id="Username"
          {...register("username")}
          placeholder="username"
          className={cn("", {
            "border-destructive ring-offset-destructive  focus-visible:ring-0":
              formState.errors.username,
          })}
        />
        <AnimatePresence>
          {formState.errors.username && (
            <motion.p
              className="text-sm text-red-500"
              variants={basicHiddenVars}
              {...useBasicVars}
            >
              {formState.errors.username.message}
            </motion.p>
          )}
        </AnimatePresence>

        {formState.errors.imageUrl && (
          <p className="text-sm text-red-500">
            {formState.errors.imageUrl.message}
          </p>
        )}

        {watch("imageUrl") ? (
          <div className="relative ">
            <Image
              src={watch("imageUrl")}
              alt="Uploaded Image"
              className="mx-auto max-h-[240px] rounded-xl "
              width={240}
              height={164}
            />
            <Button
              size="icon"
              variant="destructive"
              className="absolute right-4 top-4 "
              onClick={() => setValue("imageUrl", "")}
            >
              <X />
            </Button>
          </div>
        ) : (
          <ImageUpload setValue={setValue} />
        )}
      </div>

      <FooterModal isPending={isPending} />
    </motion.form>
  );
};

export default FormAddUser;
