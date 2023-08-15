import { Controller } from '@nestjs/common';
import { M2Service } from './m2.service';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RabbitmqService } from '@app/common';

@Controller()
export class M2Controller {
  constructor(
    private readonly m2Service: M2Service,
    private readonly rabbitmqService: RabbitmqService,
  ) {}

  @EventPattern('get')
  async handleGetHello(@Payload() data: any, @Ctx() context: RmqContext) {
    await this.m2Service.get(data);
    this.rabbitmqService.ack(context);
  }
}
