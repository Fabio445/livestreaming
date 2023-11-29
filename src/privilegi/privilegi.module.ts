import { Module } from '@nestjs/common';
import { PrivilegiService } from './privilegi.service';
import { PrivilegiController } from './privilegi.controller';

@Module({
  controllers: [PrivilegiController],
  providers: [PrivilegiService],
})
export class PrivilegiModule {}
