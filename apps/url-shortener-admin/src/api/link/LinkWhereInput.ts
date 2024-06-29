import { AccessLogWhereUniqueInput } from "../accessLog/AccessLogWhereUniqueInput";
import { AccessLogListRelationFilter } from "../accessLog/AccessLogListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MetricListRelationFilter } from "../metric/MetricListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LinkWhereInput = {
  accessLog?: AccessLogWhereUniqueInput;
  accessLogs?: AccessLogListRelationFilter;
  expirationDate?: DateTimeNullableFilter;
  id?: StringFilter;
  metrics?: MetricListRelationFilter;
  originalUrl?: StringNullableFilter;
  shortCode?: StringNullableFilter;
};
