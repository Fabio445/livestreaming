import { Module } from '@nestjs/common';
import { ChatPrivataService } from './chat-privata.service';
import { ChatPrivataController } from './chat-privata.controller';

@Module({
  controllers: [ChatPrivataController],
  providers: [ChatPrivataService],
})
export class ChatPrivataModule {}
