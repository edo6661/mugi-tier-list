import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";
import { Input } from "../input";
import { cn } from "@/lib/utils";
import { FieldError } from "react-hook-form";
interface Props {
  form: any;
  name: string;
  label: string;
  placeholder: string;
  err: FieldError | undefined;
  className?: string;
  type?: string;
}
export const CustomInputField = ({
  form,
  name,
  label,
  placeholder,
  err,
  className,
  type,
}: Props) => {
  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(className)}>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              className={cn("", {
                "border-destructive ring-offset-destructive  focus-visible:ring-0":
                  err,
              })}
              type={type || "text"}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
