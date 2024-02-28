import { z } from "zod";

export const addItemSchema = z.object({
  imageUrl: z.string(),
  tierlistId: z.string(),
});
