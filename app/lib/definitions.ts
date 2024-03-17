import { UUID } from "crypto";

export type Recipe = {
  id: UUID;
  name: string;
  introduction: string;
  link: string;
  image: string;
  created_at: Date;
  views: number;
  parve: "dairy" | "parve" | "meaty" | "unknown";
};
