import { Module } from "@nestjs/common";
import { TeamModuleService } from "./teammodule.service";
import { TeamModuleController } from "./teammodule.controller";
import { TeamModuleResolver } from "./teammodule.resolver";

@Module({
  controllers: [TeamModuleController],
  providers: [TeamModuleService, TeamModuleResolver],
  exports: [TeamModuleService],
})
export class TeamModuleModule {}
