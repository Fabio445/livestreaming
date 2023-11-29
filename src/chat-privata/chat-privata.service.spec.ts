import { Test, TestingModule } from '@nestjs/testing';
import { ChatPrivataService } from './chat-privata.service';

describe('ChatPrivataService', () => {
  let service: ChatPrivataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatPrivataService],
    }).compile();

    service = module.get<ChatPrivataService>(ChatPrivataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
