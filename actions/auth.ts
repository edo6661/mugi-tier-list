"use server";
import { z } from "zod";
import { registerSchema } from "@/schema/register";
import { errorHandler } from "@/utils/errorHandler";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { loginSchema } from "@/schema/login";

export const onRegister = async (data: z.infer<typeof registerSchema>) => {
  const { password, confirmPassword, username, imageUrl, email } = data;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const existingUser = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return { error: "Email already exists" };
    }

    revalidatePath("/");
    revalidatePath("/login");

    await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        imageUrl,
      },
    });
  } catch (err) {
    errorHandler(err, "Failed to register");
  }
};

export const onLogin = async (data: z.infer<typeof loginSchema>) => {
  const { email, password } = data;
  try {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return { error: "Invalid credentials" };
    }
    const isMatch = await bcrypt.compare(password, user.password!);
    if (!isMatch) {
      return { error: "Invalid credentials" };
    }
    return { message: "Logged in successfully" };
  } catch (err) {
    errorHandler(err, "Failed to login");
  }
};
