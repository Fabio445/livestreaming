import { Injectable } from '@nestjs/common';
import { CreateLiveTagDto } from './dto/create-live-tag.dto';
import { UpdateLiveTagDto } from './dto/update-live-tag.dto';

@Injectable()
export class LiveTagService {
  create(createLiveTagDto: CreateLiveTagDto) {
    return 'This action adds a new liveTag';
  }

  findAll() {
    return `This action returns all liveTag`;
  }

  findOne(id: number) {
    return `This action returns a #${id} liveTag`;
  }

  update(id: number, updateLiveTagDto: UpdateLiveTagDto) {
    return `This action updates a #${id} liveTag`;
  }

  remove(id: number) {
    return `This action removes a #${id} liveTag`;
  }
}
