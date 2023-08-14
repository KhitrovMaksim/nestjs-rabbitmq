import { Test, TestingModule } from '@nestjs/testing';
import { M1Controller } from './m1.controller';
import { M1Service } from './m1.service';

describe('M1Controller', () => {
  let m1Controller: M1Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [M1Controller],
      providers: [M1Service],
    }).compile();

    m1Controller = app.get<M1Controller>(M1Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(m1Controller.getHello()).toBe('Hello World!');
    });
  });
});
