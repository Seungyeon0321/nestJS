import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MinLength,
  IsJSON,
  IsUrl,
  IsISO8601,
  ValidateNested,
} from 'class-validator';
import { CreatePostMetaOptionsDto } from './create-post-meta-options.dto';
import { ApiProperty } from '@nestjs/swagger';

export enum PostType {
  POST = 'post',
  PAGE = 'page',
  STORY = 'story',
  SERIES = 'series',
}

export enum PostStatus {
  DRAFT = 'draft',
  SECHEDULED = 'scheduled',
  REVIEW = 'review',
  PUBLISHED = 'published',
}

export class MetaOption {
  key: string;
  value: string;
}

export class CreatePostDto {
  @ApiProperty({ description: 'The title of the blog post', example: 'Post 1' })
  @IsString()
  @MinLength(4)
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'The type of the post', enum: PostType })
  @IsEnum(PostType)
  @IsNotEmpty()
  postType: PostType;

  @ApiProperty({ description: 'The slug of the post', example: 'post-1-slug' })
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
    message:
      'slug must be in kebab-case format and only contain lowercase letters, numbers and hyphens',
  })
  slug: string;

  @ApiProperty({ description: 'The status of the post', enum: PostStatus })
  @IsString()
  @IsNotEmpty()
  @IsEnum(PostStatus)
  status: PostStatus;

  @ApiProperty({ description: 'The content of the post', example: 'Content 1' })
  @IsString()
  @IsOptional()
  content?: string;

  @ApiProperty({
    description: 'Serialized JSON schema for the post content',
    example: '{"type": "object", "properties": {"key1": {"type": "string"}}}',
  })
  @IsOptional()
  @IsJSON()
  schema?: string;

  @ApiProperty({
    description: 'URL of the featured image for the post',
    example: 'https://example.com/image.jpg',
  })
  @IsUrl()
  @IsOptional()
  featureImageUrl?: string;

  @ApiProperty({
    description: 'The publish on date of the post',
    example: '2026-01-01T00:00:00.000Z',
  })
  @IsISO8601()
  @IsNotEmpty()
  publishOn: Date;

  @ApiProperty({
    description: 'The tags of the post',
    example: ['tag1', 'tag2', 'tag3'],
  })
  @IsArray()
  @IsOptional()
  @IsString({ each: true })
  @MinLength(3, { each: true })
  tags?: string[];

  // to create the nested object, so need to set type as array
  @ApiProperty({
    type: 'array',
    required: false,
    description: 'The meta options of the post',
    items: {
      type: 'object',
      properties: {
        key: {
          type: 'string',
          description:
            'the key can be any string identifier for your meta option',
          example: 'sidebarEnabled',
        },
        value: {
          type: 'string',
          description: 'Any value that you want to save to the key',
          example: true,
        },
      },
    },
    example: [{ key: 'key1', value: 'value1' }],
  })
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreatePostMetaOptionsDto)
  metaOptions?: CreatePostMetaOptionsDto[];
}
