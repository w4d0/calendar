import { EventUpdateManyWithoutTeamsInput } from "./EventUpdateManyWithoutTeamsInput";
import { TeamMemberUpdateManyWithoutTeamsInput } from "./TeamMemberUpdateManyWithoutTeamsInput";

export type TeamUpdateInput = {
  events?: EventUpdateManyWithoutTeamsInput;
  teamMembers?: TeamMemberUpdateManyWithoutTeamsInput;
};
