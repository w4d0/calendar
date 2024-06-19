import { Injectable } from "@nestjs/common";

@Injectable()
export class UserModuleService {
  constructor() {}
  async CreateUser(args: string): Promise<string> {
    throw new Error("Not implemented");
  }
}
