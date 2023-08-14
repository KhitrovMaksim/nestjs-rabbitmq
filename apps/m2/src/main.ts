import { NestFactory } from '@nestjs/core';
import { M2Module } from './m2.module';

async function bootstrap() {
  const app = await NestFactory.create(M2Module);
  await app.listen(3000);
}
bootstrap();
