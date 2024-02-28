import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters long",
  }),
  email: z.string().email().min(2, {
    message: "Email must be at least 2 characters long",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters long",
  }),
  confirmPassword: z.string().min(2, {
    message: "Password must be at least 2 characters long",
  }),
  imageUrl: z.string().optional(),
});
