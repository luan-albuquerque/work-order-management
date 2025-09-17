import { Controller, Get } from '@nestjs/common';
import { SuppliersServiceService } from './suppliers-service.service';

@Controller()
export class SuppliersServiceController {
  constructor(private readonly suppliersServiceService: SuppliersServiceService) {}

  @Get()
  getHello(): string {
    return this.suppliersServiceService.getHello();
  }
}
