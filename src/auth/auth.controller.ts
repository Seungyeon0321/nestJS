import { Controller } from '@nestjs/common';
import { AuthServices } from './providers/auth.services';

@Controller('auth')
export class AuthController {
  constructor(private readonly authServices: AuthServices) {}
}
