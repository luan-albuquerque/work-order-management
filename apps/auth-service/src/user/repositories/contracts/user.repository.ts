import { CreateUserDto } from "../../dto/create-user.dto";
import { User } from "../../entities/user.entity";

export interface IUserRepository {
  create(dto: CreateUserDto): User;
  findAll(): User[];
  findByEmail(email: string): User | undefined;
}
