import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';

@Controller('ratings')
export class RatingsController {
  constructor(private readonly ratingsService: RatingsService) {}

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.ratingsService.findOne(id);
  }
  @Get('places/:place-id')
  async findAllOfPlace(@Param('place-id') placeId: string) {
    return await this.ratingsService.findAll(placeId);
  }

  @Post(':place-id')
  async create(
    @Param('place-id') placeId: string,
    @Body() createRatingDto: CreateRatingDto,
  ) {
    return await this.ratingsService.create(placeId, createRatingDto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRatingDto: UpdateRatingDto,
  ) {
    return await this.ratingsService.update(id, updateRatingDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.ratingsService.remove(id);
  }
}
