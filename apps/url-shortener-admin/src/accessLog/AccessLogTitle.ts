import { AccessLog as TAccessLog } from "../api/accessLog/AccessLog";

export const ACCESSLOG_TITLE_FIELD = "browserName";

export const AccessLogTitle = (record: TAccessLog): string => {
  return record.browserName?.toString() || String(record.id);
};
