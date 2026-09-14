import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreatePlaceDto {
  @ApiProperty({
    description: 'Name of the place',
    example: 'blibliotheque principale',
  })
  @IsString()
  @IsNotEmpty()
  name!: string;
  @ApiProperty({
    description: 'Description of the place',
    example: 'Espace calme avec prises',
  })
  @IsString()
  @IsNotEmpty()
  description!: string;
  @ApiProperty({
    description: 'Category which the place belongs to',
    examples: [
      'STUDY_SPACE',
      'LIBRARY',
      'FOOD_SERVICE',
      'SPORTS',
      'STUDENT_SERVICE',
      'COMPUTER_LAB',
      'OTHER',
    ],
  })
  @IsString()
  @IsNotEmpty()
  category!: string;
  @ApiProperty({
    description: 'Address of the place',
    example: 'Pavillon A local A-210',
  })
  @IsString()
  @IsNotEmpty()
  address!: string;
  @ApiProperty({
    description: 'services offered by the place',
    example: ['WIFI', 'POWER_OUTLETS'],
  })
  @IsArray()
  @IsOptional()
  services?: string[];
  @ApiProperty({
    description: 'status of the place',
    examples: ['ACTIVE', 'TEMPORARILY_CLOSED', 'INACTIVE'],
  })
  @IsString()
  @IsOptional()
  status?: string;
}
