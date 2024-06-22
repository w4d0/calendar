import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type EventUpdateInput = {
  endTime?: Date | null;
  organizer?: string | null;
  startTime?: Date | null;
  team?: TeamWhereUniqueInput | null;
  title?: string | null;
};
