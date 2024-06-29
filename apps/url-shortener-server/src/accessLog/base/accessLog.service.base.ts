/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  AccessLog as PrismaAccessLog,
  Link as PrismaLink,
} from "@prisma/client";

export class AccessLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AccessLogCountArgs, "select">
  ): Promise<number> {
    return this.prisma.accessLog.count(args);
  }

  async accessLogs(
    args: Prisma.AccessLogFindManyArgs
  ): Promise<PrismaAccessLog[]> {
    return this.prisma.accessLog.findMany(args);
  }
  async accessLog(
    args: Prisma.AccessLogFindUniqueArgs
  ): Promise<PrismaAccessLog | null> {
    return this.prisma.accessLog.findUnique(args);
  }
  async createAccessLog(
    args: Prisma.AccessLogCreateArgs
  ): Promise<PrismaAccessLog> {
    return this.prisma.accessLog.create(args);
  }
  async updateAccessLog(
    args: Prisma.AccessLogUpdateArgs
  ): Promise<PrismaAccessLog> {
    return this.prisma.accessLog.update(args);
  }
  async deleteAccessLog(
    args: Prisma.AccessLogDeleteArgs
  ): Promise<PrismaAccessLog> {
    return this.prisma.accessLog.delete(args);
  }

  async findLinks(
    parentId: string,
    args: Prisma.LinkFindManyArgs
  ): Promise<PrismaLink[]> {
    return this.prisma.accessLog
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .links(args);
  }

  async getLink(parentId: string): Promise<PrismaLink | null> {
    return this.prisma.accessLog
      .findUnique({
        where: { id: parentId },
      })
      .link();
  }
}
