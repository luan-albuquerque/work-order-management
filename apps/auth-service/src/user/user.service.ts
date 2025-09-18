import { Injectable, Inject } from '@nestjs/common';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import type { IUserRepository } from './repositories/contracts/user.repository';

@Injectable()
export class UserService {
  constructor(
    @Inject('IUserRepository')
    private readonly userRepo: IUserRepository,
  ) {}

  create(dto: CreateUserDto): User {
    return this.userRepo.create(dto);
  }

  findAll(): User[] {
    return this.userRepo.findAll();
  }
}
