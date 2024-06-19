import * as graphql from "@nestjs/graphql";
import { UserModuleService } from "./usermodule.service";

export class UserModuleResolver {
  constructor(protected readonly service: UserModuleService) {}

  @graphql.Query(() => String)
  async CreateUser(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateUser(args);
  }
}
