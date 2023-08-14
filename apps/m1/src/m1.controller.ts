import { Controller, Get } from '@nestjs/common';
import { M1Service } from './m1.service';

@Controller()
export class M1Controller {
  constructor(private readonly m1Service: M1Service) {}

  @Get()
  getHello(): string {
    return this.m1Service.getHello();
  }
}
