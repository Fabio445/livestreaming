import { PrimaryGeneratedColumn, Column, Entity, Timestamp, JoinColumn, OneToOne } from "typeorm";
import { Streamer } from "../../streamer/entities/streamer.entity";
import { Viewer } from "../../viewer/entities/viewer.entity";
import { Portafoglio } from "../../portafoglio/entities/portafoglio.entity";

//import { Portafoglio } from "../portafoglio/entities/portafoglio.entity";

@Entity()
export class User {

	@PrimaryGeneratedColumn()
	idUser: number

	@Column()
	username: string

	@Column()
	email: string

	@Column()
	password: string

	@Column({type: 'date'})
	dataNascita: Date

	@Column()
	numeroTelefono: string

	@Column({ type: 'timestamp', nullable: true })
	deleteAt: Date;

	@OneToOne(() => Viewer, viewer => viewer.user)
	viewer: Viewer[];

	@OneToOne(() => Streamer, streamer => streamer.user)
	streamer: Streamer[];

	@OneToOne(() => Portafoglio, portafoglio => portafoglio.user)
	portafoglio: Portafoglio[];

}
