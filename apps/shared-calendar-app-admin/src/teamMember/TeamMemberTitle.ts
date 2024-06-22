import { TeamMember as TTeamMember } from "../api/teamMember/TeamMember";

export const TEAMMEMBER_TITLE_FIELD = "role";

export const TeamMemberTitle = (record: TTeamMember): string => {
  return record.role?.toString() || String(record.id);
};
