import { SortOrder } from "../../util/SortOrder";

export type LinkOrderByInput = {
  accessLogId?: SortOrder;
  createdAt?: SortOrder;
  expirationDate?: SortOrder;
  id?: SortOrder;
  originalUrl?: SortOrder;
  shortCode?: SortOrder;
  updatedAt?: SortOrder;
};
