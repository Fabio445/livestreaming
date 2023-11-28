import { Test, TestingModule } from '@nestjs/testing';
import { LiveTagController } from './live-tag.controller';
import { LiveTagService } from './live-tag.service';

describe('LiveTagController', () => {
  let controller: LiveTagController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LiveTagController],
      providers: [LiveTagService],
    }).compile();

    controller = module.get<LiveTagController>(LiveTagController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
