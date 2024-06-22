import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { CalendarModuleService } from "./calendarmodule.service";

@swagger.ApiTags("calendarModules")
@common.Controller("calendarModules")
export class CalendarModuleController {
  constructor(protected readonly service: CalendarModuleService) {}

  @common.Get("/:id/sync-calendars")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async SyncCalendars(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.SyncCalendars(body);
      }
}
