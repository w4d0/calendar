import { CalendarIntegration } from "../calendarIntegration/CalendarIntegration";
import { JsonValue } from "type-fest";
import { TeamMember } from "../teamMember/TeamMember";

export type User = {
  calendarIntegrations?: Array<CalendarIntegration>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  name: string | null;
  roles: JsonValue;
  teamMembers?: Array<TeamMember>;
  updatedAt: Date;
  username: string;
};
