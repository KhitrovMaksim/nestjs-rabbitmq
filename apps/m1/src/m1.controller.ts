import { Controller, Get } from '@nestjs/common';
import { M1Service } from './m1.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RabbitmqService } from '@app/common';

@Controller()
export class M1Controller {
  constructor(
    private readonly m1Service: M1Service,
    private readonly rabbitmqService: RabbitmqService,
  ) {}

  @Get()
  async getHello() {
    await this.m1Service.getHello();
  }

  @EventPattern('response_hello')
  async handleGetHello(@Payload() data: any, @Ctx() context: RmqContext) {
    this.m1Service.responseHello();
    this.rabbitmqService.ack(context);
  }
}
