import { z } from "zod";

export const addTierListSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  imageUrl: z.string().optional(),
  description: z.string().optional(),
  ownerId: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
