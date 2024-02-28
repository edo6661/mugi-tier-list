import { z } from "zod";

export const addUserSchema = z.object({
  username: z.string().trim().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  // ! sebnernya gausah di validasi sih, soalnya udah di validasi sama uploadthing
  imageUrl: z
    .string()
    .refine(
      (val) =>
        val.endsWith(".png") ||
        val.endsWith(".jpg") ||
        val.endsWith(".jpeg") ||
        val.endsWith(".gif") ||
        val.endsWith(".webp"),
      {
        message: "Image must be a .png, .jpg, .jpeg, .gif, or .webp file.",
      },
    ),
});
