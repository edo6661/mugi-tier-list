"use client";

import { addTierListSchema } from "@/schema/tierlist";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { initialValuesAddTierlist } from "@/constant/form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Heading } from "@/components/ui/heading";
import ImageUpload from "@/components/ImageUpload";
import Image from "next/image";
import { X } from "lucide-react";
import { CustomInputField } from "@/components/ui/custom/CustomInputField";
import { useEffect, useRef, useState, useTransition } from "react";
import { basicHiddenVars, useBasicVars } from "@/motion";
import { User } from "@prisma/client";
import { useFormState, useFormStatus } from "react-dom";
import { createTierList } from "@/actions/tierlists";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function FormAddTierList({ id, username }: Partial<User>) {
  const router = useRouter();
  const [isDescOpen, setIsDescOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof addTierListSchema>>({
    resolver: zodResolver(addTierListSchema),
    defaultValues: {
      ...initialValuesAddTierlist,
      ownerId: id,
    },
    mode: "onChange",
  });

  const toggleDesc = () => setIsDescOpen((prev) => !prev);

  const { formState, setValue, watch, handleSubmit } = form;

  const onSubmit = (data: z.infer<typeof addTierListSchema>) => {
    startTransition(() =>
      createTierList(data).then((id) => {
        form.reset();
        toast.success(`Tierlist has been Added!`);
        router.push(`/tierlist/${id}`);
      }),
    );
  };

  return (
    <Form {...form}>
      <motion.form
        layout
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto max-w-2xl space-y-2"
      >
        <Heading as="h1">Add Tierlist</Heading>
        <span>{username} is the current user, temp test </span>
        <CustomInputField
          form={form}
          label="Title"
          placeholder="Title..."
          name="title"
          err={formState.errors.title}
        />
        <CustomInputField
          form={form}
          label="OwnerId"
          placeholder="OwnerId..."
          name="ownerId"
          err={formState.errors.ownerId}
          className="hidden"
        />
        <AnimatePresence>
          {isDescOpen && (
            <motion.div layout variants={basicHiddenVars} {...useBasicVars}>
              <CustomInputField
                form={form}
                label="Description"
                placeholder="Description..."
                name="description"
                err={formState.errors.description}
              />
            </motion.div>
          )}
        </AnimatePresence>
        <Button type="button" variant="secondary" onClick={toggleDesc}>
          {isDescOpen ? "Close Description" : "Add Description"}
        </Button>
        {watch("imageUrl") ? (
          <div className="relative ">
            <Image
              src={watch("imageUrl")!}
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
              type="button"
            >
              <X />
            </Button>
          </div>
        ) : (
          <ImageUpload setValue={setValue} />
        )}

        <Button type="submit" disabled={isPending}>
          {isPending ? "Submitting..." : "Submit"}
        </Button>
      </motion.form>
    </Form>
  );
}
