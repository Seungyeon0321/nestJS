import {
  Controller,
  Get,
  Post,
  Param,
  Query,
  Body,
  ParseIntPipe,
  DefaultValuePipe,
  Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiParam, ApiBody, ApiTags } from '@nestjs/swagger';

//http://localhost:3000/users

@Controller('users')
export class UsersController {
  // third step - inject (connect service to controller)
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'The users have been successfully returned' })
  @ApiQuery({ name: 'limit', description: 'The limit of the users to be returned', type: Number, required: false, example: 10 })
  @ApiQuery({ name: 'page', description: 'The page of the users to be returned', type: Number, required: false, example: 1 })
  public getUsers(
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    //
    return this.usersService.findAll({ limit, page });
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by id' })
  @ApiResponse({ status: 200, description: 'The user has been successfully returned' })
  @ApiParam({ name: 'id', description: 'The id of the user to be returned', type: Number, required: true, example: 1 })
  public getUser(@Param() getUsersParamDto: GetUsersParamDto) {
    return this.usersService.findOne(getUsersParamDto.id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a user' })
  @ApiResponse({ status: 201, description: 'The user has been successfully created' })
  @ApiBody({ type: CreateUserDto })
  public createUser(@Body() createUserDto: CreateUserDto): string {
    console.log('body:', createUserDto);
    return 'you sent a post request to users endpoint';
  }

  @Patch()
  @ApiOperation({ summary: 'Update a user' })
  @ApiResponse({ status: 200, description: 'The user has been successfully updated' })
  @ApiBody({ type: PatchUserDto })
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return `you sent a patch request to users endpoint with data: ${JSON.stringify(patchUserDto)}`;
  }
}
