import { LinkWhereUniqueInput } from "../link/LinkWhereUniqueInput";

export type MetricCreateInput = {
  link?: LinkWhereUniqueInput | null;
  timestamp?: Date | null;
  totalAccesses?: number | null;
};
