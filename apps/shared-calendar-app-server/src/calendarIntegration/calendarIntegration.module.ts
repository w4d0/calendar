import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CalendarIntegrationModuleBase } from "./base/calendarIntegration.module.base";
import { CalendarIntegrationService } from "./calendarIntegration.service";
import { CalendarIntegrationController } from "./calendarIntegration.controller";
import { CalendarIntegrationResolver } from "./calendarIntegration.resolver";

@Module({
  imports: [CalendarIntegrationModuleBase, forwardRef(() => AuthModule)],
  controllers: [CalendarIntegrationController],
  providers: [CalendarIntegrationService, CalendarIntegrationResolver],
  exports: [CalendarIntegrationService],
})
export class CalendarIntegrationModule {}
