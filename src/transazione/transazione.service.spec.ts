import { Test, TestingModule } from '@nestjs/testing';
import { TransazioneService } from './transazione.service';

describe('TransazioneService', () => {
  let service: TransazioneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransazioneService],
    }).compile();

    service = module.get<TransazioneService>(TransazioneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
