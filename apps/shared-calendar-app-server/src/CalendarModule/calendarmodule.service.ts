import { Injectable } from "@nestjs/common";

@Injectable()
export class CalendarModuleService {
  constructor() {}
  async SyncCalendars(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
