import { PrimaryGeneratedColumn, Column, Entity, Timestamp, JoinColumn, OneToOne, ManyToMany, OneToMany } from "typeorm";
import { Portafoglio } from "../../portafoglio/entities/portafoglio.entity";
import { Canale } from "../../canale/entities/canale.entity";
import { ChatPrivata } from "../../chat-privata/entities/chat-privata.entity";
import { Subscription } from "../../subscription/entities/subscription.entity";
import { Live } from "../../live/entities/live.entity";
import { Watch } from "../../watch/entities/watch.entity";

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

	
	@Column({type: 'boolean', default: true})
	viewer: boolean  //true=viewer  false=streamer

	@Column({type: 'boolean', default: false})
	streamer: boolean

	@Column({ type: 'timestamp', nullable: true })
	deleteAt: Date;

	@OneToOne(() => Canale, canale => canale.user)
    canale: Canale; 

	@OneToOne(() => Portafoglio, portafoglio => portafoglio.user)
	portafoglio: Portafoglio;

	@OneToOne(() => ChatPrivata, chatprivata => chatprivata.sender)
	chat1: ChatPrivata;

	@OneToOne(() => ChatPrivata, chatprivata => chatprivata.recever)
	chat2: ChatPrivata;

	/*@ManyToMany(() => Canale, canale => canale.follow)
	canaleseguito: Canale;*/

	@OneToMany(() => Subscription, subscription => subscription.user)
	subscription: Subscription;

	@OneToMany(() => Watch, watch => watch.user)
	watch: Watch;

}
