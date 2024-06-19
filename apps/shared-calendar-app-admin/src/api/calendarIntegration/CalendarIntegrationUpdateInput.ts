import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CalendarIntegrationUpdateInput = {
  accessToken?: string | null;
  provider?: "Option1" | null;
  refreshToken?: string | null;
  user?: UserWhereUniqueInput | null;
};
