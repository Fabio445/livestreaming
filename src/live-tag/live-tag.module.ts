import { Module } from '@nestjs/common';
import { LiveTagService } from './live-tag.service';
import { LiveTagController } from './live-tag.controller';

@Module({
  controllers: [LiveTagController],
  providers: [LiveTagService],
})
export class LiveTagModule {}
