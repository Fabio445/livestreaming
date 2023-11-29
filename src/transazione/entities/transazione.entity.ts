import { PrimaryGeneratedColumn, Column, Entity, ManyToMany, OneToOne, JoinColumn } from "typeorm";
import { Live } from "../../live/entities/live.entity";
import { Portafoglio } from "../../portafoglio/entities/portafoglio.entity";

@Entity()
export class Transazione {

	@PrimaryGeneratedColumn()
	idTransazione: number

	@Column()
	importo: number

	@Column({ type: 'timestamp', nullable: true })
	createAt: Date;
 
	@OneToOne(() => Portafoglio, portafoglio => portafoglio.transazione1)
    @JoinColumn({ name: 'idSender' })
	sender: Portafoglio;

	@OneToOne(() => Portafoglio, portafoglio => portafoglio.transazione2)
    @JoinColumn({ name: 'idReciver' })
	recever: Portafoglio;
}
