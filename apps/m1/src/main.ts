import { NestFactory } from '@nestjs/core';
import { M1Module } from './m1.module';

async function bootstrap() {
  const app = await NestFactory.create(M1Module);
  await app.listen(3000);
}
bootstrap();
