import { CalendarIntegrationUpdateManyWithoutUsersInput } from "./CalendarIntegrationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TeamMemberUpdateManyWithoutUsersInput } from "./TeamMemberUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  calendarIntegrations?: CalendarIntegrationUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  name?: string | null;
  password?: string;
  roles?: InputJsonValue;
  teamMembers?: TeamMemberUpdateManyWithoutUsersInput;
  username?: string;
};
