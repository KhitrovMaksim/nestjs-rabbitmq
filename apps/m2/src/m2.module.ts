import { Module } from '@nestjs/common';
import { M2Controller } from './m2.controller';
import { M2Service } from './m2.service';
import { ConfigModule } from '@nestjs/config';
import { RabbitmqModule } from '@app/common';
import { M1_SERVICE } from './constants/m1Service.constant';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    RabbitmqModule.register({ name: M1_SERVICE }),
    RabbitmqModule,
  ],
  controllers: [M2Controller],
  providers: [M2Service],
})
export class M2Module {}
