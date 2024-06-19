import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CalendarIntegrationResolverBase } from "./base/calendarIntegration.resolver.base";
import { CalendarIntegration } from "./base/CalendarIntegration";
import { CalendarIntegrationService } from "./calendarIntegration.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CalendarIntegration)
export class CalendarIntegrationResolver extends CalendarIntegrationResolverBase {
  constructor(
    protected readonly service: CalendarIntegrationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
