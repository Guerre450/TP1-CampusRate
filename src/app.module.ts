import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PlacesModule } from './places/places.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PlacesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
