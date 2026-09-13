import { randomUUID } from 'crypto';
import { CreatePlaceDto } from '../dto/create-place.dto';
export class Place {
  id!: string;
  name!: string;
  description!: string;
  category!: string;
  address!: string;
  services: string[] = [];
  status: string = 'ACTIVE';
  averageRating: number = NaN;
  reviewCount: number = 0;
  createdAt: Date;
  updatedAt: Date;
  constructor(createPlaceDto: CreatePlaceDto) {
    this.id = 'plc_' + randomUUID();
    this.name = createPlaceDto.name;
    this.description = createPlaceDto.description;
    this.category = createPlaceDto.category;
    this.address = createPlaceDto.address;
    if (createPlaceDto.services) this.services = createPlaceDto.services;
    if (createPlaceDto.status) this.status = createPlaceDto.status;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
