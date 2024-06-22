import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UserModuleService } from "./usermodule.service";

@swagger.ApiTags("userModules")
@common.Controller("userModules")
export class UserModuleController {
  constructor(protected readonly service: UserModuleService) {}

  @common.Get("/:id/create-user")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateUser(
    @common.Body()
    body: string
  ): Promise<string> {
        return this.service.CreateUser(body);
      }
}
