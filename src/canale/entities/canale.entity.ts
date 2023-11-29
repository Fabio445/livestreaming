import { PrimaryGeneratedColumn, Column, Entity, Timestamp, OneToOne, JoinColumn, OneToMany, ManyToOne, JoinTable, ManyToMany } from "typeorm";
import { Social } from "../../social/entities/social.entity";
import { User } from "../../user/entities/user.entity";
import { Live } from "../../live/entities/live.entity";
import { Subscription } from "../../subscription/entities/subscription.entity";
import { Media } from "../../media/entities/media.entity";

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
	socials: Social[];  //entità che prende la fk

	@OneToOne(() => User, user => user.canale)
	@JoinColumn({ name: 'idUser' })
    user: User; 

	@OneToMany(() => Live, live => live.canale)
    live: Live;

	@ManyToMany(() => User)
    @JoinTable({ name: 'Follow' })
	follow: User;

	@OneToMany(() => Subscription, subscription => subscription.canale)
	subscription: Subscription;

	@OneToMany(() => Media, media => media.canale)
    media: Media;
}