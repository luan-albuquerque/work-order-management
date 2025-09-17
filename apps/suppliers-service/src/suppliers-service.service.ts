import { Injectable } from '@nestjs/common';

@Injectable()
export class SuppliersServiceService {
  getHello(): string {
    return 'Hello World Suppliers Service!';
  }
}
