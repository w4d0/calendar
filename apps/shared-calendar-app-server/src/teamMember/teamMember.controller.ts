import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TeamMemberService } from "./teamMember.service";
import { TeamMemberControllerBase } from "./base/teamMember.controller.base";

@swagger.ApiTags("teamMembers")
@common.Controller("teamMembers")
export class TeamMemberController extends TeamMemberControllerBase {
  constructor(
    protected readonly service: TeamMemberService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
