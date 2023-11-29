import { PrimaryGeneratedColumn, Column, Entity, Timestamp, JoinColumn, OneToOne, OneToMany, ManyToOne } from "typeorm";
import { User } from "../../user/entities/user.entity";
import { Transazione } from "../../transazione/entities/transazione.entity";

@Entity()
export class ChatPrivata {

	@PrimaryGeneratedColumn()
	idChat: number

	@Column()
	testo: string

	@Column({ type: 'timestamp', nullable: true })
	createAt: Date;

	@OneToOne(() => User, user => user.chat1)
    @JoinColumn({ name: 'idSender' })
	sender: User;

	@OneToOne(() => User, user => user.chat2)
    @JoinColumn({ name: 'idReciver' })
	recever: User;

}