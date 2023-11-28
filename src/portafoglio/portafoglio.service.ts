import { Injectable } from '@nestjs/common';
import { CreatePortafoglioDto } from './dto/create-portafoglio.dto';
import { UpdatePortafoglioDto } from './dto/update-portafoglio.dto';

@Injectable()
export class PortafoglioService {
  create(createPortafoglioDto: CreatePortafoglioDto) {
    return 'This action adds a new portafoglio';
  }

  findAll() {
    return `This action returns all portafoglio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} portafoglio`;
  }

  update(id: number, updatePortafoglioDto: UpdatePortafoglioDto) {
    return `This action updates a #${id} portafoglio`;
  }

  remove(id: number) {
    return `This action removes a #${id} portafoglio`;
  }
}
