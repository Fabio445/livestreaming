import { PrimaryGeneratedColumn, Column, Entity, Timestamp, JoinColumn, OneToOne, OneToMany, ManyToOne } from "typeorm";
import { User } from "../../user/entities/user.entity";

@Entity()
export class Portafoglio {

	@PrimaryGeneratedColumn()
	idPortafoglio: number

	@Column()
	bit: number

    @OneToOne(() => User, user => user.portafoglio)
	@JoinColumn({ name: 'idUser' })
    user: User; 

}