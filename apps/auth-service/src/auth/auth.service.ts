import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../user/dto/create-user.dto';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  private users: User[] = [];

  constructor(private readonly jwtService: JwtService) {}

  async register(dto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const newUser: User = {
      id: Date.now().toString(),
      name: dto.name,
      password: hashedPassword,
      email: 'user',
    };
    this.users.push(newUser);
    return { message: 'Usuário registrado com sucesso', userId: newUser.id };
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = this.users.find((u) => u.name === username);

    if (user && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return { message: 'Erro ao logar' };
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
