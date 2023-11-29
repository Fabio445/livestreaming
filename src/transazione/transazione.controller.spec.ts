import { Test, TestingModule } from '@nestjs/testing';
import { TransazioneController } from './transazione.controller';
import { TransazioneService } from './transazione.service';

describe('TransazioneController', () => {
  let controller: TransazioneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransazioneController],
      providers: [TransazioneService],
    }).compile();

    controller = module.get<TransazioneController>(TransazioneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
