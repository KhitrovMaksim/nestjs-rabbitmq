import { Module } from '@nestjs/common';
import { M2Controller } from './m2.controller';
import { M2Service } from './m2.service';

@Module({
  imports: [],
  controllers: [M2Controller],
  providers: [M2Service],
})
export class M2Module {}
