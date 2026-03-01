import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';

/*
 * User created module
 */

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './users/user.entity';

@Module({
  imports: [UsersModule, PostsModule, AuthModule, TypeOrmModule.forRootAsync({
    imports: [], 
    inject: [],
    useFactory: () => ({
    type: 'postgres',
    entities: [User],
    synchronize: true,
    port: 5432,
    username: 'postgres',
    password: 'Emrehsdl12#',
    host: 'localhost',
    database: 'nestjs-blog',
    })
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
