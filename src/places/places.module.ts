import { forwardRef, Module } from '@nestjs/common';
import { PlacesService } from './places.service';
import { PlacesController } from './places.controller';
import { RatingsService } from 'src/ratings/ratings.service';
import { RatingsModule } from 'src/ratings/ratings.module';

@Module({
  controllers: [PlacesController],
  providers: [PlacesService, RatingsService],
  exports: [PlacesService],
  imports: [forwardRef(() => RatingsModule)],
})
export class PlacesModule {}
