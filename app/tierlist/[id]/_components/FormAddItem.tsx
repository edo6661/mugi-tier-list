"use client";
import ImageUpload from "@/components/ImageUpload";
import { Button } from "@/components/ui/button";
import { addItemSchema } from "@/schema/item";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import FooterModal from "@/components/modal/FooterModal";
import { z } from "zod";
import { createItem } from "@/actions/item";
import { toast } from "sonner";

interface FormAddItemProps {
  falseIsOpen: () => void;
  id: string;
}

const FormAddItem = ({ falseIsOpen, id }: FormAddItemProps) => {
  const [isPending, startTransition] = React.useTransition();
  const { watch, setValue, handleSubmit, reset } = useForm({
    defaultValues: {
      imageUrl: "",
      tierlistId: id,
    },
    resolver: zodResolver(addItemSchema),
  });
  const onSubmit = (data: z.infer<typeof addItemSchema>) => {
    startTransition(() =>
      createItem(data).then((title) => {
        falseIsOpen();
        reset();
        toast.success(`Item added to ${title}!`);
      }),
    );
  };
  return (
    <motion.form layout onSubmit={handleSubmit(onSubmit)}>
      {id}
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
      <FooterModal isPending={isPending} />
    </motion.form>
  );
};

export default FormAddItem;
