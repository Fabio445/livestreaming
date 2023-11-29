import { Injectable } from '@nestjs/common';
import { CreatePrivilegiDto } from './dto/create-privilegi.dto';
import { UpdatePrivilegiDto } from './dto/update-privilegi.dto';

@Injectable()
export class PrivilegiService {
  create(createPrivilegiDto: CreatePrivilegiDto) {
    return 'This action adds a new privilegi';
  }

  findAll() {
    return `This action returns all privilegi`;
  }

  findOne(id: number) {
    return `This action returns a #${id} privilegi`;
  }

  update(id: number, updatePrivilegiDto: UpdatePrivilegiDto) {
    return `This action updates a #${id} privilegi`;
  }

  remove(id: number) {
    return `This action removes a #${id} privilegi`;
  }
}
