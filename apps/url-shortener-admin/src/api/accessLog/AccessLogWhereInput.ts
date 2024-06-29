import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LinkWhereUniqueInput } from "../link/LinkWhereUniqueInput";
import { LinkListRelationFilter } from "../link/LinkListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type AccessLogWhereInput = {
  browserName?: StringNullableFilter;
  browserVersion?: StringNullableFilter;
  id?: StringFilter;
  link?: LinkWhereUniqueInput;
  links?: LinkListRelationFilter;
  osName?: StringNullableFilter;
  osVersion?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
};
