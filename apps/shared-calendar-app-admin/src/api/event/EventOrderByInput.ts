import { SortOrder } from "../../util/SortOrder";

export type EventOrderByInput = {
  createdAt?: SortOrder;
  endTime?: SortOrder;
  id?: SortOrder;
  organizer?: SortOrder;
  startTime?: SortOrder;
  teamId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
