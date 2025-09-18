import { Injectable } from '@nestjs/common';
import { IUserRepository } from '../contracts/user.repository';
import { v4 as uuidv4 } from 'uuid';
import { User } from '../../entities/user.entity';
import { CreateUserDto } from '../../dto/create-user.dto';

@Injectable()
export class UserRepository implements IUserRepository {
  private users: User[] = [];

  create(dto: CreateUserDto): User {
    const user = new User(uuidv4(), dto.name, dto.email, dto.password);
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((u) => u.email === email);
  }
}
