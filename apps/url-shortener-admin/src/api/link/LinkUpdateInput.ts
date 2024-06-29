import { AccessLogWhereUniqueInput } from "../accessLog/AccessLogWhereUniqueInput";
import { AccessLogUpdateManyWithoutLinksInput } from "./AccessLogUpdateManyWithoutLinksInput";
import { MetricUpdateManyWithoutLinksInput } from "./MetricUpdateManyWithoutLinksInput";

export type LinkUpdateInput = {
  accessLog?: AccessLogWhereUniqueInput | null;
  accessLogs?: AccessLogUpdateManyWithoutLinksInput;
  expirationDate?: Date | null;
  metrics?: MetricUpdateManyWithoutLinksInput;
  originalUrl?: string | null;
  shortCode?: string | null;
};
