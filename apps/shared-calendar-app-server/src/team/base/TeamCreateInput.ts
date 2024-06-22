/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EventCreateNestedManyWithoutTeamsInput } from "./EventCreateNestedManyWithoutTeamsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { TeamMemberCreateNestedManyWithoutTeamsInput } from "./TeamMemberCreateNestedManyWithoutTeamsInput";

@InputType()
class TeamCreateInput {
  @ApiProperty({
    required: false,
    type: () => EventCreateNestedManyWithoutTeamsInput,
  })
  @ValidateNested()
  @Type(() => EventCreateNestedManyWithoutTeamsInput)
  @IsOptional()
  @Field(() => EventCreateNestedManyWithoutTeamsInput, {
    nullable: true,
  })
  events?: EventCreateNestedManyWithoutTeamsInput;

  @ApiProperty({
    required: false,
    type: () => TeamMemberCreateNestedManyWithoutTeamsInput,
  })
  @ValidateNested()
  @Type(() => TeamMemberCreateNestedManyWithoutTeamsInput)
  @IsOptional()
  @Field(() => TeamMemberCreateNestedManyWithoutTeamsInput, {
    nullable: true,
  })
  teamMembers?: TeamMemberCreateNestedManyWithoutTeamsInput;
}

export { TeamCreateInput as TeamCreateInput };
