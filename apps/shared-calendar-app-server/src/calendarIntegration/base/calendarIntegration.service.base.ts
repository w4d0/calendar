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
  CalendarIntegration as PrismaCalendarIntegration,
  User as PrismaUser,
} from "@prisma/client";

export class CalendarIntegrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CalendarIntegrationCountArgs, "select">
  ): Promise<number> {
    return this.prisma.calendarIntegration.count(args);
  }

  async calendarIntegrations(
    args: Prisma.CalendarIntegrationFindManyArgs
  ): Promise<PrismaCalendarIntegration[]> {
    return this.prisma.calendarIntegration.findMany(args);
  }
  async calendarIntegration(
    args: Prisma.CalendarIntegrationFindUniqueArgs
  ): Promise<PrismaCalendarIntegration | null> {
    return this.prisma.calendarIntegration.findUnique(args);
  }
  async createCalendarIntegration(
    args: Prisma.CalendarIntegrationCreateArgs
  ): Promise<PrismaCalendarIntegration> {
    return this.prisma.calendarIntegration.create(args);
  }
  async updateCalendarIntegration(
    args: Prisma.CalendarIntegrationUpdateArgs
  ): Promise<PrismaCalendarIntegration> {
    return this.prisma.calendarIntegration.update(args);
  }
  async deleteCalendarIntegration(
    args: Prisma.CalendarIntegrationDeleteArgs
  ): Promise<PrismaCalendarIntegration> {
    return this.prisma.calendarIntegration.delete(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.calendarIntegration
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
