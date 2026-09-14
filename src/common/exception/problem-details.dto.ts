import { IsArray, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class ProblemDetailsDto {
  @IsString()
  @IsNotEmpty()
  type!: string;
  @IsString()
  @IsNotEmpty()
  title!: string;
  @IsInt()
  @IsNotEmpty()
  status!: number;
  @IsString()
  @IsNotEmpty()
  detail!: string;
  @IsString()
  @IsNotEmpty()
  instance!: string;
  @IsArray()
  @IsOptional()
  errors?: string[];
}
