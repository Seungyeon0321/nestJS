import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  MinLength,
  IsNotEmpty,
  MaxLength,
  Matches,
  IsOptional,
  IsJSON,
  IsUrl,
} from 'class-validator';

export class CreateTagDto {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  @IsNotEmpty()
  @MaxLength(256)
  name: string;

  @ApiProperty({ description: 'The slug of the post', example: 'post-1-slug' })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'slug must be in kebab-case format and only contain lowercase letters, numbers and hyphens',
  })
  @MaxLength(256)
  slug: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsJSON()
  schema?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsUrl()
  @MaxLength(1024)
  featureImageUrl?: string;
}
