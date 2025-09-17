import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { LocalStrategy } from './local.strategy';

@Controller('access')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() dto: CreateUserDto) {
    return this.authService.register(dto);
  }

  @UseGuards(LocalStrategy)
  @Post('login')
  async login(@Body() dto: LoginDto) {
    return this.authService.validateUser(dto.username, dto.password);
  }
}
