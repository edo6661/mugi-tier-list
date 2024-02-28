import { db } from "@/lib/db";
import { errorHandler } from "@/utils/errorHandler";

export const getTierlistItems = async (tierlistId: string) => {
  try {
    return await db.tierListItem.findMany({
      where: {
        tierListId: tierlistId,
      },
      include: {
        item: true,
      },
    });
  } catch (err) {
    errorHandler(err);
    return [];
  }
};
