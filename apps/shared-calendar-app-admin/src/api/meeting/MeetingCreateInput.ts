import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MeetingCreateInput = {
  description?: string | null;
  endTime?: Date | null;
  location?: string | null;
  startTime?: Date | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
