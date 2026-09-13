/* eslint-disable */
import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { Rating } from './entities/rating.entity';
import { openJsonDataFile } from 'src/common/json/json-operations';
import { JsonRepository } from 'src/common/repository/json-repository';
import { PlacesService } from 'src/places/places.service';

@Injectable()
export class RatingsService {
constructor(private placesService: PlacesService) {}
  ratingRepo: JsonRepository<Rating>;
  async onModuleInit() {
    this.ratingRepo = new JsonRepository<Rating>(
      await openJsonDataFile(
        process.env.DATA_FILE_PATH ?? '/dammit/',
        'rating.json',
      ),
    );
    await this.ratingRepo.load();
  }
  async onModuleDestroy() {
    await this.ratingRepo.close();
  }


  async create(createRatingDto: CreateRatingDto) {
    if (await this.placesService.findOne(createRatingDto.placeId)){
      const result = await this.ratingRepo.create(new Rating(createRatingDto))
      if (!result.successful){
        throw new BadRequestException("Couldn't create Rating")
      }
      return result.data ?? {}
    }
  }

  async findAll(placeId : string) {
    const result = await this.ratingRepo.listByProperties([{
      propertyName : "placeId",
      value : placeId
    }])
    if (!result.successful){
      throw new InternalServerErrorException("This is never supposed to happen")
    }
    return result.data ?? []
  }

  async findOne(id: string) {
    const result = await this.ratingRepo.findByProperties([{
      propertyName : "id",
      value : id
    }])
    if (!result.successful){
      throw new BadRequestException(`Couldn't find the rating with the provided id : ${id}`)
    }
    return result.data ?? {}
  }

  async update(id: string, updateRatingDto : UpdateRatingDto) {
    const result = await this.ratingRepo.updateByProperties(
      [
        {
          propertyName: 'id',
          value: id,
        },
      ],
      { ...updateRatingDto, updatedAt: new Date() },
    );
    if (!result.successful) {
      throw new BadRequestException(
        `Did not find the rating with the requested id : ${id}`,
      );
    }
    return result.data ?? {};
  }

  async remove(id: string) {
    const result = await this.ratingRepo.deleteByProperties([
      {
        propertyName: 'id',
        value: id,
      },
    ]);
    if (!result.successful) {
      throw new BadRequestException(
        `Couldn't find the requested rating for deletion with the id : ${id} `,
      );
    }
    return '';
  }
}
