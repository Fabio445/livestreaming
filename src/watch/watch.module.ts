import { Module } from '@nestjs/common';
import { WatchService } from './watch.service';
import { WatchController } from './watch.controller';

@Module({
  controllers: [WatchController],
  providers: [WatchService],
})
export class WatchModule {}
