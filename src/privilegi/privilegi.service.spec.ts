import { Test, TestingModule } from '@nestjs/testing';
import { PrivilegiService } from './privilegi.service';

describe('PrivilegiService', () => {
  let service: PrivilegiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrivilegiService],
    }).compile();

    service = module.get<PrivilegiService>(PrivilegiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
