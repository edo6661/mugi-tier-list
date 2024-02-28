import { Heading } from "@/components/ui/heading";
import { formatDate } from "@/utils/formatDate";
import { TierList, User } from "@prisma/client";
import Image from "next/image";
import React from "react";

interface TierlistProps extends TierList {
  owner: User;
}

const Tierlist = ({
  title,
  description,
  createdAt,
  owner,
  imageUrl,
}: TierlistProps) => {
  return (
    <div>
      <Heading as="h4" size={"sm"}>
        {title}
      </Heading>
      <p>{description}</p>

      <div className="space-x-2 text-muted-foreground">
        <span>{formatDate(createdAt!)}</span>
        <span>by {owner.username} (you)</span>
      </div>
      <Image
        src={imageUrl!}
        alt={title!}
        width={240}
        height={240}
        className=" rounded-full object-contain"
      />
    </div>
  );
};

export default Tierlist;
