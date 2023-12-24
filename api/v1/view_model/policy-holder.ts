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
  @IsString()
  fName: string;
  
  @Expose()
  @IsDefined()
  @IsString()
  mName: string;
  
  @Expose()
  @IsDefined()
  @IsString()
  sName: string;
  
  @Expose()
  @IsDefined()
  @IsString()
  dob: string;
  
  @Expose()
  @IsDefined()  
  @IsNumber()
  @Type(() => Number)
  mob: number;
  
  @Expose()
  @IsDefined()
  @IsEmail()
  @IsString()
  email!: string;
  
  
  @Expose()
  @IsDefined()
  @IsString()
  address: string;
  
  @Expose()
  @IsDefined() 
  @IsNumber()
  @Type(() => Number)
  uid: number;
  
  @Expose()
  @IsDefined()
  @IsString()
  pan: string;
  
  @Expose()
  @IsDefined()
  @IsString()
  edu: string;
  
  @Expose()
  @IsDefined()
  @IsString()
  work: string;
  
  @Expose()
  @IsDefined() 
  @IsNumber()
  @Type(() => Number)
  hight: number;
  
  @Expose()
  @IsDefined() 
  @IsNumber()
  @Type(() => Number)
  weight: number;
  
  @Expose()
  @IsDefined() 
  @IsNumber()
  @Type(() => Number)
  fAge: number;
  
  @Expose()
  @IsDefined() 
  @IsNumber()
  @Type(() => Number)
  mAge: number;
  
  @Expose()
  @IsDefined() 
  @IsNumber()
  @Type(() => Number)
  spAge: number;
  
  @Expose()
  @IsDefined() 
  @IsNumber()
  @Type(() => Number)
  childAge: number;
  
  @Expose()
  @IsDefined()
  @IsNumber()
  @Type(() => Number)
  childAge2: number;
  
  @Expose()
  @IsDefined() 
  @IsNumber()
  @Type(() => Number)
  childAge3: number;
  
  @Expose()
  @IsDefined() 
  @IsNumber()
  @Type(() => Number)
  childAge4: number;
  
  @Expose()
  @IsDefined() 
  @IsNumber()
  @Type(() => Number)
  bAge1: number;
  
  @Expose()
  @IsDefined() 
  @IsNumber()
  @Type(() => Number)
  bAge2: number;
  
  @Expose()
  @IsDefined()
  @IsNumber()
  @Type(() => Number)
  sAge1: number;
  
  @Expose()
  @IsDefined() 
  @IsNumber()
  @Type(() => Number)
  sAge2: number;
  
  @Expose()
  @IsDefined() 
  @IsNumber()
  @Type(() => Number)
  planNo: number;
  
  @Expose()
  @IsDefined() 
  @IsNumber()
  @Type(() => Number)
  amount: number;
  
  @Expose()
  @IsDefined()
  @IsString()
  typeOfEmi: string;
  
  @Expose()
  @IsDefined()
  @IsString()
  bank: string;
  
  @Expose()
  @IsDefined() 
  @IsNumber()
  @Type(() => Number)
  accNo: number;
  
  @Expose()
  @IsDefined()
  @IsString()
  idfscCode: string;
  
  @Expose()
  @IsDefined() 
  @IsNumber()
  @Type(() => Number)
  policyNo: number;
  
  @Expose()
  @IsDefined() 
  @IsNumber()
  @Type(() => Number)
  sumAssured: number;
  
  @Expose()
  @IsDefined() 
  @IsNumber()
  @Type(() => Number)
  nomYear: number;
  
  @Expose()
  @IsDefined()
  @Type(() => Number)
  termRider: number;
  
  @Expose()
  @IsDefined()
  @Type(() => Number)
  slipNun1: number;
  
  @Expose()
  @IsDefined()
  @IsString()
  doc: string;
  
  @Expose()
  @IsDefined()
  @IsString()
  dom: string;
  
  @Expose()
  @IsDefined()
  @IsString()
  dlp: string;
  
  @Expose()
  @IsDefined()
  @IsString()
  nominee: string;
  
  @Expose()
  @IsDefined()
  @IsString()
  uin: string;
  
  @Expose()
  @IsDefined()
  @IsString()
  nextDue: string

  @Expose()
  @IsMongoId()
  @Type(() => mongoose.Types.ObjectId)
  userId?: Ref<UserModel>;
}


