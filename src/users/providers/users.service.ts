import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthServices } from 'src/auth/providers/auth.services';

// first step - declare
@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthServices))
    private readonly authServices: AuthServices,
  ) {
    console.log('authServices:', this.authServices);
  }

  public findAll({ limit, page }: { limit: number; page: number }) {
    const isAuth = this.authServices.isAuth();
    console.log('isAuth:', isAuth);
    if (!isAuth) {
      console.log('Unauthorized');
      return [];
    }

    return [
      { id: 1, firstName: 'John', email: 'john@example.com' },
      { id: 2, firstName: 'Jane', email: 'jane@example.com' },
    ];
  }

  public findOne(id: GetUsersParamDto['id']) {
    return {
      id,
      firstName: 'John',
      email: 'john@example.com',
    };
  }
}
