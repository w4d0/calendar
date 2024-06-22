import { Injectable } from "@nestjs/common";

@Injectable()
export class TeamModuleService {
  constructor() {}
  async AddTeamMember(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async CreateTeam(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async RemoveTeamMember(args: string): Promise<boolean> {
    throw new Error("Not implemented");
  }
}
