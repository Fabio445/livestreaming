import { Test, TestingModule } from '@nestjs/testing';
import { PrivilegiController } from './privilegi.controller';
import { PrivilegiService } from './privilegi.service';

describe('PrivilegiController', () => {
  let controller: PrivilegiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrivilegiController],
      providers: [PrivilegiService],
    }).compile();

    controller = module.get<PrivilegiController>(PrivilegiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
