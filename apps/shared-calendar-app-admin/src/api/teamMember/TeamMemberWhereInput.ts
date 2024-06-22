import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TeamMemberWhereInput = {
  id?: StringFilter;
  role?: StringNullableFilter;
  team?: TeamWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
