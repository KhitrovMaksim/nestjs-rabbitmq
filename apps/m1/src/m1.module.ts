import { Module } from '@nestjs/common';
import { M1Controller } from './m1.controller';
import { M1Service } from './m1.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [M1Controller],
  providers: [M1Service],
})
export class M1Module {}
