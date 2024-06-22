import { Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

class EventRescheduleInputDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    eventId!: string;

    @Field(() => Date)
    @Type(() => Date)
    newStartTime!: Date;

    @Field(() => Date)
    @Type(() => Date)
    newEndTime!: Date;
}

export { EventRescheduleInputDto as EventRescheduleInputDto };