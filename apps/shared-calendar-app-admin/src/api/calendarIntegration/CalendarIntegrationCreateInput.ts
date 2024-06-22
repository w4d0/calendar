import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CalendarIntegrationCreateInput = {
  accessToken?: string | null;
  provider?: "Option1" | null;
  refreshToken?: string | null;
  user?: UserWhereUniqueInput | null;
};
