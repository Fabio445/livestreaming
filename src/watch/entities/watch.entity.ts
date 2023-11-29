import { Canale } from "../../canale/entities/canale.entity";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Guest } from "../../guest/entities/guest.entity";
import { Live } from "../../live/entities/live.entity";
import { Subscription } from "../../subscription/entities/subscription.entity";
import { PrimaryGeneratedColumn, Column, Entity, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { User } from "../../user/entities/user.entity";

@Entity()
export class Watch {

	@PrimaryGeneratedColumn()
	idWatch: number

    @ManyToOne(() => User, user => user.watch)
    @JoinColumn({ name: 'idUser' })
	user: User;

    @ManyToOne(() => Live, live => live.watch)
    @JoinColumn({ name: 'idLive' })
	live: Live;

    @ManyToOne(() => Guest, guest => guest.watch)
    @JoinColumn({ name: 'idGuest' })
	guest: Guest;


}

