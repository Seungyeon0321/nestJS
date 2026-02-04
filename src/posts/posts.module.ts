import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './providers/posts.service';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [PostsController],
  // second step - provide (connect service to controller)
  providers: [PostsService],
  imports: [UsersModule],
})
export class PostsModule {}
