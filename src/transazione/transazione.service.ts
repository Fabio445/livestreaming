import { Injectable } from '@nestjs/common';
import { CreateTransazioneDto } from './dto/create-transazione.dto';
import { UpdateTransazioneDto } from './dto/update-transazione.dto';

@Injectable()
export class TransazioneService {
  create(createTransazioneDto: CreateTransazioneDto) {
    return 'This action adds a new transazione';
  }

  findAll() {
    return `This action returns all transazione`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transazione`;
  }

  update(id: number, updateTransazioneDto: UpdateTransazioneDto) {
    return `This action updates a #${id} transazione`;
  }

  remove(id: number) {
    return `This action removes a #${id} transazione`;
  }
}
