"use server";

import { db } from "@/lib/db";
import { errorHandler } from "@/utils/errorHandler";

export const getUsers = async () => {
  try {
    return await db.user.findMany();
  } catch (err) {
    errorHandler(err, "Failed to fetch users");
  }
};
