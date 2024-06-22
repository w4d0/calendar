import { Injectable } from "@nestjs/common";

@Injectable()
export class EventModuleService {
  constructor() {}
  async CreateEvent(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
  async RescheduleEvent(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
