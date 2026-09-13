import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePlaceDto {
  @IsString()
  @IsNotEmpty()
  name!: string;
  @IsString()
  @IsNotEmpty()
  description!: string;
  @IsString()
  @IsNotEmpty()
  category!: string;
  @IsString()
  @IsNotEmpty()
  address!: string;
  @IsArray()
  @IsOptional()
  services?: string[];
  @IsString()
  @IsOptional()
  status?: string;
}
