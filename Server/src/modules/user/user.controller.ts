
import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userData) {
    return this.userService.createUser(userData);
  }

  @Get()
  async findAllUsers() {
    return this.userService.findAllUsers();
  }

}