/* eslint-disable */
import { Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';

@Injectable()
export class RatingsService {
  async create(placeId : string, createRatingDto: CreateRatingDto) {
    return 'This action adds a new rating';
  }

  async findAll(placeId : string) {
    return `This action returns all ratings`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} rating`;
  }

  async update(id: string, updateRatingDto: UpdateRatingDto) {
    return `This action updates a #${id} rating`;
  }

  async remove(id: string) {
    return `This action removes a #${id} rating`;
  }
}
