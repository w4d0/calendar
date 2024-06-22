import { Team } from "../team/Team";

export type Event = {
  createdAt: Date;
  endTime: Date | null;
  id: string;
  organizer: string | null;
  startTime: Date | null;
  team?: Team | null;
  title: string | null;
  updatedAt: Date;
};
