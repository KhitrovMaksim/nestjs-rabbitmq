import { Inject, Injectable, Logger } from '@nestjs/common';
import { M2_SERVICE } from './constants/m2Service.constant';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class M1Service {
  private readonly logger = new Logger(M1Service.name);
  constructor(@Inject(M2_SERVICE) private m2Client: ClientProxy) {}

  async getHello() {
    try {
      this.logger.log('M1 service emit get_hello');
      await lastValueFrom(
        this.m2Client.emit('get_hello', {
          GET: 'get_hello',
        }),
      );
    } catch (error) {
      throw error;
    }
  }

  responseHello() {
    this.logger.log('M1 service catch response_hello');
  }
}
