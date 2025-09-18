import { Module, Global } from '@nestjs/common';
import { IUserRepository } from './user/repositories/contracts/user.repository';
import { UserRepository } from './user/repositories/implementations/user.repository';

@Global()
@Module({
  providers: [
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
  ],
  exports: ['IUserRepository'],
})
export class RepositoriesModule {}
