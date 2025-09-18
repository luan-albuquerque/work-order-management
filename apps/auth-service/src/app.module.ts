import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserRepository } from './user/repositories/implementations/user.repository';
import { UserModule } from './user/user.module';
import { RepositoriesModule } from './repository.module';

@Module({
  imports: [AuthModule, UserModule, RepositoriesModule],
})
export class AppModule {}
