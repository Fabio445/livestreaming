import { Test, TestingModule } from '@nestjs/testing';
import { PortafoglioService } from './portafoglio.service';

describe('PortafoglioService', () => {
  let service: PortafoglioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PortafoglioService],
    }).compile();

    service = module.get<PortafoglioService>(PortafoglioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
