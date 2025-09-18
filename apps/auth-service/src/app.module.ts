import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserRepository } from './user/repositories/implementations/user.repository';
import { UserModule } from './user/user.module';

@Module({
  imports: [AuthModule, UserModule],
  providers: [
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
  ],
  exports: ['IUserRepository'],
})
export class AppModule {}
