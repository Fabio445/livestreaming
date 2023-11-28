import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';


@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private repo: Repository<User>) { }
  create(createUserDto: CreateUserDto) {
    return this.repo.find();
  }

	findAll(): Promise<User[]> {
		return this.repo.find();
	}

	findOne(idUser: number) {
		return this.repo.findOneBy({ idUser })
	}

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
