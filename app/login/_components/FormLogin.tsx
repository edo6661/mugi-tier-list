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
import { Github, X, Youtube } from "lucide-react";
import { z } from "zod";
import { initialValuesLogin } from "@/constant/form";
import { loginSchema } from "@/schema/login";
import { onLogin } from "@/actions/auth";
import { toast } from "sonner";

const FormLogin = () => {
  const router = useRouter();
  const [isDescOpen, setIsDescOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      ...initialValuesLogin,
    },
    mode: "onChange",
  });

  const { formState, handleSubmit } = form;

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    startTransition(() => {
      onLogin(data).then((res) => {
        if (res?.error) {
          toast.error(res.error);
          return;
        }
        toast.success("Logged in Successfully!");
        router.push("/");
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

        <div className="fl-itc gap-4">
          <Button type="submit" disabled={isPending}>
            {isPending ? "Submitting..." : "Submit"}
          </Button>
          <Button variant="ghost">
            <Github size={36} color="green" />
          </Button>
          <Button variant="ghost">
            <Youtube size={36} color="red" />
          </Button>
        </div>
      </motion.form>
    </Form>
  );
};

export default FormLogin;
