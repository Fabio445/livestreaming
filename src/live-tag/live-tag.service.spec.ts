import { Test, TestingModule } from '@nestjs/testing';
import { LiveTagService } from './live-tag.service';

describe('LiveTagService', () => {
  let service: LiveTagService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiveTagService],
    }).compile();

    service = module.get<LiveTagService>(LiveTagService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
