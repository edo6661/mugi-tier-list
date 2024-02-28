"use client";
import ImageUpload from "@/components/ImageUpload";
import { Button } from "@/components/ui/button";
import { CustomInputField } from "@/components/ui/custom/CustomInputField";
import { Form } from "@/components/ui/form";
import { Heading } from "@/components/ui/heading";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { z } from "zod";
import { registerSchema } from "@/schema/register";
import { initialValuesRegister } from "@/constant/form";
import { onRegister } from "@/actions/auth";
import { toast } from "sonner";

const FormRegister = () => {
  const router = useRouter();
  const [isDescOpen, setIsDescOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      ...initialValuesRegister,
    },
    mode: "onChange",
  });

  const { formState, setValue, watch, handleSubmit } = form;

  const onSubmit = (data: z.infer<typeof registerSchema>) => {
    startTransition(() => {
      onRegister(data).then(() => {
        toast.success("Registered Successfully!");
        router.push("/login");
      });
    });
  };

  return (
    <Form {...form}>
      <motion.form
        layout
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto max-w-2xl space-y-2"
      >
        <Heading as="h1">Register</Heading>
        <CustomInputField
          form={form}
          label="Username"
          placeholder="Username..."
          name="username"
          err={formState.errors.username}
        />
        <CustomInputField
          form={form}
          label="Email"
          placeholder="Email..."
          name="email"
          err={formState.errors.email}
        />
        <CustomInputField
          form={form}
          label="Password"
          placeholder="Password..."
          name="password"
          err={formState.errors.password}
          type="password"
        />
        <CustomInputField
          form={form}
          label="Confirm Password"
          placeholder="Confirm Password..."
          name="confirmPassword"
          err={formState.errors.confirmPassword}
          type="password"
        />

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
};

export default FormRegister;
