import { Test, TestingModule } from '@nestjs/testing';
import { SuppliersServiceController } from './suppliers-service.controller';
import { SuppliersServiceService } from './suppliers-service.service';

describe('SuppliersServiceController', () => {
  let suppliersServiceController: SuppliersServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SuppliersServiceController],
      providers: [SuppliersServiceService],
    }).compile();

    suppliersServiceController = app.get<SuppliersServiceController>(SuppliersServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(suppliersServiceController.getHello()).toBe('Hello World!');
    });
  });
});
