import { CalendarIntegrationCreateNestedManyWithoutUsersInput } from "./CalendarIntegrationCreateNestedManyWithoutUsersInput";
import { MeetingCreateNestedManyWithoutUsersInput } from "./MeetingCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TeamMemberCreateNestedManyWithoutUsersInput } from "./TeamMemberCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  calendarIntegrations?: CalendarIntegrationCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  meetings?: MeetingCreateNestedManyWithoutUsersInput;
  name?: string | null;
  password: string;
  roles: InputJsonValue;
  teamMembers?: TeamMemberCreateNestedManyWithoutUsersInput;
  username: string;
};
