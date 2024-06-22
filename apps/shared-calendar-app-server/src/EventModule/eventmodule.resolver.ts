import * as graphql from "@nestjs/graphql";
import { EventModuleService } from "./eventmodule.service";

export class EventModuleResolver {
  constructor(protected readonly service: EventModuleService) {}

  @graphql.Query(() => String)
  async CreateEvent(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.CreateEvent(args);
  }

  @graphql.Query(() => String)
  async RescheduleEvent(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.RescheduleEvent(args);
  }
}
