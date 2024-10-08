import { Test, TestingModule } from '@nestjs/testing';
import { BandController } from './band.controller';

describe('BandController', () => {
  let controller: BandController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BandController],
    }).compile();

    controller = module.get<BandController>(BandController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(controller.getHello()).toBe([]);
    });
  });
});
