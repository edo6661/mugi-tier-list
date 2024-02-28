import { Item } from "@prisma/client";

export interface FormState {
  message?: string;
  fields?: Record<string, string>;
}

export interface TierListItem {
  id: string;
  itemId: string;
  tierListId: string;
  rankId: string | null;
  item: Item;
}
