import { AccessLogWhereUniqueInput } from "../accessLog/AccessLogWhereUniqueInput";
import { AccessLogCreateNestedManyWithoutLinksInput } from "./AccessLogCreateNestedManyWithoutLinksInput";
import { MetricCreateNestedManyWithoutLinksInput } from "./MetricCreateNestedManyWithoutLinksInput";

export type LinkCreateInput = {
  accessLog?: AccessLogWhereUniqueInput | null;
  accessLogs?: AccessLogCreateNestedManyWithoutLinksInput;
  expirationDate?: Date | null;
  metrics?: MetricCreateNestedManyWithoutLinksInput;
  originalUrl?: string | null;
  shortCode?: string | null;
};
