import { Module } from '@nestjs/common';
import { PortafoglioService } from './portafoglio.service';
import { PortafoglioController } from './portafoglio.controller';

@Module({
  controllers: [PortafoglioController],
  providers: [PortafoglioService],
})
export class PortafoglioModule {}
