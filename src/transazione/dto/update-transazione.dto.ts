import { PartialType } from '@nestjs/mapped-types';
import { CreateTransazioneDto } from './create-transazione.dto';

export class UpdateTransazioneDto extends PartialType(CreateTransazioneDto) {}
