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
  @IsString()
  fName: string;
  
  @Expose()
  @IsString()
  mName: string;
  
  @Expose()
  @IsString()
  sName: string;
  
  @Expose()
  @IsString()
  dob: string;
  
  @Expose()  
  @IsNumber()
  @Type(() => Number)
  mob: number;
  
  @Expose()
  @IsEmail()
  @IsString()
  email!: string;
  
  
  @Expose()
  @IsString()
  address: string;
  
  @Expose() 
  @IsNumber()
  @Type(() => Number)
  uid: number;
  
  @Expose()
  @IsString()
  pan: string;
  
  @Expose()
  @IsString()
  edu: string;
  
  @Expose()
  @IsString()
  work: string;
  
  @Expose() 
  @IsNumber()
  @Type(() => Number)
  hight: number;
  
  @Expose() 
  @IsNumber()
  @Type(() => Number)
  weight: number;
  
  @Expose() 
  @IsNumber()
  @Type(() => Number)
  fAge: number;
  
  @Expose() 
  @IsNumber()
  @Type(() => Number)
  mAge: number;
  
  @Expose() 
  @IsNumber()
  @Type(() => Number)
  spAge: number;
  
  @Expose() 
  @IsNumber()
  @Type(() => Number)
  childAge: number;
  
  @Expose()
  @IsNumber()
  @Type(() => Number)
  childAge2: number;
  
  @Expose() 
  @IsNumber()
  @Type(() => Number)
  childAge3: number;
  
  @Expose() 
  @IsNumber()
  @Type(() => Number)
  childAge4: number;
  
  @Expose() 
  @IsNumber()
  @Type(() => Number)
  bAge1: number;
  
  @Expose() 
  @IsNumber()
  @Type(() => Number)
  bAge2: number;
  
  @Expose()
  @IsNumber()
  @Type(() => Number)
  sAge1: number;
  
  @Expose() 
  @IsNumber()
  @Type(() => Number)
  sAge2: number;
  
  @Expose() 
  @IsNumber()
  @Type(() => Number)
  planNo: number;
  
  @Expose() 
  @IsNumber()
  @Type(() => Number)
  amount: number;
  
  @Expose()
  @IsString()
  typeOfEmi: string;
  
  @Expose()
  @IsString()
  bank: string;

  @Expose()
  @IsString()
  accHolder: string;

  @Expose() 
  @IsNumber()
  @Type(() => Number)
  accNo: number;
  
  @Expose()
  @IsString()
  ifscCode: string;
  
  @Expose() 
  @IsNumber()
  @Type(() => Number)
  policyNo: number;
  
  @Expose() 
  @IsNumber()
  @Type(() => Number)
  sumAssured: number;
  
  @Expose() 
  @IsNumber()
  @Type(() => Number)
  nomYear: number;
  
  @Expose()
  @Type(() => Number)
  termRider: number;
  
  @Expose()
  @Type(() => Number)
  slipNum1: number;
  
  @Expose()
  @Type(() => Number)
  term: number;


  @Expose()
  @Type(() => Number)
  ppt: number;

  @Expose()
  @IsString()
  doc: string;
  
  @Expose()
  @IsString()
  dom: string;
  
  @Expose()
  @IsString()
  dlp: string;
  
  @Expose()
  @IsString()
  nominee: string;
  
  @Expose()
  @IsString()
  uin: string;
  
  @Expose()
  @IsString()
  nextDue: string

  @Expose()
  @IsMongoId()
  @Type(() => mongoose.Types.ObjectId)
  userId?: Ref<UserModel>;
}


