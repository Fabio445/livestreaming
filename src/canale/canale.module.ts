import { Module } from '@nestjs/common';
import { CanaleService } from './canale.service';
import { CanaleController } from './canale.controller';

@Module({
  controllers: [CanaleController],
  providers: [CanaleService],
})
export class CanaleModule {}
