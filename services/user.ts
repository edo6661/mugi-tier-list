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

export const getUserById = async (id: string) => {
  try {
    return await db.user.findUnique({
      where: {
        id,
      },
    });
  } catch (err) {
    errorHandler(err, "Failed to fetch user");
  }
};

export const getCurrentUser = async (username?: string) => {
  try {
    return await db.user.findFirst({
      where: {
        username: "edo",
      },
    });
  } catch (err) {
    errorHandler(err, "Failed to fetch current user");
  }
};
