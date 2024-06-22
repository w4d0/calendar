import { Event } from "../event/Event";
import { TeamMember } from "../teamMember/TeamMember";

export type Team = {
  createdAt: Date;
  events?: Array<Event>;
  id: string;
  teamMembers?: Array<TeamMember>;
  updatedAt: Date;
};
