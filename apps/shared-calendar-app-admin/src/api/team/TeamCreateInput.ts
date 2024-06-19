import { EventCreateNestedManyWithoutTeamsInput } from "./EventCreateNestedManyWithoutTeamsInput";
import { TeamMemberCreateNestedManyWithoutTeamsInput } from "./TeamMemberCreateNestedManyWithoutTeamsInput";

export type TeamCreateInput = {
  events?: EventCreateNestedManyWithoutTeamsInput;
  teamMembers?: TeamMemberCreateNestedManyWithoutTeamsInput;
};
