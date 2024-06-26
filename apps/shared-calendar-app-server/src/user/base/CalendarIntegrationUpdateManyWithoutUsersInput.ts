/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CalendarIntegrationWhereUniqueInput } from "../../calendarIntegration/base/CalendarIntegrationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CalendarIntegrationUpdateManyWithoutUsersInput {
  @Field(() => [CalendarIntegrationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CalendarIntegrationWhereUniqueInput],
  })
  connect?: Array<CalendarIntegrationWhereUniqueInput>;

  @Field(() => [CalendarIntegrationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CalendarIntegrationWhereUniqueInput],
  })
  disconnect?: Array<CalendarIntegrationWhereUniqueInput>;

  @Field(() => [CalendarIntegrationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CalendarIntegrationWhereUniqueInput],
  })
  set?: Array<CalendarIntegrationWhereUniqueInput>;
}

export { CalendarIntegrationUpdateManyWithoutUsersInput as CalendarIntegrationUpdateManyWithoutUsersInput };
