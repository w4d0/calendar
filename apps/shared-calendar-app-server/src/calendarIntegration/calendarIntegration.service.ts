import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CalendarIntegrationServiceBase } from "./base/calendarIntegration.service.base";

@Injectable()
export class CalendarIntegrationService extends CalendarIntegrationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
