/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  TeamMember as PrismaTeamMember,
  Team as PrismaTeam,
  User as PrismaUser,
} from "@prisma/client";

export class TeamMemberServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.TeamMemberCountArgs, "select">
  ): Promise<number> {
    return this.prisma.teamMember.count(args);
  }

  async teamMembers(
    args: Prisma.TeamMemberFindManyArgs
  ): Promise<PrismaTeamMember[]> {
    return this.prisma.teamMember.findMany(args);
  }
  async teamMember(
    args: Prisma.TeamMemberFindUniqueArgs
  ): Promise<PrismaTeamMember | null> {
    return this.prisma.teamMember.findUnique(args);
  }
  async createTeamMember(
    args: Prisma.TeamMemberCreateArgs
  ): Promise<PrismaTeamMember> {
    return this.prisma.teamMember.create(args);
  }
  async updateTeamMember(
    args: Prisma.TeamMemberUpdateArgs
  ): Promise<PrismaTeamMember> {
    return this.prisma.teamMember.update(args);
  }
  async deleteTeamMember(
    args: Prisma.TeamMemberDeleteArgs
  ): Promise<PrismaTeamMember> {
    return this.prisma.teamMember.delete(args);
  }

  async getTeam(parentId: string): Promise<PrismaTeam | null> {
    return this.prisma.teamMember
      .findUnique({
        where: { id: parentId },
      })
      .team();
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.teamMember
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
