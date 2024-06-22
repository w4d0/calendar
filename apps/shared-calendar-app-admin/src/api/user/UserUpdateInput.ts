import { CalendarIntegrationUpdateManyWithoutUsersInput } from "./CalendarIntegrationUpdateManyWithoutUsersInput";
import { MeetingUpdateManyWithoutUsersInput } from "./MeetingUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TeamMemberUpdateManyWithoutUsersInput } from "./TeamMemberUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  calendarIntegrations?: CalendarIntegrationUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  meetings?: MeetingUpdateManyWithoutUsersInput;
  name?: string | null;
  password?: string;
  roles?: InputJsonValue;
  teamMembers?: TeamMemberUpdateManyWithoutUsersInput;
  username?: string;
};
