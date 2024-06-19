import { EventListRelationFilter } from "../event/EventListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { TeamMemberListRelationFilter } from "../teamMember/TeamMemberListRelationFilter";

export type TeamWhereInput = {
  events?: EventListRelationFilter;
  id?: StringFilter;
  teamMembers?: TeamMemberListRelationFilter;
};
