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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsDate,
} from "class-validator";
import { LinkWhereUniqueInput } from "../../link/base/LinkWhereUniqueInput";
import { Type } from "class-transformer";
import { LinkUpdateManyWithoutAccessLogsInput } from "./LinkUpdateManyWithoutAccessLogsInput";

@InputType()
class AccessLogUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  browserName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  browserVersion?: string | null;

  @ApiProperty({
    required: false,
    type: () => LinkWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LinkWhereUniqueInput)
  @IsOptional()
  @Field(() => LinkWhereUniqueInput, {
    nullable: true,
  })
  link?: LinkWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => LinkUpdateManyWithoutAccessLogsInput,
  })
  @ValidateNested()
  @Type(() => LinkUpdateManyWithoutAccessLogsInput)
  @IsOptional()
  @Field(() => LinkUpdateManyWithoutAccessLogsInput, {
    nullable: true,
  })
  links?: LinkUpdateManyWithoutAccessLogsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  osName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  osVersion?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timestamp?: Date | null;
}

export { AccessLogUpdateInput as AccessLogUpdateInput };
