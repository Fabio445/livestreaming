import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";
import { Watch } from "../../watch/entities/watch.entity";

@Entity()
export class Guest {

	@PrimaryGeneratedColumn()
	idGuest: number

	@OneToMany(() => Watch, watch => watch.guest)
	watch: Watch;
}
