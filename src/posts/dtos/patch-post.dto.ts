import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';
import { IsInt, IsNotEmpty } from 'class-validator';

// This DTO is used for updating an existing post. It extends the CreatePostDto and makes all fields optional, except for the id which is required to identify the post to be updated.
export class PatchPostDto extends PartialType(CreatePostDto) {
  @ApiProperty({
    description: 'The unique identifier of the post',
  })
  @IsInt()
  @IsNotEmpty()
  id: number;
}
