import { Module } from '@nestjs/common';
import { M2Controller } from './m2.controller';
import { M2Service } from './m2.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [M2Controller],
  providers: [M2Service],
})
export class M2Module {}
