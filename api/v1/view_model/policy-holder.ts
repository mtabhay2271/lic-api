import { mongoose, Ref } from "@typegoose/typegoose";
import { Expose, Type } from "class-transformer";
import {
  isDefined,
  IsDefined,
  IsEmail,
  IsEnum,
  IsMongoId,
  isNotEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from "class-validator";
import { UserModel } from "../models/users";

export class AddViewModel {
  @Expose()
  @IsDefined()
  @IsString()
  name!: string;

  @Expose()
  @IsDefined()
  @IsEmail()
  email!: string;

  @Expose()
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @Type(() => Number)
  contactNumber!: number;

  @Expose()
  @IsMongoId()
  @Type(() => mongoose.Types.ObjectId)
  uplineId?: Ref<UserModel>;
}


