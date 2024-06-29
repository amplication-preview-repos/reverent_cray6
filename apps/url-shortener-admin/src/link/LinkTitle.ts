import { Link as TLink } from "../api/link/Link";

export const LINK_TITLE_FIELD = "originalUrl";

export const LinkTitle = (record: TLink): string => {
  return record.originalUrl?.toString() || String(record.id);
};
