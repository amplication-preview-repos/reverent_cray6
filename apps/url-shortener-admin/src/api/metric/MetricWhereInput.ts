import { StringFilter } from "../../util/StringFilter";
import { LinkWhereUniqueInput } from "../link/LinkWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type MetricWhereInput = {
  id?: StringFilter;
  link?: LinkWhereUniqueInput;
  timestamp?: DateTimeNullableFilter;
  totalAccesses?: IntNullableFilter;
};
