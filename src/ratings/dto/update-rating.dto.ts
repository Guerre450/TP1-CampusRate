import { PartialType } from '@nestjs/mapped-types';
import { CreateRatingDto } from './create-rating.dto';
import { IsEmpty } from 'class-validator';

export class UpdateRatingDto extends PartialType(CreateRatingDto) {
  @IsEmpty()
  placeId?: string;
}
