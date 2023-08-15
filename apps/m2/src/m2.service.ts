import { Inject, Injectable, Logger } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { M1_SERVICE } from './constants/m1Service.constant';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class M2Service {
  private readonly logger = new Logger(M2Service.name);

  constructor(@Inject(M1_SERVICE) private m1Client: ClientProxy) {}

  async get(data: any) {
    this.logger.log('M2 service caught get and emit response', data);
    await lastValueFrom(
      this.m1Client.emit('response', {
        data: 'response',
      }),
    );
  }
}
