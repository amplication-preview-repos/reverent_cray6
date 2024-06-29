import { LinkWhereUniqueInput } from "../link/LinkWhereUniqueInput";
import { LinkCreateNestedManyWithoutAccessLogsInput } from "./LinkCreateNestedManyWithoutAccessLogsInput";

export type AccessLogCreateInput = {
  browserName?: string | null;
  browserVersion?: string | null;
  link?: LinkWhereUniqueInput | null;
  links?: LinkCreateNestedManyWithoutAccessLogsInput;
  osName?: string | null;
  osVersion?: string | null;
  timestamp?: Date | null;
};
