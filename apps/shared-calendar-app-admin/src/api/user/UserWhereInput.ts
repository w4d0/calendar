import { CalendarIntegrationListRelationFilter } from "../calendarIntegration/CalendarIntegrationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TeamMemberListRelationFilter } from "../teamMember/TeamMemberListRelationFilter";

export type UserWhereInput = {
  calendarIntegrations?: CalendarIntegrationListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  name?: StringNullableFilter;
  teamMembers?: TeamMemberListRelationFilter;
  username?: StringFilter;
};
