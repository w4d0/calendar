import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TeamWhereUniqueInput } from "../team/TeamWhereUniqueInput";

export type EventWhereInput = {
  endTime?: DateTimeNullableFilter;
  id?: StringFilter;
  organizer?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
  team?: TeamWhereUniqueInput;
  title?: StringNullableFilter;
};
