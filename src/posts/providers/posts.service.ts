import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';
import { CreatePostDto } from '../dtos/create-post.dto';

@Injectable()
export class PostsService {
  // inject users service to get user by id
  constructor(private readonly usersService: UsersService) {}

  public findAll() {
    return [
      { id: 1, title: 'Post 1', content: 'Content 1' },
      { id: 2, title: 'Post 2', content: 'Content 2' },
    ];
  }

  public findOne(id: number) {
    return {
      id,
      title: 'Post 1',
      content: 'Content 1',
    };
  }

  public findByUserId(userId: string) {
    const user = this.usersService.findOne(parseInt(userId));
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return [
      { id: 1, title: 'Post 1', content: 'Content 1', user: user },
      { id: 2, title: 'Post 2', content: 'Content 2', user: user },
    ];
  }

  public createPost(createPostDto: CreatePostDto) {
    return {
      id: 1,
      title: createPostDto.title,
      postType: createPostDto.postType,
      slug: createPostDto.slug,
      status: createPostDto.status,
      content: createPostDto.content || '',
      schema: createPostDto.schema || '',
      featureImageUrl: createPostDto.featureImageUrl || '',
      publishOn: createPostDto.publishOn,
      tags: createPostDto.tags || [],
      metaOptions: createPostDto.metaOptions || [],
    };
  }
}
