import { Test, TestingModule } from '@nestjs/testing';
import { M2Controller } from './m2.controller';
import { M2Service } from './m2.service';

describe('M2Controller', () => {
  let m2Controller: M2Controller;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [M2Controller],
      providers: [M2Service],
    }).compile();

    m2Controller = app.get<M2Controller>(M2Controller);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(m2Controller.getHello()).toBe('Hello World!');
    });
  });
});
