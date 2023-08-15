import { Inject, Injectable, Logger } from '@nestjs/common';
import { M2_SERVICE } from './constants/m2Service.constant';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class M1Service {
  private readonly logger = new Logger(M1Service.name);
  constructor(@Inject(M2_SERVICE) private m2Client: ClientProxy) {}

  async get() {
    try {
      this.logger.log('M1 service added to queue request');
      await lastValueFrom(
        this.m2Client.emit('get', {
          data: 'request',
        }),
      );
    } catch (error) {
      throw error;
    }
  }

  response(data: any) {
    this.logger.log('M1 service caught response', data);
  }
}
