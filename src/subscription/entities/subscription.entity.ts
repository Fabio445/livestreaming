import { PrimaryGeneratedColumn, Column, Entity, JoinColumn, ManyToOne, JoinTable, ManyToMany } from "typeorm";
import { Privilegi } from "../../privilegi/entities/privilegi.entity";
import { Canale } from "../../canale/entities/canale.entity";
import { User } from "../../user/entities/user.entity";

@Entity()
export class Subscription {

	@PrimaryGeneratedColumn()
	idSubscription: number

    @ManyToOne(() => User, user => user.subscription)
	@JoinColumn({ name: 'idUser' })
	user: User[];

	@ManyToOne(() => Privilegi, privilegi => privilegi.subscription)
	@JoinColumn({ name: 'idPrivilegi' })
	privilegi: Privilegi[];

	@ManyToOne(() => Canale, canale => canale.subscription)
	@JoinColumn({ name: 'idCanale' })
	canale: Canale[];
}
