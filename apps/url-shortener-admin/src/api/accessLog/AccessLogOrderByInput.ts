import { SortOrder } from "../../util/SortOrder";

export type AccessLogOrderByInput = {
  browserName?: SortOrder;
  browserVersion?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  linkId?: SortOrder;
  osName?: SortOrder;
  osVersion?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
