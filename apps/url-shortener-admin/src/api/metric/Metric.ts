import { Link } from "../link/Link";

export type Metric = {
  createdAt: Date;
  id: string;
  link?: Link | null;
  timestamp: Date | null;
  totalAccesses: number | null;
  updatedAt: Date;
};
