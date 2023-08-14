import { NestFactory } from '@nestjs/core';
import { M1Module } from './m1.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(M1Module);
  const configService: ConfigService = app.get(ConfigService);
  await app.listen(configService.getOrThrow('PORT'));
}
bootstrap();
