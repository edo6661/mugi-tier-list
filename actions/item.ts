"use server";
import { z } from "zod";
import { addItemSchema } from "@/schema/item";
import { errorHandler } from "@/utils/errorHandler";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
export const createItem = async (data: z.infer<typeof addItemSchema>) => {
  try {
    const item = await db.item.create({
      data: {
        imageUrl: data.imageUrl,
      },
    });
    const tierlistItem = await db.tierListItem.create({
      data: {
        itemId: item.id,
        tierListId: data.tierlistId,
      },
      include: {
        tierList: true,
      },
    });

    revalidatePath(`/tierlist/${data.tierlistId}`);

    return tierlistItem.tierList.title;
  } catch (err) {
    errorHandler(err, "Failed to create item");
  }
};

export const deleteItem = async (itemId: string, tierlistId: string) => {
  try {
    await db.item.delete({
      where: {
        id: itemId,
      },
    });
    revalidatePath(`/tierlist/${tierlistId}`);
  } catch (err) {
    errorHandler(err, "Failed to delete item");
  }
};
