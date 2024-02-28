"use server";
import { initialValuesAddTierlist } from "@/constant/form";
import { db } from "@/lib/db";
import { addTierListSchema } from "@/schema/tierlist";
import { FormState } from "@/types";
import { errorHandler } from "@/utils/errorHandler";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export const createTierList = async (
  data: z.infer<typeof addTierListSchema>,
) => {
  try {
    const tierlist = await db.tierList.create({
      data: {
        ...data,
      },
    });
    revalidatePath("/");
    revalidatePath("/tierlists");
    return tierlist.id;
  } catch (err) {
    errorHandler(err, "Failed to create tierlist");
  }
};
