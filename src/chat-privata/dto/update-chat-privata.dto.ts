import { PartialType } from '@nestjs/mapped-types';
import { CreateChatPrivataDto } from './create-chat-privata.dto';

export class UpdateChatPrivataDto extends PartialType(CreateChatPrivataDto) {}
