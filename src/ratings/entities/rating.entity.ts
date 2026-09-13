import { randomUUID } from 'crypto';
import { CreateRatingDto } from '../dto/create-rating.dto';

export class Rating {
  id!: string;
  placeId!: string;
  authorName!: string;
  rating!: number;
  comment!: string;
  createdAt!: Date;
  updatedAt!: Date;

  constructor(createRatingDto: CreateRatingDto) {
    this.id = 'rev_' + randomUUID();
    this.placeId = createRatingDto.placeId;
    this.authorName = createRatingDto.authorName;
    this.rating = createRatingDto.rating;
    this.comment = createRatingDto.comment;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
