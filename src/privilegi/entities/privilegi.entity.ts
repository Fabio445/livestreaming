import { Subscription } from "../../subscription/entities/subscription.entity";
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";

@Entity()
export class Privilegi {

	@PrimaryGeneratedColumn()
	idPrivilegi: number

	@Column()
	tipo: string

    @OneToMany(() => Subscription, subscription => subscription.privilegi)
	subscription: Subscription;

}
