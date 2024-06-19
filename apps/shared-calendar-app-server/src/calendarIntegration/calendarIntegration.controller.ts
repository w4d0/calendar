import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CalendarIntegrationService } from "./calendarIntegration.service";
import { CalendarIntegrationControllerBase } from "./base/calendarIntegration.controller.base";

@swagger.ApiTags("calendarIntegrations")
@common.Controller("calendarIntegrations")
export class CalendarIntegrationController extends CalendarIntegrationControllerBase {
  constructor(
    protected readonly service: CalendarIntegrationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
