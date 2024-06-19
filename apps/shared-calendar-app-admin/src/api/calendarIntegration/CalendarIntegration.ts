import { User } from "../user/User";

export type CalendarIntegration = {
  accessToken: string | null;
  createdAt: Date;
  id: string;
  provider?: "Option1" | null;
  refreshToken: string | null;
  updatedAt: Date;
  user?: User | null;
};
