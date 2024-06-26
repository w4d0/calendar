/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { EventWhereUniqueInput } from "../../event/base/EventWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EventUpdateManyWithoutTeamsInput {
  @Field(() => [EventWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EventWhereUniqueInput],
  })
  connect?: Array<EventWhereUniqueInput>;

  @Field(() => [EventWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EventWhereUniqueInput],
  })
  disconnect?: Array<EventWhereUniqueInput>;

  @Field(() => [EventWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EventWhereUniqueInput],
  })
  set?: Array<EventWhereUniqueInput>;
}

export { EventUpdateManyWithoutTeamsInput as EventUpdateManyWithoutTeamsInput };
