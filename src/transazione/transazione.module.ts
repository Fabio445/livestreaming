import { Module } from '@nestjs/common';
import { TransazioneService } from './transazione.service';
import { TransazioneController } from './transazione.controller';

@Module({
  controllers: [TransazioneController],
  providers: [TransazioneService],
})
export class TransazioneModule {}
