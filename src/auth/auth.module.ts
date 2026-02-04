import { Module, forwardRef } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthServices } from './providers/auth.services';
import { UsersModule } from 'src/users/users.module';

@Module({
  controllers: [AuthController],
  providers: [AuthServices],
  exports: [AuthServices],
  imports: [forwardRef(() => UsersModule)],
})
export class AuthModule {}
