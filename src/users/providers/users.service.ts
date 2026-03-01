import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { GetUsersParamDto } from '../dtos/get-users-param.dto';
import { AuthServices } from 'src/auth/providers/auth.services';
import { Repository } from 'typeorm';
import { User } from '../user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

/**
 * Class to connect to Users table and perform CRUD operations. This is the service layer for users, which contains the business logic for handling user data. It interacts with the database (or any data source) to fetch, create, update, or delete user information.
 */
@Injectable()
export class UsersService {
  constructor(
    /**
     *  Injecting userRepository
     */
    @InjectRepository(User)
    private userRepository: Repository<User>,

    @Inject(forwardRef(() => AuthServices))
    private readonly authServices: AuthServices,
  ) {
    console.log('authServices:', this.authServices);
  }

  public async createUser(createUserDto: CreateUserDto) {
    // Check if user exists with same email
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    // Handle exception

    // Create a new user
    let newUser = this.userRepository.create(createUserDto);
    newUser = await this.userRepository.save(newUser);
    return newUser;
  }

  /**
   * The method to get all users from the database
   */
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

  /**
   * The method to get a user by id from the database
   */
  public findOne(id: GetUsersParamDto['id']) {
    return {
      id,
      firstName: 'John',
      email: 'john@example.com',
    };
  }
}
