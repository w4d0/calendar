import { Team } from "../team/Team";
import { User } from "../user/User";

export type TeamMember = {
  createdAt: Date;
  id: string;
  role: string | null;
  team?: Team | null;
  updatedAt: Date;
  user?: User | null;
};
