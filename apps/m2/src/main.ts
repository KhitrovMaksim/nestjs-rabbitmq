import { NestFactory } from '@nestjs/core';
import { M2Module } from './m2.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(M2Module);
  const configService: ConfigService = app.get(ConfigService);
  await app.listen(configService.getOrThrow('PORT'));
}
bootstrap();
