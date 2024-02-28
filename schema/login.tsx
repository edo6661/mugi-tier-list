import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email().min(2, {
    message: "Email must be at least 2 characters long",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 2 characters long",
  }),
});
