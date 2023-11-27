import { Controller, Get, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';


@Controller('users')
export class UserController {
	constructor(private userService: UserService){}	



	// path
	@Get()
	getAll(){
		//  chiamare servizio
		// return this.userService.find()
	}
	
	@Get('/:id')
	getOne(@Param('id') id: number){
		//  chiamare servizio
		return this.userService.findOne(id)
	}

	// LOGIN

	// REGISTER

	// LOGOUT

	// REMOVE
	@Delete('/:id')
	removeUser(){}
}
