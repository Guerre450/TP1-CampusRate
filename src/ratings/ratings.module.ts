import { Module } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { RatingsController } from './ratings.controller';
import { PlacesService } from 'src/places/places.service';

@Module({
  controllers: [RatingsController],
  providers: [RatingsService, PlacesService],
  imports : [RatingsModule]
})
export class RatingsModule {}
