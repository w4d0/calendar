import { SortOrder } from "../../util/SortOrder";

export type TeamMemberOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  role?: SortOrder;
  teamId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
