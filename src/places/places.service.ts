/* eslint-disable */
import { Injectable } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';

@Injectable()
export class PlacesService {
  async create(createPlaceDto: CreatePlaceDto) {
    return 'This action adds a new place';
  }

  async findAll() {
    return `This action returns all places`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} place`;
  }

  async update(id: number, updatePlaceDto: UpdatePlaceDto) {
    return `This action updates a #${id} place`;
  }

  async remove(id: number) {
    return `This action removes a #${id} place`;
  }
}
