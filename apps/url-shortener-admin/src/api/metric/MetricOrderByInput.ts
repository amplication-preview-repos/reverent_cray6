import { SortOrder } from "../../util/SortOrder";

export type MetricOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  linkId?: SortOrder;
  timestamp?: SortOrder;
  totalAccesses?: SortOrder;
  updatedAt?: SortOrder;
};
