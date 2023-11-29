import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChatPrivataService } from './chat-privata.service';
import { CreateChatPrivataDto } from './dto/create-chat-privata.dto';
import { UpdateChatPrivataDto } from './dto/update-chat-privata.dto';

@Controller('chat-privata')
export class ChatPrivataController {
  constructor(private readonly chatPrivataService: ChatPrivataService) {}

  @Post()
  create(@Body() createChatPrivataDto: CreateChatPrivataDto) {
    return this.chatPrivataService.create(createChatPrivataDto);
  }

  @Get()
  findAll() {
    return this.chatPrivataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chatPrivataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChatPrivataDto: UpdateChatPrivataDto) {
    return this.chatPrivataService.update(+id, updateChatPrivataDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chatPrivataService.remove(+id);
  }
}
