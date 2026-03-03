import { Controller, Post, Body } from '@nestjs/common';
import { CreatePostMetaOptionsDto } from './dtos/create-post-meta-options.dto';
import { MetaOptionsService } from './providers/meta-options.service';

@Controller('meta-options')
export class MetaOptionsController {
  // inject
  constructor(private readonly metaOptionsService: MetaOptionsService) {}

  @Post()
  public create(@Body() createPostMetaOptionsDto: CreatePostMetaOptionsDto) {
    return this.metaOptionsService.create(createPostMetaOptionsDto);
  }
}
