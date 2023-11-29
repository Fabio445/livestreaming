import { PrimaryGeneratedColumn, Column, Entity, Timestamp, JoinColumn, OneToOne, OneToMany, ManyToOne } from "typeorm";
import { User } from "../../user/entities/user.entity";
import { Transazione } from "../../transazione/entities/transazione.entity";

@Entity()
export class Portafoglio {

	@PrimaryGeneratedColumn()
	idPortafoglio: number

	@Column()
	bit: number

    @OneToOne(() => User, user => user.portafoglio)
	@JoinColumn({ name: 'idUser' })
    user: User; 

	@OneToOne(() => Transazione, transazione => transazione.sender)
	transazione1: Transazione;

	@OneToOne(() => Transazione, transazione => transazione.recever)
	transazione2: Transazione;

}