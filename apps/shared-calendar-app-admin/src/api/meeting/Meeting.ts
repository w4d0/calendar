import { User } from "../user/User";

export type Meeting = {
  createdAt: Date;
  description: string | null;
  endTime: Date | null;
  id: string;
  location: string | null;
  startTime: Date | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
