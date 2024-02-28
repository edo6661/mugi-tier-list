import { deleteItem } from "@/actions/item";
import { Button } from "@/components/ui/button";
import { TierListItem } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";
import DeleteItem from "./DeleteItem";
import { Item } from "@prisma/client";

const TierlistItem = ({ item, id }: TierListItem) => {
  return (
    <div className="relative ">
      <Image
        src={item.imageUrl!}
        alt={item.imageUrl!}
        width={240}
        height={164}
      />
      <DeleteItem itemId={item.id} tierlistId={id} />
    </div>
  );
};

export default TierlistItem;
