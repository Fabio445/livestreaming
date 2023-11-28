import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class User {
// attirbuti

	@PrimaryGeneratedColumn()
	idUser: number

	@Column()
	username: string

	// TODO add
}

//npx typeorm typeorm-ts-node-migration:generate ciao -d ./src/data-source.ts