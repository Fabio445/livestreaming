import { Injectable } from '@nestjs/common';
import { CreateChatPrivataDto } from './dto/create-chat-privata.dto';
import { UpdateChatPrivataDto } from './dto/update-chat-privata.dto';

@Injectable()
export class ChatPrivataService {
  create(createChatPrivataDto: CreateChatPrivataDto) {
    return 'This action adds a new chatPrivata';
  }

  findAll() {
    return `This action returns all chatPrivata`;
  }

  findOne(id: number) {
    return `This action returns a #${id} chatPrivata`;
  }

  update(id: number, updateChatPrivataDto: UpdateChatPrivataDto) {
    return `This action updates a #${id} chatPrivata`;
  }

  remove(id: number) {
    return `This action removes a #${id} chatPrivata`;
  }
}
