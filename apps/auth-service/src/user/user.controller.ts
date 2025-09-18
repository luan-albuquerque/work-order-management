import { Controller, Get, Body, UseGuards, Request } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('findall')
  async findall() {
    return this.userService.findAll();
  }
}
