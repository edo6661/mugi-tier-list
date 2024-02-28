import { db } from "@/lib/db";
import { errorHandler } from "@/utils/errorHandler";

export const getTierLists = async () => {
  try {
    return await db.tierList.findMany({
      include: {
        owner: true,
      },
    });
  } catch (error) {
    errorHandler(error, "Failed to get tierlists");
  }
};

export const getTierlist = async (id: string) => {
  try {
    return await db.tierList.findUnique({
      where: {
        id,
      },
      include: {
        owner: true,
      },
    });
  } catch (error) {
    errorHandler(error, "Failed to get tierlist");
  }
};
