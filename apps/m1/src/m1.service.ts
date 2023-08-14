import { Injectable } from '@nestjs/common';

@Injectable()
export class M1Service {
  getHello(): string {
    return 'Hello World!';
  }
}
