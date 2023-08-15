import { NestFactory } from '@nestjs/core';
import { M1Module } from './m1.module';
import { ConfigService } from '@nestjs/config';
import { RabbitmqService } from '@app/common';
import { RmqOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(M1Module);
  const rabbitmqService = app.get<RabbitmqService>(RabbitmqService);
  app.connectMicroservice<RmqOptions>(rabbitmqService.getOptions('M1', false));
  await app.startAllMicroservices();
  const configService: ConfigService = app.get(ConfigService);
  await app.listen(configService.getOrThrow('PORT'));
}
bootstrap();
