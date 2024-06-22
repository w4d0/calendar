import { CalendarIntegrationListRelationFilter } from "../calendarIntegration/CalendarIntegrationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MeetingListRelationFilter } from "../meeting/MeetingListRelationFilter";
import { TeamMemberListRelationFilter } from "../teamMember/TeamMemberListRelationFilter";

export type UserWhereInput = {
  calendarIntegrations?: CalendarIntegrationListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  meetings?: MeetingListRelationFilter;
  name?: StringNullableFilter;
  teamMembers?: TeamMemberListRelationFilter;
  username?: StringFilter;
};
