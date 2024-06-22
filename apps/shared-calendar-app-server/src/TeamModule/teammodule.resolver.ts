import * as graphql from "@nestjs/graphql";
import { TeamModuleService } from "./teammodule.service";

export class TeamModuleResolver {
  constructor(protected readonly service: TeamModuleService) {}

  @graphql.Query(() => String)
  async AddTeamMember(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.AddTeamMember(args);
  }

  @graphql.Query(() => String)
  async CreateTeam(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateTeam(args);
  }

  @graphql.Mutation(() => Boolean)
  async RemoveTeamMember(
    @graphql.Args()
    args: string
  ): Promise<boolean> {
    return this.service.RemoveTeamMember(args);
  }
}
