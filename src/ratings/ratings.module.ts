import { forwardRef, Module } from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { RatingsController } from './ratings.controller';
import { PlacesService } from 'src/places/places.service';
import { PlacesModule } from 'src/places/places.module';

@Module({
  controllers: [RatingsController],
  providers: [RatingsService, PlacesService],
  imports: [forwardRef(() => PlacesModule)],
  exports: [RatingsService],
})
export class RatingsModule {}
