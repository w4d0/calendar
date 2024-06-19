import * as graphql from "@nestjs/graphql";
import { CalendarModuleService } from "./calendarmodule.service";

export class CalendarModuleResolver {
  constructor(protected readonly service: CalendarModuleService) {}

  @graphql.Query(() => String)
  async SyncCalendars(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.SyncCalendars(args);
  }
}
