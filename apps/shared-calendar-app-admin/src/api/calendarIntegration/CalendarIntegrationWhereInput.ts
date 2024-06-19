import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CalendarIntegrationWhereInput = {
  accessToken?: StringNullableFilter;
  id?: StringFilter;
  provider?: "Option1";
  refreshToken?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
