"use server";

import { initialValuesAddUser } from "@/constant/form";
import { db } from "@/lib/db";
import { addUserSchema } from "@/schema/user";
import { errorHandler } from "@/utils/errorHandler";
import { User } from "@prisma/client";
import { revalidatePath } from "next/cache";

export const createUser = async (data: typeof initialValuesAddUser) => {
  try {
    const user = await db.user.create({
      data: {
        ...data,
      },
    });
    revalidatePath("/");
    return user.username;
  } catch (err) {
    errorHandler(err, "Failed to create user");
  }
};
