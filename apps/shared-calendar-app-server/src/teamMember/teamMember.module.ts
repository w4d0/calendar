import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TeamMemberModuleBase } from "./base/teamMember.module.base";
import { TeamMemberService } from "./teamMember.service";
import { TeamMemberController } from "./teamMember.controller";
import { TeamMemberResolver } from "./teamMember.resolver";

@Module({
  imports: [TeamMemberModuleBase, forwardRef(() => AuthModule)],
  controllers: [TeamMemberController],
  providers: [TeamMemberService, TeamMemberResolver],
  exports: [TeamMemberService],
})
export class TeamMemberModule {}
