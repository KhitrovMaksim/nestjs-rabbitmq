import { Module } from '@nestjs/common';
import { M1Controller } from './m1.controller';
import { M1Service } from './m1.service';
import { ConfigModule } from '@nestjs/config';
import { RabbitmqModule } from '@app/common';
import { M2_SERVICE } from './constants/m2Service.constant';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    RabbitmqModule.register({ name: M2_SERVICE }),
    RabbitmqModule,
  ],
  controllers: [M1Controller],
  providers: [M1Service],
})
export class M1Module {}
