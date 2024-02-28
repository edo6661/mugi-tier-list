import { Heading } from "@/components/ui/heading";
import { TierListItem } from "@/types";
import Image from "next/image";
import React from "react";
import TierlistItem from "./TierlistItem";

export interface TierlistItemsProps {
  items: TierListItem[];
}

const TierlistItems = ({ items }: TierlistItemsProps) => {
  return (
    <>
      {items.length > 0 ? (
        <Heading>Items</Heading>
      ) : (
        <Heading>No items</Heading>
      )}
      <div className="flex flex-wrap gap-8">
        {items.map((item) => (
          <TierlistItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
};

export default TierlistItems;
