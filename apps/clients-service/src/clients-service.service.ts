import { Injectable } from '@nestjs/common';

@Injectable()
export class ClientsServiceService {
  getHello(): string {
    return 'Hello World Clients Service!';
  }
}
