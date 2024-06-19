import { Module } from "@nestjs/common";
import { CalendarModuleService } from "./calendarmodule.service";
import { CalendarModuleController } from "./calendarmodule.controller";
import { CalendarModuleResolver } from "./calendarmodule.resolver";

@Module({
  controllers: [CalendarModuleController],
  providers: [CalendarModuleService, CalendarModuleResolver],
  exports: [CalendarModuleService],
})
export class CalendarModuleModule {}
