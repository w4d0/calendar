import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { TeamModuleService } from "./teammodule.service";

@swagger.ApiTags("teamModules")
@common.Controller("teamModules")
export class TeamModuleController {
  constructor(protected readonly service: TeamModuleService) {}

  @common.Get("/:id/add-team-member")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async AddTeamMember(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.AddTeamMember(body);
      }

  @common.Get("/:id/create-team")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateTeam(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateTeam(body);
      }

  @common.Delete("/teams/:teamId/members/:memberId")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async RemoveTeamMember(
    @common.Body()
    body: string
  ): Promise<boolean> {
        return this.service.RemoveTeamMember(body);
      }
}
