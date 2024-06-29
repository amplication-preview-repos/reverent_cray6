import { LinkWhereUniqueInput } from "../link/LinkWhereUniqueInput";
import { LinkUpdateManyWithoutAccessLogsInput } from "./LinkUpdateManyWithoutAccessLogsInput";

export type AccessLogUpdateInput = {
  browserName?: string | null;
  browserVersion?: string | null;
  link?: LinkWhereUniqueInput | null;
  links?: LinkUpdateManyWithoutAccessLogsInput;
  osName?: string | null;
  osVersion?: string | null;
  timestamp?: Date | null;
};
