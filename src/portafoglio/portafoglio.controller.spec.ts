import { Test, TestingModule } from '@nestjs/testing';
import { PortafoglioController } from './portafoglio.controller';
import { PortafoglioService } from './portafoglio.service';

describe('PortafoglioController', () => {
  let controller: PortafoglioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PortafoglioController],
      providers: [PortafoglioService],
    }).compile();

    controller = module.get<PortafoglioController>(PortafoglioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
