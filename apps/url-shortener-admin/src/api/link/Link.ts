import { AccessLog } from "../accessLog/AccessLog";
import { Metric } from "../metric/Metric";

export type Link = {
  accessLog?: AccessLog | null;
  accessLogs?: Array<AccessLog>;
  createdAt: Date;
  expirationDate: Date | null;
  id: string;
  metrics?: Array<Metric>;
  originalUrl: string | null;
  shortCode: string | null;
  updatedAt: Date;
};
