import { Injectable } from '@nestjs/common';
import { Repository} from "typeorm";

import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
constructor(@InjectRepository(User) private repo: Repository<User>){

}

	// chiamato getAll
	findOne(idUser: number){
// ritornare lista utenti
		return this.repo.findOneBy({idUser})
}

	create(){}

	delete(){

	}
}
