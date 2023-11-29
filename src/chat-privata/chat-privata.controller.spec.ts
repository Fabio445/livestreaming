import { Test, TestingModule } from '@nestjs/testing';
import { ChatPrivataController } from './chat-privata.controller';
import { ChatPrivataService } from './chat-privata.service';

describe('ChatPrivataController', () => {
  let controller: ChatPrivataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatPrivataController],
      providers: [ChatPrivataService],
    }).compile();

    controller = module.get<ChatPrivataController>(ChatPrivataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
