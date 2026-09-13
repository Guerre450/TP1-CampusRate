import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateRatingDto {
  @IsString()
  @IsNotEmpty()
  placeId!: string;
  @IsString()
  @IsNotEmpty()
  authorName!: string;
  @IsInt()
  @IsNumber()
  @IsNotEmpty()
  rating!: number;
  @IsString()
  @IsNotEmpty()
  comment!: string;
}
