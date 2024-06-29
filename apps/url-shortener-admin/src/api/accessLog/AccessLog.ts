import { Link } from "../link/Link";

export type AccessLog = {
  browserName: string | null;
  browserVersion: string | null;
  createdAt: Date;
  id: string;
  link?: Link | null;
  links?: Array<Link>;
  osName: string | null;
  osVersion: string | null;
  timestamp: Date | null;
  updatedAt: Date;
};
