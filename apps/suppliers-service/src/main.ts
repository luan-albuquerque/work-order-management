import { NestFactory } from '@nestjs/core';
import { SuppliersServiceModule } from './suppliers-service.module';

async function bootstrap() {
  const app = await NestFactory.create(SuppliersServiceModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
