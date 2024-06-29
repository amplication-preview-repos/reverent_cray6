import { LinkWhereUniqueInput } from "../link/LinkWhereUniqueInput";

export type MetricUpdateInput = {
  link?: LinkWhereUniqueInput | null;
  timestamp?: Date | null;
  totalAccesses?: number | null;
};
