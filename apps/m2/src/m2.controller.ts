import { Controller, Get } from '@nestjs/common';
import { M2Service } from './m2.service';

@Controller()
export class M2Controller {
  constructor(private readonly m2Service: M2Service) {}

  @Get()
  getHello(): string {
    return this.m2Service.getHello();
  }
}
