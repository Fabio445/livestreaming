import { Injectable } from '@nestjs/common';
import { CreateCanaleDto } from './dto/create-canale.dto';
import { UpdateCanaleDto } from './dto/update-canale.dto';

@Injectable()
export class CanaleService {
  create(createCanaleDto: CreateCanaleDto) {
    return 'This action adds a new canale';
  }

  findAll() {
    return `This action returns all canale`;
  }

  findOne(id: number) {
    return `This action returns a #${id} canale`;
  }

  update(id: number, updateCanaleDto: UpdateCanaleDto) {
    return `This action updates a #${id} canale`;
  }

  remove(id: number) {
    return `This action removes a #${id} canale`;
  }
}
