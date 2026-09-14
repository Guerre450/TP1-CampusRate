import { ApiProperty } from '@nestjs/swagger';
import {
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class ProblemDetailsDto {
  @ApiProperty({
    description: 'The type of problem',
    example: 'about:blank',
  })
  @IsString()
  @IsNotEmpty()
  type!: string;
  @ApiProperty({
    description: 'The title of the problem',
    example: 'Bad Request',
  })
  @IsString()
  @IsNotEmpty()
  title!: string;
  @ApiProperty({
    description: 'The status of the problem',
    example: 404,
  })
  @IsInt()
  @IsNotEmpty()
  status!: number;
  @ApiProperty({
    description: 'Details of the problem, if any',
    example: 'Did not find the place with the requested id : 22',
  })
  @IsString()
  @IsNotEmpty()
  detail!: string;
  @ApiProperty({
    description: 'Location of the problem',
    example: '/api/v1/places/',
  })
  @IsString()
  @IsNotEmpty()
  instance!: string;
  @ApiProperty({
    description: 'Extra error details, if any',
    example: '[caused by internal server]',
  })
  @IsArray()
  @IsOptional()
  errors?: string[];
}
