import { PrimaryGeneratedColumn, Column, Entity, Timestamp, OneToOne, JoinColumn, OneToMany, ManyToOne } from "typeorm";
import { Social } from "../../social/entities/social.entity";
import { Streamer } from "../../streamer/entities/streamer.entity";
@Entity()
export class Canale {

	@PrimaryGeneratedColumn()
	idCanale: number

	@Column()
	descrizione: string

	@Column()
	trailer: string

	@Column()
	immagine: string

	@ManyToOne(() => Social, social => social.canale)
	@JoinColumn({ name: 'idSocial' })
	socials: Social;

	@OneToOne(() => Streamer, streamer => streamer.canale)
	@JoinColumn({name: 'idStreamer'})
    streamer: Streamer; 

}