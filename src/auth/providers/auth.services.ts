import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/providers/users.service';

@Injectable()
export class AuthServices {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private readonly usersService: UsersService,
  ) {
    console.log('usersService:', this.usersService);
  }
  public login(email: string, password: string, id: string) {
    const user = this.usersService.findOne(parseInt(id));

    return {
      token: '1234567890',
    };
  }

  public isAuth() {
    return true;
  }
}
