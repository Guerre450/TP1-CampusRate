import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { RatingsService } from './ratings.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { ProblemDetailsDto } from 'src/common/exception/problem-details.dto';

@ApiTags('Ratings')
@ApiBadRequestResponse({
  description: 'invalid data',
  type: ProblemDetailsDto,
})
@Controller('ratings')
export class RatingsController {
  constructor(private readonly ratingsService: RatingsService) {}

  @ApiOperation({
    summary: 'Finds a rating',
    description: 'Find a rating using a id',
  })
  @ApiParam({
    name: 'id',
    description: 'uuid of the rating',
    format: 'uuid',
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.ratingsService.findOne(id);
  }
  @ApiOperation({
    summary: 'Lists ratings of a place',
    description: 'lists ratings related to a placeId',
  })
  @ApiParam({
    name: 'placeId',
    description: 'uuid of the place',
    format: 'uuid',
  })
  @Get('places/:placeId')
  async findAllOfPlace(@Param('placeId') placeId: string) {
    return await this.ratingsService.findAll(placeId);
  }
  @ApiOperation({
    summary: 'Creates a rating',
    description: 'Creates a rating using a placeId',
  })
  @ApiCreatedResponse({
    description: 'The created rating',
  })
  @Post()
  async create(@Body() createRatingDto: CreateRatingDto) {
    return await this.ratingsService.create(createRatingDto);
  }

  @ApiOperation({
    summary: 'Updates the rating',
    description: "Updates the rating with it's id ",
  })
  @ApiOkResponse({
    description: 'Returns the updated rating',
  })
  @ApiParam({
    name: 'id',
    description: 'uuid of the rating to update',
    format: 'uuid',
  })
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateRatingDto: UpdateRatingDto,
  ) {
    return await this.ratingsService.update(id, updateRatingDto);
  }

  @ApiOperation({
    summary: 'Deletes rating by id',
    description: "Finds a rating by it's id and deletes it",
  })
  @ApiNoContentResponse({
    description: 'No content is displayed for deletion operation',
  })
  @ApiParam({
    name: 'id',
    description: 'uuid of the rating',
    format: 'uuid',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.ratingsService.remove(id);
  }
}
