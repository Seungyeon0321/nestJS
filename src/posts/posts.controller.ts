import { Controller, Get, Param, Post, Body, Patch } from '@nestjs/common';
import { PostsService } from './providers/posts.service';
import { CreatePostDto } from './dtos/create-post.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { PatchPostDto } from './dtos/patch-post.dto';

//http://localhost:3000/posts

@Controller('posts')
export class PostsController {
  // third step - inject (connect service to controller)
  constructor(private readonly postsService: PostsService) {}

  @Get()
  public getPosts() {
    return this.postsService.findAll();
  }

  @Get(':id')
  public getPost(@Param('id') id: number) {
    return this.postsService.findOne(id);
  }

  @Get('user/:userId')
  public getPostsByUserId(@Param('userId') userId: string) {
    console.log('userId:', userId);
    return this.postsService.findByUserId(userId);
  }

  @Post()
  @ApiOperation({ summary: 'Create a post' })
  @ApiResponse({
    status: 201,
    description: 'The post has been successfully created',
  })
  @ApiBody({
    description: 'Create a post',
    type: CreatePostDto,
    examples: {
      'example 1': {
        value: {
          title: 'Post 1',
          postType: 'post',
          slug: 'post-1-slug',
          status: 'published',
          content: 'Content 1',
          schema: 'schema 1',
          featureImageUrl: 'https://example.com/image.jpg',
          publishOn: new Date().toISOString(),
          tags: ['tag1', 'tag2', 'tag3'],
          metaOptions: [{ key: 'key1', value: 'value1' }],
        },
      },
    },
  })
  public createPost(@Body() createPostDto: CreatePostDto) {
    return this.postsService.createPost(createPostDto);
  }

  @ApiOperation({ summary: 'Update a post' })
  @ApiResponse({
    status: 200,
    description: 'The post has been successfully updated',
  })
  @Patch()
  public updatePost(@Body() patchPostDto: PatchPostDto) {
    console.log(patchPostDto);
  }
}
