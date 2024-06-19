/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CalendarIntegration } from "./CalendarIntegration";
import { CalendarIntegrationCountArgs } from "./CalendarIntegrationCountArgs";
import { CalendarIntegrationFindManyArgs } from "./CalendarIntegrationFindManyArgs";
import { CalendarIntegrationFindUniqueArgs } from "./CalendarIntegrationFindUniqueArgs";
import { CreateCalendarIntegrationArgs } from "./CreateCalendarIntegrationArgs";
import { UpdateCalendarIntegrationArgs } from "./UpdateCalendarIntegrationArgs";
import { DeleteCalendarIntegrationArgs } from "./DeleteCalendarIntegrationArgs";
import { User } from "../../user/base/User";
import { CalendarIntegrationService } from "../calendarIntegration.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CalendarIntegration)
export class CalendarIntegrationResolverBase {
  constructor(
    protected readonly service: CalendarIntegrationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "CalendarIntegration",
    action: "read",
    possession: "any",
  })
  async _calendarIntegrationsMeta(
    @graphql.Args() args: CalendarIntegrationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [CalendarIntegration])
  @nestAccessControl.UseRoles({
    resource: "CalendarIntegration",
    action: "read",
    possession: "any",
  })
  async calendarIntegrations(
    @graphql.Args() args: CalendarIntegrationFindManyArgs
  ): Promise<CalendarIntegration[]> {
    return this.service.calendarIntegrations(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => CalendarIntegration, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "CalendarIntegration",
    action: "read",
    possession: "own",
  })
  async calendarIntegration(
    @graphql.Args() args: CalendarIntegrationFindUniqueArgs
  ): Promise<CalendarIntegration | null> {
    const result = await this.service.calendarIntegration(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CalendarIntegration)
  @nestAccessControl.UseRoles({
    resource: "CalendarIntegration",
    action: "create",
    possession: "any",
  })
  async createCalendarIntegration(
    @graphql.Args() args: CreateCalendarIntegrationArgs
  ): Promise<CalendarIntegration> {
    return await this.service.createCalendarIntegration({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => CalendarIntegration)
  @nestAccessControl.UseRoles({
    resource: "CalendarIntegration",
    action: "update",
    possession: "any",
  })
  async updateCalendarIntegration(
    @graphql.Args() args: UpdateCalendarIntegrationArgs
  ): Promise<CalendarIntegration | null> {
    try {
      return await this.service.updateCalendarIntegration({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CalendarIntegration)
  @nestAccessControl.UseRoles({
    resource: "CalendarIntegration",
    action: "delete",
    possession: "any",
  })
  async deleteCalendarIntegration(
    @graphql.Args() args: DeleteCalendarIntegrationArgs
  ): Promise<CalendarIntegration | null> {
    try {
      return await this.service.deleteCalendarIntegration(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async getUser(
    @graphql.Parent() parent: CalendarIntegration
  ): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}