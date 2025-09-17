import { Module } from '@nestjs/common';
import { SuppliersServiceController } from './suppliers-service.controller';
import { SuppliersServiceService } from './suppliers-service.service';

@Module({
  imports: [],
  controllers: [SuppliersServiceController],
  providers: [SuppliersServiceService],
})
export class SuppliersServiceModule {}
