"use client";
import { deleteItem } from "@/actions/item";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import React from "react";
import { toast } from "sonner";
interface DeleteItemProps {
  itemId: string;
  tierlistId: string;
}
const DeleteItem = ({ itemId, tierlistId }: DeleteItemProps) => {
  const onDelete = () => {
    deleteItem(itemId, tierlistId).then(() => {
      toast.success("Item deleted");
    });
  };
  return (
    <Button
      size="icon"
      variant="destructive"
      className="absolute right-0 top-4 "
      onClick={onDelete}
    >
      <X />
    </Button>
  );
};

export default DeleteItem;
